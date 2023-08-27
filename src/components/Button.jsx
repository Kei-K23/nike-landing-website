const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-3 bg-coral-red py-2 px-4 rounded-full my-5 w-[220px] h-14">
      <p className="font-montserrat">{label}</p>
      <img src={iconURL} alt="button icon" width={35} />
    </button>
  );
};

export default Button;
