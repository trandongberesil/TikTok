import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

//tippy
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import classNames from "classnames/bind";

import { useEffect, useRef, useState } from "react";
// import axios from "axios";
import * as searchServices from "~/services/searchService";

import { SearchIcon } from "~/components/Icons";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem/AccountItem";
import { useDebounce } from "~/hooks";

import style from "./Search.module.scss";
const cx = classNames.bind(style);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([1, 2, 3]);
  //   }, 1000);
  // });

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  ///useDebounce nhan searchValue sau 500ms moi return lai debounced
  const debounced = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debounced);
      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  const handleChange = (e) => {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  return (
    ///Tippy Using a wrapper <div> or <span> tag around the reference element solves
    //this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        //appendTo={() => document.body}
        visible={searchResult.length > 0 && showResult}
        onClickOutside={handleHideResult}
        interactive="true"
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-title")}>Account</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx("search")}>
          <input
            type="text"
            placeholder="Search accounts and videos"
            onChange={(e) => handleChange(e)}
            value={searchValue}
            ref={inputRef}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx("clear-btn")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}
          <button
            className={cx("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
