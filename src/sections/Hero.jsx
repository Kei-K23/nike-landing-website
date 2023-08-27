import { useState } from "react";
import Button from "../components/Button";
import { statistics, shoes } from "../constants/index";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import ShowCard from "../components/ShowCard";
const Hero = () => {
  const [bigImgShoe, setBigImgShoe] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row  justify-between min-h-screen gap-20 max-w-[1540px] m-auto"
    >
      <div className="relative xl:w-2/4 flex flex-col justify-center items-start w-full max-xl:px-8 sm:px-16 pt-28">
        <p className="text-coral-red text-lg lg:text-xl font-palanquin mb-10">
          Our Summer collections
        </p>
        <h1 className="text-[60px] font-semibold lg:text-[80px] text-b font-montserrat leading-[7rem]">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 relative">
            The New Arrival
          </span>
          <br />
          <span className="xl:whitespace-nowrap text-coral-red">Nike</span>{" "}
          Shoes
        </h1>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-around items-center mt-10 gap-10">
          {statistics.map((statistic, index) => (
            <div className="flex justify-center flex-col gap-2" key={index}>
              <p className="text-2xl font-bold font-palanquin">
                {statistic.value}
              </p>
              <p className="text-xl text-slate-700 font-montserrat">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center xl:min-h-full max-xl:py-40 items-center bg-hero bg-cover bg-center">
        <img
          src={bigImgShoe}
          alt="Big image shoe"
          width={600}
          height={500}
          className="object-contain"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] ">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShowCard
                shoe={shoe}
                changeShoeImg={(shoe) => setBigImgShoe(shoe)}
                bigImgShoe={bigImgShoe}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
