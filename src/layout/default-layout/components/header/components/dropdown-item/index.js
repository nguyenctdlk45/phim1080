import classNames from 'classnames/bind';
import React from 'react';
import Tippy from '@tippyjs/react/headless';

import styles from './dropdown-item.module.scss';
import PopperWrapper from './components/popper-wrapper';
import PopperItem from './components/popper-wrapper/components/popper-item';

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
                            {data.map((item, index) => (
                                <PopperItem key={item.id} to={item.path} path={path}>
                                    {item.name}
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
