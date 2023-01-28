import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "~/components/Button";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1675008000&x-signature=wKh7qcbaDmpiMzwat6uK7V89ww4%3D"
          alt="avata"
          className={cx("avatar")}
        />
        <Button className={cx("follow-btn")} primary>
          Follow
        </Button>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>tranduydong</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Tran Duy Dong</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.6M </strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>3.9M </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
