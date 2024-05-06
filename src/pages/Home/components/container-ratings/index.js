import classNames from 'classnames/bind';
import axios from 'axios';
import { useEffect, useState } from 'react';

import styles from './container-ratings.module.scss';
import TrayItem from './components/tray-item-ratings';
import TrayTitle from '../tray-title';

const cx = classNames.bind(styles);
function ContainerRatings({ title, to }) {
    const [dataRating, setDataRating] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/restful_php_api/api/movie/read_movie_rating.php', {
                    params: {
                        limit: 5,
                    },
                });
                const data = response.data;
                setDataRating(data);
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
                        dataRating.map((data, index) => <TrayItem key={index} number={`${index + 1}`} data={data} />)
                    ) : (
                        <p>loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ContainerRatings;
