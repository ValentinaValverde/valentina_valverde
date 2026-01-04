import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import FeaturedWork from '@/components/FeaturedWork';
import About from '@/components/About';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <FeaturedWork />
      <About />
    </div>
  );
}
