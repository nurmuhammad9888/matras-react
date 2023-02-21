import ReactPaginate from 'react-paginate';
import { MdNavigateBefore } from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';
export const Pagination = ( {countPage, setPages, page} ) => {
    return (
        <div>
            <ReactPaginate
            className='pagination position-absolute bottom-0 start-50 gap-2'
            pageCount={countPage}
            forcePage={page === 1 ? 0 : page -1}
            previousLabel={<MdNavigateBefore color="#01384d" size={22}/>}
            nextLabel={<MdNavigateNext color="#01384d" size={22}/>}
            previousLinkClassName="btn border shadow-lg"
            nextLinkClassName="btn border shadow-lg"
            pageClassName="page-item"
            pageLinkClassName="page-link rounded"
            activeClassName="active"
            onPageChange={(data) => setPages(data.selected + 1)}
            /> 
        </div>
        )
    }
    