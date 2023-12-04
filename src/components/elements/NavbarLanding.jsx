import Logo from "../../assets/img/logo.png";
import Email from "../../assets/img/email.svg";
import Bell from "../../assets/img/bell.svg";
import Profile from "../../assets/img/profile.png";

export default function Navbar() {
  return (
    <>
      <section>
          <nav className="bg-white w-screen">
            <div className="content flex justify-between mx-10 py-3">
            <div className="logo">
              <img src={Logo} />
            </div>
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
