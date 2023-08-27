import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants/index";

const PopularProducts = () => {
  return (
    <section id="products">
      <div className="flex flex-col justify-center gap-5">
        <h2 className="text-2xl text-center leading-3 uppercase font-palanquin font-semibold">
          Our <span className="text-coral-red ">Popular</span> Products
        </h2>
        <p className=" mt-3 text-slate-700 text-lg text-center">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 lg:max-w-[1250px] m-auto gap-10">
        {products.map((product, index) => (
          <div key={index}>
            <PopularProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
