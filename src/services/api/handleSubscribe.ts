'use server';

import type { FormActionStatus } from '@/types';
import { simulatePromise } from '@/utils';

export const handleSubscribe = async (
  prevActionState: FormActionStatus,
  formData: FormData
): Promise<FormActionStatus> => {
  try {
    const email = formData.get('email');

    console.log('Raw Form Data', {
      email,
    });

    await simulatePromise();

    return {
      status: 'Success',
      message: 'Form submitted successfully!',
    };
  } catch (error) {
    return {
      status: 'Error',
      message: 'An error occurred while submitting the form.',
    };
  }
};
