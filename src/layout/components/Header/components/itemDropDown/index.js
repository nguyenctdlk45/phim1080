import classNames from 'classnames/bind';
import React from 'react';
import Tippy from '@tippyjs/react/headless';

import styles from './itemDropDown.module.scss';
import PopperWrapper from './components/popperWrapper';
import PopperItem from './components/popperWrapper/components/popperItem';

const cx = classNames.bind(styles);
function ItemDropDown({ data, path, children }) {
    return (
        <div>
            <Tippy
                interactive
                // visible="true"
                placement="bottom-end"
                render={(attrs) => (
                    <PopperWrapper>
                        <div className={cx('menuDown')} tabIndex="-1" {...attrs}>
                            {data.map((category, index) => (
                                <PopperItem key={index} to={category.to} path={path}>
                                    {category.title}
                                </PopperItem>
                            ))}
                        </div>
                    </PopperWrapper>
                )}
            >
                <div className={cx('itemDropDown')}>{children}</div>
            </Tippy>
        </div>
    );
}

export default ItemDropDown;