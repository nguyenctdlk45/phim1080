import classNames from 'classnames/bind';
import axios from 'axios';
import { useEffect, useState } from 'react';

import styles from './related-block.module.scss';
import RelatedItem from './components/related-item';
// fakedata

const cx = classNames.bind(styles);
function RelatedBlock() {
    const [dataBlock, setDataBlock] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/restful_php_api/api/movie/read_movie_update.php', {
                    params: {
                        limit: 9,
                    },
                });
                const data = response.data;
                setDataBlock(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <div className={cx('relatedList')}>
            {loading === false ? (
                dataBlock.map((data, index) => <RelatedItem key={index} data={data} />)
            ) : (
                <p>loading...</p>
            )}
        </div>
    );
}

export default RelatedBlock;
