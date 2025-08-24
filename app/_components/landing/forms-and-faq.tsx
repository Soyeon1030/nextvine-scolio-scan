'use client';

import React from 'react';
import type { ReactElement } from 'react';
import { useState, useCallback } from 'react';

import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { useFormValidation } from '@/lib/hooks';
import {
  FAMILY_RELATIONSHIPS,
  PROFESSIONAL_ROLES,
  FAQ_ITEMS,
} from '@/lib/constants';

export function LeadCaptureForms(): ReactElement {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <Container>
        {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ConsumerForm />
          <ProfessionalForm />
        </div> */}
        <ConsumerForm />
      </Container>
    </section>
  );
}

export function ConsumerForm(): ReactElement {
  const [formData, setFormData] = useState<{
    email: string;
    relationship: string;
    agreedToEmails: boolean;
  }>({
    email: '',
    relationship: FAMILY_RELATIONSHIPS[0],
    agreedToEmails: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { validateEmail } = useFormValidation();

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      if (!validateEmail(formData.email) || !formData.agreedToEmails) return;

      setIsSubmitted(true);
      // eslint-disable-next-line no-console
      console.log('submit_consumer', formData);
    },
    [formData, validateEmail]
  );

  const isFormValid = validateEmail(formData.email) && formData.agreedToEmails;

  return (
    <form
      id="consumer-form"
      onSubmit={handleSubmit}
      className="card-base p-6 max-w-lg w-full mx-auto"
    >
      <h3 className="heading-card">Join the waitlist</h3>
      {isSubmitted ? (
        <p className="mt-3 text-sm text-primary">
          Thanks! We'll email you when early access opens.
        </p>
      ) : (
        <>
          <p className="mt-2 text-sm text-body">
            Be first to know when the app is available.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus-ring"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Who is this for?
              </label>
              <select
                value={formData.relationship}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    relationship: e.target.value,
                  }))
                }
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus-ring"
              >
                {FAMILY_RELATIONSHIPS.map((relationship) => (
                  <option key={relationship} value={relationship}>
                    {relationship}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <label className="mt-4 flex items-start gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              className="mt-0.5"
              checked={formData.agreedToEmails}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  agreedToEmails: e.target.checked,
                }))
              }
            />
            I agree to receive product emails and understand I can opt out
            anytime.
          </label>
          <Button disabled={!isFormValid} className="mt-4 btn-base">
            Join the Waitlist
          </Button>
        </>
      )}
    </form>
  );
}

export function ProfessionalForm(): ReactElement {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { validateEmail, validateRequired } = useFormValidation();

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      if (
        !validateEmail(formData.email) ||
        !validateRequired(formData.organization) ||
        !validateRequired(formData.role)
      ) {
        return;
      }

      setIsSubmitted(true);
      // eslint-disable-next-line no-console
      console.log('submit_pro', formData);
    },
    [formData, validateEmail, validateRequired]
  );

  const isFormValid =
    validateEmail(formData.email) &&
    validateRequired(formData.organization) &&
    validateRequired(formData.role);

  return (
    <form id="pro-form" onSubmit={handleSubmit} className="card-base p-6">
      <h3 className="heading-card">Request a demo (Pro)</h3>
      {isSubmitted ? (
        <p className="mt-3 text-sm text-primary">
          Thanks! We'll be in touch to schedule a demo.
        </p>
      ) : (
        <>
          <p className="mt-2 text-sm text-body">
            Tell us about your clinic to get early access.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full name
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus-ring"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus-ring"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Organization
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus-ring"
                value={formData.organization}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    organization: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus-ring"
                value={formData.role}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, role: e.target.value }))
                }
                required
              >
                <option value="">Select role</option>
                {PROFESSIONAL_ROLES.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Notes (optional)
              </label>
              <textarea
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus-ring"
                rows={3}
                placeholder="Clinic size, tools you use, preferred time…"
                value={formData.notes}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, notes: e.target.value }))
                }
              />
            </div>
          </div>
          <Button disabled={!isFormValid} className="mt-4 btn-base">
            Request a Demo
          </Button>
        </>
      )}
    </form>
  );
}

export function FrequentlyAskedQuestions(): ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = useCallback((index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  }, []);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionTitle eyebrow="FAQ" title="Answers to common questions" />
        <div className="mt-6 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="p-5">
              <button
                className="flex w-full items-center justify-between text-left text-base font-semibold text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary font-serif"
                aria-expanded={openIndex === index}
                onClick={() => toggleQuestion(index)}
              >
                {item.question}
                <span aria-hidden className="ml-4 inline-block text-xl">
                  {openIndex === index ? '–' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-sm text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
