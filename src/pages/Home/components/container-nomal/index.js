import classNames from 'classnames/bind';
import axios from 'axios';
import { useEffect, useState } from 'react';

import styles from './container-nomal.module.scss';
import TrayItem from './components/tray-item-nomal';
import TrayTitle from '../tray-title';

const cx = classNames.bind(styles);
function ContainerNomal({ title, to, style = {}, type, ...restProps }) {
    const [dataBM, setDataBM] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/restful_php_api/api/movie/read_index.php', {
                    params: {
                        limit: 5,
                        type: type,
                    },
                });
                const data = response.data;
                setDataBM(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <div style={style} className={cx('container')}>
            <div className={cx('tray')}>
                {title && to && <TrayTitle to={to}> {title}</TrayTitle>}
                <div className={cx('trayContent')}>
                    {loading === false ? (
                        dataBM.map((item, index) => <TrayItem key={index} data={item} />)
                    ) : (
                        <p>loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ContainerNomal;
