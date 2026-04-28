import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Mailjet from 'node-mailjet';

dotenv.config();

const {
  MAILJET_API_KEY,
  MAILJET_API_SECRET,
  MAILJET_FROM_EMAIL,
  MAILJET_FROM_NAME,
  MAILJET_ADMIN_EMAIL,
  MAILJET_ADMIN_NAME,
  PORT = '8787',
} = process.env;

function requireEnv(name) {
  if (!process.env[name]) throw new Error(`Missing required env var: ${name}`);
}

// Only validate Mailjet vars when hitting the API route.
function mailjetClient() {
  requireEnv('MAILJET_API_KEY');
  requireEnv('MAILJET_API_SECRET');
  requireEnv('MAILJET_FROM_EMAIL');
  requireEnv('MAILJET_FROM_NAME');
  requireEnv('MAILJET_ADMIN_EMAIL');
  return Mailjet.apiConnect(MAILJET_API_KEY, MAILJET_API_SECRET);
}

const app = express();
app.use(cors());
app.use(express.json({ limit: '200kb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.post('/api/contact', async (req, res) => {
  const { fullName, email, phone, service, message } = req.body ?? {};

  if (!fullName || !email || !phone || !service || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields.' });
  }

  const client = mailjetClient();

  const from = {
    Email: MAILJET_FROM_EMAIL,
    Name: MAILJET_FROM_NAME,
  };

  const adminTo = {
    Email: MAILJET_ADMIN_EMAIL,
    Name: MAILJET_ADMIN_NAME || 'Admin',
  };

  const customerTo = {
    Email: email,
    Name: fullName,
  };

  const adminSubject = `New enquiry: ${service}`;
  const adminText = [
    `Full Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service Required: ${service}`,
    '',
    'Message / Query:',
    message,
  ].join('\n');

  const ackSubject = `We received your enquiry – ${MAILJET_FROM_NAME}`;
  const ackText = [
    `Hi ${fullName},`,
    '',
    'Thanks for reaching out to us. We have received your enquiry and will get back to you within 1 business day.',
    '',
    `Service Required: ${service}`,
    `Phone: ${phone}`,
    '',
    'Your information will be kept confidential.',
    '',
    `— ${MAILJET_FROM_NAME}`,
  ].join('\n');

  try {
    await client.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: from,
          To: [adminTo],
          ReplyTo: customerTo,
          Subject: adminSubject,
          TextPart: adminText,
        },
        {
          From: from,
          To: [customerTo],
          Subject: ackSubject,
          TextPart: ackText,
        },
      ],
    });

    return res.json({ ok: true });
  } catch (err) {
    const status = Number(err?.statusCode ?? err?.response?.status ?? 500);
    const body = err?.response?.body;
    const mailjetError =
      body?.Messages?.[0]?.Errors?.[0]?.ErrorMessage ||
      body?.ErrorMessage ||
      body?.error ||
      body?.message;

    // Avoid leaking secrets; log minimal but useful details.
    console.error('Mailjet send failed:', {
      status,
      message: err?.message,
      mailjetError,
    });

    return res
      .status(Number.isFinite(status) ? status : 500)
      .json({ ok: false, error: mailjetError || 'Failed to send email.' });
  }
});

// Serve built app in production mode
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '..', 'dist');
app.use(express.static(distDir));
app.get(/.*/, (_req, res) => res.sendFile(path.join(distDir, 'index.html')));

app.listen(Number(PORT), () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

