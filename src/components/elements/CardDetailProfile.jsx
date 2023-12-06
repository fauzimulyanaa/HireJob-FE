// import PhotoEdit from '../../assets/img/photoedit.svg';
import LocationIcon from '../../assets/img/lokasi.svg';
import Mail from '../../assets/img/mail (4).svg';
import Github from '../../assets/img/github.svg';
import Gitlab from '../../assets/img/gitlab.svg';
import Instagram from '../../assets/img/instagram.svg';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getSkillByIdWorker } from '../../redux/actions/Worker';
import { getDetailProfileWorkerForCompany } from '../../redux/actions/Company';

export default function CardDetailProfile() {
  const dispatch = useDispatch();
  const showDetailPortfolioWorkerForCompany = useSelector((state) => state.showDetailPortfolioWorkerForCompany);
  const showSkillByIdWorker = useSelector((state) => state.showSkillByIdWorker);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailProfileWorkerForCompany(id));
    dispatch(getSkillByIdWorker(id));
  }, [dispatch, id]);

  return (
    <section>
      <div className='wrapper-edit '>
        <div className='container-edit-profile px-8  bg-white w-[400px] shadow-lg rounded-md'>
          <div className='flex flex-col justify-center items-center pb-10 '>
            <img src={showDetailPortfolioWorkerForCompany?.data?.photo} alt='Foto Profil' className='rounded-full mt-6' />
            <div className='desc mt-10 w-full pl-4'>
              <h1 className='text-2xl mb-2'>{showDetailPortfolioWorkerForCompany?.data?.nama}</h1>
              <p className='text-[#1F2A36] mb-2 text-[15px]'>{showDetailPortfolioWorkerForCompany?.data?.jabatan}</p>
              <div className='location flex gap-3 mb-2'>
                <img src={LocationIcon} alt='Location Icon' />
                <p className='text-gray-600 text-[14px]'>{showDetailPortfolioWorkerForCompany?.data?.domisili}</p>
              </div>
              <p className='text-gray-600'>{showDetailPortfolioWorkerForCompany?.data?.tempat_kerja}</p>
              <p className='desc-profile text-[14px] mt-2 text-gray-600'>{showDetailPortfolioWorkerForCompany?.data?.deskripsi_singkat}</p>
              <div className='wrapper-skill mt-14'>
                <h1>Skill</h1>
                <div className='skil-card mt-4 flex flex-wrap gap-3'>
                  {showSkillByIdWorker?.data?.data?.map((items) => {
                    return (
                      <p className='w-20 rounded-md bg-[#FBB017] text-center text-white p-1' key={items.id_skill}>
                        {items.nama_skill}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className='wrapper contact mt-10'>
                <div className='mail flex items-center gap-5 mb-4'>
                  <img src={Mail} alt='icon Email' />
                  <p className='text-gray-600 text-[14px]'>Louistommo@gmail.com</p>
                </div>
                <div className='instagram flex items-center gap-5 mb-4'>
                  <img src={Instagram} alt='icon instgaram' />
                  <p className='text-gray-600 text-[14px]'>@Louist91</p>
                </div>
                <div className='Github flex items-center gap-5 mb-4'>
                  <img src={Github} alt='icon Github' />
                  <p className='text-gray-600 text-[14px]'>@Louistommo</p>
                </div>
                <div className='gitlab flex items-center gap-5 mb-4'>
                  <img src={Gitlab} alt='icon Gitlab' />
                  <p className='text-gray-600 text-[14px]'>@Louistommo91</p>
                </div>
              </div>
              <div className='wrapper-btn-hire mt-20'>
                <button className='text-white bg-[#5E50A1] w-full p-2 rounded-md'>Hire Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
