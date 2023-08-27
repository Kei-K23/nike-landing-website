const ShowCard = ({ shoe, changeShoeImg, bigImgShoe }) => {
  const handleClick = () => {
    if (bigImgShoe !== shoe.bigShoe) {
      changeShoeImg(shoe.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-2xl ${
        bigImgShoe === shoe.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={shoe.bigShoe}
          alt="shoe"
          width={120}
          height={150}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShowCard;
