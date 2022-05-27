import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCloudUpload,
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
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { UploadIcon } from "~/components/Icons";
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
      to: "@viet",
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
        <div className={cx("logo")}>
          <img src={images.logo} alt="logo" />
        </div>
        {/* search */}
        <Search />
        {/* end search */}
        {/* actions */}
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                  <FontAwesomeIcon icon={faCloudUpload} />
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
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/56657c2f3c236d5c29f943c156ae6be0.jpeg?x-expires=1653703200&x-signature=weYTeMregNGX1s1GxaX1HloyjrE%3D"
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
        </div>
      </div>
    </div>
  );
}

export default Header;
