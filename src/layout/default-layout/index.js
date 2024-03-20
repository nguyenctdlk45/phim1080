// import classNames from 'classnames/bind';
// import styles from './DefaultLayout.module.scss';
import Header from './components/header';
import Footer from './components/footer';
// const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <div>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
