import React, { ReactNode } from 'react';

const CVHeader: React.FC = () => (
  <div className="mb-8 border-b	pb-8 flex md:flex-row justify-between flex-col">
    <div>
      <h2 className="text-2xl font-bold">Deniz Muratoğlu</h2>
      <h2 className="text-md font-bold">Front-End Developer</h2>
    </div>
    <div>
      <h2 className="text-sm md:text-right">Ankara, Turkey</h2>
      <h2 className="text-sm md:text-right">+90 531 213 52 74</h2>
      <h2 className="text-sm md:text-right">denizmrtoglu@hotmail.com</h2>
    </div>
  </div>
);

interface CVSectionProps {
  title: string;
  children: ReactNode;
}

const CVSection: React.FC<CVSectionProps> = ({ title, children }) => (
  <div className="mb-8 border-b pb-8">
    <h2 className="text-md font-bold mb-4">{title}</h2>
    {children}
  </div>
);

interface CVItemProps {
  title: string;
  subtitle?: string;
  position?: string;
  children?: ReactNode;
}

const CVItem: React.FC<CVItemProps> = ({
  title,
  subtitle,
  position,
  children
}) => (
  <div className="mb-4 flex flex-col">
    <div className="flex flex-row justify-between">
      <h3 className="text-sm font-bold">{title}</h3>
      {subtitle && (
        <p className="text-gray-600 text-sm italic text-right">{subtitle}</p>
      )}
    </div>
    {position && <h3 className="text-gray-600 text-sm italic">{position}</h3>}
    {children && <div>{children}</div>}
  </div>
);

interface SkillTagProps {
  skill: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => (
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    {skill}
  </span>
);

export { CVHeader, CVSection, CVItem, SkillTag };
