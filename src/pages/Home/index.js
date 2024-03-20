import classNames from 'classnames/bind';
import axios from 'axios';

import styles from './home.module.scss';
import ContainerBigHead from './components/container-bighead';
import ContainerSmallHead from './components/container-smallhead';
import ContainerNomal from './components/container-nomal';
import ContainerRatings from './components/container-ratings';
//data fake
import { listDatabM, listDataHH, listDataDC, listDataCN, listDataXH, listDataCS } from './data';
// import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    // const [dataDC, setDataDC] = useState();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('https://6533e725e1b6f4c590465fd6.mockapi.io/api/v1/Movies');
    //             setDataDC(response.data);
    //             // console.log(response.data); // Hiển thị dữ liệu mới
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);
    //
    // const chaptersString = JSON.stringify(listDataDC[0].des.chapters);
    // console.log(chaptersString);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <ContainerBigHead to={'/'} title={'phim đề cử'} data={listDataDC} />
                <ContainerSmallHead to={'/danh-sach/phim-moi'} title={'phim mới cập nhật'} data={listDataCN} />
                <ContainerNomal to={'/danh-sach/phim-bo'} title={'phim bộ mới'} data={listDatabM} />
                <ContainerNomal to={'/danh-sach/phim-le'} title={'phim lẻ mới'} data={listDatabM} />
                <ContainerNomal to={'/danh-sach/phim-hoat-hinh'} title={'phim hoạt hình'} data={listDataHH} />
                <ContainerRatings to={'/danh-sach/phim-hoat-hinh'} title={'bảng xếp hạng'} data={listDataXH} />
                <ContainerSmallHead
                    to={'/danh-sach/phim-sap-chieu'}
                    title={'phim sắp chiếu'}
                    data={listDataCS}
                    type={'trailer'}
                />
            </div>
        </div>
    );
}

export default Home;
