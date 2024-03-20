import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import React from 'react';
import { useState, useEffect } from 'react';

import TrayTitle from '../Home/components/trayTitle';
import styles from './ListMovie.module.scss';
import { dataParam } from '~/components/dataParam';
import ContainerNomal from '../Home/components/containerNomal';
// fake data
import { listDatabM } from './../Home/data.js';

const cx = classNames.bind(styles);
function SeriesMovie() {
    const { listName } = useParams();
    const [titleName, setTileName] = useState();
    useEffect(() => {
        const matchedparam = dataParam.find((param) => param.to === listName);
        // dùng dataParam.find(()=>) để tìm
        if (matchedparam) {
            setTileName(matchedparam.title);
            // nếu có thì set lại giá trị
        }
    }, [listName]);

    return (
        <div className={cx('wrapper')}>
            <TrayTitle>{`danh sách ${titleName}`}</TrayTitle>
            <ContainerNomal style={{ paddingTop: '0' }} data={listDatabM} />
        </div>
    );
}

export default SeriesMovie;
