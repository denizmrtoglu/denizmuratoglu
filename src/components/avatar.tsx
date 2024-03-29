'use client';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Link from 'next/link';

function MyAvatar() {
  return (
    <Link
      href="/"
      className="flex flex-row rounded items-center gap-2 transition-colors hover:bg-accent p-2"
    >
      <Avatar>
        <AvatarImage src="./assets/avatar.webp" alt="@profile-picture" />
        <AvatarFallback>DM</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-center	">
        <span className="text-lg font-bold leading-none">Deniz Muratoglu</span>
        <span className="text-sm leading-none text-gray-600">
          Software Engineer
        </span>
      </div>
    </Link>
  );
}

export default MyAvatar;
