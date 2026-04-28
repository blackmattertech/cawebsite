import {
  Award,
  Building2,
  Calculator,
  Landmark,
  Receipt,
  Shield,
  Wallet,
} from 'lucide-react';

export type PremiumService = {
  icon: typeof Building2;
  title: string;
  description: string;
};

export const PREMIUM_SERVICES: PremiumService[] = [
  {
    icon: Building2,
    title: 'Company Registration Services',
    description:
      'Register your business in India including Private Limited, LLP, Startup India, and Udyam with expert guidance.',
  },
  {
    icon: Receipt,
    title: 'GST Registration & Filing',
    description:
      'Complete GST solutions including registration, return filing, compliance, amendments, and notice handling.',
  },
  {
    icon: Calculator,
    title: 'Income Tax & ITR Filing',
    description:
      'Accurate and timely income tax filing services for individuals, startups, and businesses across India.',
  },
  {
    icon: Shield,
    title: 'Trademark & IP Protection',
    description:
      'Protect your brand with trademark registration, copyright, patent services, and objection handling.',
  },
  {
    icon: Landmark,
    title: 'MCA & ROC Compliance',
    description:
      'Stay compliant with MCA filings, annual returns, director KYC, and corporate legal requirements.',
  },
  {
    icon: Wallet,
    title: 'Accounting & Payroll Services',
    description:
      'End-to-end bookkeeping, payroll processing, PF, ESI, and financial management for growing businesses.',
  },
  {
    icon: Award,
    title: 'Business Licenses & Registrations',
    description:
      'Obtain FSSAI, IEC, ISO, Shop Act, and other essential licenses quickly and efficiently.',
  },
];

