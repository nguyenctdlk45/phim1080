import classNames from 'classnames/bind';

import styles from './container-smallhead.module.scss';
import TrayItem from './components/tray-item-smallhead';
import TrayTitle from '../tray-title';

const cx = classNames.bind(styles);
function ContainerSmallHead({ title, to, data = [], type }) {
    return (
        <div className={cx('container')}>
            <div className={cx('tray')}>
                <TrayTitle to={to}> {title}</TrayTitle>
                <div className={cx('trayContent')}>
                    {data.map((data, index) => (
                        <TrayItem key={index} data={data} type={type} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContainerSmallHead;
