import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import Swal from 'sweetalert2';

import EditPencil from '../../assets/img/edit-pensil.svg';
import LocationIcon from '../../assets/img/lokasi.svg';
import Cloud from '../../assets/img/cloud.svg';
import Expand from '../../assets/img/expand.svg';
import Example from '../../assets/img/example-image.svg';
// import IconPerusahaan from '../../assets/img/icon-perusahaan.png';
// import ImagePortofolio from '../../assets/img/dummy.png';

import {
  getDetailProfileWorker,
  getSkillByIdWorker,
  updateProfileWorker,
  postSkillWorker,
  deleteSkillWorkerAction,
  getPortfolioWorkerAction,
  postPortfolioAction,
  deletePortfolioWorkerAction,
  getDetailPortfolioWorker,
  updatePortfolioWorkerAction,
  getExperienceWorkerAction,
  postExperienceAction,
  deleteExperienceWorkerAction,
  getDetailExperienceWorker,
  updateExperienceWorkerAction,
} from '../../redux/actions/Worker';

export default function EditPhotoProfile() {
  const dispatch = useDispatch();
  const detailProfileWorker = useSelector((state) => state.detailProfileWorker);
  const AuthLoginWorker = useSelector((state) => state.AuthLoginWorker);
  const showSkillByIdWorker = useSelector((state) => state.showSkillByIdWorker);
  const editProfileWorker = useSelector((state) => state.editProfileWorker);
  const addSkillWorker = useSelector((state) => state.addSkillWorker);
  const showPortfolioWorker = useSelector((state) => state.showPortfolioWorker);
  const addPortfolioWorker = useSelector((state) => state.addPortfolioWorker);
  const showDetailPortfolioWorker = useSelector((state) => state.showDetailPortfolioWorker);
  const updatePortfolioWorker = useSelector((state) => state.updatePortfolioWorker);
  const deletePortfolioWorker = useSelector((state) => state.deletePortfolioWorker);
  const showExperienceWorker = useSelector((state) => state.showExperienceWorker);
  const addExperienceWorker = useSelector((state) => state.addExperienceWorker);
  const deleteExperienceWorker = useSelector((state) => state.deleteExperienceWorker);
  const showDetailExperienceWorker = useSelector((state) => state.showDetailExperienceWorker);
  const updateExperienceWorker = useSelector((state) => state.updateExperienceWorker);

  if (editProfileWorker.isLoading) {
    Swal.fire({
      title: 'Updating...',
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  if (updatePortfolioWorker.isLoading) {
    Swal.fire({
      title: 'Updating...',
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  if (updateExperienceWorker.isLoading) {
    Swal.fire({
      title: 'Updating...',
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  if (deletePortfolioWorker.isLoading) {
    Swal.fire({
      title: 'Deleting...',
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  if (deleteExperienceWorker.isLoading) {
    Swal.fire({
      title: 'Deleting...',
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  if (addSkillWorker.isLoading) {
    Swal.fire({
      title: 'Updating...',
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  if (addExperienceWorker.isLoading) {
    Swal.fire({
      title: 'Uploading...',
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  if (addPortfolioWorker.isLoading) {
    Swal.fire({
      title: 'Uploading...',
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  const [photo, setPhoto] = useState();
  const [photoPortfolio, setPhotoPortfolio] = useState(null);
  const [photoExperience, setPhotoExperience] = useState(null);
  const [showCardUplodImage, setShowCardUplodImage] = useState(false);
  const [editPortfolio, setEditPortfolio] = useState(false);
  const [editExperience, setEditExperience] = useState(false);
  const [form, setForm] = useState({
    photo: '',
    nama: '',
    job_desk: '',
    domisili: '',
    tempat_kerja: '',
    deskripsi_singkat: '',
  });

  const [skills, setSkills] = useState({
    skill: [],
  });

  const [formPortfolio, setFormPortfolio] = useState({
    photo: '',
    link_repo: '',
    type: '',
    nama_aplikasi: '',
  });

  const [formExperience, setFormExperience] = useState({
    position: '',
    company_name: '',
    from_month: '',
    to_month: '',
    description: '',
    photo: '',
  });

  const inputRef = useRef();

  const onChangePhoto = (e) => {
    setPhoto(e.target.files[0]);
    e.target.files[0] && setForm({ ...form, photo: URL.createObjectURL(e.target.files[0]) });
    console.log(e.target.files[0]);
  };

  const onChangePhotoPortfolio = (e) => {
    setPhotoPortfolio(e.target.files[0]);
    setShowCardUplodImage(true);
    e.target.files[0] && setFormPortfolio({ ...formPortfolio, photo: URL.createObjectURL(e.target.files[0]) });
    console.log('ini daari change', formPortfolio);
  };

  const onChangePhotoExperience = (e) => {
    setPhotoExperience(e.target.files[0]);
    setShowCardUplodImage(true);
    e.target.files[0] && setFormExperience({ ...formExperience, photo: URL.createObjectURL(e.target.files[0]) });
    console.log('ini daari change', formExperience);
  };

  useEffect(() => {
    dispatch(getDetailProfileWorker(AuthLoginWorker.data?.id_user));
    dispatch(getSkillByIdWorker(AuthLoginWorker.data?.id_user));
    dispatch(getPortfolioWorkerAction());
    dispatch(getDetailPortfolioWorker(null));
    dispatch(getExperienceWorkerAction());
  }, []);

  useEffect(() => {
    setForm({
      ...form,
      photo: detailProfileWorker.data?.photo,
      nama: detailProfileWorker.data?.nama,
      job_desk: detailProfileWorker.data?.job_desk,
      domisili: detailProfileWorker.data?.domisili,
      tempat_kerja: detailProfileWorker.data?.tempat_kerja,
      deskripsi_singkat: detailProfileWorker.data?.deskripsi_singkat,
    });
  }, [detailProfileWorker]);

  const putData = () => {
    let bodyData = new FormData();
    bodyData.append('photo', photo);
    bodyData.append('nama', form.nama);
    bodyData.append('job_desk', form.job_desk);
    bodyData.append('domisili', form.domisili);
    bodyData.append('tempat_kerja', form.tempat_kerja);
    bodyData.append('deskripsi_singkat', form.deskripsi_singkat);

    dispatch(updateProfileWorker(bodyData));
  };

  const postDataPortfolio = () => {
    let bodyData = new FormData();
    bodyData.append('photo', photoPortfolio);
    bodyData.append('link_repo', formPortfolio.link_repo);
    bodyData.append('type', formPortfolio.type);
    bodyData.append('nama_aplikasi', formPortfolio.nama_aplikasi);

    dispatch(postPortfolioAction(bodyData, setFormPortfolio));
  };

  const postDataExperience = () => {
    let bodyData = new FormData();
    bodyData.append('photo', photoExperience);
    bodyData.append('position', formExperience.position);
    bodyData.append('company_name', formExperience.company_name);
    bodyData.append('from_month', formExperience.from_month);
    bodyData.append('to_month', formExperience.to_month);
    bodyData.append('description', formExperience.description);

    dispatch(postExperienceAction(bodyData, setFormExperience));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      icon: 'warning',
      title: 'Confirmation',
      text: 'Simpan?',
      showCancelButton: true,
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        putData();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });
  };

  const postskill = () => {
    const data = JSON.stringify(skills);
    dispatch(postSkillWorker(data));
  };

  const deletePortfolio = (id) => {
    dispatch(deletePortfolioWorkerAction(id, setFormPortfolio));
  };

  const deleteExperience = (id) => {
    dispatch(deleteExperienceWorkerAction(id, setFormExperience));
  };

  const handleSubmitSkill = (event) => {
    event.preventDefault();
    Swal.fire({
      icon: 'warning',
      title: 'Confirmation',
      text: 'Simpan?',
      showCancelButton: true,
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        postskill();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });
  };

  const handleSubmitPortfolio = (event) => {
    event.preventDefault();
    Swal.fire({
      icon: 'warning',
      title: 'Confirmation',
      text: 'Simpan?',
      showCancelButton: true,
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        postDataPortfolio();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });
    setEditPortfolio(false);
  };

  const handleSubmitExperience = (event) => {
    event.preventDefault();
    Swal.fire({
      icon: 'warning',
      title: 'Confirmation',
      text: 'Simpan?',
      showCancelButton: true,
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        postDataExperience();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });
    // setEditPortfolio(false);
  };

  const handleDeleteSkill = (id_skill) => {
    dispatch(deleteSkillWorkerAction(id_skill));
  };

  const handleDeletePortfolio = (id) => {
    event.preventDefault();
    Swal.fire({
      icon: 'warning',
      title: 'Confirmation',
      text: 'Hapus?',
      showCancelButton: true,
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deletePortfolio(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });
  };

  const handleDeleteExperience = (id) => {
    event.preventDefault();
    Swal.fire({
      icon: 'warning',
      title: 'Confirmation',
      text: 'Hapus?',
      showCancelButton: true,
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteExperience(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });
  };

  const handleEditPortfolio = (id) => {
    dispatch(getDetailPortfolioWorker(id));
    setFormPortfolio({
      ...formPortfolio,
      photo: showDetailPortfolioWorker?.data?.photo,
      link_repo: showDetailPortfolioWorker?.data?.link_repo,
      type: showDetailPortfolioWorker?.data?.type,
      nama_aplikasi: showDetailPortfolioWorker?.data?.nama_aplikasi,
    });
    setEditPortfolio(true);
    console.log('ini dari edit portfolio', formPortfolio);
  };

  const handleEditExperience = (id) => {
    dispatch(getDetailExperienceWorker(id));
    setFormExperience({
      ...formExperience,
      position: showDetailExperienceWorker?.data?.position,
      company_name: showDetailExperienceWorker?.data?.company_name,
      from_month: showDetailExperienceWorker?.data?.from_month,
      to_month: showDetailExperienceWorker?.data?.to_month,
      description: showDetailExperienceWorker?.data?.description,
      photo: showDetailExperienceWorker?.data?.photo,
    });
    setEditExperience(true);
    console.log('ini dari edit portfolio', formExperience);
  };

  const updatePortfolio = (event) => {
    event.preventDefault();
    let bodyData = new FormData();
    bodyData.append('photo', photoPortfolio);
    bodyData.append('link_repo', formPortfolio.link_repo);
    bodyData.append('type', formPortfolio.type);
    bodyData.append('nama_aplikasi', formPortfolio.nama_aplikasi);

    dispatch(updatePortfolioWorkerAction(bodyData, setFormPortfolio, setEditPortfolio, showDetailPortfolioWorker?.data?.id));
  };

  const updateExperience = (event) => {
    event.preventDefault();
    let bodyData = new FormData();
    bodyData.append('photo', photoExperience);
    bodyData.append('position', formExperience.position);
    bodyData.append('company_name', formExperience.company_name);
    bodyData.append('from_month', formExperience.from_month);
    bodyData.append('to_month', formExperience.to_month);
    bodyData.append('description', formExperience.description);

    dispatch(updateExperienceWorkerAction(bodyData, setFormExperience, setEditExperience, showDetailExperienceWorker?.data?.id));
  };

  const handleBatal = () => {
    Swal.fire({
      icon: 'warning',
      title: 'Confirmation',
      text: 'Batal mengedit profile?',
      showCancelButton: true,
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setForm({
          ...form,
          photo: detailProfileWorker.data?.photo,
          nama: detailProfileWorker.data?.nama,
          job_desk: detailProfileWorker.data?.job_desk,
          domisili: detailProfileWorker.data?.domisili,
          tempat_kerja: detailProfileWorker.data?.tempat_kerja,
          deskripsi_singkat: detailProfileWorker.data?.deskripsi_singkat,
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        return false;
      }
    });
  };

  const handleDargOverImage = (event) => {
    event.preventDefault();
  };

  const handleDropImage = (event) => {
    event.preventDefault();
    setPhotoPortfolio(event.dataTransfer.files[0]);
    setFormPortfolio({ ...formPortfolio, photo: URL.createObjectURL(event.dataTransfer.files[0]) });
    setShowCardUplodImage(true);
  };

  const handleBatalUpdate = () => {
    setEditPortfolio(false);
    setFormPortfolio({
      photo: '',
      link_repo: '',
      type: '',
      nama_aplikasi: '',
    });
  };

  const handleBatalUpdateExperience = () => {
    setEditExperience(false);
    setFormExperience({
      position: '',
      company_name: '',
      from_month: '',
      to_month: '',
      description: '',
      photo: '',
    });
  };

  return (
    <>
      <form className='flex w-full justify-evenly flex-wrap' onSubmit={handleSubmit}>
        <section>
          <div className='wrapper-edit'>
            <div className='container-edit-profile px-8  bg-white w-[400px] shadow-lg rounded-md'>
              <div className='flex flex-col justify-center items-center pb-10 '>
                {form.photo && <img src={form.photo} alt='Foto Profil' className='rounded-full mt-3' />}
                <buttton className=' text-white p-2 flex items-baseline gap-3 relative overflow-hidden hover:cursor-pointer'>
                  <img src={EditPencil} alt='icon' className='hover:cursor-pointer' />
                  <p className='text-[#9EA0A5] text-[18px] mb-2 hover:cursor-pointer'>Edit</p>
                  <input type='file' className='absolute w-full h-full opacity-0 hover:cursor-pointer' onChange={onChangePhoto} />
                </buttton>
                <div className='desc mt-5 w-full pl-7'>
                  <h1 className='text-2xl mb-2'>{detailProfileWorker.data?.nama}</h1>
                  <p className='text-[#1F2A36] mb-2'>{detailProfileWorker.data?.job_desk}</p>
                  <div className='location flex gap-3'>
                    <img src={LocationIcon} alt='Location Icon' />
                    <p className='text-[#9EA0A5] text-[14px]'>{detailProfileWorker.data?.domisili}</p>
                  </div>
                  <p className='text-[#9EA0A5]'>{detailProfileWorker.data?.tempat_kerja}</p>
                </div>
              </div>
            </div>
            <div className='btn-edit mt-4 flex flex-col mb-11 gap-4'>
              <button className='w-[400px] bg-[#5E50A1]  p-3 rounded-md text-white'>Simpan</button>
              <p className=' w-[300px] md:w-[400px] lg:w-[400px] h-[50px] border-2 border-[#5E50A1] bg-white rounded-md text-center pt-3 text-[#5E50A1]' onClick={handleBatal}>
                Batal
              </p>
            </div>
          </div>
        </section>
      </form>
      <section className='pb-56 pr-[100px]'>
        <div className='form-edit-company'>
          <div className='wrapper-form bg-white w-[700px] p-10 rounded-lg h-[720px] shadow-xl'>
            <div className='hadline'>
              <h1 className='text-3xl mb-4'>Data diri</h1>
              <hr />
            </div>
            <div className='form-edit-profile mt-8'>
              <div className='mb-6'>
                <label htmlFor='nama-lengkap' className='block text-[16px] font-medium text-gray-600'>
                  Nama Lengkap
                </label>
                <input
                  type='text'
                  id='nama-lengkap'
                  name='nama-lengkap'
                  className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                  placeholder='Masukan nama lengkap'
                  value={form.nama}
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                />
              </div>
              <div className='mb-6'>
                <label htmlFor='jobdesk' className='block text-[16px] font-medium text-gray-600'>
                  Job desk
                </label>
                <input
                  type='text'
                  id='jobdesk'
                  name='jobdesk'
                  className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                  placeholder='Masukan job desk'
                  value={form.job_desk}
                  onChange={(e) => setForm({ ...form, job_desk: e.target.value })}
                />
              </div>
              <div className='mb-6'>
                <label htmlFor='Domisili' className='block text-[16px] font-medium text-gray-600'>
                  Domisili
                </label>
                <input
                  type='text'
                  id='Domisili'
                  name='Domisili'
                  className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                  placeholder='Masukan domisili'
                  value={form.domisili}
                  onChange={(e) => setForm({ ...form, domisili: e.target.value })}
                />
              </div>
              <div className='mb-6'>
                <label htmlFor='Tempat kerja' className='block text-[16px] font-medium text-gray-600'>
                  Tempat kerja
                </label>
                <input
                  type='text'
                  id='Tempat kerja'
                  name='Tempat kerja'
                  className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                  placeholder='Masukan tempat kerja'
                  value={form.tempat_kerja}
                  onChange={(e) => setForm({ ...form, tempat_kerja: e.target.value })}
                />
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
                  value={form.deskripsi_singkat}
                  onChange={(e) => setForm({ ...form, deskripsi_singkat: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='container-skils mb-10 mt-9'>
          <div className='wrpper-form-skills bg-white w-[700px] p-10 rounded-lg shadow-xl'>
            <div className='hadline'>
              <h1 className='text-3xl mb-4'>Skill</h1>
              <hr />
            </div>
            <form onSubmit={handleSubmitSkill}>
              <div className='mb-6 mt-5'>
                <label htmlFor='skill' className='block text-[16px] font-medium text-gray-600'>
                  Skills
                </label>
                <div className='wrapper-input-skill flex items-center gap-3'>
                  <input
                    type='text'
                    id='skill'
                    name='skill'
                    className='mt-1 p-4 border w-[500px] h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                    placeholder='Javascript, Html, css'
                    onChange={(e) => setSkills({ ...skills, skill: e.target.value.split(',') })}
                  />
                  <button type='sumbit' className='w-[100px] bg-[#FBB017] text-white p-2 rounded-md'>
                    Simpan
                  </button>
                </div>
                <div className='gap-3 flex flex-wrap'>
                  {showSkillByIdWorker.data?.data?.map((items) => {
                    return (
                      <div key={items.id_skill} className='mt-5 w-32 bg-[#FDD074] h-10 text-white rounded m-1 relative flex justify-center pt-1'>
                        {items.nama_skill}
                        <p className='absolute top-0 right-1 text-red-700 font-extrabold cursor-pointer' onClick={() => handleDeleteSkill(items.id_skill)}>
                          X
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className='container-pengalaman-kerja'>
          <div className='wrpper-form-skills bg-white w-[700px] p-10 rounded-lg h-auto shadow-xl'>
            <div className='hadline'>
              <h1 className='text-3xl mb-4'>Pengalaman kerja</h1>
              <hr />
            </div>
            {showExperienceWorker?.data?.map((items) => {
              return (
                <div className='card-pengalaman-kerja relative' key={items.id}>
                  <div className='wrapper-pengalaman-kerja flex gap-10 mt-12 mb-14'>
                    <img src={items.photo} alt='icon perusahaan' className='w-[100px] h-[100px]' />
                    <div className='desc-time text-[12px]'>
                      <h4 className='text-lg'>{items.position}</h4>
                      <h5 className='text-lg mb-1'>{items.company_name}</h5>
                      <div className='time flex text-[#9EA0A5] text-[14px] gap-3 mb-2'>
                        <p>
                          {items.from_month} - {items.to_month}
                        </p>
                        {/* <p>6 months</p> */}
                      </div>
                      <div className='desc-diri'>
                        <p className='text-[12px]'>{items.description}</p>
                      </div>
                    </div>
                    <div className='wrapper-btn flex absolute right-0 top-[-30px] gap-5'>
                      <button type='submit' className='w-[70px] bg-[#FBB017] text-white p-1 rounded-md' onClick={() => handleEditExperience(items.id)}>
                        Edit
                      </button>
                      <button type='submit' className='w-[40px] bg-[#DB3022] text-white rounded-md' onClick={() => handleDeleteExperience(items.id)}>
                        x
                      </button>
                    </div>
                  </div>
                  <hr></hr>
                </div>
              );
            })}
            <form onSubmit={editExperience ? updateExperience : handleSubmitExperience}>
              <div className='mb-6 mt-5'>
                <label htmlFor='posisi' className='block text-[16px] font-medium text-gray-600'>
                  Posisi
                </label>
                <input
                  type='text'
                  id='posisi'
                  name='posisi'
                  className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                  placeholder='web developer'
                  value={formExperience?.position}
                  onChange={(e) => setFormExperience({ ...formExperience, position: e.target.value })}
                />
              </div>
              <div className='mb-6 mt-5'>
                <label htmlFor='photo-perusahaan' className='block text-[16px] font-medium text-gray-600'>
                  Photo Perusahaan
                </label>
                <input type='file' id='photo-perusahaan' name='photo-perusahaan' className='mt-1 p-2 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300' onChange={onChangePhotoExperience} />
              </div>
              <div className='wrapper-nama-perusahaan flex gap-6'>
                <div className='mb-6 mt-5'>
                  <label htmlFor='skill' className='block text-[14px] font-medium text-gray-600'>
                    Nama perusahaan
                  </label>
                  <input
                    type='text'
                    id='skill'
                    name='skill'
                    value={formExperience?.company_name}
                    className='mt-1 p-4 border w-[300px] h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                    placeholder='PT Harus bisa'
                    onChange={(e) => setFormExperience({ ...formExperience, company_name: e.target.value })}
                  />
                </div>
                <div className='mb-6 mt-5'>
                  <label htmlFor='skill' className='block text-[14px] font-medium text-gray-600'>
                    Dari Bulan/tahun
                  </label>
                  <input
                    type='text'
                    id='skill'
                    name='skill'
                    className='mt-1 p-4 border w-[135px] h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                    placeholder='Januari 2018'
                    value={formExperience?.from_month}
                    onChange={(e) => setFormExperience({ ...formExperience, from_month: e.target.value })}
                  />
                </div>
                <div className='mb-6 mt-5'>
                  <label htmlFor='skill' className='block text-[14px] font-medium text-gray-600'>
                    Sampai Bulan/tahun
                  </label>
                  <input
                    type='text'
                    id='skill'
                    name='skill'
                    className='mt-1 p-4 border w-[138px] h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                    placeholder='Januari 2019'
                    value={formExperience?.to_month}
                    onChange={(e) => setFormExperience({ ...formExperience, to_month: e.target.value })}
                  />
                </div>
              </div>
              <div className='mb-6'>
                <label htmlFor='deskripsi-pengalaman' className='block text-[16px] font-medium text-gray-600'>
                  Deskripsi singkat
                </label>
                <textarea
                  type='text'
                  id='deskripsi-pengalaman'
                  name='deskripsi-pengalaman'
                  className='mt-1 p-4 border w-full h-32 rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none'
                  placeholder='Tuliskan deskripsi singkat'
                  value={formExperience?.description}
                  onChange={(e) => setFormExperience({ ...formExperience, description: e.target.value })}
                />
              </div>
              {editExperience ? (
                <div className='btn-portofolio mt-16'>
                  <hr></hr>
                  <button type='submit' className='w-full mt-6 border-2 border-[#FBB017] p-2 text-[#FBB017] rounded-md'>
                    Update Pengalaman Kerja
                  </button>
                  <p className='w-full text-center mt-6 border-2 border-[#FBB017] p-2 text-[#FBB017] rounded-md' onClick={handleBatalUpdateExperience}>
                    Batal
                  </p>
                </div>
              ) : (
                <div className='btn-portofolio mt-16'>
                  <hr></hr>
                  <button type='submit' className='w-full mt-6 border-2 border-[#FBB017] p-2 text-[#FBB017] rounded-md'>
                    Tambah Pengalaman Kerja
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className='container-portofolio mt-6'>
          <div className='wrpper-form-skills bg-white w-[700px] p-10 rounded-lg h-auto shadow-xl'>
            <div className='hadline'>
              <h1 className='text-3xl mb-4'>Portofolio</h1>
              <hr />
            </div>
            {showPortfolioWorker?.data?.map((items) => {
              return (
                <div className='card-pengalaman-kerja relative' key={items.id}>
                  <div className='wrapper-pengalaman-kerja flex gap-10 mt-12 mb-14'>
                    <img src={items.photo} alt='icon perusahaan' width={'150px'} height={'150px'} />
                    <div className='desc-time text-[12px]'>
                      <h4 className='text-lg'>{items.nama_aplikasi}</h4>
                      <a className='text-lg mb-1' href={items.link_repo}>
                        {items.link_repo}
                      </a>
                    </div>
                    <div className='wrapper-btn flex absolute right-0 top-[-30px] gap-5'>
                      <button className='w-[70px] bg-[#FBB017] text-white p-1 rounded-md' onClick={() => handleEditPortfolio(items.id)}>
                        Edit
                      </button>
                      <button className='w-[40px] bg-[#DB3022] text-white rounded-md' onClick={() => handleDeletePortfolio(items.id)}>
                        x
                      </button>
                    </div>
                  </div>
                  <hr></hr>
                </div>
              );
            })}
            <form onSubmit={editPortfolio ? updatePortfolio : handleSubmitPortfolio}>
              <div className='mb-6 mt-5'>
                <label htmlFor='nama-aplikasi' className='block text-[16px] font-medium text-gray-600'>
                  Nama aplikasi
                </label>
                <input
                  type='text'
                  id='nama-aplikasi'
                  name='nama-aplikasi'
                  value={formPortfolio?.nama_aplikasi}
                  className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                  placeholder='Masukan nama aplikasi'
                  onChange={(e) => setFormPortfolio({ ...formPortfolio, nama_aplikasi: e.target.value })}
                />
              </div>
              <div className='mb-6 mt-5'>
                <label htmlFor='link' className='block text-[16px] font-medium text-gray-600'>
                  Link repository
                </label>
                <input
                  type='text'
                  id='link'
                  name='link'
                  value={formPortfolio?.link_repo}
                  className='mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300'
                  placeholder='Masukan link repository'
                  onChange={(e) => setFormPortfolio({ ...formPortfolio, link_repo: e.target.value })}
                />
              </div>
              <div className='mb-6 mt-5'>
                <label htmlFor='type' className='block text-[16px] font-medium text-gray-600'>
                  Type portofolio
                </label>
                <div className='wrpperr-radio-btn flex items-baseline  gap-12 mt-3 '>
                  <div className='flex items-center mb-4  '>
                    <input
                      id='default-radio-1'
                      type='radio'
                      value='aplikasi mobile'
                      name='default-radio'
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      onChange={(e) => setFormPortfolio({ ...formPortfolio, type: e.target.value })}
                    />
                    <label htmlFor='default-radio-1' className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      Aplikasi mobile
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      id='default-radio-2'
                      type='radio'
                      value='aplikasi web'
                      name='default-radio'
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      onChange={(e) => setFormPortfolio({ ...formPortfolio, type: e.target.value })}
                    />
                    <label htmlFor='default-radio-2' className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      Aplikasi web
                    </label>
                  </div>
                </div>
              </div>

              <div className='container-upload-image'>
                <label htmlFor='skill' className='block text-[16px] font-medium text-gray-600'>
                  Upload gambar
                </label>
                {showCardUplodImage ? (
                  <div>
                    <img src={formPortfolio?.photo} />
                    <p
                      className='w-[100px] bg-slate-600 text-white p-1 rounded-md text-sm mt-3 text-center mx-auto'
                      onClick={(e) => {
                        e.preventDefault();
                        setShowCardUplodImage(false);
                        setFormPortfolio({ ...formPortfolio, photo: '' });
                        setPhotoPortfolio('');
                      }}
                    >
                      Batal
                    </p>
                  </div>
                ) : (
                  <div className='wrapper-upload-image flex flex-col justify-center items-center border-dashed border-2 border-[#9EA0A5] pb-8 mt-2' onDragOver={handleDargOverImage} onDrop={handleDropImage}>
                    <div className='wrapper-cloud flex flex-col justify-center items-center'>
                      <img src={Cloud} alt='cloud icon' className='w-[40%]' />
                      <p>Drag & Drop untuk Upload Gambar Aplikasi Mobile</p>
                      <p>Atau cari untuk mengupload file dari direktorimu.</p>
                    </div>
                    <input type='file' onChange={onChangePhotoPortfolio} hidden ref={inputRef} />
                    <button
                      className='w-[100px] bg-blue-600 text-white p-1 rounded-md text-sm mt-3'
                      onClick={(e) => {
                        e.preventDefault();
                        inputRef.current.click();
                      }}
                    >
                      Pilih Gambar
                    </button>
                    <div className='desc flex justify-center items-center mt-5 gap-7'>
                      <div className='example-image flex items-center gap-4'>
                        <img src={Example} alt='' />
                        <p className='w-[100px] text-[12px]'>High-Res Image PNG, JPG or GIF </p>
                      </div>
                      <div className='expand-image flex items-center gap-4'>
                        <img src={Expand} alt='' />
                        <p className='text-[12px]'>
                          Size<br></br> 1080x1920 or 600x800
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {editPortfolio ? (
                <div className='btn-portofolio mt-16'>
                  <hr></hr>
                  <button type='submit' className='w-full mt-6 border-2 border-[#FBB017] p-2 text-[#FBB017] rounded-md'>
                    Update Portfolio
                  </button>
                  <p className='w-full text-center mt-6 border-2 border-[#FBB017] p-2 text-[#FBB017] rounded-md' onClick={handleBatalUpdate}>
                    Batal
                  </p>
                </div>
              ) : (
                <div className='btn-portofolio mt-16'>
                  <hr></hr>
                  <button type='submit' className='w-full mt-6 border-2 border-[#FBB017] p-2 text-[#FBB017] rounded-md'>
                    Tambah Portfolio
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
