import Footer from '../elements/Footer';
import Navbar from '../elements/NavbarLanding';
import PageHome from '../elements/PageLanding';

export default function HomeLanding() {
  return (
    <>
      <div className='bg-[#F6F7F8] w-screen'>
        <Navbar />
        <PageHome />
        <Footer />
      </div>
    </>
  );
}
