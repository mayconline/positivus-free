import { useActionState, useEffect } from 'react';
import type { FormActionStatus, SubmitForm } from '@/types';
import { handleNotify } from '@/utils';

interface UseHandleFormProps {
  onSubmitForm: SubmitForm;
}

const initialStateAction: FormActionStatus = {
  status: null,
  message: null,
};

export const useHandleForm = ({ onSubmitForm }: UseHandleFormProps) => {
  const [stateAction, formAction, pending] = useActionState<FormActionStatus>(
    onSubmitForm as any,
    initialStateAction
  );

  useEffect(() => {
    if (stateAction?.status && stateAction?.message) {
      handleNotify(stateAction?.message);
    }
  }, [stateAction]);

  return { stateAction, formAction, pending };
};
