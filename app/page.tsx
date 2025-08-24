'use client';

import React from 'react';
import type { ReactElement } from 'react';
import { useState, useCallback } from 'react';

// Hooks
import { useLocalStorage, useScrollToElement } from '@/lib/hooks';

// Types
import type { AudienceType, ConsentStatus } from '@/lib/types';

// Sections
import {
  Header,
  Hero,
  StoryFlow,
  ValuePropositions,
  ProcessShowcase,
  ProSection,
  PrivacyDisclaimer,
  LeadCaptureForms,
  FrequentlyAskedQuestions,
  Footer,
  ConsentBanner,
} from '@/app/_components/landing';

export default function LandingPage(): ReactElement {
  const [audience, setAudience] = useState<AudienceType>('families');
  const [consent, setConsent] = useLocalStorage<ConsentStatus>(
    'ssc_consent',
    'unset'
  );
  const scrollToElement = useScrollToElement();

  const handleAudienceChange = useCallback((newAudience: AudienceType) => {
    setAudience(newAudience);
  }, []);

  const handleJoinWaitlist = useCallback(() => {
    scrollToElement('consumer-form');
  }, [scrollToElement]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header
        audience={audience}
        onChangeAudience={handleAudienceChange}
        onClickDemo={handleJoinWaitlist}
      />

      <main>
        <Hero onJoin={handleJoinWaitlist} onDemo={handleJoinWaitlist} />
        <StoryFlow />
        <ValuePropositions />
        {/* <ProcessShowcase />
        <ProSection
          visible={audience === 'clinicians'}
          onDemo={handleRequestDemo}
        /> */}
        <PrivacyDisclaimer />
        <LeadCaptureForms />
        {/* <FrequentlyAskedQuestions /> */}
      </main>

      <Footer />

      {consent === 'unset' && (
        <ConsentBanner
          onAccept={() => setConsent('accepted')}
          onDecline={() => setConsent('declined')}
        />
      )}
    </div>
  );
}
