import classNames from 'classnames/bind';
// import { useState, useEffect } from 'react';

import styles from './container-list-movie.module.scss';
import TrayItem from './components/tray-item-nomal';

const cx = classNames.bind(styles);
function ContainerListMovie({ style = {}, type, data = [], loading, ...restProps }) {
    // const [dataMV, setDataMV] = useState();
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     setDataMV(data);
    //     setLoading(false);
    // }, [data]);
    return (
        <div style={style} className={cx('container')}>
            <div className={cx('tray')}>
                <div className={cx('trayContent')}>
                    {!loading ? (
                        data.length > 0 ? (
                            data.map((item, index) => <TrayItem key={index} data={item} />)
                        ) : (
                            <p>Không tìm thấy</p>
                        )
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ContainerListMovie;
