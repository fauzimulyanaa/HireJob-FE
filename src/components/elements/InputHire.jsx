import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { postChatAction } from '../../redux/actions/Chat';

export default function HireInput() {
  const showDetailPortfolioWorkerForCompany = useSelector((state) => state.showDetailPortfolioWorkerForCompany);
  const AuthLoginCompany = useSelector((state) => state.AuthLoginCompany);
  const [form, setForm] = useState({
    id_perekrut: AuthLoginCompany?.data?.id_user,
    id_pekerja: showDetailPortfolioWorkerForCompany?.data?.id_user,
    posisi: '',
    message_detail: '',
  });
  const dispatach = useDispatch();
  const navigate = useNavigate();

  const handleHire = (event) => {
    event.preventDefault();
    Swal.fire({
      icon: 'warning',
      title: 'Confirmation',
      text: 'Hire?',
      showCancelButton: true,
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatach(postChatAction(form, navigate));
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });
  };

  return (
    <>
      <div className='container-form max-w-md mx-auto py-8 px-4'>
        <div className='text-start'>
          <h1 className='text-3xl my-5'>Hubungi {showDetailPortfolioWorkerForCompany?.data?.nama}</h1>
          <p className='my-8'>{showDetailPortfolioWorkerForCompany?.data?.deskripsi_singkat}</p>
        </div>
        <form onSubmit={handleHire}>
          <div className='container-form w-[550px]'>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-[16px]  font-medium text-gray-600'>
                Untuk Posisi
              </label>
              <input
                type='text'
                id='posisi'
                name='posisi'
                className='text-[14px] mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                placeholder='Fulltime Front-end Web Developer'
                onChange={(e) => setForm({ ...form, posisi: e.target.value })}
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='password' className='block text-[16px] font-medium text-gray-600'>
                Deskripsi
              </label>
              <textarea
                name='deskripsi'
                id=''
                cols='30'
                rows='10'
                className='border w-full rounded-md focus:outline-none focus:ring focus:border-blue-300 p-4 text-[14px]'
                placeholder='Membuat fitur dan maintenance untuk dashrboard admin dan posisi remote'
                onChange={(e) => setForm({ ...form, message_detail: e.target.value })}
              />
            </div>
            <div>
              <button type='submit' className='w-full bg-[#FBB017] text-white py-2 px-4 rounded-md hover:bg=[#FBB017] focus:outline-none focus:ring focus:border-blue-300'>
                Hire
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
