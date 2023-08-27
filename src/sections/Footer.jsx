import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section id="footer">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 lg:gap-20">
        <div className="flex justify-start flex-col gap-6">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={200} />
          </a>
          <p className="text-slate-400 text-lg">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <ul className="flex items-center gap-4">
            {socialMedia.map((social, index) => (
              <li
                key={index}
                className="bg-slate-300 w-10 h-10 rounded-full flex justify-center "
              >
                <img src={social.src} alt={social.alt} width={30} height={40} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-start flex-col gap-6">
          <h2 className="text-xl font-semibold text-slate-300">Get in touch</h2>
          <p className="text-slate-300 text-lg">customer.nike@gmail.com</p>
          <p className="text-slate-300 text-lg">+95 968 876 8972</p>
        </div>
        <div className="flex justify-start flex-col gap-6">
          <h2 className="text-xl font-semibold text-slate-300">
            {footerLinks[1].title}
          </h2>
          <ul className="flex justify-start flex-col gap-4">
            {footerLinks[1].links.map((help, index) => (
              <li key={index}>
                <a className="text-slate-300" href={help.link}>
                  {help.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-start flex-col gap-6">
          <h2 className="text-xl font-semibold text-slate-300">
            {footerLinks[0].title}
          </h2>
          <ul className="flex justify-start flex-col gap-4">
            {footerLinks[0].links.map((help, index) => (
              <li key={index}>
                <a className="text-slate-300" href={help.link}>
                  {help.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex  w-full items-center gap-3 text-lg text-white mt-10">
        <img src={copyrightSign} alt="copyright icon" />
        <p>Copyright 2023 nike@gmail.com</p>
      </div>
    </section>
  );
};

export default Footer;
