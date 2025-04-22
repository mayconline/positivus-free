'use server';

import type { FormActionStatus } from '@/types';
import { simulatePromise } from '@/utils';

export const handleContactUs = async (
  prevActionState: FormActionStatus,
  formData: FormData
): Promise<FormActionStatus> => {
  try {
    const contactReason = formData.get('contact-reason');
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    console.log('Raw Form Data', {
      contactReason,
      name,
      email,
      message,
    });

    await simulatePromise();

    return {
      status: 'Success',
      message: 'Form submitted successfully!',
    };
  } catch (error) {
    console.error('error', error);
    return {
      status: 'Error',
      message: 'An error occurred while submitting the form.',
    };
  }
};
