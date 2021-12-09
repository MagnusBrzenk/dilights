import { useEffect, useState } from "react";
import { dashcamLatestImageUrl } from "../../utils/constants";
import styles from "./styles.module.scss";

interface IProps {
  highlightColor?: string;
  isToBeRefreshed?: boolean;
  url?: string;
  width?: string | number;
  height?: string | number;
}

const defaultProps = {
  isToBeRefreshed: false,
  width: 360,
  height: 250,
  highlightColor: undefined,
  url: dashcamLatestImageUrl,
};

export const LightsImage = (props: IProps) => {
  // --->>

  const { isToBeRefreshed, width, height, highlightColor, url } = {
    ...defaultProps,
    ...props,
  };
  const [date, setDate] = useState(new Date());

  console.log(">>>", width, height);

  useEffect(() => {
    const clear = setInterval(() => {
      setDate(new Date());
    }, 10 * 1000);
    return () => {
      clearInterval(clear);
    };
  }, []);

  const dateStr = date.toLocaleTimeString();
  console.log("Date", dateStr);

  return (
    <div
      className={styles.lightsImageContainer}
      style={{
        width,
        height,
      }}
    >
      <img
        src={`${url}?date=${date.toISOString()}}`}
        alt=""
        style={{
          border: `solid ${highlightColor ? 5 : 0}px ${highlightColor}`,
          boxSizing: "border-box",
          width: "100%",
          height: "auto",
        }}
      />
      <div
        style={{ display: isToBeRefreshed ? "block" : "none" }}
        className={styles.dateLabel}
      >
        {"Last Updated: " + dateStr}
      </div>
    </div>
  );
};
