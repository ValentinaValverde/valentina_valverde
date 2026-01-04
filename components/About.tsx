'use client';

import Divider from './Divider';
import { formatTime } from '@/utils/clock';
import { useState, useEffect } from 'react';

export default function About() {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  });

  return (
    <div>
      <Divider text="About" />

      <div className="p-6 flex justify-between items-start">
        <p className="text-lg max-w-1/2">
          I&apos;m a Design Engineer with 2+ years in experience building SaaS
          products and various other creative projects. With my love for art and
          eye for design, I am able to fill in the gaps between developers and
          designers. I believe communication is key in every relationship, and I
          absolutely love a good sandwich.
        </p>

        <div className="text-right">
          <p>Local Time: {formatTime(now)}</p>
          <p>Location: Greenville, SC</p>
        </div>
      </div>

      {/* <div className="w-full flex justify-end mb-[-64px]">
        <img src="/valentina.png" alt="Valentina's Photo" />
      </div> */}
    </div>
  );
}
