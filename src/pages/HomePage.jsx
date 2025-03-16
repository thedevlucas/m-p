import Hero from '../components/home/Hero';
import SeasonalProducts from '../components/home/SeasonalProducts';
import PestSearch from '../components/home/PestSearch';
import InfoSections from '../components/home/InfoSections';
import Equipment from '../components/home/Equipment';

function HomePage() {
  return (
    <main>
      <Hero />
      <SeasonalProducts />
      <PestSearch />
      <InfoSections />
      <Equipment />
    </main>
  );
}

export default HomePage;