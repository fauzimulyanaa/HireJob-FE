import ImageForm from "../../assets/img/hero.png";
import Icon from "../../assets/img/icon.svg";

export default function GambarForm() {
  return (
    <>
      <section>
        <div className="wrapper-img w-full  h-80 relative hidden md:block  md:w-1/2">
          <div className="w-[550px] p-24 h-[600px] relative overflow-hidden z-10 bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col" style={{ backgroundImage: `url(${ImageForm})` }}>
            <div className="icon-wrapper absolute top-7 left-11 flex items-center gap-3">
              <img src={Icon} alt="Icon" />
              <p className="text-white">Peworld</p>
            </div>
            <div className="before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-[#5E50A1] before:to-[#8b81bd] before:opacity-75 before:z-[-5]"></div>
            <h1 className="text-white text-4xl font-bold leading-relaxed">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
          </div>
        </div>
      </section>
    </>
  );
}
