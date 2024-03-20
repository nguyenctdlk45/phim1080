import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './menuItem.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ children, path }) {
    return (
        <Link to={path}>
            <div className={cx('item')}>{children}</div>
        </Link>
    );
}

export default MenuItem;
