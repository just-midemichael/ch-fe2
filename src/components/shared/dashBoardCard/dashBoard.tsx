import type { FC } from "react";
import Home from "@/assets/icons/home.svg";
import Search from "@/assets/icons/search.svg";
import type DashBoardCardProps from "./dashBoard.props";
import { P } from "../headings/Headings";
import styles from "./dashBoard.module.scss";

const DashBoardCard: FC<DashBoardCardProps> = ({
  className,
  title,
  record,
  home,
  search
}) => {
  return (
    <div className={`${className} ${styles.container}`}>
      <div className="text-left">
        <P>{title}</P>
        <P className="mt-3 text-[36px] font-black"> {record} </P>
      </div>

      <div className={`${styles.icon} ${styles.coloredSvg}`}>
        {home && <Home className={``} />}

        {search && <Search className="text-[#FE8501]" />}
      </div>
    </div>
  );
};

export default DashBoardCard;
