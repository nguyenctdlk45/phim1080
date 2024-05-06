import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './menu-item.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ icon, to, title }) {
    return (
        <div className={cx('container')}>
            <NavLink
                to={to}
                className={({ isActive, isPending }) => (isPending ? cx('pending') : isActive ? cx('active') : '')}
            >
                <div className={cx('icon')}>{icon}</div>
                <div className={cx('title')}>{title}</div>
            </NavLink>
        </div>
    );
}

export default MenuItem;
