import { AdvisesCard } from '@components/home/advises-card';
import { ActiveMembersCard } from '@components/home/active-members-card';
import { UpcomingEventsCard } from '@/components/home/upcoming-events-card';
import { CommunityGrowthCard } from '@/components/home/community-growth-card';
import { UpcomingEventsSection } from '@/components/home/upcoming-events-section';
import { MainSponsorCard } from '@/components/home/main-sponsor-card';
import { LatestArticles } from '@/components/home/latest-activities';

const Home = () => (
  <div>
    <div className="mb-4 flex justify-between">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Hola!</h1>
    </div>

    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <AdvisesCard />
          <ActiveMembersCard />
          <UpcomingEventsCard />
          <CommunityGrowthCard />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UpcomingEventsSection />
          <MainSponsorCard />
        </div>

        <LatestArticles />
      </div>
    </section>
  </div>
);

export default Home;
