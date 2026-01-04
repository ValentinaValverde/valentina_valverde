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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        <div className="text-right">
          <p>Local Time: {formatTime(now)}</p>
          <p>Location: Greenville, SC</p>
        </div>
      </div>
    </div>
  );
}
