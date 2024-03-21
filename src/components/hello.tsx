'use client';
import Image from 'next/image';
import Typewriter from './typewriter';
import { useEffect, useState } from 'react';

export function Hello() {
  const [start, setStart] = useState(false);
  const [newline, setNewline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="w-full p-2">
        <Typewriter
          className="text-9xl h-32"
          message={`hello`}
          trigger={start}
          hideCursor
          callback={() => setNewline(true)}
        />
        <hr />
        <Typewriter
          className="text-4xl ml-[3.6px]"
          message={`i'm deniz.`}
          trigger={newline}
          typingSpeed={130}
        />
      </div>
      <Image
        src="/assets/dm.svg"
        alt="DM Logo"
        className="dark:invert absolute bottom-[41px]"
        width={80}
        height={36}
        priority
      />
    </>
  );
}
