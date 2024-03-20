import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './collectionItem.module.scss';

const cx = classNames.bind(styles);
function CollectionItem({ data }) {
    return (
        <div className={cx('item')}>
            <Link to={data.path}>
                <img src={data.image} alt="img-collection" />
            </Link>
        </div>
    );
}

export default CollectionItem;
