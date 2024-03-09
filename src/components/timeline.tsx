import { IJourneyProps } from '@/lib/constants.types';
import { BookmarkFilledIcon, BorderSolidIcon } from '@radix-ui/react-icons';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const TimelineItem = ({
  event,
  index
}: {
  event: IJourneyProps;
  index: number;
}) => {
  const isRight = index % 2 !== 0;

  return (
    <>
      <div className="flex flex-row flex-1">
        <div className="flex-1 flex flex-row justify-end items-center	text-lg	font-semibold	">
          {!isRight && (
            <>
              {event.year}
              <BorderSolidIcon />
            </>
          )}
        </div>
        <div className="flex-1 flex flex-row items-center text-lg	font-semibold	ml-4">
          {isRight && (
            <>
              <BorderSolidIcon />
              {event.year}
            </>
          )}
        </div>
      </div>
      {event.items.reverse().map(item => {
        return (
          <div
            className={`flex ${isRight ? 'justify-end' : 'justify-start'} my-2`}
            key={item.title}
          >
            <div className="w-2/5	">
              <Alert>
                <BookmarkFilledIcon className="h-4 w-4" />
                <AlertTitle>{item.title}</AlertTitle>
                <AlertDescription>{item.description}</AlertDescription>
              </Alert>
            </div>
          </div>
        );
      })}
    </>
  );
};

export const Timeline = ({ data }: { data: IJourneyProps[] }) => {
  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="relative w-full">
        <div className="absolute w-0.5 left-1/2 top-0 bottom-0 border-r border-dashed border-slate-600"></div>

        {data.reverse().map((event, index) => (
          <TimelineItem key={index} event={event} index={index} />
        ))}
      </div>
    </div>
  );
};
