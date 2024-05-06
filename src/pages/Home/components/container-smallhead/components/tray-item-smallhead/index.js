import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './tray-item.module.scss';

import ItemDescription2 from '~/components/description/item-description2';

const cx = classNames.bind(styles);
function TrayItem({ data, num, type }) {
    console.log(data);
    return (
        <div className={cx('item')}>
            <Link to={`phim/${data.path}`}>
                <div className={cx('thumb')}>
                    <img src={data.image} alt="item" />
                </div>
                <ItemDescription2 data={data.des} num={num} type={type} />
            </Link>
        </div>
    );
}

export default TrayItem;
