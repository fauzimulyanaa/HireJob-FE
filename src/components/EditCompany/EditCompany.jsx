import EditPhotoProfile from "../elements/EditPhotoCompany";
import Footer from "../elements/Footer";
import Navbar from "../elements/NavbarEditCompany";

export default function EditCompany() {
  return (
    <>
      <div className="container-full bg-[#F6F7F8]">
        <Navbar />
        <div className="container-edit flex justify-around mt-[-140px]">
          <EditPhotoProfile />
        </div>
        <Footer />
      </div>
    </>
  );
}
