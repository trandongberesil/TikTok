import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

//tippy
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

//style
import style from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";

///component
import { Link } from "react-router-dom";
import routesConfig from "~/config/routes";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { UploadIcon, MessageIcon, InboxIcon } from "~/components/Icons";
import Image from "~/components/Image";
import Search from "../Search";

const cx = classNames.bind(style);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        { code: "end", title: "Englist" },
        { code: "vie", title: "Tiếng Việt" },
        { code: "end", title: "Englist" },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const currentUser = true;

  //handle Logic
  const handleMenuChange = (menuItem) => {
    //console.log(menuItem);
    switch (menuItem.type) {
      case "language":
      default:
        return;
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/profile",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Setting",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "",
      separate: true,
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={routesConfig.home} className={cx("logo")}>
          <img src={images.logo} alt="logo" />
        </Link>
        {/* search */}
        <Search />

        {/* actions */}
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button textOnly>Upload</Button>
              <Button primary onClick={() => alert("he")}>
                Log in
              </Button>
            </>
          )}
          {/* Menu ... */}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                alt="Nguyen Van A"
                className={cx("user-avata")}
                // fallback={
                //   "https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png"
                // }
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
          {/* End Menu ... */}
        </div>
      </div>
    </div>
  );
}

export default Header;
