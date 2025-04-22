'use client';

import { useHandleForm } from '@/hooks';
import { Button, ButtonVariant, Input, InputTextVariant } from '@/components';
import { handleSubscribe } from '@/services/api';

export const SubscribeForm = () => {
  const { formAction, pending } = useHandleForm({
    onSubmitForm: handleSubscribe,
  });

  return (
    <form
      className="flex flex-col lg:flex-row justify-between items-center gap-5 bg-grey-dark rounded-1xl px-10 py-14 w-full lg:w-[600px]"
      action={formAction}
    >
      <Input.Text
        variant={InputTextVariant.Secondary}
        type="email"
        name="email"
        placeholder="Email"
      />
      <Button
        variant={ButtonVariant.Tertiary}
        className="w-full lg:w-[249px] h-[68px]"
        disabled={pending}
        isLoading={pending}
        type="submit"
      >
        Subscribe to news
      </Button>
    </form>
  );
};
