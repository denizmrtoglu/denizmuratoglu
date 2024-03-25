import { BookmarkFilledIcon, BorderSolidIcon } from '@radix-ui/react-icons';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { IJourney, JourneyDTO } from '@/types/Journey';

const TimelineItem = ({ event, index }: { event: IJourney; index: number }) => {
  const isRight = index % 2 !== 0;

  return (
    <div className="md:p-0 pl-1">
      <Year isRight={isRight} year={event.year} />
      <div className="md:p-0 pl-4 mb-10">
        {[...event.items].reverse().map(item => {
          return (
            <div
              className={`flex ${
                isRight ? 'md:justify-end' : 'justify-start'
              } my-2`}
              key={item.title}
            >
              <div className="md:w-2/5 w-full">
                <Alert>
                  <BookmarkFilledIcon className="h-4 w-4" />
                  <AlertTitle>{item.title}</AlertTitle>
                  <AlertDescription>{item.description}</AlertDescription>
                </Alert>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Timeline = ({ data }: { data: JourneyDTO }) => {
  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="relative w-full">
        <div className="absolute w-0.5 md:left-1/2 top-0 bottom-0 border-r border-dashed border-slate-600"></div>

        {[...data].reverse().map((event, index) => (
          <TimelineItem key={index} event={event} index={index} />
        ))}
      </div>
    </div>
  );
};

const Year = ({ isRight, year }: { isRight: boolean; year: number }) => {
  return (
    <div className={`flex flex-row flex-1 ${isRight && 'md:justify-end'}`}>
      <div
        className={`basis-6/12 flex justify-start ${
          !isRight ? 'md:flex-row-reverse' : 'pl-1 flex-row'
        } items-center text-lg	font-semibold	`}
      >
        <>
          <span>●</span>
          {year}
        </>
      </div>
    </div>
  );
};
