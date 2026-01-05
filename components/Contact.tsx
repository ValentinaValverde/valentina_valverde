'use client';

import Divider from './Divider';
import { formatTime } from '@/utils/clock';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  });

  return (
    <div>
      <Divider text="Contact" />

      <div className="p-6 pt-0 flex justify-between items-start">
        <div>
          <a
            href="https://www.linkedin.com/in/valentina-valverde-1a179227a/"
            target="_blank"
          >
            LinkedIn
          </a>
          <br />
          <a href="https://github.com/ValentinaValverde" target="_blank">
            Github
          </a>
        </div>

        <div className="text-right">
          <p>Located in Greenville, SC</p>
          <p>Local Time: {formatTime(now)}</p>
        </div>
      </div>

      <div className="w-full p-6 h-[75vh] flex items-end justify-center">
        <p className="text-[clamp(2rem,8vw,8rem)] p-6 opacity-25 hover:opacity-100 transition duration-300">
          sofficestudio@gmail.com
        </p>
      </div>
    </div>
  );
}
