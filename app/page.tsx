'use client';

import Link from 'next/link';
import HeroSlider from './components/HeroSlider';
import BrandLogos from './components/BrandLogos';
import NewArrivals from './components/NewArrivals';
import NavigationBar from './components/NavigationBar';
import TabBar from './components/TabBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      
      <main className="pt-16 pb-20">
        <HeroSlider />
        <BrandLogos />
        <NewArrivals />
      </main>

      <TabBar />
    </div>
  );
}