import { Mail, MapPin, Phone } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import FloatingContactButtons from '../components/FloatingContactButtons';
import { BRAND_GREEN } from '../constants/brand';
import {
  CONTACT_ADDRESS_LINE,
  CONTACT_EMAIL,
  CONTACT_MAP_EMBED_SRC,
  CONTACT_PHONE_DISPLAY,
  contactMailtoHref,
  contactTelHref,
  contactWhatsAppHref,
} from '../constants/contact';
import { PREMIUM_SERVICES } from '../constants/services';

import Seo from '../components/Seo';
import { Button } from '../components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';

type ContactFormValues = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const serviceOptions = useMemo(() => PREMIUM_SERVICES.map((s) => s.title), []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  const [submitSuccess, setSubmitSuccess] = useState<string>('');

  const form = useForm<ContactFormValues>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
    mode: 'onTouched',
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? 'Failed to send.');
      }

      form.reset();
      setSubmitSuccess('Thanks! We received your enquiry and will get back to you within 1 business day.');
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to send.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <Seo
        title="Contact Us | Shivanichchi & Co. Chartered Accountants"
        description="Contact Shivanichchi & Co. in Bengaluru: office address, phone, email, and WhatsApp for taxation, audit, GST, and advisory enquiries."
        path="/contact"
      />
      <Navbar />
      <main id="main-content" className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10 sm:mb-12">
            <p className="text-sm font-medium uppercase tracking-wider" style={{ color: BRAND_GREEN }}>
              Get in touch
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#0B1F3A] sm:text-4xl">
              Contact us
            </h1>
            <p className="mt-3 max-w-2xl text-base text-neutral-600 sm:text-lg">
              Visit our Bengaluru office, call, email, or message us on WhatsApp—we will get back to you as soon as we can.
            </p>
          </header>

          <section className="mb-10 rounded-3xl border border-neutral-200 bg-[#F7F9FC] p-6 shadow-sm sm:mb-12 sm:p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-[#0B1F3A] sm:text-2xl">Get in Touch</h2>
              <p className="text-sm text-neutral-600 sm:text-base">
                Tell us what you need—our CA team will reply within 1 business day. Your details stay confidential.
              </p>
            </div>

            <div className="mt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5">
                  {submitError ? (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {submitError}
                    </div>
                  ) : null}
                  {submitSuccess ? (
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                      {submitSuccess}
                    </div>
                  ) : null}
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="fullName"
                      rules={{ required: 'Full name is required.' }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" autoComplete="name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      rules={{
                        required: 'Email address is required.',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Enter a valid email address.',
                        },
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="name@example.com"
                              autoComplete="email"
                              inputMode="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="phone"
                      rules={{
                        required: 'Phone number is required.',
                        validate: (value) => {
                          const digits = value.replace(/\D/g, '');
                          if (digits.length < 10) return 'Enter a valid Indian phone number.';
                          if (digits.length > 12) return 'Enter a valid Indian phone number.';
                          return true;
                        },
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+91 98765 43210"
                              autoComplete="tel"
                              inputMode="tel"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      rules={{ required: 'Please select a service.' }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Required</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {serviceOptions.map((label) => (
                                <SelectItem key={label} value={label}>
                                  {label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    rules={{
                      required: 'Please share your message / query.',
                      minLength: { value: 10, message: 'Please add a little more detail (min 10 characters).' },
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message / Query</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your requirement, timelines, and any details you’d like us to know."
                            className="min-h-28"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                      style={{ backgroundColor: BRAND_GREEN }}
                    >
                      {isSubmitting ? 'Sending…' : 'Send Enquiry'}
                    </Button>
                    <p className="text-xs text-neutral-500 sm:text-sm">
                      We usually respond within <span className="font-semibold">1 business day</span>. Your information
                      stays <span className="font-semibold">confidential</span>.
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </section>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12">
            <div className="relative min-h-[300px] h-full w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-md sm:min-h-[380px]">
              <iframe
                src={CONTACT_MAP_EMBED_SRC}
                title="Shivanichchi & Co. office location on Google Maps"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex min-h-[300px] h-full flex-col sm:min-h-[380px]">
              <section className="flex h-full min-h-0 flex-col rounded-2xl border border-neutral-200 bg-[#F7F9FC] p-6 sm:p-8">
                <div>
                  <h2 className="text-lg font-semibold text-[#0B1F3A] sm:text-xl">Office</h2>
                  <p className="mt-1 text-sm text-neutral-600">Shivanichchi & Co., Chartered Accountants</p>
                </div>
                <ul className="mt-6 flex-1 space-y-5">
                  <li className="flex gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-neutral-100">
                      <MapPin className="h-5 w-5" style={{ color: BRAND_GREEN }} aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Address</p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-800 sm:text-base">
                        {CONTACT_ADDRESS_LINE}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-neutral-100">
                      <Phone className="h-5 w-5" style={{ color: BRAND_GREEN }} aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Phone</p>
                      <a
                        href={contactTelHref()}
                        className="mt-1 block text-sm font-medium text-[#0B6EB0] hover:underline sm:text-base"
                      >
                        {CONTACT_PHONE_DISPLAY}
                      </a>
                      <a
                        href={contactWhatsAppHref()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm text-neutral-600 underline decoration-neutral-300 underline-offset-2 hover:text-[#0B6EB0]"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-neutral-100">
                      <Mail className="h-5 w-5" style={{ color: BRAND_GREEN }} aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Email</p>
                      <a
                        href={contactMailtoHref()}
                        className="mt-1 block text-sm font-medium text-[#0B6EB0] break-all hover:underline sm:text-base"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <FloatingContactButtons />
    </div>
  );
}
