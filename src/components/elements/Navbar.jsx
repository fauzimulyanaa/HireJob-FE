import Logo from "../../assets/img/logo.png";
import Email from "../../assets/img/email.svg";
import Bell from "../../assets/img/bell.svg";
import Profile from "../../assets/img/profile.png";

export default function Navbar() {
  return (
    <>
      <header className=" py-5 px-28 w-full  bg-white">
        <nav className="flex justify-between w-full">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="icon-profile flex gap-10">
            <img src={Email} alt="email logo" />
            <img src={Bell} alt="bell logo" />
            <img src={Profile} alt="profile logo" className="rounded-full" />
          </div>
        </nav>
      </header>
      <section>
        <div className="hero bg-[#5E50A1] h-72"></div>
      </section>
    </>
  );
}
