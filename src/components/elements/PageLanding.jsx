/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import LocationIcon from "../../assets/img/lokasi.svg";
import Paginatons from "./Paginations";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllWorker, getSkillAllWorker } from "../../redux/actions/Company";

export default function PageHome() {
  const dispatch = useDispatch();
  const showWorker = useSelector((state) => state.showWorker);
  const showSkillWorker = useSelector((state) => state.showSkillWorker);
  console.log(showWorker);

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    dispatch(getAllWorker(keyword, sort, page, limit));
    dispatch(getSkillAllWorker());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, sort, page, limit]);

  const onChange = (e) => {
    setSort(e.target.value);
  };

  const searchData = (e) => {
    e.preventDefault();
    setKeyword(query);
  };

  return (
    <>
      {/* form pencarian */}

      <section>
        <div className="container w-5/6 mx-auto bg-white">
          <form className="flex mt-10" onSubmit={searchData}>
            <input type="search" id="default-search" className="w-[300] p-4 text-sm text-gray-900 outline-none" placeholder="Search for any skill" value={query} onChange={(e) => setQuery(e.target.value)} />
            <div className="search ms-auto flex">
              <div className="relative w-full lg:max-w-sm my-2 p-2">
                <select className="w-full p-2.5 text-gray-500 bg-white rounded-md outline-none appearance-none focus:border-indigo-600 text-center" onChange={onChange}>
                  <option value="nama">Sort</option>
                  <option value="nama">Nama</option>
                  <option value="domisili">Lokasi</option>
                  <option value="freelancer">Freelancer</option>
                  <option value="fulltime">Fulltime</option>
                </select>
              </div>
              <button type="submit" className="text-white bg-violet-700 rounded p-2 my-3 me-3">
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* card profiles */}

      <section>
        {showWorker?.data?.result?.map((items) => {
          return (
            <div className="dataProfile flex w-5/6 mt-10 mx-auto bg-white p-5 mb-10" key={items.id_user}>
              <div className="user">
                <img className="mr-5 rounded-full" src={items.photo} width={"100px"} height={"100px"} />
              </div>
              <div className="bio">
                <h3>{items.nama}</h3>
                <p className="mb-3">{items.job_desk}</p>
                <div className="location flex gap-3 mb-3">
                  <img src={LocationIcon} alt="Location Icon" />
                  <p className="text-[#9EA0A5] text-[14px]">{items.domisili}</p>
                </div>
                {showSkillWorker.data.data?.map((v) => {
                  if (v.id_user_pekerja == items.id_user) {
                    return (
                      <button className="w-24 bg-[#FDD074] h-7 text-white rounded m-1" key={v.id_skill}>
                        {v.nama_skill}
                      </button>
                    );
                  }
                })}
              </div>
              <div className="nextProfile ms-auto my-auto">
                <button className="bg-violet-700 text-white rounded p-2 w-40">
                  <Link to={"/worker-profile"}>Lihat Profile</Link>
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <Paginatons currentPage={showWorker?.data?.pagination?.currentPage} totalPage={showWorker?.data?.pagination?.totalPage} totalRows={showWorker?.data?.pagination?.totalRows} setPage={setPage} />
    </>
  );
}
