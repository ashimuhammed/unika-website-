import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Shop from '@/components/Shop';
import Collections from '@/components/Collections';
import About from '@/components/About';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Shop />
      <Collections />
      <About />
      <Newsletter />
    </main>
  );
}