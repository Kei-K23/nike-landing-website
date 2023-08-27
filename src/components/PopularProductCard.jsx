import { star } from "../assets/icons";

const PopularProductCard = ({ product }) => {
  return (
    <div className="flex justify-center items-center  flex-col gap-4">
      <img src={product.imgURL} alt="popular img" width={200} height={200} />
      <div className="mr-8">
        <div className="flex items-center gap-3 mb-4">
          <img src={star} alt="star icon" />
          <span className="text-slate-700">(4.5)</span>
        </div>
        <h3 className="text-lg font-montserrat">{product.name}</h3>
        <p className="text-coral-red">{product.price}</p>
      </div>
    </div>
  );
};

export default PopularProductCard;
