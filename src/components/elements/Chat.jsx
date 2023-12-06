import { Link } from 'react-router-dom';
// import Photo from '../../assets/img/chatimg.png';
import SendMessange from '../../assets/img/send.svg';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { getListChatCompanyAction, getDetailChatAction, postChatAction, getListChatWorkerAction } from '../../redux/actions/Chat';

export default function Chating() {
  const dispatch = useDispatch();
  const listChatCompany = useSelector((state) => state.listChatCompany);
  const listChatWorker = useSelector((state) => state.listChatWorker);
  const detailChat = useSelector((state) => state.detailChat);
  const AuthLoginCompany = useSelector((state) => state.AuthLoginCompany);
  const AuthLoginWorker = useSelector((state) => state.AuthLoginWorker);
  const [formChat, setFormChat] = useState({
    id_perekrut: AuthLoginCompany?.data?.id_user || detailChat?.data?.data[0]?.id_perekrut,
    id_pekerja: AuthLoginWorker?.data?.id_user || detailChat?.data?.data[0]?.id_pekerja,
    posisi: detailChat?.data?.data[0]?.posisi,
    message_detail: '',
  });

  const [chatIsActive, setChatIsActive] = useState(false);

  const userLogin = localStorage?.getItem('status');

  useEffect(() => {
    userLogin == 'company' ? dispatch(getListChatCompanyAction()) : dispatch(getListChatWorkerAction());
  }, [dispatch, userLogin]);

  const HandleDetailChat = (id, posisi, items) => {
    let data = {
      id_pekerja: AuthLoginWorker?.data?.id_user || id,
      id_perekrut: AuthLoginCompany?.data?.id_user || id,
      posisi,
    };

    setChatIsActive(items);
    setFormChat({
      ...formChat,
      id_pekerja: AuthLoginWorker?.data?.id_user || id,
      id_perekrut: AuthLoginCompany?.data?.id_user || id,
      posisi: posisi,
    });

    dispatch(getDetailChatAction(data));
  };

  const handleSubmitChat = (event) => {
    event.preventDefault();
    dispatch(postChatAction(formChat, setFormChat));
  };

  return (
    <>
      <div className='container flex p-24'>
        <div className='popup bg-white w-2/4 me-5'>
          <h1 className='p-7 border-b-2'>Messages</h1>
          {userLogin == 'company'
            ? listChatCompany?.data?.map((items) => {
                return (
                  <div className='listUser' key={items.id_pekerja} onClick={() => HandleDetailChat(items.id_pekerja, items.posisi, items)}>
                    <div className={`user flex p-5 m-3 ${chatIsActive == items && 'bg-yellow-500'}`}>
                      <img className='rounded-full me-2 w-[50px]' src={items.photo} />
                      <div className='description'>
                        <p className='font-bold'>{items.nama}</p>
                        <p className=''>{items.posisi}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            : listChatWorker?.data?.map((items) => {
                return (
                  <div className='listUser' key={items.id_perekrut} onClick={() => HandleDetailChat(items.id_perekrut, items.posisi, items)}>
                    <div className={`user flex p-5 m-3 ${chatIsActive == items && 'bg-yellow-500'}`}>
                      <img className='rounded-full me-2 w-[50px]' src={items.photo} />
                      <div className='description'>
                        <p className='font-bold'>{items.nama_perusahaan}</p>
                        <p className=''>{items.posisi}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>

        {/** form chat */}
        <div className='field bg-white w-full'>
          {detailChat?.data?.data?.length > 0 ? (
            <div>
              <div className='wrapper p-5 border-b-2 flex flex-col justify-between md:flex-row'>
                <div className='detail flex'>
                  <img className='rounded-full me-2' width={'50px'} height={'50px'} src={userLogin == 'company' ? detailChat?.data?.data[0]?.photo_pekerja : detailChat?.data?.data[0]?.photo_perusahaan} />
                  <p className='my-auto'>{userLogin == 'company' ? detailChat?.data?.data[0]?.nama_pekerja : detailChat?.data?.data[0]?.nama_perusahaan}</p>
                </div>
                <div className='title my-auto'>
                  <h3>{detailChat?.data?.data[0]?.posisi}</h3>
                </div>
                <div className='detail my-auto'>
                  <Link to={userLogin == 'company' ? `/profile/${detailChat?.data?.data[0]?.id_pekerja}` : `/edit-worker`}>Detail Profile</Link>
                </div>
              </div>
              <div className='text'>
                {detailChat?.data?.data?.map((items) => {
                  return (
                    <div key={items.id_message} className={items.id_pengirim == (AuthLoginCompany?.data?.id_user || AuthLoginWorker?.data?.id_user) ? 'mb-5 mt-5 fle justify-end px-3' : 'mb-5 mt-5 flex px-3'}>
                      {items.id_pengirim == (AuthLoginCompany?.data?.id_user || AuthLoginWorker?.data?.id_user) ? (
                        <div className='flex justify-end'>
                          <p className='outline-none min-h-max max-w-sm p-3 bg-slate-300 rounded-lg mx-3'>{items.message_detail}</p>
                          <div>
                            <img src={items.id_pengirim == items.id_pekerja ? items.photo_pekerja : items.photo_perusahaan} className='object-cover max-h-12 max-w-[48px] rounded-full' height={'50px'} width={'50px'} />
                          </div>
                        </div>
                      ) : (
                        <div className='flex'>
                          <div>
                            <img src={items.id_pengirim == items.id_pekerja ? items.photo_pekerja : items.photo_perusahaan} className='object-cover max-h-12 max-w-[48px] rounded-full' height={'50px'} width={'50px'} />
                          </div>
                          <p className='outline-none min-h-max w-3/4 p-3 bg-slate-300 rounded-lg mx-3'>{items.message_detail}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
                <form onSubmit={handleSubmitChat}>
                  <div className='values flex justify-center p-4 mt-[200px]'>
                    <input value={formChat.message_detail} className='rounded-full border-2 p-3 me-2 w-full ps-5' type='search' placeholder='type message...' onChange={(e) => setFormChat({ ...formChat, message_detail: e.target.value })} />
                    <button className='bg-blue-500 rounded-full w-[40px] h-[40px] my-auto'>
                      <img className='m-auto' src={SendMessange} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
