import { forwardRef, useState } from "react";
import images from "~/assets/images";
import style from "./Image.module.scss";
import classNames from "classnames";
const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallback: customFallback = images.noImage, ///đổi tên tránh trùng tên fallback
      ...props
    },
    ref
  ) => {
    const [fallback, setFallback] = useState([]);

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={classNames(style.wrapper, className)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

export default Image;
