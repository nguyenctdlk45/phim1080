import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './trayItem.module.scss';

const cx = classNames.bind(styles);
function TrayItem({ className, data, number }) {
    // thêm className từ ngoài vào
    const classes = cx('ratingItem', {
        [className]: className,
    });

    return (
        <div className={classes}>
            <Link to={`phim${data.path}`}>
                <div className={cx('ratingItemThumb')}>
                    <img src={data.image} alt=" item"></img>
                </div>
                <div className={cx('ratingItemTop')}>{number}</div>
            </Link>
        </div>
    );
}

export default TrayItem;
