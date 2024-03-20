import classNames from 'classnames/bind';
import { FaRegCirclePlay } from 'react-icons/fa6';

import styles from './tabs.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Tabs({ data, onChapterChange, currentChapterIndex }) {
    const datainfo = data.des;
    const [currentTab, setCurrenTab] = useState('0');
    const handleChapterClick = (index) => {
        onChapterChange(index); // Gọi hàm từ thành phần cha
    };
    console.log(currentChapterIndex);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('tabs')}>
                <button
                    id="0"
                    onClick={(e) => {
                        setCurrenTab(e.target.id);
                    }}
                    className={cx('tabItem', { active: currentTab === '0' })}
                >
                    Thông tin
                </button>
                {datainfo.chapters && (
                    <button
                        id="1"
                        onClick={(e) => {
                            setCurrenTab(e.target.id);
                        }}
                        className={cx('tabItem', { active: currentTab === '1' })}
                    >
                        Danh Sách Tập
                    </button>
                )}
            </div>
            <div className={cx('contents')}>
                {currentTab === '0' ? (
                    <div className={cx('content', 'content1')}>
                        <div className={cx('filmInfoGenre')}>{`Quốc gia: ${datainfo.nation}`}</div>
                        <div className={cx('filmInfoGenre')}>{`chất lượng: ${datainfo.quality}`}</div>
                        <div className={cx('filmInfoGenre')}>{`Âm thanh : ${datainfo.audio}`}</div>
                        <div className={cx('filmInfoGenre')}>{`Cập nhật: ${datainfo.likes}`}</div>
                        <div className={cx('filmInfoGenre')}>{`Tên khác: ${datainfo.name}`}</div>
                        <div className={cx('filmInfoGenre')}>
                            {' '}
                            {datainfo.category ? `Thể loại: ${datainfo.category}` : 'Thể loại: '}
                        </div>
                        <div className={cx('filmInfoGenre')}>
                            {' '}
                            {datainfo.director ? `Đạo diễn: ${datainfo.director}` : 'Đạo diễn: '}
                        </div>
                        <div className={cx('filmInfoGenre')}>{`Diễn viên: ${datainfo.char}`}</div>
                        <div className={cx('filmInfoDes')}>{`${datainfo.filmDescription}`}</div>
                    </div>
                ) : (
                    <div className={cx('content2')}>
                        {data.des.chapters &&
                            data.des.chapters.map((chapter, index) => (
                                <div
                                    className={cx('chapterName')}
                                    key={index}
                                    onClick={() => handleChapterClick(index)}
                                    style={
                                        index === currentChapterIndex
                                            ? {
                                                  background: 'rgba(2, 133, 181, .2)',
                                                  color: '#37a9ce',
                                              }
                                            : {}
                                    }
                                >
                                    {chapter.chapterName}
                                    <FaRegCirclePlay />
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;
