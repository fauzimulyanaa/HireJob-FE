import { Link } from "react-router-dom";
import Photo from "../../assets/img/chatimg.png";
import SendMessange from "../../assets/img/send.svg"

export default function Chating() {
  return (
    <>
      <div className="container flex p-24">
        <div className="popup bg-white w-2/4 me-5">
          <h1 className="p-7 border-b-2">Messages</h1>
          <div className="listUser">
            <div className="user flex p-5 m-3 bg-yellow-500">
              <img className="rounded-full me-2 w-[50px]" src={Photo} />
              <div className="description">
              <p className="font-bold">Luis</p>
              <p className="">Fulltime Frontend Developer</p>
              </div>
            </div>
          </div>
          <div className="listUser">
            <div className="user flex p-5 m-3">
              <img className="rounded-full me-2 w-[50px]" src={Photo} />
              <div className="description">
              <p className="font-bold">Rizki</p>
              <p>Fulltime Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/** form chat */}
        <div className="field bg-white w-full">
          <div className="wrapper p-5 border-b-2 flex flex-col justify-between md:flex-row">
          <div className="detail flex">
            <img className="rounded-full me-2" src={Photo} />
            <p className="my-auto">user</p>
          </div>
          <div className="title my-auto">
            <h3>Fulltime Frontend Developer</h3>
          </div>
          <div className="detail my-auto">
            <Link to={'/detail-profile'}>
              Detail Profile
            </Link>
          </div>
          </div>
          <div className="text">
            <form>
            <textarea className="bg-white w-full outline-none ps-5 pt-5" rows="20" placeholder="Membuat fitur dan maintenance untuk dashrboard admin dan posisi remote"></textarea>
            <div className="values flex justify-center p-4">
            <input className="rounded-full border-2 p-3 me-2 w-full ps-5" type="search" placeholder="type message..." />
            <button className="bg-blue-500 rounded-full w-[40px] h-[40px] my-auto"><img className="m-auto" src={SendMessange} /></button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
