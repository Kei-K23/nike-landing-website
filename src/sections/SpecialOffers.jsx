import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section id="special-offer">
      <div className="flex w-full flex-col lg:flex-row justify-between gap-10">
        <div className="flex-1 flex justify-center items-center ">
          <img src={offer} alt="special offer" />
        </div>
        <div className="flex  justify-start  flex-col w-full lg:w-2/5">
          <h1 className="text-3xl font-palanquin font-semibold lg:text-4xl text-b  leading-10 mb-8">
            <span className=" text-coral-red">Special</span> Offer
          </h1>
          <p className="font-palanquin leading-8 text-lg lg:text-xl  text-slate-700 mb-8">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="font-palanquin leading-8 text-lg lg:text-xl  text-slate-700 mb-8">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
          <Button label="Shop now" iconURL={arrowRight} />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
