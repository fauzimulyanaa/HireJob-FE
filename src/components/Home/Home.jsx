import Logo from "../../assets/img/logo.png";

export default function Home() {
  return (
    <div className="container">
      <header>
        <nav>
          <img src={Logo} alt="Logo" />
        </nav>
      </header>
    </div>
  );
}
