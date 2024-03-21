import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

interface Props {
  message: string;
  className?: string;
  hideCursor?: boolean;
  callback?: () => void;
  trigger?: boolean;
  typingSpeed?: number;
  cursorSpeed?: number;
  callbackTimeout?: number;
}

function Typewriter({
  message,
  className,
  hideCursor = false,
  callback,
  trigger = true,
  typingSpeed = 180,
  cursorSpeed = 400,
  callbackTimeout = 1000
}: Props) {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (!trigger) return;
    if (text.length < message.length) {
      const timer = setTimeout(() => {
        setText(text + message[text.length]);
      }, typingSpeed);

      return () => clearTimeout(timer);
    } else {
      const callbackTimer = setTimeout(() => {
        callback && callback();
      }, callbackTimeout);

      const cursorTimer = setInterval(() => {
        setCursorVisible(show => !show);
      }, cursorSpeed);

      return () => {
        clearTimeout(callbackTimer);
        clearInterval(cursorTimer);
      };
    }
  }, [text, trigger]);

  return (
    <div>
      <span className={className}>{text}</span>
      {!(hideCursor && text.length === message.length) && trigger && (
        <span
          className={cn(
            `${
              cursorVisible ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500 font-black`,
            className
          )}
        >
          |
        </span>
      )}
    </div>
  );
}

export default Typewriter;
