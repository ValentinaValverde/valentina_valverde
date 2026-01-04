import Divider from './Divider';
import Card from './Card';
import { homePageProjects } from '@/lib/constants';

export default function FeaturedWork() {
  return (
    <div>
      <Divider text="Featured Work" />

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 space-y-4 space-x-4">
        {homePageProjects.map((data, index) => (
          <div key={index}>
            <Card
              title={data.title}
              subtitle={data.subtitle}
              link={data.link}
              imageUrl={data.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
