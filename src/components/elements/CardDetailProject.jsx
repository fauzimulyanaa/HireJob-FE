// import Cloud from "../../assets/img/cloud.svg";
// import Expand from "../../assets/img/expand.svg";
// import Example from "../../assets/img/example-image.svg";
// import IconPerusahaan from "../../assets/img/icon-perusahaan.png";
// import ImagePortofolio from "../../assets/img/dummy.png";
import IconPerusahaan from "../../assets/img/icon-perusahaan.png";
import ImagePortofolio from "../../assets/img/dummy.png";

export default function EditProfileFormWorker() {
  return (
    <>
      <section className="pb-56">
        <div className="container-edit-profile p-8  bg-white w-[700px] h-auto shadow-lg rounded-md">
          <div className="container-card-portofolio">
            <div className="tagline border-b-4 border-[#5E50A1] w-[110px]">
              <h1 className="text-2xl">Portofolio</h1>
            </div>
            <div className="wrapper-portofolio flex gap-2">
              <div className="card">
                <div className="wrapper-portofolio-kerja flex flex-col mt-12 mb-14">
                  <img src={ImagePortofolio} alt="icon perusahaan" />
                  <h4 className="text-md text-center">Remainder app</h4>
                </div>
              </div>
              <div className="card">
                <div className="wrapper-portofolio-kerja flex flex-col mt-12 mb-14">
                  <img src={ImagePortofolio} alt="icon perusahaan" />
                  <h4 className="text-md text-center">Remainder app</h4>
                </div>
              </div>
              <div className="card">
                <div className="wrapper-portofolio-kerja flex flex-col mt-12 mb-14">
                  <img src={ImagePortofolio} alt="icon perusahaan" />
                  <h4 className="text-md text-center">Remainder app</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="container-card-pengalaman-kerja">
            <div className="tagline border-b-4 border-[#5E50A1] w-[204px]">
              <h1 className="text-2xl pb-2">Pengalaman kerja</h1>
            </div>
            <div className="wrapper-card">
              <div className=" flex items-start gap-14 mt-12 mb-14">
                <img src={IconPerusahaan} alt="icon perusahaan" className="w-[90px] h-[90px]" />
                <div className="desc-time text-[12px]">
                  <h4 className="text-lg">Web Developer</h4>
                  <h5 className="text-lg mb-1">Tokopedia</h5>
                  <div className="time flex text-[#9EA0A5] text-[14px] gap-3 mb-2">
                    <p>July 2019 - January 2020</p>
                    <p>6 months</p>
                  </div>
                  <div className="desc-diri">
                    <p className="text-[12px] w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-start gap-14 mt-12 mb-14">
                <img src={IconPerusahaan} alt="icon perusahaan" className="w-[90px] h-[90px]" />
                <div className="desc-time text-[12px]">
                  <h4 className="text-lg">Web Developer</h4>
                  <h5 className="text-lg mb-1">Tokopedia</h5>
                  <div className="time flex text-[#9EA0A5] text-[14px] gap-3 mb-2">
                    <p>July 2019 - January 2020</p>
                    <p>6 months</p>
                  </div>
                  <div className="desc-diri">
                    <p className="text-[12px] w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
