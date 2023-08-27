import CustomerReviewCard from "../components/CustomerReviewCard";
import { reviews } from "../constants/index";
const CustomerReviews = () => {
  return (
    <section id="review">
      <h2 className="text-3xl lg:text-4xl  font-bold text-center font-palanquin mb-10">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h2>
      <p className="text-xl  text-slate-800 text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div
        className="
      flex w-full justify-center md:justify-around md:flex-row flex-col  items-center
      mt-16 gap-20"
      >
        {reviews.map((review, index) => (
          <div key={index}>
            <CustomerReviewCard review={review} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
