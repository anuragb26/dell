import React from 'react'
import ReactPaginate from 'react-paginate';
import {TOTAL_COUNT,PER_PAGE} from '../../constants'
import './Pagination.scss'


const paginate = (props) => {
  return (
  <ReactPaginate
    previousLabel={'Previous'}
    nextLabel={'Next'}
    breakLabel={'...'}
    breakClassName={'break-me'}
    pageCount={TOTAL_COUNT/PER_PAGE}
    marginPagesDisplayed={0}
    pageRangeDisplayed={5}
    onPageChange={props.handlePageClick}
    containerClassName={'pagination'}
    subContainerClassName={'pages pagination'}
    activeClassName={'active'}
    />
    )
}

export default paginate