import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Trainers from '@/components/Trainers';
import PricingPlans from '@/components/PricingPlans';
import Reviews from '@/components/Reviews';
import VideoGallery from '@/components/VideoGallery';
import InstagramFeed from '@/components/InstagramFeed';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Trainers />
      <PricingPlans />
      <Reviews />
      <VideoGallery />
      <InstagramFeed />
    </main>
  );
}
