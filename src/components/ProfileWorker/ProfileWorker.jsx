import Navbar from "../elements/NavbarLanding";
import CardDetailProfile from "../elements/CardDetailProfile";
import Footer from "../elements/Footer";
import CardDetailProject from "../elements/CardDetailProject";

export default function ProfileWorker() {
  return (
    <>
      <div className="container-fluid bg-[#F6F7F8] ">
        <Navbar />

        <div className="container-edit flex flex-col md:flex-row md:items-start items-center justify-around mt-[100px] pb-12 ">
          <CardDetailProfile />
          <CardDetailProject />
        </div>
        <Footer />
      </div>
    </>
  );
}
