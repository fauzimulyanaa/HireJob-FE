/* eslint-disable react/prop-types */
import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Paginatons = (props) => {
  const handlePageClick = (data) => {
    let currentPage = data.selected + 1;
    props.setPage(currentPage);
  };
  return (
    <div>
      <ReactPaginate
        breakLabel={<span className='mx-3'>...</span>}
        nextLabel={
          <span className='w-10 h-10 flex items-center justify-center bg-[#FFF] border border-spacing-1 border-b-slate-700 rounded-md ml-4 hover:bg-[#5E50A1] hover:text-white'>
            <BsChevronRight />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={props?.totalPage}
        previousLabel={
          <span className='w-10 h-10 flex items-center justify-center bg-[#FFF] border border-spacing-1 border-b-slate-700 rounded-md mr-4 hover:bg-[#5E50A1] hover:text-white'>
            <BsChevronLeft />
          </span>
        }
        containerClassName='flex items-center justify-center mt-8 mb-4'
        pageClassName='block border border-solid border-b-slate-500 w-10 h-10 flex items-center justify-center rounded-md hover:bg-slate-300'
        activeClassName='bg-[#5E50A1] text-white'
      />
    </div>
  );
};

export default Paginatons;
