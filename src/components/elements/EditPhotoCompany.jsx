import EditPencil from "../../assets/img/edit-pensil.svg";
import LocationIcon from "../../assets/img/lokasi.svg";
import Swal from "sweetalert2";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProfileCompany, updateProfileCompany } from "../../redux/actions/Company";

export default function EditPhotoProfile() {
  const [photo, setPhoto] = useState();
  const [form, setForm] = useState({
    photo: "",
    nama_perusahaan: "",
    bidang: "",
    provinsi: "",
    kota: "",
    deskripsi_singkat: "",
    email: "",
    email_perusahaan: "",
    phone: "",
    linked_in: "",
  });

  const dispatch = useDispatch();
  const AuthLoginCompany = useSelector((state) => state.AuthLoginCompany);
  const detailProfileCompany = useSelector((state) => state.detailProfileCompany);
  const editProfileCompany = useSelector((state) => state.editProfileCompany);

  if (editProfileCompany.isLoading) {
    Swal.fire({
      title: "Updating...",
      html: "Please wait...",
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  useEffect(() => {
    dispatch(getDetailProfileCompany(AuthLoginCompany.data?.id_user));
  }, []);

  useEffect(() => {
    setForm({
      ...form,
      photo: detailProfileCompany.data?.photo,
      nama_perusahaan: detailProfileCompany.data?.nama_perusahaan,
      bidang: detailProfileCompany.data?.bidang,
      provinsi: detailProfileCompany.data?.provinsi,
      kota: detailProfileCompany.data?.kota,
      deskripsi_singkat: detailProfileCompany.data?.deskripsi_singkat,
      email: detailProfileCompany.data?.email,
      email_perusahaan: detailProfileCompany.data?.email_perusahaan,
      phone: detailProfileCompany.data?.phone,
      linked_in: detailProfileCompany.data?.linked_in,
    });
  }, [detailProfileCompany]);

  const onChangePhoto = (e) => {
    setPhoto(e.target.files[0]);
    e.target.files[0] && setForm({ ...form, photo: URL.createObjectURL(e.target.files[0]) });
    console.log(e.target.files[0]);
  };

  const putData = () => {
    let bodyData = new FormData();
    bodyData.append("photo", photo);
    bodyData.append("nama_perusahaan", form.nama_perusahaan);
    bodyData.append("bidang", form.bidang);
    bodyData.append("provinsi", form.provinsi);
    bodyData.append("kota", form.kota);
    bodyData.append("deskripsi_singkat", form.deskripsi_singkat);
    bodyData.append("email", form.email);
    bodyData.append("email_perusahaan", form.email_perusahaan);
    bodyData.append("phone", form.phone);
    bodyData.append("linked_in", form.linked_in);

    dispatch(updateProfileCompany(bodyData));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      icon: "warning",
      title: "Confirmation",
      text: "Simpan?",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        putData();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });
  };

  const handleBatal = () => {
    Swal.fire({
      icon: "warning",
      title: "Confirmation",
      text: "Batal mengedit profile?",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setForm({
          ...form,
          photo: detailProfileCompany.data?.photo,
          nama_perusahaan: detailProfileCompany.data?.nama_perusahaan,
          bidang: detailProfileCompany.data?.bidang,
          provinsi: detailProfileCompany.data?.provinsi,
          kota: detailProfileCompany.data?.kota,
          deskripsi_singkat: detailProfileCompany.data?.deskripsi_singkat,
          email: detailProfileCompany.data?.email,
          email_perusahaan: detailProfileCompany.data?.email_perusahaan,
          phone: detailProfileCompany.data?.phone,
          linked_in: detailProfileCompany.data?.linked_in,
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });
  };
  return (
    <>
      <form className="flex w-full justify-evenly flex-wrap" onSubmit={handleSubmit}>
        <section>
          <div className="wrapper-edit">
            <div className="wrapper-form bg-white p-10 rounded-lg h-auto shadow-xl w-[450px] md:w-full m-auto ">
              <div className="flex flex-col justify-center items-center pb-10 ">
                <buttton className=" text-white p-2 flex items-baseline gap-3 relative overflow-hidden">
                  <img src={EditPencil} alt="icon" />
                  <p className="text-[#9EA0A5] text-[18px] mb-2">Edit</p>
                  <input type="file" className="absolute w-full h-full opacity-0" onChange={onChangePhoto} />
                </buttton>
                {form.photo && <img src={form.photo} alt="Foto Profil" className="rounded-full" />}
                <div className="desc mt-10 w-full pl-7">
                  <h1 className="text-2xl mb-2">{detailProfileCompany.data?.nama_perusahaan}</h1>
                  <p className="text-[#1F2A36] mb-2">{detailProfileCompany.data?.bidang}</p>
                  <div className="location flex gap-3">
                    <img src={LocationIcon} alt="Location Icon" />
                    <p className="text-[#9EA0A5] text-[14px]">
                      {detailProfileCompany.data?.kota}, {detailProfileCompany.data?.provinsi}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-edit mt-4 flex flex-col mb-11 gap-4">
              <button className=" w-full  md:w-[400px] lg:w-[400px] bg-[#5E50A1]  p-3 rounded-md text-white">Simpan</button>
              <p className=" w-full md:w-[400px] lg:w-[400px] h-[50px] border-2 border-[#5E50A1] bg-white rounded-md text-center pt-3 text-[#5E50A1]" onClick={handleBatal}>
                Batal
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="form-edit-company pb-56 ">
            <div className="wrapper-form bg-white p-10 rounded-lg h-auto shadow-xl w-[450px] md:w-[700px] m-auto ">
              <div className="hadline">
                <h1 className="text-3xl mb-4">Data diri</h1>
                <hr />
              </div>
              <div className="form-edit-profile mt-8">
                <div className="mb-6">
                  <label htmlFor="nama-perusahaan" className="block text-[16px] font-medium text-gray-600">
                    Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    id="nama-perusahaan"
                    name="nama-perusahaan"
                    className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Masukan nama perusahan"
                    value={form.nama_perusahaan}
                    onChange={(e) => setForm({ ...form, nama_perusahaan: e.target.value })}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="bidang" className="block text-[16px] font-medium text-gray-600">
                    Bidang
                  </label>
                  <input
                    type="text"
                    id="bidang"
                    name="bidang"
                    className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Masukan bidang perusahaan ex : Financial"
                    value={form.bidang}
                    onChange={(e) => setForm({ ...form, bidang: e.target.value })}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="provinsi" className="block text-[16px] font-medium text-gray-600">
                    Provinsi
                  </label>
                  <input
                    type="text"
                    id="provinsi"
                    name="provinsi"
                    className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Masukan Provinsi"
                    value={form.provinsi}
                    onChange={(e) => setForm({ ...form, provinsi: e.target.value })}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="kota" className="block text-[16px] font-medium text-gray-600">
                    Kota
                  </label>
                  <input
                    type="text"
                    id="kota"
                    name="kota"
                    className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Masukan Kota"
                    value={form.kota}
                    onChange={(e) => setForm({ ...form, kota: e.target.value })}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="deskripsi" className="block text-[16px] font-medium text-gray-600">
                    Deskripsi singkat
                  </label>
                  <textarea
                    type="text"
                    id="deskripsi"
                    name="deskripsi"
                    className="mt-1 p-4 border w-full h-32 rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none"
                    placeholder="Tuliskan deskripsi singkat"
                    value={form.deskripsi_singkat}
                    onChange={(e) => setForm({ ...form, deskripsi_singkat: e.target.value })}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-[16px] font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Masukan email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email-perusahaan" className="block text-[16px] font-medium text-gray-600">
                    Email Perusahaan
                  </label>
                  <input
                    type="email"
                    id="email-perusahaan"
                    name="email-perusahaan"
                    className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Masukan email Perusahaan"
                    value={form.email_perusahaan}
                    onChange={(e) => setForm({ ...form, email_perusahaan: e.target.value })}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-[16px] font-medium text-gray-600">
                    Nomor Telepon
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Masukan nomor telepon"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="linkedin" className="block text-[16px] font-medium text-gray-600">
                    Linkedin
                  </label>
                  <input
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Masukan nama Linkedin"
                    value={form.linked_in}
                    onChange={(e) => setForm({ ...form, linked_in: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}
