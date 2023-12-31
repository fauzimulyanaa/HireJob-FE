import { useSelector } from 'react-redux';

export default function EditProfileFormCompany() {
  const detailProfileCompany = useSelector((state) => state.detailProfileCompany);
  return (
    <section>
      <div className='form-edit-company pb-56 '>
        <div className='wrapper-form bg-white w-[700px] p-10 rounded-lg h-[1200px] shadow-xl'>
          <div className='hadline'>
            <h1 className='text-3xl mb-4'>Data diri</h1>
            <hr />
          </div>
          <div className='form-edit-profile mt-8'>
            <div className='mb-6'>
              <label htmlFor='nama-perusahaan' className='block text-[16px] font-medium text-gray-600'>
                Nama Perusahaan
              </label>
              <input
                type='text'
                id='nama-perusahaan'
                name='nama-perusahaan'
                className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                placeholder='Masukan nama perusahan'
                value={detailProfileCompany.data?.nama_perusahaan}
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='bidang' className='block text-[16px] font-medium text-gray-600'>
                Bidang
              </label>
              <input
                type='text'
                id='bidang'
                name='bidang'
                className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                placeholder='Masukan bidang perusahaan ex : Financial'
                value={detailProfileCompany.data?.bidang}
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='provinsi' className='block text-[16px] font-medium text-gray-600'>
                Provinsi
              </label>
              <input
                type='text'
                id='provinsi'
                name='provinsi'
                className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                placeholder='Masukan Provinsi'
                value={detailProfileCompany.data?.provinsi}
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='kota' className='block text-[16px] font-medium text-gray-600'>
                Kota
              </label>
              <input type='text' id='kota' name='kota' className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300' placeholder='Masukan Kota' value={detailProfileCompany.data?.kota} />
            </div>
            <div className='mb-6'>
              <label htmlFor='deskripsi' className='block text-[16px] font-medium text-gray-600'>
                Deskripsi singkat
              </label>
              <textarea
                type='text'
                id='deskripsi'
                name='deskripsi'
                className='mt-1 p-4 border w-full h-32 rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none'
                placeholder='Tuliskan deskripsi singkat'
                value={detailProfileCompany.data?.deskripsi_singkat}
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='email' className='block text-[16px] font-medium text-gray-600'>
                Email
              </label>
              <input type='email' id='email' name='email' className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300' placeholder='Masukan email' value={detailProfileCompany.data?.email} />
            </div>
            <div className='mb-6'>
              <label htmlFor='email-perusahaan' className='block text-[16px] font-medium text-gray-600'>
                Email Perusahaan
              </label>
              <input
                type='email'
                id='email-perusahaan'
                name='email-perusahaan'
                className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                placeholder='Masukan email Perusahaan'
                value={detailProfileCompany.data?.email_perusahaan}
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='phone' className='block text-[16px] font-medium text-gray-600'>
                Nomor Telepon
              </label>
              <input type='text' id='phone' name='phone' className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300' placeholder='Masukan nomor telepon' value={detailProfileCompany.data?.phone} />
            </div>
            <div className='mb-6'>
              <label htmlFor='linkedin' className='block text-[16px] font-medium text-gray-600'>
                Linkedin
              </label>
              <input
                type='text'
                id='linkedin'
                name='linkedin'
                className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                placeholder='Masukan nama Linkedin'
                value={detailProfileCompany.data?.linked_in}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
