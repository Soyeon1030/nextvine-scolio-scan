import { Radiation, TrendingUp, Users } from 'lucide-react';

export const SITE_CONFIG = {
  name: 'ScolioScan',
  description:
    'AI-powered scoliosis monitoring without X-rays. Guided capture, angle estimation, and progress tracking.',
  disclaimer:
    'This product is for education & monitoring support. Not a medical device.',
} as const;

export const NAVIGATION_ITEMS = [
  { id: 'families' as const, label: 'For Families' },
  { id: 'clinicians' as const, label: 'For Clinicians' },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    title: 'Guided Capture',
    description: 'Distance, pose, and lighting checks reduce failed shots.',
  },
  {
    title: 'AI Angle Estimate',
    description: 'Receive an estimated Cobb angle and symmetry indexes.',
  },
  {
    title: 'Progress Tracking',
    description: 'See monthly changes and share a secure report.',
  },
] as const;

export const VALUE_PROPOSITIONS = [
  {
    title: 'No radiation',
    description: 'Monitor at home without X‑ray exposure.',
    icon: Radiation,
  },
  // { title: "Quality guardrails", description: "Auto checks for distance, pose, and lighting." },
  {
    title: 'Clear trends',
    description: 'Progress charts and change rates month by month.',
    icon: TrendingUp,
  },
  // { title: "Secure sharing", description: "Send a link or PDF with access control." },
  {
    title: 'Family accounts',
    description: 'Connect parent and child profiles.',
    icon: Users,
  },
  // { title: "Clinic tools (Pro)", description: "3D capture, annotations, and reports." },
] as const;

export const PRO_FEATURES = [
  '10–20s capture with on-device quality checks',
  'Segmentation & reconstruction pipeline (cloud)',
  'Angle overlays, heatmaps, and CSV/PDF exports',
  'EMR-friendly dashboards with RBAC & audit logs',
] as const;

export const FAQ_ITEMS = [
  {
    question: 'Is this a medical device?',
    answer:
      'No. ScolioScan is for education and monitoring support only. It does not provide diagnosis or treatment.',
  },
  {
    question: 'How accurate is it?',
    answer:
      'We provide an estimated angle when capture quality is sufficient. Always consult a clinician for decisions.',
  },
  {
    question: 'What are the capture tips?',
    answer:
      'Use bright lighting, remove upper clothing, follow the distance and pose guide.',
  },
  {
    question: 'How is my data handled?',
    answer:
      'Data is collected with consent, encrypted in transit and at rest, and can be deleted upon request.',
  },
] as const;

export const FEATURE_GALLERY_IMAGES = [
  { src: '/images/pptx_image1.jpeg', alt: 'Feature overview' },
  { src: '/images/pptx_image2.png', alt: 'Capture process' },
  { src: '/images/pptx_image3.png', alt: 'Analysis results' },
  { src: '/images/pptx_image4.jpeg', alt: 'Progress tracking' },
  { src: '/images/pptx_image10.png', alt: 'Dashboard view' },
  { src: '/images/pptx_image11.png', alt: 'Report generation' },
  { src: '/images/pptx_image12.png', alt: 'Clinical tools' },
  { src: '/images/pptx_image13.png', alt: 'Data visualization' },
] as const;

export const PROFESSIONAL_ROLES = [
  'Orthopedic surgeon',
  'Physiotherapist',
  'Chiropractor',
  'Other',
] as const;

export const FAMILY_RELATIONSHIPS = [
  'My child',
  'Myself',
  'Other family member',
] as const;
