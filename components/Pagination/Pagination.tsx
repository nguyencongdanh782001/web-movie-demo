import React, { memo } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import ReactPaginate from 'react-paginate';

interface propsType {
  totalPage: number;
  activePage: number;
  handleChange: (number: any) => void;
}

const Pagination = ({ totalPage, activePage, handleChange }: propsType) => {
  return (
    <div className='w-full'>
      <ReactPaginate
        previousLabel={<MdOutlineKeyboardArrowLeft />}
        nextLabel={<MdOutlineKeyboardArrowRight />}
        pageCount={totalPage ? totalPage : 1}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        breakLabel='...'
        breakClassName='mx-1'
        breakLinkClassName='text-lg tracking-wider'
        onPageChange={handleChange}
        forcePage={activePage - 1 ? activePage - 1 : 0}
        containerClassName='flex justify-center items-center w-full'
        pageClassName='rounded-[10px] flex justify-center items-center justify-center mx-[4px] text-gray-500'
        pageLinkClassName='text-xl font-semibold text-center px-[10px] py-[3.5px] rounded-[10px] bg-gray-custom-1 hover:bg-gray-300 hover:text-gray-900 transition-all duration-150 ease-in-out'
        activeClassName='text-black'
        activeLinkClassName='text-black'
        previousClassName='pt-0'
        previousLinkClassName='text-gray-900 text-center text-xl'
        nextClassName='pt-0'
        nextLinkClassName='text-gray-900 text-center text-xl'
      />
    </div>
  );
};

export default memo(Pagination);
