import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import ImageHero from "../../assets/img/home-hero.png";
import Asc from "../../assets/img/asc.svg";
import HeroWhy from "../../assets/img/hero-why.png";
import Cek from "../../assets/img/tick.svg";
import Union from "../../assets/img/Union.svg";
import ImageSkill from "../../assets/img/image-skill.png";
import skill from "../../assets/img/skill.svg";
import Image1 from "../../assets/img/image-1.svg";
import Image2 from "../../assets/img/image-2.svg";
import Image3 from "../../assets/img/image-3.svg";
import HamburgerIcon from "../../assets/img/hmburger-menu.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../elements/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const comments = [
    {
      image: Image1,
      name: "Harry Styles",
      job: "Web Developer",
      description: "This is a description",
    },
    {
      image: Image2,
      name: "Harry Styles",
      job: "Web Developer",
      description: "This is a description",
    },
    {
      image: Image3,
      name: "Harry Styles",
      job: "Web Developer",
      description: "This is a description",
    },
    {
      image: Image1,
      name: "Harry Styles",
      job: "Web Developer",
      description: "This is a description",
    },
    {
      image: Image2,
      name: "Harry Styles",
      job: "Web Developer",
      description: "This is a description",
    },
    {
      image: Image3,
      name: "Harry Styles",
      job: "Web Developer",
      description: "This is a description",
    },
    {
      image: Image1,
      name: "Harry Styles",
      job: "Web Developer",
      description: "This is a description",
    },
  ];
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: isMobile ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToWorker = () => {
    localStorage.setItem("status", "worker");
  };

  const handleToCompany = () => {
    localStorage.setItem("status", "company");
  };
  return (
    <div className="container-full m-auto h-auto overflow-hidden">
      <header className="px-8 md:px-20 py-8 ">
        <nav className="flex justify-between ">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="icon flex items-center space-x-3 md:space-x-5 relative">
            <button className="md:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
              <img src={HamburgerIcon} alt="Hamburger Icon" className="w-[30px]" />
            </button>
            {isMenuOpen && (
              <div className="md:hidden  absolute top-full left-[-430px] right-[-24px]   bg-white  shadow-md mt-2 transition duration-300 ease-in-out p-6">
                <div className="p-4 space-y-2 flex flex-col items-center gap-11">
                  <Link to="/login-worker" className="text-[#5E50A1] text-[14px] border-2 border-[#5E50A1] p-[10px] rounded-md" onClick={handleToWorker}>
                    Masuk Untuk Pekerja
                  </Link>
                  <Link to="/login-company" className="text-white text-[14px] bg-[#5E50A1] rounded-md p-[10px]" onClick={handleToCompany}>
                    Masuk Untuk Perekrut
                  </Link>
                </div>
              </div>
            )}

            <div className="hidden md:flex md:space-x-5">
              <Link to="/login-worker" className="text-[#5E50A1] text-[14px] border-2 border-[#5E50A1] p-[10px] rounded-md" onClick={handleToWorker}>
                Masuk Untuk Pekerja
              </Link>
              <Link to="/login-company" className="text-white text-[14px] bg-[#5E50A1] rounded-md p-[10px]" onClick={handleToCompany}>
                Masuk Untuk Perekrut
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <section>
        <div className="container-fluid px-6 md:px-20 mt-14 flex flex-col md:flex-row md:justify-between items-center ">
          <div className="tagline-hero w-full md:w-[40%] ">
            <h1 className="text-[#1F2A36] text-4xl w-[400px] leading-relaxed mb-6">Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            <button type="button" className="mt-7 w-[200px] bg-[#5E50A1] p-2 text-white rounded-md">
              Mulai Dari Sekarang
            </button>
          </div>
          <div className="image-hero relative mt-8">
            <div className="wrapper-img-hero  relative">
              <img src={ImageHero} alt="hero image" className="w-full md:w-[80%]" />
              <div className="md:absolute md:w-[390px] md:h-[390px] md:bg-gray-300  md:transform md:rotate-[-15.787deg] md:top-7 md:left-5 md:z-[-99999] "></div>
              <div className="absolute top-[270px] left-[-10px]">
                <img src={Asc} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-60">
        <div className="container-why px-6  md:px-20 flex flex-col-reverse md:flex-row w-full items-center md:items-start gap-20">
          <div className="wrapper-img-hero relative">
            <img src={HeroWhy} alt="hero image" className="w-full" />
            <div className="absolute  w-[410px] h-[360px]  md:w-[510px] md:h-[420px] bg-gray-300  transform rotate-[12.569deg] top-0 z-[-99999] "></div>
            <div className="absolute hidden md:block w-[90px] h-[90px] bg-[#5E50A1] top-[-47px] left-[-10px]"></div>
            <div className="absolute hidden top-[180px] left-[-40px]">
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

      <section className="mt-60">
        <div className="container-why pl-8 md:px-20 md:justify-end flex flex-col md:flex-row items-center justify-end gap-20 ">
          <div className="skill  ">
            <h2 className="text-3xl w-[420px]">Skill Tallent</h2>
            <p className="text-[#46505C] w-[470px] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            <div className="wrapper-list mt-6 w-full">
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
          <div className="wrapper-img-hero relative mt-20 w-[400px] md:w-[460px]">
            <img src={ImageSkill} alt="hero image" className="w-full" />
            <div className="absolute w-[380px] h-[330px] md:w-[440px] md:h-[370px] bg-gray-300  transform rotate-[-12.915deg] top-0 z-[-99999] "></div>
            <div className="absolute hidden md:block w-[80px] h-[80px] bg-[#FBB017] top-[-39px] right-[0]"></div>
          </div>
        </div>
      </section>

      <section className="mt-40 p-16  bg-[#FAFBFC] container-fluid ">
        <div className="content mx-20 flex items-center flex-col">
          <h1 className="header text-center text-3xl mb-6 w-[400px] ">Their opinion about peworld</h1>
          <div className="container text-center w-[450px] md:w-[900px] ">
            <Slider {...settings}>
              {comments.map((item) => (
                <div key={item.id} className="mb-14 p-9  w-[600px] shadow-lg	rounded-lg">
                  <img src={item.image} className="w-[110px] m-auto mb-3" />
                  <h2 className="title text-2xl mb-2">{item.name}</h2>
                  <p className="mb-2 text-[#9EA0A5]">{item.job}</p>
                  <p className="description">{item.description}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section>
        <div className="container bg-[#5E50A1] hidden md:block m-auto w-[1140px] mt-28 relative rounded-tl-[40px] rounded-br-[20px]">
          <div className="wrapper-text px-20 absolute top-[80px] flex justify-between items-center w-full">
            <div className="tagline-card">
              <h1 className="text-3xl w-[260px] text-white leading-relaxed	">Lorem ipsum dolor sit amet</h1>
            </div>
            <div>
              <button className="w-[200px] p-3 bg-white text-[#796EAF] rounded-md">Mulai Sekarang</button>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="1140" height="294" viewBox="0 0 1140 294" fill="none">
            <path
              d="M115.803 237.6C65.8759 260.01 20.5718 228.263 4.16058 209.588C1.38686 205.986 0.23114 203.086 -4.01769e-06 202.086L0 294L1140 294L1140 1.12042e-05C1103.48 69.8628 1011.16 212.09 934.051 222.094C837.664 234.6 735.73 187.578 610.912 237.6C486.095 287.622 389.015 259.109 331.46 237.6C273.905 216.092 178.212 209.588 115.803 237.6Z"
              fill="white"
              fillOpacity="0.05"
            />
          </svg>
        </div>
      </section>

      <footer className="mt-28 overflow-hidden">
        <Footer />
      </footer>
    </div>
  );
}
