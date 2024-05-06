import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';
import { IoSearchSharp } from 'react-icons/io5';
import Tippy from '@tippyjs/react/headless';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import axios from 'axios';

import styles from './search.module.scss';
import PopperWrapper from '../dropdown-item/components/popper-wrapper';
import useDebounce from '~/components/debounce';
import SearchItem from './components/search-item';
const cx = classNames.bind(styles);
function Search() {
    const [showResult, setShowResult] = useState(true);
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef();

    const debounced = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debounced) {
            setSearchResult([]);
            return;
        } else {
            const fetchData = async () => {
                try {
                    const response = await axios.get(
                        `http://localhost/restful_php_api/api/movie/search_movie.php?keyword=${debounced}`,
                    );
                    const data = response.data;
                    setSearchResult(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData();
        }
    }, [debounced]);
    // if (debounced) {
    //     console.log(searchResult);
    // }

    // const handleClear = () => {
    //     setSearchValue('');
    //     setSearchResult();
    //     inputRef.current.focus();
    // };

    return (
        <Tippy
            interactive
            visible={searchResult.length > 0 && showResult}
            placement="bottom-end"
            render={(attrs) => (
                <PopperWrapper className={cx('wrapperSearch')}>
                    <div className={cx('menuDown')} tabIndex="-1" {...attrs}>
                        {searchResult.map((result, index) => (
                            <SearchItem key={index} data={result} />
                        ))}
                    </div>
                </PopperWrapper>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search"
                    spellCheck={false}
                    onChange={(e) => {
                        e.target.value = e.target.value.trimStart();
                        setSearchValue(e.target.value);
                    }}
                />
                <div className={cx('search-btn')}>
                    <IoSearchSharp />
                </div>
            </div>
        </Tippy>
    );
}

export default Search;
