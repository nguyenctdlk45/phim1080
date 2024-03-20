import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { IoSearchSharp } from 'react-icons/io5';

import styles from './header.module.scss';
import images from '~/assets/images';
import MenuItem from './components/menu-item';
import ItemDropDown from './components/dropdown-item';

const cx = classNames.bind(styles);

//data dropDownItem
const dataCategory = [
    { title: 'Chiến Tranh', to: 'chien-tranh' },
    { title: 'Viễn Tưởng', to: 'vien-tuong' },
    { title: 'Hài Hước', to: 'hai-huoc' },
    { title: 'Hành Động', to: 'hanh-dong' },
    { title: 'Phiêu Lưu', to: 'phieu-luu' },
    { title: 'Hình Sự', to: 'hinh-su' },
    { title: 'Bí ẩn', to: 'bi-an' },
    { title: 'Tình Cảm', to: 'tinh-cam' },
    { title: 'Kinh Dị', to: 'kinh-di' },
    { title: 'Tài Liệu', to: 'tai-lieu' },
    { title: 'Tâm Lý', to: 'tam-ly' },
    { title: 'Võ Thuật', to: 'vo-thuat' },
    { title: 'Học Đường', to: 'hoc-duong' },
    { title: 'Gia Đình', to: 'gia-dinh' },
    { title: 'Cổ Trang', to: 'co-trang' },
    { title: 'Khoa Học', to: 'khoa-hoc' },
    { title: 'Âm Nhạc', to: 'am-nhac' },
    { title: 'Thể Thao', to: 'the-thao' },
    { title: 'Kinh Điển', to: 'kinh-dien' },
    { title: 'Thần Thoại', to: 'than-thoai' },
    { title: 'Chính Kịch', to: 'chinh-kich' },
];
const dataNation = [
    { title: 'Quốc Gia Khác', to: 'quoc-gia-khac' },
    { title: 'Âu Mỹ', to: 'au-my' },
    { title: 'Hồng Kông', to: 'hong-kong' },
    { title: 'Nhật Bản', to: 'nhat-ban' },
    { title: 'Thái Lan', to: 'thai-lan' },
    { title: 'Trung Quốc', to: 'trung-quoc' },
    { title: 'Hàn Quốc', to: 'han-quoc' },
];

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <Link to="/">
                    <div className={cx('headerLogo')}>
                        <img src={images.logo} alt="phim1080-logo" />
                    </div>
                </Link>
                {/* menu */}
                <div className={cx('menuHeader')}>
                    <div className={cx('listMenuItem')}>
                        <MenuItem path="/" tytle="">
                            TRANG CHỦ
                        </MenuItem>
                        <MenuItem path="/danh-sach/phim-le" tytle="">
                            PHIM LẺ
                        </MenuItem>
                        <MenuItem path="/danh-sach/phim-bo" tytle="">
                            PHIM BỘ
                        </MenuItem>
                        <ItemDropDown path="/the-loai" data={dataCategory}>
                            THỂ LOẠI
                        </ItemDropDown>
                        <ItemDropDown path="/quoc-gia" data={dataNation}>
                            QUỐC GIA
                        </ItemDropDown>
                    </div>
                    {/* search */}
                    <div className={cx('search')}>
                        <input type="text" placeholder="Tìm kiếm phim..." />
                        <div className={cx('search-btn')}>
                            <IoSearchSharp />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
