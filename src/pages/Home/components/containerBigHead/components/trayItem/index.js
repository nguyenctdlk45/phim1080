import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './trayItem.module.scss';
import ItemDescription from '~/pages/components/itemDescription';

const cx = classNames.bind(styles);
function TrayItem({ data = [], num }) {
    return (
        <div className={cx('item')}>
            <Link to={`phim${data.path}`}>
                <div className={cx('thumb')}>
                    <img src={data.image} alt="item" />
                </div>
                <ItemDescription data={data.des} num={num} />
            </Link>
        </div>
    );
}

export default TrayItem;
