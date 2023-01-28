import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = () => (
    <PopperWrapper>
      <AccountPreview />
    </PopperWrapper>
  );

  return (
    <div>
      <Tippy
        interactive
        placement="bottom"
        offset={[-20, 0]}
        delay={[800, 0]}
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1675008000&x-signature=wKh7qcbaDmpiMzwat6uK7V89ww4%3D"
            alt="avata"
          />
          <div className={cx("account-infor")}>
            <p className={cx("nickname")}>
              <strong>tranduydong</strong>
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </p>
            <p className={cx("name")}>Tran Duy Dong</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
