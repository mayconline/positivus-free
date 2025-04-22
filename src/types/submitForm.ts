import type { FormActionStatus } from './formActionStatus';

export type SubmitForm = (
  prevActionState: FormActionStatus,
  formData: FormData
) => Promise<FormActionStatus>;
