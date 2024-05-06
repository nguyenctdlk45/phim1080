import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './search-item.module.scss';
const cx = classNames.bind(styles);
function SearchItem({ data }) {
    return (
        <Link to={`/phim/${data.path}`}>
            <div className={cx('resultItem')}>
                <div className={cx('thumb')}>
                    <img src={data.image} />
                </div>
                <div className={cx('info')}>
                    <div className={cx('title')}>{data.des.title}</div>
                    <div className={cx('num_chapter')}>{data.des.num_chapter} tập</div>
                    <div className={cx('views')}>{data.des.views} lược xem</div>
                </div>
            </div>
        </Link>
    );
}

export default SearchItem;
