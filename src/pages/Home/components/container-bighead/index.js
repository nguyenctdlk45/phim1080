import classNames from 'classnames/bind';
import axios from 'axios';
import { useEffect, useState } from 'react';

import styles from './container-bighead.module.scss';
import TrayItem from './components/tray-item-bighead';
import TrayTitle from '../tray-title';

const cx = classNames.bind(styles);
function ContainerBigHead({ title, to }) {
    const [dataDC, setDataDC] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/restful_php_api/api/movie/read_index_new.php', {
                    params: {
                        limit: 9,
                    },
                });
                const data = response.data;
                setDataDC(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <div className={cx('container')}>
            <div className={cx('tray')}>
                <TrayTitle to={to}> {title}</TrayTitle>
                <div className={cx('trayContent')}>
                    {loading === false ? (
                        dataDC.map((data, index) => <TrayItem key={index} data={data} num={index} id={data.id_movie} />)
                    ) : (
                        <p>loading....</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ContainerBigHead;
