'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Introduction() {
  return (
    <div className="flex md:flex-row flex-col lg:p-16 p-4 md:gap-16 gap-8">
      <Avatar className="md:w-80 md:h-80 w-48 h-48 self-center">
        <AvatarImage
          src="./assets/deniz_muratoglu.JPG"
          alt="@profile-picture"
          className="object-cover"
        />
        <AvatarFallback>DM</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p>
          Hi, I’m Deniz Muratoğlu, a <strong>Senior Frontend Engineer</strong>{' '}
          with over 8 years of experience in building web and mobile
          applications using React and React Native. I’m currently working at
          Crea Inc., focusing on scalable frontend structures, performance
          improvements, and developing component systems used across different
          products.
        </p>

        <br />
        <p>
          I studied <strong>Computer Engineering</strong> at Hacettepe
          University and have been working professionally since 2017. Over the
          years, I’ve been part of teams in various domains including
          e-commerce, fintech and SaaS, working with companies such as{' '}
          <strong>Hepsiburada</strong>, <strong>Vodafone</strong> and{' '}
          <strong>Aselsan</strong>. I’ve also spent time in startup and
          freelance environments, which gave me the chance to build features
          end-to-end and be involved more closely in product decisions.
        </p>

        <br />
        <p>
          I’m also one of the <strong>early team members</strong> of Hirehoot,
          where I set up the initial frontend foundations, design system
          structure and helped bring the first version of the product to life.
        </p>

        <br />
        <p>
          Outside of work, I enjoy <strong>traveling</strong>,{' '}
          <strong>spending time outdoors</strong>, <strong>camping</strong> and{' '}
          <strong>working with clay</strong>. These keep me balanced and
          inspired away from the keyboard.
        </p>

        <br />
        <p>
          If you’re interested in connecting or working together, feel free to
          reach out.
        </p>
      </div>
    </div>
  );
}
