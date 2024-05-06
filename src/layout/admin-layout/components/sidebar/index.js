import classNames from 'classnames/bind';
import { PiFilmStripLight } from 'react-icons/pi';
import { PiFilmSlate } from 'react-icons/pi';
import { BiCategory } from 'react-icons/bi';
import { IoEarth } from 'react-icons/io5';

import styles from './sidebar.module.scss';
import MenuItem from './component/menu-item';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <MenuItem icon={<PiFilmStripLight />} title={'Quản lý phim'} to={'/movieAdmin'} />
            <MenuItem icon={<PiFilmSlate />} title={'Quản lý tập phim'} to={'/chaptersAdmin'} />
            <MenuItem icon={<BiCategory />} title={'Quản lý thể loại'} to={'/categoryAdmin'} />
            <MenuItem icon={<IoEarth />} title={'Quảng lý quốc gia'} to={'/nationAdmin'} />
        </div>
    );
}

export default Sidebar;
