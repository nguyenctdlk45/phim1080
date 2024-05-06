import classNames from 'classnames/bind';
import React from 'react';

import ReactPaginate from 'react-paginate';

import styles from './pagination.module.scss';

const cx = classNames.bind(styles);
function Pagination({ totalPage, handlePageClick }) {
    return (
        <div className={cx('paging')}>
            <ReactPaginate
                nextLabel=">>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={totalPage}
                previousLabel="<<"
                pageClassName={cx('page-item')}
                pageLinkClassName={cx('page-link')}
                previousClassName={cx('page-item')}
                previousLinkClassName={cx('page-link')}
                nextClassName={cx('page-item')}
                nextLinkClassName={cx('page-link')}
                breakLabel="..."
                breakClassName={cx('page-item')}
                breakLinkClassName={cx('page-link')}
                containerClassName={cx('pagination')}
                activeClassName={cx('active')}
                renderOnZeroPageCount={null}
            />
        </div>
    );
}

export default Pagination;
