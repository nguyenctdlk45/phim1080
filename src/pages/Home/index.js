import classNames from 'classnames/bind';

import styles from './home.module.scss';
import ContainerBigHead from './components/container-bighead';
import ContainerSmallHead from './components/container-smallhead';
import ContainerNomal from './components/container-nomal';
import ContainerRatings from './components/container-ratings';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <ContainerBigHead to={'/'} title={'phim đề cử'} />
                <ContainerSmallHead to={'/danh-sach/phim-moi'} title={'phim mới cập nhật'} type={'update'} />
                <ContainerNomal to={'/danh-sach/phim-bo'} title={'phim bộ mới'} type={'bo'} />
                <ContainerNomal to={'/danh-sach/phim-le'} title={'phim lẻ mới'} type={'le'} />
                {/* <ContainerNomal to={'/danh-sach/phim-hoat-hinh'} title={'phim hoạt hình'} data={listDataHH} /> */}
                <ContainerRatings to={'/danh-sach/phim-hoat-hinh'} title={'bảng xếp hạng'} />
                <ContainerSmallHead to={'/danh-sach/phim-sap-chieu'} title={'phim sắp chiếu'} type={'trailer'} />
            </div>
        </div>
    );
}

export default Home;
