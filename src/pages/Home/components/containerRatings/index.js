import classNames from 'classnames/bind';

import styles from './containerRatings.module.scss';
import TrayItem from './components/trayItem';
import TrayTitle from '../trayTitle';

const cx = classNames.bind(styles);
function ContainerRatings({ title, to, data }) {
    return (
        <div className={cx('container')}>
            <div className={cx('tray')}>
                <TrayTitle to={to}> {title}</TrayTitle>
                <div className={cx('trayContent')}>
                    {data.map((data, index) => (
                        <TrayItem key={index} number={`${index + 1}`} data={data} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContainerRatings;
