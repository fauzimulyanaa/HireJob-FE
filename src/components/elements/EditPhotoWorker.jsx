import PhotoEdit from "../../assets/img/photoedit.svg";
import EditPencil from "../../assets/img/edit-pensil.svg";
import LocationIcon from "../../assets/img/lokasi.svg";

export default function EditPhotoProfile() {
  return (
    <section>
      <div className="wrapper-edit">
        <div className="container-edit-profile px-8  bg-white w-[400px] shadow-lg rounded-md">
          <div className="flex flex-col justify-center items-center pb-10 ">
            <img src={PhotoEdit} alt="Foto Profil" className="rounded-full" />
            <button className=" text-white p-2 flex items-baseline gap-3 ">
              <img src={EditPencil} alt="icon" />
              <p className="text-[#9EA0A5] text-[18px] mb-2">Edit</p>
            </button>
            <div className="desc mt-10 w-full pl-7">
              <h1 className="text-2xl mb-2">Louis Tomlinson</h1>
              <p className="text-[#1F2A36] mb-2">Web Developer</p>
              <div className="location flex gap-3">
                <img src={LocationIcon} alt="Location Icon" />
                <p className="text-[#9EA0A5] text-[14px]">Purwokerto, Jawa Tengah</p>
              </div>
              <p className="text-[#9EA0A5]">Freelancer</p>
            </div>
          </div>
        </div>
        <div className="btn-edit mt-4 flex flex-col mb-11 gap-4">
          <button className="w-[400px] bg-[#5E50A1]  p-3 rounded-md text-white">Simpan</button>
          <button className="w-[400px] border-2 border-[#5E50A1] bg-white  p-3 rounded-md text-[#5E50A1]">Batal</button>
        </div>
      </div>
    </section>
  );
}
