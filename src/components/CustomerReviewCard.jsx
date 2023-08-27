import { star } from "../assets/icons";

const CustomerReviewCard = ({ review }) => {
  return (
    <div className="flex justify-center flex-col items-center gap-5 ">
      <img
        className="rounded-full"
        src={review.imgURL}
        alt="customer image"
        width={100}
        height={100}
      />
      <p className="text-slate-600 text-center max-w-lg text-lg lg:text-xl">
        {review.feedback}
      </p>
      <div className="flex items-center gap-3 mb-4">
        <img src={star} alt="star icon" />
        <span className="text-slate-700">({review.rating})</span>
      </div>
      <h3 className="font-bold text-lg lg:text-xl">{review.customerName}</h3>
    </div>
  );
};

export default CustomerReviewCard;
