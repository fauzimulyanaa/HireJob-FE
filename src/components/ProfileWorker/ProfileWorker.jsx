import Navbar from "../elements/NavbarEdit";
import CardDetailProfile from "../elements/CardDetailProfile";
import Footer from "../elements/Footer";
import CardDetailProject from "../elements/CardDetailProject";

export default function ProfileWorker() {
  return (
    <>
      <div className="container-full bg-[#F6F7F8]">
        <Navbar />
        <div className="container-edit flex justify-around mt-[-140px] pb-12">
          <CardDetailProfile />
          <CardDetailProject />
        </div>
      </div>
      <Footer />
    </>
  );
}
