
import React, { useState, useEffect } from 'react';
import { CountdownTime } from '../types';

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): CountdownTime => {
    const targetDate = new Date('2026-02-01T18:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft: CountdownTime = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<CountdownTime>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center space-x-4 md:space-x-8">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-2xl shadow-lg mb-2">
            <span className="text-2xl md:text-4xl font-serif text-white font-bold">
              {item.value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/80 font-semibold">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
