import Logo from '../../assets/img/logo.png';
import Email from '../../assets/img/email.svg';
import Bell from '../../assets/img/bell.svg';
// import Profile from '../../assets/img/profile.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function NavbarHireChat() {
  const userLogin = localStorage.getItem('status');
  const AuthLoginCompany = useSelector((state) => state.AuthLoginCompany);
  const AuthLoginWorker = useSelector((state) => state.AuthLoginWorker);
  const navigate = useNavigate();

  const toEditProfilePage = () => {
    navigate(userLogin == 'company' ? '/edit-company' : '/edit-worker');
  };
  return (
    <>
      <section>
        <nav className='bg-white w-screen shadow-md'>
          <div className='content flex justify-between mx-10 py-3'>
            <Link to={userLogin == 'company' ? '/landing-home' : '/edit-worker'} className=' mx-2 '>
              <img src={Logo} />
            </Link>

            <div className='icon flex space-x-5'>
              <a href=''>
                <img src={Bell} />
              </a>
              <Link to='/chat-page'>
                <img src={Email} />
              </Link>
              <div className='profiles'>
                <img className='rounded-full' src={AuthLoginCompany?.data?.photo || AuthLoginWorker?.data?.photo} width={'50px'} height={'50px'} onClick={toEditProfilePage} />
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
