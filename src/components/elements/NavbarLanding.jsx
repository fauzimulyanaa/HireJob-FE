import Logo from "../../assets/img/logo.png";
import Email from "../../assets/img/email.svg";
import Bell from "../../assets/img/bell.svg";
import Profile from "../../assets/img/profile.png";
import { Link } from "react-router-dom";

export default function NavbarHome() {
  return (
    <>
      <section>
          <nav className="bg-white w-screen p-3">
            <div className="content flex justify-between mx-10 py-3">
    
            <Link to="/landing-home" className=" mx-2 ">
            <img src={Logo} />
                </Link>
      
            <div className="icon flex space-x-5 items-center">
              <div className="mr-5 flex items-center gap-5">
              <a href=""><img src={Bell}  /></a>
              <a href=""><img src={Email}  /></a>
              <div className="profiles">
                <img className="rounded-full" src={Profile} />
              </div>
              </div>
              <Link to="login-company" className="bg-red-500 text-white rounded-md p-2 ">
                Logout
              </Link>
            </div>
            </div>
          </nav>
      </section>
      <section>
        <header className="bg-violet-700 w-screen">
          <div className="title p-4 mx-10 py-3">
            <p className="text-white font-bold">Top Jobs</p>
          </div>
        </header>
      </section>
    </>
  );
}
