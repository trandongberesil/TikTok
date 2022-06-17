import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import classNames from "classnames/bind";
import style from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

import PropTypes from "prop-types";

const cx = classNames.bind(style);

const defaultFn = () => {};

function Menu({
  hideOnClick = false,
  children,
  items = [],
  onChange = defaultFn, ///handleMenuChange in Header
}) {
  const [history, setHistory] = useState([{ data: items }]); ///store childArray
  const current = history[history.length - 1]; ///get last element

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]); ///push
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const renderResult = (attrs) => (
    <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
      <PopperWrapper className={cx("menu-popper")}>
        {history.length > 1 && (
          // Header of menu
          <Header
            title={current.title}
            ///onBack return parentElement
            onBack={handleBack}
          />
        )}
        <div className={cx("menu-body")}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  //reset to first page
  const handleReset = () => {
    if (history.length > 1) {
      setHistory((prev) => prev.slice(0, prev.length - 1));
    }
  };

  return (
    <Tippy
      //visible
      delay={[0, 600]}
      offset={[12, 8]} //w - h
      placement="bottom-end"
      hideOnClick={hideOnClick}
      interactive="true"
      render={renderResult}
      onHide={handleReset}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
