import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './footer.module.scss';
import CollectionItem from './components/collectionItem';

const cx = classNames.bind(styles);
function Footer() {
    const dataCollection = [
        {
            image: 'https://s198.imacdn.com/ff/2021/03/08/a0d904ad483598b6_bcaf2bb0f6a9f95a_55737161520379431.jpg',
            path: '/',
        },
        {
            image: 'https://s198.imacdn.com/ff/2019/10/26/0c2f054dbbcc519e_f5ea1f644016067e_36993157209593121.jpg',
            path: '/',
        },
        {
            image: 'https://s198.imacdn.com/ff/2019/10/26/aa4cf62a8a41a8d0_a1bf98941af6ad02_40433157209595111.jpg',
            path: '/',
        },
        {
            image: 'https://s198.imacdn.com/ff/2019/10/26/f0de54c9fa04599a_31bb313de0a7d8e2_46641157209606931.jpg',
            path: '/',
        },
        {
            image: 'https://s198.imacdn.com/ff/2019/10/26/f0de54c9fa04599a_31bb313de0a7d8e2_46641157209606931.jpg',
            path: '/',
        },
        {
            image: 'https://s198.imacdn.com/ff/2019/10/26/59cd8f092f6dd6fc_3aaacac701101d2a_49148157209609171.jpg',
            path: '/',
        },
        {
            image: 'https://s198.imacdn.com/ff/2020/12/21/910d5cd341d55be1_e1c9d72b3465ab77_9058160852063491.jpg',
            path: '/',
        },
        {
            image: 'https://s198.imacdn.com/ff/2020/04/25/24875423cf93c11c_7d846b3e82c05490_29652158779284741.jpg',
            path: '/',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('trayTitle')}>bộ sưu tập</div>
            <div className={cx('container')}>
                <div className={cx('tray')}>
                    <div className={cx('trayCollection')}>
                        {dataCollection.map((data, index) => (
                            <CollectionItem key={index} data={data} />
                        ))}
                    </div>
                </div>
                <div className={cx('tray')}>
                    <p>Phim Hay | Phim hd | Phim Online Chất Lượng Cao luôn được cập nhật sớm nhất Việt Nam.</p>
                    <p>Contact: contact.phim1080@gmail.com</p>
                    <p>
                        <Link style={{ color: '#0285b5' }} to="https://motphimtvz.com">
                            motphimtvz
                        </Link>{' '}
                        |{' '}
                        <Link style={{ color: '#0285b5' }} to="https://animeviesub.com">
                            animeviesub
                        </Link>{' '}
                        |{' '}
                        <Link style={{ color: '#0285b5' }} to="https://phimbatdiet.com">
                            phimbatdiet
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
