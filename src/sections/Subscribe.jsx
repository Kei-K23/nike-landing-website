const Subscribe = () => {
  return (
    <section id="contact">
      <div className="flex justify-center flex-col gap-16 md:justify-between md:flex-row md:gap-10 ">
        <div className="w-full md:w-2/5 flex justify-center md:justify-start">
          <h2 className="text-3xl md:text-4xl font-bold font-palanquin leading-10">
            Sign Up from
            <br />
            <span className="text-coral-red">Updates</span> &
            <br />
            Newsletter
          </h2>
        </div>
        <div className="flex-1 flex justify-center md:justify-start">
          <input
            className="w-full text-xl h-9 py-8 px-4 border-2 rounded-2xl border-coral-red focus:border-coral-red focus:outline-0 focus:ring-2 focus:ring-coral-red focus:shadow-lg focus:shadow-coral-red"
            type="email"
            placeholder="example@gmail.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
