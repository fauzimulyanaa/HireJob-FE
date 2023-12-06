import Logo from "../../assets/img/logo.png";
import Email from "../../assets/img/email.svg";
import Bell from "../../assets/img/bell.svg";
import Profile from "../../assets/img/profile.png";
import { Link } from "react-router-dom";

export default function NavbarHireChat() {
  return (
    <>
      <section>
          <nav className="bg-white w-screen shadow-md">
            <div className="content flex justify-between mx-10 py-3">
   
            <Link to="/landing-home" className=" mx-2 ">
            <img src={Logo} />
                </Link>

            <div className="icon flex space-x-5">
              <a href=""><img src={Bell}  /></a>
              <a href=""><img src={Email}  /></a>
              <div className="profiles">
                <img className="rounded-full" src={Profile} />
              </div>
            </div>
            </div>
          </nav>
      </section>
    </>
  );
}
