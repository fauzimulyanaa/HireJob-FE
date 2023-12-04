import EditPhotoProfile from "../elements/EditPhotoWorker";
import EditProfileForm from "../elements/EditProfileFormWorker";
import Footer from "../elements/Footer";
import Navbar from "../elements/Navbar";

export default function EditWorker() {
  return (
    <>
      <div className="container-full bg-[#F6F7F8] h-auto">
        <Navbar />
        <div className="container-edit flex justify-around mt-[-140px]">
          <EditPhotoProfile />
          <EditProfileForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
