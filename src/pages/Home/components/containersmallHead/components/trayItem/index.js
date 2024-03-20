import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './trayItem.module.scss';

import ItemDescription2 from '~/pages/components/itemDescription2';

const cx = classNames.bind(styles);
function TrayItem({ data, num, type }) {
    return (
        <div className={cx('item')}>
            <Link to={`phim${data.path}`}>
                <div className={cx('thumb')}>
                    <img src={data.image} alt="item" />
                </div>
                <ItemDescription2 data={data.des} num={num} type={type} />
            </Link>
        </div>
    );
}

export default TrayItem;
