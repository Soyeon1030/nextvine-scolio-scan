'use client';

import React from 'react';
import type { ReactElement } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { DeviceFrame } from '@/components/ui/device-frame';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/lib/hooks';
import { SITE_CONFIG } from '@/lib/constants';
import {
  Activity,
  Sun,
  PersonStanding,
  Ruler,
  Axis3D,
  Crosshair,
  Calendar,
  ShieldCheck,
  FileBarChart,
} from 'lucide-react';

export function Hero({
  onJoin,
  onDemo,
}: {
  onJoin: () => void;
  onDemo: () => void;
}): ReactElement {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/5">
      <Container className="grid grid-cols-1 items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:py-28">
        <div className="max-w-xl">
          <h1 className="heading-primary">
            Track scoliosis at home —{' '}
            <span className="text-primary">no X‑ray</span>
          </h1>
          <p className="mt-6 text-xl text-body">
            Guided capture → AI angle estimate → monthly progression tracking.
            Share safely with your clinician. (Pro tools available for clinics.)
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button onClick={onJoin} size="lg" className="btn-lg min-w-[180px]">
              Join the Waitlist
            </Button>
            {/* <Button
              variant="outline"
              onClick={onDemo}
              size="lg"
              className="btn-lg min-w-[180px] border-2 border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              Request a Demo
            </Button> */}
          </div>
          <p className="mt-6 text-sm text-gray-500">{SITE_CONFIG.disclaimer}</p>
        </div>

        <div className="relative">
          <div
            aria-label="Product screenshots"
            className="grid grid-cols-2 gap-6"
          >
            <DeviceFrame className="transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/hero_capture.jpeg"
                alt="Capture Guide"
                width={400}
                height={600}
                className="h-full w-full rounded-xl object-cover object-top"
                priority
              />
            </DeviceFrame>
            <DeviceFrame className="col-start-2 -mt-12 transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/hero_dashboard.jpeg"
                alt="Scoliosis Dashboard"
                width={400}
                height={600}
                className="h-full w-full rounded-xl object-cover object-top"
                priority
              />
            </DeviceFrame>
          </div>
          <div className="absolute -top-4 -right-4 h-72 w-72 rounded-full bg-primary/10 opacity-20 blur-3xl -z-10"></div>
        </div>
      </Container>
    </section>
  );
}

export function StoryFlow(): ReactElement {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '50px',
  });

  // eslint-disable-next-line no-console
  console.log('[v0] StoryFlow - isVisible:', isVisible);

  return (
    <section
      ref={ref}
      className="section-spacing bg-gradient-to-b from-white to-gray-50"
    >
      <Container>
        <SectionTitle
          eyebrow="How it works"
          title="Three simple steps"
          subtitle="From a photo to insights you can share."
        />

        <div className="mt-20 space-y-32">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-1 lg:order-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary font-bold text-primary-foreground text-lg mb-6">
                1
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Guided Capture
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Position, pose, and lighting guidance reduce failed shots. Our
                app guides you through the optimal setup for accurate
                measurements.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  <Activity className="h-4 w-4" />
                  Real-time feedback
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  <Sun className="h-4 w-4" />
                  Lighting check
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  <PersonStanding className="h-4 w-4" />
                  Pose validation
                </span>
              </div>
            </div>
            <div className="order-2 lg:order-1 relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full max-w-sm mx-auto lg:max-w-md">
                <Image
                  src="/images/hero_capture.jpeg"
                  alt="Guided capture interface showing posture alignment"
                  width={400}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full opacity-60 blur-xl"></div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-2 relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3] sm:aspect-[3/2] lg:aspect-auto">
                <Image
                  src="/images/pptx_image1.jpeg"
                  alt="AI analysis showing spinal curve measurement"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover lg:h-auto lg:object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-40 blur-xl"></div>
            </div>
            <div className="order-1 lg:order-1">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary font-bold text-primary-foreground text-lg mb-6">
                2
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                AI Angle Estimate
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Receive an estimated Cobb angle and symmetry analysis. Our AI
                processes your image to identify key anatomical landmarks and
                calculate measurements.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  <Ruler className="h-4 w-4" />
                  Cobb angle estimation
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  <Axis3D className="h-4 w-4" />
                  Symmetry analysis
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  <Crosshair className="h-4 w-4" />
                  Landmark detection
                </span>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-1 lg:order-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary font-bold text-primary-foreground text-lg mb-6">
                3
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Progress Tracking
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Track monthly changes and share secure reports with your
                clinician. Build a comprehensive history of your scoliosis
                progression over time.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  <Calendar className="h-4 w-4" />
                  Monthly tracking
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  <ShieldCheck className="h-4 w-4" />
                  Secure sharing
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  <FileBarChart className="h-4 w-4" />
                  Progress reports
                </span>
              </div>
            </div>
            <div className="order-2 lg:order-1 relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full max-w-sm mx-auto lg:max-w-md">
                <Image
                  src="/images/hero_dashboard.jpeg"
                  alt="Dashboard showing progression tracking and reports"
                  width={400}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-purple-200 rounded-full opacity-50 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
