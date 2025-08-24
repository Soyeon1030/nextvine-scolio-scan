'use client';

import React from 'react';
import type { ReactElement } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { Radiation, TrendingUp, Users } from 'lucide-react';
import {
  VALUE_PROPOSITIONS,
  FEATURE_GALLERY_IMAGES,
  PRO_FEATURES,
} from '@/lib/constants';
import { useIntersectionObserver } from '@/lib/hooks';

export function ValuePropositions(): ReactElement {
  return (
    <section className="bg-gray-900 to-white section-spacing">
      <Container>
        <SectionTitle
          eyebrow="Why ScolioScan"
          title="Designed for real life"
          subtitle="Simple at home. Powerful at the clinic."
          className="text-white [&_*]:text-white [&_.text-body]:text-gray-300"
        />
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPOSITIONS.map((value, index) => {
            const Icon = value.icon;

            return (
              <div key={index} className="card-base card-hover p-8">
                <div className="heading-card flex gap-2 items-center mb-2">
                  <Icon className="h-5 w-5 stroke-primary" />
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                </div>
                <p className="text-body">{value.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function ProcessShowcase(): ReactElement {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className="py-20 sm:py-24 bg-gray-900 text-white overflow-hidden"
    >
      <Container>
        <SectionTitle
          eyebrow="Complete solution"
          title="From capture to clinical reporting"
          subtitle="See how ScolioScan transforms a simple photo into actionable medical insights."
          className="text-white [&_*]:text-white [&_.text-body]:text-gray-300"
        />

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-3xl blur-3xl"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {FEATURE_GALLERY_IMAGES.slice(0, 6).map((image, index) => (
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src || '/placeholder.svg'}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <figcaption className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                    {image.alt}
                  </figcaption>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.figure>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Every feature is designed to provide clinicians and families with
              the insights they need to make informed decisions about scoliosis
              care.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export function ProSection({
  visible,
  onDemo,
}: {
  visible: boolean;
  onDemo: () => void;
}): ReactElement | null {
  if (!visible) return null;

  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-20">
      <Container>
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionTitle
            eyebrow="For clinics"
            title="ScolioScan Pro"
            subtitle="3D capture, case comparison, annotations, role-based access, and automated reports."
          />
          <Button onClick={onDemo} className="self-start sm:self-auto">
            Request a Demo
          </Button>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
          {PRO_FEATURES.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 rounded-xl bg-primary/20 p-4"
            >
              <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/30">
                ✓
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function PrivacyDisclaimer(): ReactElement {
  return (
    <section className="py-12">
      <Container>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900 font-serif">
            Privacy & disclaimer
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            ScolioScan is intended for education and monitoring support only. It
            is not a medical device and does not provide diagnosis or treatment
            recommendations. Data is collected with consent and can be deleted
            on request.
          </p>
        </div>
      </Container>
    </section>
  );
}
