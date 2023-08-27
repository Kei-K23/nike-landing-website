import Navbar from "./components/Navbar";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections/index";
const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:pl-8 sm:pl-16  sm:pr-16 wide:pr-8 sm:pb-24 pb-12">
        <Hero />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <PopularProducts />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <SuperQuality />
      </section>
      <section className="sm:px-16 px-8 py-12">
        <Services />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <SpecialOffers />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12 bg-slate-300">
        <CustomerReviews />
      </section>
      <section className="sm:px-16 px-8 sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black sm:px-16 px-8 sm:pt-16 pt-8 pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
