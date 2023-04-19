import type { FC } from "react";
import type DashBoardCardProps from "./dashBoard.props";

const DashBoardCard: FC<DashBoardCardProps> = ({ className }) => {
  return <div className={`${className}`}></div>;
};

export default DashBoardCard;
