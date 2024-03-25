import { Timeline } from '@/components/timeline';
import api from '@/services/api';
import { JourneyDTO } from '@/types/Journey';

export default async function Journey() {
  const fetchData = async () => {
    const res = await api.get<JourneyDTO>('journey');
    return res;
  };
  const { data } = await fetchData();

  return (
    <div className="flex flex-col lg:p-16 w-full py-4">
      <Timeline data={data} />
    </div>
  );
}
