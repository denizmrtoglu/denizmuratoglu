import { Timeline } from '@/components/timeline';
import { JOURNEY } from '@/lib/constants';

export default function Journey() {
  return (
    <div className="flex flex-col lg:p-16 w-full py-4">
      <Timeline data={JOURNEY} />
    </div>
  );
}
