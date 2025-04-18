'use client';

import Image from 'next/image';
import { useState } from 'react';
import { SectionTitle } from '@/components';

import ContactUSIllustration from '@/assets/img/contact-us-illustration.svg';

export const ContactUs = () => {
  const [checkedRadio, setCheckedRadio] = useState('say-hi');

  return (
    <SectionTitle
      title="Contact Us"
      description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
    >
      <main className="flex justify-between items-center bg-grey rounded-5xl relative p-14">
        <article className="flex flex-col w-[556px]">
          <div>
            <input
              type="radio"
              id="say-hi"
              name="say-hi"
              value="say-hi"
              checked={checkedRadio === 'say-hi'}
              onChange={(e) => setCheckedRadio(e.target.value)}
            />
            <label htmlFor="say-hi">Say Hi</label>
          </div>

          <div>
            <input
              type="radio"
              id="get-quote"
              name="get-quote"
              value="get-quote"
              checked={checkedRadio === 'get-quote'}
              onChange={(e) => setCheckedRadio(e.target.value)}
            />
            <label htmlFor="get-quote">Get a Quote</label>
          </div>
        </article>

        <Image
          src={ContactUSIllustration}
          alt="circle with stars next to it"
          className="absolute top-0 -right-40  overflow-hidden"
        />
      </main>
    </SectionTitle>
  );
};
