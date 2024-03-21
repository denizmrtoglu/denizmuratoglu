'use client';
import Image from 'next/image';
import Typewriter from './typewriter';
import { useState } from 'react';

export function Hello() {
  const [newline, setNewline] = useState(false);

  return (
    <>
      <div className="w-full p-2">
        <Typewriter
          hideCursor
          callback={() => setNewline(true)}
          message="hello"
          className="text-9xl"
        />
        <hr />
        <Typewriter
          className="text-4xl ml-1"
          message={`i'm deniz.`}
          trigger={newline}
          typingSpeed={130}
        />
      </div>
      <Image
        src="/DM.svg"
        alt="DM Logo"
        className="dark:invert absolute bottom-[41px]"
        width={100}
        height={45}
        priority
      />
    </>
  );
}
