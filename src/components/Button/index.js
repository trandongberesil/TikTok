import style from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

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
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
