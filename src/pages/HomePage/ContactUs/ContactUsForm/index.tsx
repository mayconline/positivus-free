'use client';

import { Input, Button, ButtonVariant } from '@/components';
import { useHandleForm } from '@/hooks';
import { handleContactUs } from '@/services/api';

export const ContactUsForm = () => {
  const { formAction, pending } = useHandleForm({
    onSubmitForm: handleContactUs,
  });

  return (
    <form className="flex flex-col w-[556px] gap-10 z-10" action={formAction}>
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
        <Input.TextArea label="Message*" name="message" placeholder="Message" />
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
  );
};
