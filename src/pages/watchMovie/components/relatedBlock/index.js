import classNames from 'classnames/bind';

import styles from './relatedBlock.module.scss';
import RelatedItem from './components/relatedItem';
// fakedata

const cx = classNames.bind(styles);
function RelatedBlock({ data }) {
    return (
        <div className={cx('relatedList')}>
            {data.map((data, index) => (
                <RelatedItem key={index} data={data} />
            ))}
        </div>
    );
}

export default RelatedBlock;
