import style from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const cx = classNames.bind(style);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  textOnly = false,
  rounded = false,
  small = false,
  large = false,
  children,
  disabled = false,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = "button";

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    textOnly,
    rounded,
    small,
    large,
    disabled,
  });

  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    delete props.onClick;
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return (
    <Comp className={classes} {...props}>
      {/* use <span> to handle icon inside */}
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  textOnly: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.string,
  large: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
