import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

//tippy
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import classNames from "classnames/bind";

import { useEffect, useRef, useState } from "react";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";

import style from "./Search.module.scss";
const cx = classNames.bind(style);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);

  const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 1000);
  });

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  return (
    <div>
      <HeadlessTippy
        visible={searchResult.length > 0 && showResult}
        onClickOutside={handleHideResult}
        interactive="true"
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-title")}>Account</h4>
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx("search")}>
          <input
            type="text"
            placeholder="Search accounts and videos"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            ref={inputRef}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && (
            <button className={cx("clear-btn")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
