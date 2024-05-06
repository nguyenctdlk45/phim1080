import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './tray-item.module.scss';
import ItemDescription from '~/components/description/item-description';

const cx = classNames.bind(styles);
function TrayItem({ data }) {
    return (
        <div className={cx('item')}>
            <Link to={`/phim/${data.path}`}>
                <div className={cx('thumb')}>
                    <img src={data.image} alt="item" />
                </div>
                <ItemDescription data={data.des} />
            </Link>
        </div>
    );
}

export default TrayItem;
