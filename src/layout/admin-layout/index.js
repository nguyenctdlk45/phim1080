import classNames from 'classnames/bind';

import Sidebar from './components/sidebar';
import Header from './components/header';
import styles from './admin-layout.module.scss';

const cx = classNames.bind(styles);
function AdminLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default AdminLayout;
