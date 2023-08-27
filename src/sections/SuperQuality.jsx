import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section id="super-quality">
      <div className="flex w-full flex-col lg:flex-row justify-between gap-10">
        <div className="flex justify-start  flex-col w-full lg:w-2/5">
          <h1 className="text-3xl font-palanquin font-semibold lg:text-4xl text-b  leading-10 mb-8">
            We Provide You <span className=" text-coral-red">Super</span> <br />
            <span className=" text-coral-red">Quality</span> Shoes
          </h1>
          <p className="font-palanquin leading-8 text-lg lg:text-xl  text-slate-700 mb-8">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <Button label="Shop now" iconURL={arrowRight} />
        </div>
        <div className="flex-1 flex justify-center items-center ">
          <img src={shoe8} alt="super quality" />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
