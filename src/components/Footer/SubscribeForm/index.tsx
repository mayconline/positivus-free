'use client';

import { useHandleForm } from '@/hooks';
import { Button, ButtonVariant, Input, InputTextVariant } from '@/components';
import type { SubmitForm } from '@/types';

interface SubscribeFormProps {
  onSubmitForm: SubmitForm;
}

export const SubscribeForm = ({ onSubmitForm }: SubscribeFormProps) => {
  const { formAction, pending } = useHandleForm({
    onSubmitForm,
  });

  return (
    <form
      className="flex justify-between items-center gap-5 bg-grey-dark rounded-1xl px-10 py-14 w-[600px]"
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
        className="w-[249px] h-[68px]"
        disabled={pending}
        isLoading={pending}
        type="submit"
      >
        Subscribe to news
      </Button>
    </form>
  );
};
