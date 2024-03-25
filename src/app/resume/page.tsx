import { CVHeader, CVSection, CVItem, SkillTag } from '@/components/resume';
import { Button } from '@/components/ui/button';
import api from '@/services/api';
import { ResumeDTO } from '@/types/Resume';
import { DownloadIcon } from '@radix-ui/react-icons';

export default async function Resume() {
  const fetchData = async () => {
    const res = await api.get<ResumeDTO>('resume');
    return res;
  };
  const { data } = await fetchData();

  return (
    <div className="flex flex-col lg:p-16 w-full py-4">
      <Button className="self-center  mb-4">
        <a
          href="./assets/deniz-muratoglu-cv.pdf"
          download
          className="flex flex-row gap-1 items-center"
        >
          <DownloadIcon /> Download
        </a>
      </Button>
      <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-neutral-800/30 shadow-lg rounded-lg">
        <CVHeader />

        <CVSection title="SUMMARY">
          <p className="text-sm">{data.summary}</p>
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
          {data.workExperiences.map((experience, index) => (
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
          {data.additionalExperiences.map((experience, index) => (
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
            {data.skills.map((skill, index) => (
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
