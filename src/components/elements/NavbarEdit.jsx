import Logo from "../../assets/img/logo.png";
import Email from "../../assets/img/email.svg";
import Bell from "../../assets/img/bell.svg";
import Profile from "../../assets/img/profile.png";

export default function Navbar() {
  return (
    <>
      <section>
        <nav className="bg-white w-full">
          <div className="content flex justify-between items-center mx-10 px-9 py-6">
            <div className="logo">
              <img src={Logo} />
            </div>
            <div className="icon flex  items-center space-x-5">
              <a href="">
                <img src={Bell} />
              </a>
              <a href="">
                <img src={Email} />
              </a>
              <div className="profiles">
                <img className="rounded-full" src={Profile} />
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section>
        <div className="hero bg-[#5E50A1] h-72"></div>
      </section>
    </>
  );
}
