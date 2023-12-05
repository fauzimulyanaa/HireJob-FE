import PhotoEdit from "../../assets/img/photoedit.svg";
import LocationIcon from "../../assets/img/lokasi.svg";
import Mail from "../../assets/img/mail (4).svg";
import Github from "../../assets/img/github.svg";
import Gitlab from "../../assets/img/gitlab.svg";
import Instagram from "../../assets/img/instagram.svg";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetailProfileWorker } from "../../redux/actions/Worker";

export default function CardDetailProfile() {
  const dispatch = useDispatch();
  const detailProfileWorker = useSelector((state) => state.detailProfileWorker);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailProfileWorker(id));
  }, [dispatch, id]);
  return (
    <section>
      <div className="wrapper-edit ">
        <div className="container-edit-profile px-8  bg-white w-[400px] shadow-lg rounded-md">
          <div className="flex flex-col justify-center items-center pb-10 ">
            <img src={PhotoEdit} alt="Foto Profil" className="rounded-full mt-6" />
            <div className="desc mt-10 w-full pl-4">
              <h1 className="text-2xl mb-2">{detailProfileWorker.data.result.nama}</h1>
              <p className="text-[#1F2A36] mb-2 text-[15px]">Web Developer</p>
              <div className="location flex gap-3 mb-2">
                <img src={LocationIcon} alt="Location Icon" />
                <p className="text-[#9EA0A5] text-[14px]">Purwokerto, Jawa Tengah</p>
              </div>
              <p className="text-[#9EA0A5]">Freelancer</p>
              <p className="desc-profile text-[14px] mt-2 text-[#9EA0A5]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
              </p>
              <div className="wrapper-skill mt-14">
                <h1>Skill</h1>
                <div className="skil-card mt-4 flex flex-wrap gap-3  ">
                  <p className="w-20 bg-[#FBB017] text-center text-white p-1">Phyton</p>
                  <p className="w-20 bg-[#FBB017] text-center text-white p-1">Phyton</p>
                  <p className="w-20 bg-[#FBB017] text-center text-white p-1">Phyton</p>
                  <p className="w-20 bg-[#FBB017] text-center text-white p-1">Phyton</p>
                  <p className="w-20 bg-[#FBB017] text-center text-white p-1">Phyton</p>
                  <p className="w-20 bg-[#FBB017] text-center text-white p-1">Phyton</p>
                </div>
              </div>
              <div className="wrapper contact mt-10">
                <div className="mail flex items-center gap-5 mb-4">
                  <img src={Mail} alt="icon Email" />
                  <p className="text-[#9EA0A5] text-[14px]">Louistommo@gmail.com</p>
                </div>
                <div className="instagram flex items-center gap-5 mb-4">
                  <img src={Instagram} alt="icon instgaram" />
                  <p className="text-[#9EA0A5] text-[14px]">@Louist91</p>
                </div>
                <div className="Github flex items-center gap-5 mb-4">
                  <img src={Github} alt="icon Github" />
                  <p className="text-[#9EA0A5] text-[14px]">@Louistommo</p>
                </div>
                <div className="gitlab flex items-center gap-5 mb-4">
                  <img src={Gitlab} alt="icon Gitlab" />
                  <p className="text-[#9EA0A5] text-[14px]">@Louistommo91</p>
                </div>
              </div>
              <div className="wrapper-btn-hire mt-20">
                <button className="text-white bg-[#5E50A1] w-full p-2 rounded-md">Hire Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
