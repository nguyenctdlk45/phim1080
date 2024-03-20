import classNames from 'classnames/bind';

import styles from './containerNomal.module.scss';
import TrayItem from './components/trayItem';
import TrayTitle from '../trayTitle';

const cx = classNames.bind(styles);
function containerNomal({ title, to, data = [], style = {}, ...restProps }) {
    return (
        <div style={style} className={cx('container')}>
            <div className={cx('tray')}>
                {title && to && <TrayTitle to={to}> {title}</TrayTitle>}
                <div className={cx('trayContent')}>
                    {data.map((item, index) => (
                        <TrayItem key={index} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default containerNomal;
