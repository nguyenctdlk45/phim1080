import classNames from 'classnames/bind';
import axios from 'axios';
import { useEffect, useState } from 'react';

import styles from './container-smallhead.module.scss';
import TrayItem from './components/tray-item-smallhead';
import TrayTitle from '../tray-title';

const cx = classNames.bind(styles);
function ContainerSmallHead({ title, to, type }) {
    const [dataCN, setDataCN] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (type === 'update') {
                    const response = await axios.get(
                        'http://localhost/restful_php_api/api/movie/read_movie_update.php',
                        {
                            params: {
                                limit: 12,
                            },
                        },
                    );
                    const data = response.data;
                    setDataCN(data);
                } else if (type === 'trailer') {
                    const response = await axios.get(
                        'http://localhost/restful_php_api/api/movie/read_movie_comming.php',
                        {
                            params: {
                                limit: 7,
                            },
                        },
                    );
                    const data = response.data;
                    setDataCN(data);
                }
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
                        dataCN.map((data, index) => <TrayItem key={index} data={data} type={type} />)
                    ) : (
                        <p>loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ContainerSmallHead;
