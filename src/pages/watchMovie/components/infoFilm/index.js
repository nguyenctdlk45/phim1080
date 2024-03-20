import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { IoPlay } from 'react-icons/io5';

import styles from './infoFilm.module.scss';
import RatingStar from './components/ratingStar';
import Tabs from '../tabs';

const cx = classNames.bind(styles);
function InfoFilm({ data, onChapterChange, currentChapterIndex }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('headerInfo')}>
                <div className={cx('infoAction')}>
                    <Link to={'#'}>
                        <div className={cx('iconAction')}>
                            <IoPlay />
                        </div>
                        Sever #1
                    </Link>

                    <Link to={'#'}>
                        <div className={cx('iconAction')}>
                            <IoPlay />
                        </div>
                        Sever #1
                    </Link>
                </div>
                <div className={cx('report')}>
                    Báo Lỗi
                    <div className={cx('iconReport')}>
                        <IoIosHelpCircleOutline />
                    </div>
                </div>
                <div className={cx('infoTitle')}>{data.des.title}</div>
                <div className={cx('views')}>{data.des.views}</div>
                {/* rating star*/}
                <RatingStar />
            </div>
            <Tabs data={data} onChapterChange={onChapterChange} currentChapterIndex={currentChapterIndex} />
            <div className={cx('contents')}></div>
        </div>
    );
}

export default InfoFilm;
