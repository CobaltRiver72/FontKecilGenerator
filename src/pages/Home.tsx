import { useState } from 'react';
import Hero from '../components/Hero';
import Generator from '../components/Generator';
import StylesGallery from '../components/StylesGallery';
import CaraPakai from '../components/CaraPakai';
import FAQ from '../components/FAQ';
import BlogGuide from '../components/BlogGuide';

export default function Home() {
  const [inputText] = useState('');

  return (
    <main>
      <Hero />
      <Generator />
      <StylesGallery inputText={inputText} />
      <CaraPakai />
      <BlogGuide />
      <FAQ />
    </main>
  );
}
