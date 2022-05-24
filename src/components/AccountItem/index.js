import style from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avata")}
        src="https://p58-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/3307ffeaa5801f6896223b5d4a153a3d~c5_300x300.webp?x-expires=1653544800&x-signature=JjrvS6pO3ia7P5EYsKTRkbMR%2B%2Fw%3D"
        alt="avata"
      />
      <div className={cx("infor")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>Nguyen Van A</span>
      </div>
    </div>
  );
}

export default AccountItem;
