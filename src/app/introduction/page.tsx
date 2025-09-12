'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Introduction() {
  return (
    <div className="flex md:flex-row flex-col lg:p-16 p-4 md:gap-16 gap-8">
      <Avatar className="md:w-80 md:h-80 w-48 h-48 self-center">
        <AvatarImage
          src="./assets/deniz_muratoglu.jpg"
          alt="@profile-picture"
          className="object-cover"
        />
        <AvatarFallback>DM</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p>
          {`Hi, I’m Deniz Muratoğlu, a `}
          <strong>{`Senior Frontend Software Engineer`}</strong>
          {` with 7+ years of experience building scalable web and mobile applications. Currently, I lead frontend development at Crea Inc., where I transform ideas into user-focused digital products.`}
        </p>

        <br />
        <p>
          {`My journey began in Ankara, where I earned my `}
          <strong>{`Computer Engineering`}</strong>
          {` degree at Hacettepe University. Since 2017, I’ve worked with industry leaders such as `}
          <strong>{`Hepsiburada`}</strong>
          {`, `}
          <strong>{`Vodafone`}</strong>
          {` and `}
          <strong>{`Aselsan`}</strong>
          {`, as well as in freelancing and startup environments. These experiences allowed me to take part in diverse projects—from enterprise solutions to consumer-facing apps—while continuously sharpening my expertise in React, React Native, and modern web technologies.`}
        </p>

        <br />
        <p>
          {`Beyond my professional role, I’m also a `}
          <strong>{`founding team member`}</strong>
          {` at Hirehoot, a startup initiative where we are building technology-driven solutions to redefine how people connect with opportunities.`}
        </p>

        <br />
        <p>
          {`When I’m not coding, I enjoy `}
          <strong>{`traveling`}</strong>
          {`, `}
          <strong>{`camping`}</strong>
          {`, `}
          <strong>{`exploring nature`}</strong>
          {` and `}
          <strong>{`pottery`}</strong>
          {`—activities that inspire creativity and balance in my work.`}
        </p>

        <br />
        <p>{`I believe technology is more than problem-solving; it’s about creating meaningful connections and shaping experiences that matter. If you’re interested in collaborating or exchanging ideas, feel free to connect—let’s build something amazing together.`}</p>
      </div>
    </div>
  );
}
