import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import TrayTitle from '../home/components/tray-title';
import styles from './search-movie.module.scss';
import ContainerNomal from '../home/components/container-nomal';

const cx = classNames.bind(styles);
function SeachMovie() {
    const { search } = useParams();
    const [resultSearch, setresultSearch] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost/restful_php_api/api/movie/search_movie.php?keyword=${search}`,
                );
                const data = response.data;
                setresultSearch(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [search]);

    return (
        <div className={cx('wrapper')}>
            <TrayTitle>{`Kết quả tìm kiếm: ${search}`}</TrayTitle>
            <ContainerNomal style={{ paddingTop: '0' }} data={resultSearch} />
        </div>
    );
}

export default SeachMovie;
