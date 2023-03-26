import React from "react";
// import { Pagination } from 'react-bootstrap';
import ReactPaginate from "react-paginate";

const PaginateCom = ({ getPage, pageCount }) => {
  const handlePageClick = (Data) => {
    // console.log(data.selected + 1)
    getPage(Data.selected + 1);
  };
  return (
    <div className="Pagination">
      <ReactPaginate
        breakLabel="......."
        nextLabel="Next"
        onPageChange={handlePageClick}
        marginPagesDisplayed={3}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="previous ml-2"
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default PaginateCom;
