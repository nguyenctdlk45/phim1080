import classNames from 'classnames/bind';

import styles from './popper-wrapper.module.scss';

const cx = classNames.bind(styles);

function PopperWrapper({ children, className }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    return <div className={classes}>{children}</div>;
}

export default PopperWrapper;
