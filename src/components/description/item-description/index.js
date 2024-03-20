import classNames from 'classnames/bind';

import { FaStar } from 'react-icons/fa';
import styles from './itemDescription.module.scss';

const cx = classNames.bind(styles);
function ItemDescription({ data = [], num }) {
    console.log(data);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('quality')}>{data.quality}</div>
                {num === 0 && (
                    <div className={cx('imdb')}>
                        <div className={cx('icon')}>
                            <FaStar />
                        </div>
                        <div className={cx('point')}>{data.point}</div>
                    </div>
                )}

                <div
                    className={cx('title')}
                    style={
                        num === 0
                            ? {
                                  fontSize: '18px',
                                  margin: '5px 0',
                                  color: '#fff',

                                  fontWeight: '600',
                              }
                            : {}
                    }
                >
                    {data.title}
                </div>
                {num === 0 && (
                    <div style={{ margin: '0 0 5px 0' }} className={cx('name')}>
                        {data.name}
                    </div>
                )}
                <div className={cx('info')}>
                    <div className={cx('views')}>{data.views}</div>
                    <div className={cx('likes')}>{data.likes}</div>
                </div>
            </div>
            <div className={cx('audio')}>{data.audio}</div>
        </div>
    );
}

export default ItemDescription;
