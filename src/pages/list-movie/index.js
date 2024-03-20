import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import React from 'react';
import { useState, useEffect } from 'react';

import TrayTitle from '../home/components/tray-title';
import styles from './list-movie.module.scss';
import { dataParam } from '~/components/data-param';
import ContainerNomal from '../home/components/container-nomal';
// fake data
import { listDatabM } from './../home/data.js';

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
