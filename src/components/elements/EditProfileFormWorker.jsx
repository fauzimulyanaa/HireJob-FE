import Cloud from "../../assets/img/cloud.svg";
import Expand from "../../assets/img/expand.svg";
import Example from "../../assets/img/example-image.svg";
import IconPerusahaan from "../../assets/img/icon-perusahaan.png";
import ImagePortofolio from "../../assets/img/dummy.png";

export default function EditProfileFormWorker() {
  return (
    <>
      <section className="pb-56">
        <div className="form-edit-company  ">
          <div className="wrapper-form bg-white w-[700px] p-10 rounded-lg h-[720px] shadow-xl">
            <div className="hadline">
              <h1 className="text-3xl mb-4">Data diri</h1>
              <hr />
            </div>
            <div className="form-edit-profile mt-8">
              <div className="mb-6">
                <label htmlFor="nama-lengkap" className="block text-[16px] font-medium text-gray-600">
                  Nama Lengkap
                </label>
                <input type="text" id="nama-lengkap" name="nama-lengkap" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan nama lengkap" />
              </div>
              <div className="mb-6">
                <label htmlFor="jobdesk" className="block text-[16px] font-medium text-gray-600">
                  Job desk
                </label>
                <input type="text" id="jobdesk" name="jobdesk" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan job desk" />
              </div>
              <div className="mb-6">
                <label htmlFor="Domisili" className="block text-[16px] font-medium text-gray-600">
                  Domisili
                </label>
                <input type="text" id="Domisili" name="Domisili" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan domisili" />
              </div>
              <div className="mb-6">
                <label htmlFor="Tempat kerja" className="block text-[16px] font-medium text-gray-600">
                  Tempat kerja
                </label>
                <input type="text" id="Tempat kerja" name="Tempat kerja" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan tempat kerja" />
              </div>
              <div className="mb-6">
                <label htmlFor="deskripsi" className="block text-[16px] font-medium text-gray-600">
                  Deskripsi singkat
                </label>
                <textarea type="text" id="deskripsi" name="deskripsi" className="mt-1 p-4 border w-full h-32 rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none" placeholder="Tuliskan deskripsi singkat" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-skils mb-10 mt-9">
          <div className="wrpper-form-skills bg-white w-[700px] p-10 rounded-lg h-[220px] shadow-xl">
            <div className="hadline">
              <h1 className="text-3xl mb-4">Skill</h1>
              <hr />
            </div>
            <form>
              <div className="mb-6 mt-5">
                <label htmlFor="skill" className="block text-[16px] font-medium text-gray-600">
                  Skills
                </label>
                <div className="wrapper-input-skill flex items-center gap-3">
                  <input type="text" id="skill" name="skill" className="mt-1 p-4 border w-[500px] h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Javascript, Html, css" />
                  <button type="sumbit" className="w-[100px] bg-[#FBB017] text-white p-2 rounded-md">
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="container-pengalaman-kerja">
          <div className="wrpper-form-skills bg-white w-[700px] p-10 rounded-lg h-auto shadow-xl">
            <div className="hadline">
              <h1 className="text-3xl mb-4">Pengalaman kerja</h1>
              <hr />
            </div>
            <div className="card-pengalaman-kerja relative">
              <div className="wrapper-pengalaman-kerja flex gap-10 mt-12 mb-14">
                <img src={IconPerusahaan} alt="icon perusahaan" className="w-[60px] h-[60px]" />
                <div className="desc-time text-[12px]">
                  <h4 className="text-lg">Web Developer</h4>
                  <h5 className="text-lg mb-1">Tokopedia</h5>
                  <div className="time flex text-[#9EA0A5] text-[14px] gap-3 mb-2">
                    <p>July 2019 - January 2020</p>
                    <p>6 months</p>
                  </div>
                  <div className="desc-diri">
                    <p className="text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                  </div>
                </div>
                <div className="wrapper-btn flex absolute right-0 top-[-30px] gap-5">
                  <button type="submit" className="w-[70px] bg-[#FBB017] text-white p-1 rounded-md">
                    Edit
                  </button>
                  <button type="submit" className="w-[40px] bg-[#DB3022] text-white rounded-md">
                    x
                  </button>
                </div>
              </div>
              <hr></hr>
            </div>
            <form>
              <div className="mb-6 mt-5">
                <label htmlFor="posisi" className="block text-[16px] font-medium text-gray-600">
                  Posisi
                </label>
                <input type="text" id="posisi" name="posisi" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="web developer" />
              </div>
              <div className="wrapper-nama-perusahaan flex gap-6">
                <div className="mb-6 mt-5">
                  <label htmlFor="skill" className="block text-[14px] font-medium text-gray-600">
                    Nama perusahaan
                  </label>
                  <input type="text" id="skill" name="skill" className="mt-1 p-4 border w-[300px] h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="PT Harus bisa" />
                </div>
                <div className="mb-6 mt-5">
                  <label htmlFor="skill" className="block text-[14px] font-medium text-gray-600">
                    Dari Bulan/tahun
                  </label>
                  <input type="text" id="skill" name="skill" className="mt-1 p-4 border w-[135px] h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Januari 2018" />
                </div>
                <div className="mb-6 mt-5">
                  <label htmlFor="skill" className="block text-[14px] font-medium text-gray-600">
                    Sampai Bulan/tahun
                  </label>
                  <input type="text" id="skill" name="skill" className="mt-1 p-4 border w-[138px] h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Januari 2019" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="deskripsi-pengalaman" className="block text-[16px] font-medium text-gray-600">
                  Deskripsi singkat
                </label>
                <textarea
                  type="text"
                  id="deskripsi-pengalaman"
                  name="deskripsi-pengalaman"
                  className="mt-1 p-4 border w-full h-32 rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none"
                  placeholder="Tuliskan deskripsi singkat"
                />
              </div>
              <hr></hr>
              <div className="btn-pengalaman-kerja mt-6">
                <button type="submit" className="border-2 border-[#FBB017] w-full text-[#FBB017] p-3 rounded-md">
                  Tambah pengalaman kerja
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="container-portofolio mt-6">
          <div className="wrpper-form-skills bg-white w-[700px] p-10 rounded-lg h-auto shadow-xl">
            <div className="hadline">
              <h1 className="text-3xl mb-4">Portofolio</h1>
              <hr />
            </div>
            <div className="card-pengalaman-kerja relative">
              <div className="wrapper-pengalaman-kerja flex gap-10 mt-12 mb-14">
                <img src={ImagePortofolio} alt="icon perusahaan" />
                <div className="desc-time text-[12px]">
                  <h4 className="text-lg">Remainder app</h4>
                  <h5 className="text-lg mb-1">Link Repo</h5>
                </div>
                <div className="wrapper-btn flex absolute right-0 top-[-30px] gap-5">
                  <button type="submit" className="w-[70px] bg-[#FBB017] text-white p-1 rounded-md">
                    Edit
                  </button>
                  <button type="submit" className="w-[40px] bg-[#DB3022] text-white rounded-md">
                    x
                  </button>
                </div>
              </div>
              <hr></hr>
            </div>
            <form>
              <div className="mb-6 mt-5">
                <label htmlFor="nama-aplikasi" className="block text-[16px] font-medium text-gray-600">
                  Nama aplikasi
                </label>
                <input type="text" id="nama-aplikasi" name="nama-aplikasi" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan nama aplikasi" />
              </div>
              <div className="mb-6 mt-5">
                <label htmlFor="link" className="block text-[16px] font-medium text-gray-600">
                  Link repository
                </label>
                <input type="text" id="link" name="link" className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Masukan link repository" />
              </div>
              <div className="mb-6 mt-5">
                <label htmlFor="type" className="block text-[16px] font-medium text-gray-600">
                  Type portofolio
                </label>
                <div className="wrpperr-radio-btn flex items-baseline  gap-12 mt-3 ">
                  <div className="flex items-center mb-4  ">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Aplikasi mobile
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      checked
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Aplikasi web
                    </label>
                  </div>
                </div>
              </div>

              <div className="container-upload-image">
                <label htmlFor="skill" className="block text-[16px] font-medium text-gray-600">
                  Upload gambar
                </label>
                <div className="wrapper-upload-image flex flex-col justify-center items-center border-dashed border-2 border-[#9EA0A5] pb-8 mt-2">
                  <div className="wrapper-cloud flex flex-col justify-center items-center">
                    <img src={Cloud} alt="cloud icon" className="w-[40%]" />
                    <p>Drag & Drop untuk Upload Gambar Aplikasi Mobile</p>
                    <p>Atau cari untuk mengupload file dari direktorimu.</p>
                  </div>
                  <div className="desc flex justify-center items-center mt-5 gap-7">
                    <div className="example-image flex items-center gap-4">
                      <img src={Example} alt="" />
                      <p className="w-[100px] text-[12px]">High-Res Image PNG, JPG or GIF </p>
                    </div>
                    <div className="expand-image flex items-center gap-4">
                      <img src={Expand} alt="" />
                      <p className="text-[12px]">
                        Size<br></br> 1080x1920 or 600x800
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="btn-portofolio mt-16">
                <hr></hr>
                <button type="submit" className="w-full mt-6 border-2 border-[#FBB017] p-2 text-[#FBB017] rounded-md">
                  Tambah portofolio
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
