// import Cloud from "../../assets/img/cloud.svg";
// import Expand from "../../assets/img/expand.svg";
// import Example from "../../assets/img/example-image.svg";
// import IconPerusahaan from "../../assets/img/icon-perusahaan.png";
// import ImagePortofolio from "../../assets/img/dummy.png";
// import IconPerusahaan from '../../assets/img/icon-perusahaan.png';
// import ImagePortofolio from '../../assets/img/dummy.png';

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPortfolioWorkerAction, getExperienceWorkerAction } from "../../redux/actions/Worker";

export default function EditProfileFormWorker() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const showPortfolioWorker = useSelector((state) => state.showPortfolioWorker);
  const showExperienceWorker = useSelector((state) => state.showExperienceWorker);

  console.log("ini data pengalaman", showExperienceWorker?.data);

  useEffect(() => {
    dispatch(getPortfolioWorkerAction(id));
    dispatch(getExperienceWorkerAction(id));
  }, [id, dispatch]);
  return (
    <>
      <section className="pb-56 mt-24 md:mt-0">
        <div className="container-edit-profile p-8 w-[400px]  bg-white md:w-[700px] h-auto shadow-lg rounded-md">
          <div className="container-card-portofolio">
            <div className="tagline border-b-4 border-[#5E50A1] w-[110px]">
              <h1 className="text-2xl">Portofolio</h1>
            </div>
            <div className="wrapper-portofolio flex gap-2">
              {showPortfolioWorker?.data?.map((items) => {
                return (
                  <div className="card" key={items.id}>
                    <div className="wrapper-portofolio-kerja flex flex-col mt-12 mb-14">
                      <img src={items.photo} alt="icon perusahaan" />
                      <h4 className="text-md text-center">{items.nama_aplikasi}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="container-card-pengalaman-kerja">
            <div className="tagline border-b-4 border-[#5E50A1] w-[204px]">
              <h1 className="text-2xl pb-2">Pengalaman kerja</h1>
            </div>
            <div className="wrapper-card">
              {showExperienceWorker?.data?.map((items) => {
                return (
                  <div className=" flex items-start gap-14 mt-12 mb-14" key={items.id}>
                    <img src={items.photo} alt="icon perusahaan" className="w-[90px] h-[90px]" />
                    <div className="desc-time text-[12px]">
                      <h4 className="text-lg">{items.positions}</h4>
                      <h5 className="text-lg mb-1">{items.company_name}</h5>
                      <div className="time flex text-[#9EA0A5] text-[14px] gap-3 mb-2">
                        <p>
                          {items.from_month} - {items.to_month}
                        </p>
                        {/* <p>6 months</p> */}
                      </div>
                      <div className="desc-diri">
                        <p className="text-[12px] w-[400px]">{items.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
