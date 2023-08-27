const ServicesCard = ({ service }) => {
  return (
    <div className="flex justify-start flex-col gap-5 bg-slate-100 shadow-xl rounded-lg text-black py-8 px-16 ">
      <div className="w-14 h-14 bg-coral-red flex justify-center rounded-full">
        <img src={service.imgURL} alt="service image" width={30} height={30} />
      </div>
      <h2>{service.label}</h2>
      <p>{service.subtext}</p>
    </div>
  );
};

export default ServicesCard;
