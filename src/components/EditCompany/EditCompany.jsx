import EditPhotoProfile from "../elements/EditPhotoCompany";
import EditProfileForm from "../elements/EditProfileFormCompany";
import Footer from "../elements/Footer";
import Navbar from "../elements/Navbar";

export default function EditCompany() {
  return (
    <>
      <div className="container-full bg-[#F6F7F8]">
        <Navbar />
        <div className="container-edit flex justify-around mt-[-140px]">
          <EditPhotoProfile />
          <EditProfileForm />
        </div>
        <Footer />
      </div>
    </>
  );
}
