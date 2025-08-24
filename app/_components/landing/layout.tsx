'use client';

import React from 'react';
import type { ReactElement } from 'react';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG, NAVIGATION_ITEMS } from '@/lib/constants';
import type { AudienceType } from '@/lib/types';

export const Header = React.memo(function Header({
  audience,
  onChangeAudience,
  onClickDemo,
}: {
  audience: AudienceType;
  onChangeAudience: (audience: AudienceType) => void;
  onClickDemo: () => void;
}): ReactElement {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-1 font-semibold">
          <img src="/logo.svg" alt="ScolioScan" className="h-7 rounded-sm" />
          <span className="font-serif">{SITE_CONFIG.name}</span>
          <span className="sr-only">Go to top</span>
        </a>

        <nav className="flex items-center gap-3">
          {/* <div
            role="tablist"
            aria-label="Audience"
            className="flex rounded-full border border-gray-300 p-1 text-sm"
          >
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={audience === item.id}
                onClick={() => onChangeAudience(item.id)}
                className={`rounded-full px-3 py-1.5 font-medium transition ${
                  audience === item.id
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div> */}
          <Button
            variant="secondary"
            onClick={onClickDemo}
            className="hidden sm:inline-flex"
          >
            Join the Waitlist
          </Button>
        </nav>
      </Container>
    </header>
  );
});

export function Footer(): ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-500">
          © {currentYear} {SITE_CONFIG.name}. All rights reserved.
        </p>
        <nav className="flex items-center gap-4 text-sm text-gray-600">
          <a className="hover:underline focus:underline" href="#privacy">
            Privacy
          </a>
          <a className="hover:underline focus:underline" href="#terms">
            Terms
          </a>
          <a className="hover:underline focus:underline" href="#contact">
            Contact
          </a>
        </nav>
      </Container>
    </footer>
  );
}

export const ConsentBanner = React.memo(function ConsentBanner({
  onAccept,
  onDecline,
}: {
  onAccept: () => void;
  onDecline: () => void;
}): ReactElement {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40">
      <Container>
        <div className="mb-4 card-base p-4 shadow-lg">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-700">
              We use cookies for basic analytics. You can decline—non‑essential
              tags will remain disabled.
            </p>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                onClick={onDecline}
                className="btn-base"
              >
                Decline
              </Button>
              <Button onClick={onAccept} className="btn-base">
                Accept
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
});
