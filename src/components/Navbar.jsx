import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";
const Navbar = () => {
  return (
    <header className="sm:px-16 px-8 py-8 absolute z-10 w-full ">
      <nav className="flex justify-between items-center ">
        <a href="/">
          <img src={headerLogo} alt="header logo" />
        </a>
        <ul className="flex justify-around gap-8 max-lg:hidden">
          {navLinks.map((link) => (
            <li className="text-lg " key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={30} height={30} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
