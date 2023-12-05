import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import ImageHero from "../../assets/img/home-hero.png";
import Asc from "../../assets/img/asc.svg";
import HeroWhy from "../../assets/img/hero-why.png";
import Cek from "../../assets/img/tick.svg";
import Union from "../../assets/img/Union.svg";
import ImageSkill from "../../assets/img/image-skill.png";
import skill from "../../assets/img/skill.svg";
import ReactCardSlider from "react-card-slider-component";
import Image1 from "../../assets/img/image-1.svg";
import Image2 from "../../assets/img/image-2.svg";
import Image3 from "../../assets/img/image-3.svg";

export default function Home() {
  const slides = [
    {
      image: Image1,
      title: "This is a title Monster",
      description: "This is a description",
      // clickEvent: sliderClick
    },
    {
      image: Image2,
      title: "This is a second title",
      description: "This is a second description",
      // clickEvent: sliderClick
    },
    {
      image: Image3,
      title: "This is a third title",
      description: "This is a third description",
      // clickEvent: sliderClick
    },
    {
      image: Image1,
      title: "This is a fourth title",
      description: "This is a fourth description",
      // clickEvent: sliderClick
    },
    {
      image: Image2,
      title: "This is a fifth title",
      description: "This is a fifth description",
      // clickEvent: sliderClick
    },
    {
      image: Image3,
      title: "This is a sixth title",
      description: "This is a sixth description",
      // clickEvent: sliderClick
    },
    {
      image: Image1,
      title: "This is a seventh title",
      description: "This is a seventh description",
      // clickEvent: sliderClick
    },
  ];
  return (
    <div className="container-full m-auto h-auto pb-11">
      <header className="px-20 py-8">
        <nav className="flex justify-between ">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="btn-cta flex items-center gap-10">
            <Link to="/login-worker" className="text-[#5E50A1] text-[14px] border-2 border-[#5E50A1] p-2 rounded-md">
              Masuk Untuk Pekerja
            </Link>
            <Link to="/login-company" className="text-white text-[14px] bg-[#5E50A1] p-3 rounded-md">
              Masuk Untuk Perekrut
            </Link>
          </div>
        </nav>
      </header>
      <section>
        <div className="container-hero px-20 mt-14 flex justify-between items-center">
          <div className="tagline-hero w-[40%] ">
            <h1 className="text-[#1F2A36] text-4xl w-[400px] leading-relaxed mb-6">Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            <button type="button" className="mt-7 w-[200px] bg-[#5E50A1] p-2 text-white rounded-md">
              Mulai Dari Sekarang
            </button>
          </div>
          <div className="image-hero relative">
            <div className="wrapper-img-hero relative">
              <img src={ImageHero} alt="hero image" className="w-[80%]" />
              <div className="absolute w-[390px] h-[390px] bg-gray-300  transform rotate-[-15.787deg] top-7 left-5 z-[-99999] "></div>
              <div className="absolute top-[230px] left-[-40px]">
                <img src={Asc} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-60 px-20">
        <div className="container-why flex gap-20">
          <div className="wrapper-img-hero relative">
            <img src={HeroWhy} alt="hero image" className="w-[80%]" />
            <div className="absolute w-[400px] h-[320px] bg-gray-300  transform rotate-[12.569deg] top-0 z-[-99999] "></div>
            <div className="absolute w-[90px] h-[90px] bg-[#5E50A1] top-[-35px] left-[-40px]"></div>
            <div className="absolute top-[250px] left-[-40px]">
              <img src={Union} alt="" />
            </div>
          </div>
          <div className="why-peworld">
            <h2 className="text-3xl w-[420px]">Kenapa harus mencari tallent di peworld</h2>
            <div className="wrapper-list mt-10">
              <div className="list flex items-center gap-3 mb-8">
                <img src={Cek} alt="ceklis" />
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="list flex items-center gap-3 mb-8">
                <img src={Cek} alt="ceklis" />
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="list flex items-center gap-3 mb-8">
                <img src={Cek} alt="ceklis" />
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="list flex items-center gap-3 mb-8">
                <img src={Cek} alt="ceklis" />
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-60 px-20">
        <div className="container-why flex justify-end ">
          <div className="skill">
            <h2 className="text-3xl w-[420px]">Skill Tallent</h2>
            <p className="text-[#46505C] w-[470px] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            <div className="wrapper-list mt-6">
              <div className="list flex items-center gap-40 mb-6">
                <div className="items flex items-center gap-4">
                  <img src={skill} alt="ceklis" />
                  <p className="text-[16px]">Java</p>
                </div>
                <div className="items flex items-center gap-4">
                  <img src={skill} alt="ceklis" />
                  <p className="text-[16px]">Golang</p>
                </div>
              </div>
              <div className="list flex items-center gap-40 mb-6">
                <div className="items flex items-center gap-4 w-[70px]">
                  <img src={skill} alt="ceklis" />
                  <p className="text-[16px]">Kotlin</p>
                </div>
                <div className="items flex items-center gap-4">
                  <img src={skill} alt="ceklis" />
                  <p className="text-[16px] ">C++</p>
                </div>
              </div>
              <div className="list flex items-center gap-40 mb-6">
                <div className="items flex items-center gap-4 w-[70px]">
                  <img src={skill} alt="ceklis" />
                  <p className="text-[16px]">PHP</p>
                </div>
                <div className="items flex items-center gap-4">
                  <img src={skill} alt="ceklis" />
                  <p className="text-[16px] ">Ruby</p>
                </div>
              </div>
              <div className="list flex items-center gap-40 mb-6">
                <div className="items flex items-center gap-4 w-[70px]">
                  <img src={skill} alt="ceklis" />
                  <p className="text-[16px]">JavaScript</p>
                </div>
                <div className="items flex items-center gap-4">
                  <img src={skill} alt="ceklis" />
                  <p className="text-[16px]">10+ Bahasa lainnya</p>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper-img-hero relative">
            <img src={ImageSkill} alt="hero image" className="w-[80%]" />
            <div className="absolute w-[400px] h-[320px] bg-gray-300  transform rotate-[-12.915deg] top-0 z-[-99999] "></div>
            <div className="absolute w-[80px] h-[80px] bg-[#FBB017] top-[-39px] right-[70px]"></div>
            <div className="absolute top-[250px] left-[-40px]">
              <img src={Union} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div style={{ marginTop: "5em" }}>
          <ReactCardSlider slides={slides} />
        </div>
      </section>
    </div>
  );
}
