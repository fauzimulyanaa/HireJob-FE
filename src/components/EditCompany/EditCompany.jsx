import EditPhotoProfile from "../elements/EditPhoto";
import EditProfileForm from "../elements/EditProfileForm";
import Footer from "../elements/Footer";
import Navbar from "../elements/Navbar";

export default function EditCompany() {
  return (
    <>
      <div className="container-full bg-[#F6F7F8]">
        <Navbar />
        <div className="container-edit flex">
          <EditPhotoProfile />
          <EditProfileForm />
        </div>
        <Footer />
      </div>
    </>
  );
}
