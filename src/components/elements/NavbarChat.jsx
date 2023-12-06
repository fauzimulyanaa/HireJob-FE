import Logo from "../../assets/img/logo.png";
import Email from "../../assets/img/email.svg";
import Bell from "../../assets/img/bell.svg";
import HamburgerIcon from "../../assets/img/hmburger-menu.png";
import Profile from "../../assets/img/profile.png";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/actions/AuthLogout";
import { useState } from "react";

export default function NavbarHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    Swal.fire({
      icon: "warning",
      title: "Confirmation",
      text: "Are you sure you want to logout?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logoutAction());

        navigate("/login-company");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return;
      }
    });
  };
  return (
    <>
      <section>
        <nav className="bg-white w-full shadow-md ">
          <div className="content flex justify-between items-center mx-2 md:mx-10 px-4 md:px-9 py-2 md:py-6">
            <Link to="/landing-home">
              <img src={Logo} alt="Logo" />
            </Link>
            <div className="icon flex items-center space-x-3 md:space-x-5 relative">
              <button className="md:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
                <img src={HamburgerIcon} alt="Hamburger Icon" />
              </button>
              {isMenuOpen && (
                <div className="md:hidden absolute top-full left-[-330px] right-[-30px]   bg-white rounded-md shadow-md mt-2 transition duration-300 ease-in-out w-[4  00px] ">
                  <div className="p-4 space-y-2">
                    <a href="" className="flex items-center">
                      <img src={Bell} alt="Bell" className="w-6 h-6" />
                      <span className="ml-2">Notifications</span>
                    </a>
                    <a href="" className="flex items-center">
                      <img src={Email} alt="Email" className="w-6 h-6" />
                      <span className="ml-2">Messages</span>
                    </a>
                    <div className="flex items-center">
                      <div className="profiles">
                        <img className="rounded-full w-6 h-6" src={Profile} alt="Profile" />
                      </div>
                      <span className="ml-2">Profile</span>
                    </div>
                    <button className="bg-red-500 text-white rounded-md p-2" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </div>
              )}

              <div className="hidden md:flex md:space-x-5">
                <a href="" className="flex items-center">
                  <img src={Bell} alt="Bell" className="w-6 h-6" />
                </a>
                <a href="" className="flex items-center">
                  <img src={Email} alt="Email" className="w-6 h-6" />
                </a>
                <div className="flex items-center">
                  <div className="profiles border-r-2 border-black pr-5">
                    <img className="rounded-full" src={Profile} alt="Profile" />
                  </div>
                </div>
                <button className="bg-red-500 text-white rounded-md p-2" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
