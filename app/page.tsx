import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import FeaturedWork from '@/components/FeaturedWork';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <FeaturedWork />
      <Contact />
    </div>
  );
}
