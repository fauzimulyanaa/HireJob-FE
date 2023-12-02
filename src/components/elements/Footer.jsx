import Logo from "../../assets/img/logo-putih.png";

export default function Footer() {
  return (
    <footer className="h-[300px] bg-[#5E50A1] overflow-hidden">
      <div className="container-footer w-[1200px]  p-10  flex flex-col justify-center m-auto">
        <img src={Logo} alt="logo" className="w-28" />
        <p className="mt-10 w-[330px] mb-7 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        <hr></hr>
        <div className="desc-footer flex justify-between mt-6 text-white">
          <p>2020 Pewworld. All right reserved</p>
          <div className="contact flex gap-14">
            <p>Telpon</p>
            <p>Email</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
