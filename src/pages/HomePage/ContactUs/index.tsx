'use client';

import Image from 'next/image';
import { useActionState, useEffect } from 'react';
import { Button, ButtonVariant, Input, SectionTitle } from '@/components';

import ContactUSIllustration from '@/assets/img/contact-us-illustration.svg';
import type { ContactUsFormResponse } from '@/types';
import { handleNotify } from '@/utils';

interface ContactUsProps {
  onSubmitForm: (
    prevActionState: ContactUsFormResponse,
    formData: FormData
  ) => Promise<ContactUsFormResponse>;
}

const initialStateAction: ContactUsFormResponse = {
  status: null,
  message: null,
};

export const ContactUs = ({ onSubmitForm }: ContactUsProps) => {
  const [stateAction, formAction, pending] =
    useActionState<ContactUsFormResponse>(
      onSubmitForm as any,
      initialStateAction
    );

  useEffect(() => {
    if (stateAction?.status && stateAction?.message) {
      handleNotify(stateAction?.message);
    }
  }, [stateAction]);

  return (
    <SectionTitle
      title="Contact Us"
      description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
    >
      <main className="relative flex justify-between items-center bg-grey rounded-5xl pt-14 pb-20 px-24 overflow-hidden">
        <form
          className="flex flex-col w-[556px] gap-10 z-10"
          action={formAction}
        >
          <section className="flex gap-8">
            <Input.Radio
              label="Say Hi"
              id="say-hi"
              name="contact-reason"
              value="say-hi"
              defaultChecked
            />

            <Input.Radio
              label="Get a Quote"
              id="get-quote"
              name="contact-reason"
              value="get-quote"
            />
          </section>
          <section className="flex flex-col gap-6">
            <Input.Text label="Name" name="name" placeholder="Name" />
            <Input.Text
              type="email"
              label="Email*"
              name="email"
              placeholder="Email"
            />
            <Input.TextArea
              label="Message*"
              name="message"
              placeholder="Message"
            />
          </section>

          <Button
            variant={ButtonVariant.Secondary}
            className="w-[556px]"
            disabled={pending}
            isLoading={pending}
            type="submit"
          >
            Send Message
          </Button>
        </form>

        <Image
          src={ContactUSIllustration}
          alt="circle with stars next to it"
          className="absolute top-1/2 -right-80 -translate-y-1/2"
        />
      </main>
    </SectionTitle>
  );
};
