import classNames from 'classnames/bind';

import styles from './containerSmallHead.module.scss';
import TrayItem from './components/trayItem';
import TrayTitle from '../trayTitle';

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
