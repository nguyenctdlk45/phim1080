import classNames from 'classnames/bind';
import { BiCameraMovie } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import styles from './trayTitle.module.scss';

const cx = classNames.bind(styles);
function TrayTitle({ to, children }) {
    return (
        <div className={cx('trayTitle')}>
            <Link to={to}>
                <div className={cx('title')}>
                    <div className={cx('icon')}>
                        <BiCameraMovie />
                    </div>
                    {children}
                </div>
            </Link>
        </div>
    );
}

export default TrayTitle;
