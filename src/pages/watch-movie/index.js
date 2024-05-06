import classNames from 'classnames/bind';
import React from 'react';
import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import styles from './watch-movie.module.scss';
import RelatedBlock from './components/related-block';
import InfoFilm from './components/info-film';

// import { listDataDC } from '~/pages/home/data.js';

const cx = classNames.bind(styles);
function WatchMovie() {
    const [movieData, setmovieData] = useState();
    //lấy path movie
    const { movieName } = useParams();
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
    // const [newData, setNewData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost/restful_php_api/api/movie/show.php?path=${movieName}`,
                );
                const data = response.data;
                setmovieData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [movieName]);

    useEffect(() => {
        // Xác định giá trị ban đầu cho currentChapterIndex khi dữ liệu phim được cập nhật
        if (movieData && movieData.length > 0) {
            if (movieData[0].chapters) {
                const latestChapterIndex = movieData[0].des.chapters.length - 1;
                setCurrentChapterIndex(latestChapterIndex);
            } else {
                setCurrentChapterIndex(0); // Hoặc một giá trị mặc định khác nếu không có pathVideo
            }
        }
    }, [movieData, loading]);

    if (loading || !movieData) {
        return <div>Loading...</div>; // Placeholder for loading state
    }
    console.log(movieData);
    const handleChapterChange = (index) => {
        setCurrentChapterIndex(index);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wpPlayer')}>
                {movieData[0].des.chapters.length > 0 ? (
                    <ReactPlayer
                        url={
                            movieData[0].des.chapters
                                ? movieData[0].des.chapters[currentChapterIndex].pathVideo
                                : movieData[0].des.chapters[currentChapterIndex].pathVideo
                        }
                        width="640px"
                        height="360px"
                        playing={true}
                        controls={true}
                        // onProgress={handleProgress}
                        className={cx('video')}
                    />
                ) : (
                    <div className={cx('trailer')}>
                        <img src="https://phim1080.in/assets/img/countdown-bg.png" alt="trailer" />
                        <div className={cx('trailerText')}>COMMING SOON</div>
                    </div>
                )}
            </div>
            <RelatedBlock />
            <InfoFilm
                data={movieData[0]}
                onChapterChange={handleChapterChange}
                currentChapterIndex={currentChapterIndex}
            />
        </div>
    );
}

export default WatchMovie;
