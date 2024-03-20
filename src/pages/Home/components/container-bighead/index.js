import classNames from 'classnames/bind';

import styles from './container-bighead.module.scss';
import TrayItem from './components/tray-item-bighead';
import TrayTitle from '../tray-title';

const cx = classNames.bind(styles);
function ContainerBigHead({ title, to, data = [] }) {
    return (
        <div className={cx('container')}>
            <div className={cx('tray')}>
                <TrayTitle to={to}> {title}</TrayTitle>
                <div className={cx('trayContent')}>
                    {data.map((data, index) => (
                        <TrayItem key={index} data={data} num={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContainerBigHead;
