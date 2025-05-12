import { Timeline } from '@/components/timeline';
import { JOURNEY } from '@/lib/constants';

export default function Journey() {
  return (
    <div className="flex flex-col lg:p-16 w-full py-4">
      <h1 className="text-xl md:text-3xl font-bold mb-6">My Journey</h1>
      <Timeline data={JOURNEY} />
    </div>
  );
}
