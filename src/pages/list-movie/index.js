import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import TrayTitle from '../home/components/tray-title';
import styles from './list-movie.module.scss';
// import { dataParam } from '~/components/data-param';
// import ContainerNomal from '../home/components/container-nomal';
import ContainerListMovie from '~/components/container-list-movie';
// fake data
// import { listDatabM } from './../home/data.js';
import Pagination from '~/components/pagination';

const cx = classNames.bind(styles);
function SeriesMovie() {
    const { listName } = useParams();

    const [dataBM, setDataBM] = useState();
    const [loading, setLoading] = useState(true);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/restful_php_api/api/movie/read_typeMV_page.php', {
                    params: {
                        type: listName === 'phim-le' ? 'le' : 'bo',
                        page: currentPage,
                    },
                });
                setDataBM(response.data.movies);
                setTotalPage(response.data.total_pages);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [listName, currentPage]);
    const handlePageClick = (event) => {
        const selectedPage = +event.selected + 1;
        if (selectedPage > 0 && selectedPage <= totalPage) {
            setCurrentPage(selectedPage);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <TrayTitle>danh sách {listName === 'phim-le' ? 'phim lẻ' : 'phim bộ'}</TrayTitle>
            <ContainerListMovie style={{ paddingTop: '0' }} data={dataBM} loading={loading} />
            <Pagination totalPage={totalPage} handlePageClick={handlePageClick} />
        </div>
    );
}

export default SeriesMovie;
