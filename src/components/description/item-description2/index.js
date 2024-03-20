import classNames from 'classnames/bind';
import { IoPlayCircleOutline } from 'react-icons/io5';

import styles from './itemDescription2.module.scss';

const cx = classNames.bind(styles);
function ItemDescription({ data, type }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {!type && <div className={cx('likes')}>{data.likes}</div>}
                <div className={cx('title')}>{data.title}</div>
            </div>
            {type === 'trailer' && (
                <div className={cx('soild')}>
                    <IoPlayCircleOutline />
                </div>
            )}
        </div>
    );
}

export default ItemDescription;
