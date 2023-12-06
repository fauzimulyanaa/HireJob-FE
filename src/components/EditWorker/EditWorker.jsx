import EditPhotoProfile from "../elements/EditPhotoWorker";
import Footer from "../elements/Footer";
import Navbar from "../elements/NavbarEdit";

export default function EditWorker() {
  return (
    <>
      <div className="container-fluid lg:w-full bg-[#F6F7F8] h-auto md:w-1/2">
        <Navbar />
        <div className="container-edit flex justify-around mt-[-140px] md:justify-center">
          <EditPhotoProfile />
        </div>
      </div>
      <Footer />
    </>
  );
}
