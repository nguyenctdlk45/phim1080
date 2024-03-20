import classNames from 'classnames/bind';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

import styles from './ratingStar.module.scss';

const cx = classNames.bind(styles);
function RatingStar() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div className={cx('container')}>
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                        />
                        <FaStar
                            className={cx('star')}
                            fontSize={'20px'}
                            color={currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
            <div className={cx('point')}>{`(${rating}.0đ)`}</div>
        </div>
    );
}

export default RatingStar;
