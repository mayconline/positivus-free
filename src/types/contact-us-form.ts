type ContactUsForm = {
  contactReason: string;
  name: string;
  email: string;
  message: string;
};

type ContactUsFormResponse = {
  status: 'Success' | 'Error' | null;
  message: string | null;
};

export type { ContactUsForm, ContactUsFormResponse };
