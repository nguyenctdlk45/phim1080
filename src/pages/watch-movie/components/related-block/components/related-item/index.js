import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './related-item.module.scss';

const cx = classNames.bind(styles);
function RelatedItem({ data }) {
    return (
        <div className={cx('item')}>
            <div className={cx('image')}>
                <Link to={`/phim/${data.path}`}>
                    <img src={data.image} alt={data.name} />
                </Link>
            </div>
            <div className={cx('info')}>
                <Link to={`/phim/${data.path}`}>{data.des.title}</Link>
                <div className={cx('likes')}>{data.des.likes}</div>
                <div className={cx('views')}>{data.des.views} views</div>
            </div>
        </div>
    );
}

export default RelatedItem;
