import Hiring from "../elements/PagesHire";
import NavbarHireChat from "../elements/NavbarChat";
import HireInput from "../elements/InputHire";
import Footer from "../elements/Footer";

export default function Hires() {
  return (
    <>
      <div className="container-full overflow-hidden">
        <NavbarHireChat />
        <div className="container-fluid md:px-20 flex flex-col md:flex-row md:items-start  items-center md:justify-around  md:gap-20 py-12 sm:flex-wrap justify-center bg-[#F6F7F8]">
          <Hiring />
          <HireInput />
        </div>
        <Footer />
      </div>
    </>
  );
}
