import { CVHeader, CVSection, CVItem, SkillTag } from '@/components/resume';
import { Button } from '@/components/ui/button';
import {
  Summary,
  WorkExperiences,
  AdditionalExperiences,
  Skills
} from '@/lib/constants';
import { DownloadIcon } from '@radix-ui/react-icons';

export default function Resume() {
  return (
    <div className="flex flex-col lg:p-16 w-full">
      <Button className="self-center">
        <a
          href="./assets/deniz-muratoglu-cv.pdf"
          download
          className="flex flex-row gap-1 items-center"
        >
          <DownloadIcon /> Download
        </a>
      </Button>
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <CVHeader />

        <CVSection title="SUMMARY">
          <p className="text-sm">{Summary}</p>
        </CVSection>

        <CVSection title="EDUCATION">
          <CVItem
            title="Hacettepe University"
            subtitle="Computer Engineering, 2019"
          />
          <CVItem
            title="Selim Nevzat Şahin Anatolian High School"
            subtitle="Math-Science, 2010"
          />
        </CVSection>

        <CVSection title="WORK EXPERIENCE">
          {WorkExperiences.map((experience, index) => (
            <CVItem
              key={index}
              title={experience.title}
              subtitle={experience.period}
              position={experience.position}
            >
              {experience.projects.map((project, projectIndex) => (
                <div key={projectIndex} className="text-sm pl-8">
                  <p className="my-2 font-bold">• {project.title}</p>
                  <p>{project.description}</p>
                </div>
              ))}
            </CVItem>
          ))}
        </CVSection>

        <CVSection title="ADDITIONAL EXPERIENCE">
          {AdditionalExperiences.map((experience, index) => (
            <CVItem
              key={index}
              title={experience.title}
              subtitle={experience.period}
              position={experience.position}
            >
              <div className="text-sm pl-8">
                <p>{experience.description}</p>
              </div>
            </CVItem>
          ))}
        </CVSection>

        <CVSection title="SKILLS">
          <div className="flex flex-wrap">
            {Skills.map((skill, index) => (
              <SkillTag key={index} skill={skill} />
            ))}
          </div>
        </CVSection>

        <CVSection title="LANGUAGE">
          <p className="text-sm">English B1-B2 (Continuing to improve)</p>
        </CVSection>
      </div>
    </div>
  );
}
