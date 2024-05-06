import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import TrayTitle from '../home/components/tray-title';
import styles from './list-movie-category.module.scss';
// import { dataParam } from '~/components/data-param';
import ContainerListMovie from '~/components/container-list-movie';
// fake data
// import { listDatabM } from '../home/data.js';
import Pagination from '~/components/pagination';

const cx = classNames.bind(styles);
function SeriesMovieCategory() {
    const { catecoryName } = useParams();
    const [dataBM, setDataBM] = useState();
    const [loading, setLoading] = useState(true);
    const [dataCategory, setDataCategory] = useState();
    const [idData, setIDData] = useState(null);
    const [titleName, setTitleName] = useState(true);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryData = await axios.get('http://localhost/restful_php_api/api/movie/read_catecory.php');
                setDataCategory(categoryData.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (dataCategory) {
            const matchedparam = dataCategory.find((param) => param.path === catecoryName);
            if (matchedparam) {
                setIDData(matchedparam.id);
                setTitleName(matchedparam.name);
            }
        }
    }, [catecoryName, dataCategory]); // Cập nhật idData khi catecoryName hoặc dataCategory thay đổi

    useEffect(() => {
        // Kiểm tra xem idData có giá trị hay không trước khi fetch dữ liệu movie
        if (idData !== null) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(
                        'http://localhost/restful_php_api/api/movie/read_catecoryMV_page.php',
                        {
                            params: {
                                category: idData,
                                page: currentPage,
                            },
                        },
                    );
                    setDataBM(response.data.movies);
                    setTotalPage(response.data.total_pages);
                } catch (error) {
                    console.error('Error fetching data:', error);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }
    }, [idData, currentPage]); // Fetch dữ liệu movie khi idData thay đổi
    const handlePageClick = (event) => {
        const selectedPage = +event.selected + 1;
        if (selectedPage > 0 && selectedPage <= totalPage) {
            setCurrentPage(selectedPage);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <TrayTitle>{`danh sách ${titleName}`}</TrayTitle>
            <ContainerListMovie style={{ paddingTop: '0' }} data={dataBM} loading={loading} />
            {totalPage > 1 && dataBM.length > 0 && (
                <Pagination totalPage={totalPage} handlePageClick={handlePageClick} />
            )}
        </div>
    );
}

export default SeriesMovieCategory;
