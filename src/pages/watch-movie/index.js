import classNames from 'classnames/bind';
import React from 'react';
import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';

import styles from './watch-movie.module.scss';
import RelatedBlock from './components/related-block';
import InfoFilm from './components/info-film';

// import { dataParam } from '~/components/dataParam';
// fake data
import { listDataDC } from '~/pages/home/data.js';

const cx = classNames.bind(styles);
function WatchMovie() {
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

    useEffect(() => {
        if (listDataDC[1].chapters) {
            // Xác định chỉ mục của tập phim mới nhất
            const latestChapterIndex = listDataDC[1].des.chapters.length - 1;
            setCurrentChapterIndex(latestChapterIndex);
        } else {
            setCurrentChapterIndex(listDataDC[1].des.pathVideo);
        }
    }, []);

    const handleChapterChange = (index) => {
        setCurrentChapterIndex(index);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wpPlayer')}>
                <ReactPlayer
                    url={
                        listDataDC[1].chapters
                            ? listDataDC[1].des.chapters[currentChapterIndex].pathVideo
                            : listDataDC[1].des.pathVideo
                    }
                    width="640px"
                    height="360px"
                    playing={true}
                    controls={true}
                    // onProgress={handleProgress}
                    className={cx('video')}
                />
            </div>
            <RelatedBlock data={listDataDC} />
            <InfoFilm
                data={listDataDC[1]}
                onChapterChange={handleChapterChange}
                currentChapterIndex={currentChapterIndex}
            />
        </div>
    );
}

export default WatchMovie;
