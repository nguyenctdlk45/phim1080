import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/admin">
                    <div className={cx('headerLogo')}>
                        <img src={images.logo} alt="phim1080-logo" />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
