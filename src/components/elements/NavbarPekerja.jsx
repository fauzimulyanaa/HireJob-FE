import Logo from "../../assets/img/logo.png";
import Email from "../../assets/img/email.svg";
import Bell from "../../assets/img/bell.svg";
import Profile from "../../assets/img/profile.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/actions/AuthLogout";

export default function NavbarHome() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    Swal.fire({
      icon: "warning",
      title: "Confirmation",
      text: "Are you sure want to logout?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logoutAction());
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });

    return;
  };
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
              <Link to="/login-worker" className="bg-red-500 text-white rounded-md p-2" onClick={handleLogout}>
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
