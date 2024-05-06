import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './header.module.scss';
import images from '~/assets/images';
import MenuItem from './components/menu-item';
import ItemDropDown from './components/dropdown-item';
import Search from './components/search';

const cx = classNames.bind(styles);

function Header() {
    const [dataNation, setDataNation] = useState();
    const [dataCategory, setDataCategory] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData2 = async () => {
            try {
                const response = await axios.get('http://localhost/restful_php_api/api/movie/read_catecory.php');
                setDataCategory(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData2();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/restful_php_api/api/movie/read_nation.php');
                setDataNation(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
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
                        {!loading && dataCategory && (
                            <ItemDropDown path="/the-loai" data={dataCategory}>
                                THỂ LOẠI
                            </ItemDropDown>
                        )}
                        {!loading && dataNation && (
                            <ItemDropDown path="/quoc-gia" data={dataNation}>
                                QUỐC GIA
                            </ItemDropDown>
                        )}
                    </div>
                    {/* search */}
                    <Search />
                </div>
            </div>
        </div>
    );
}

export default Header;
