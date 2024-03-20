import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './popperItem.module.scss';

const cx = classNames.bind(styles);
function PopperItem({ path, to, children }) {
    return (
        <Link to={`${path}/${to}`} className={cx('popperItem')}>
            {children}
        </Link>
    );
}

export default PopperItem;
