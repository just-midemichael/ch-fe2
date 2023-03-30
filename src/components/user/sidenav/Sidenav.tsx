import Link from "next/link";
import React from "react";
import DashboardIcon from "@/assets/icons/dashboard.svg";
import HistoryIcon from "@/assets/icons/history.svg";
import SettingsIcon from "@/assets/icons/settings.svg";
import LogoutIcon from "@/assets/icons/logout.svg";
import { useRouter } from "next/router";
import styles from "./Sidenav.module.scss";

const Sidenav = () => {
  const router = useRouter();
  const navs = [
    {
      icon: DashboardIcon,
      title: "Dashboard",
      route: "/user"
    },
    {
      icon: HistoryIcon,
      title: "History",
      route: "/user/history"
    },
    {
      icon: SettingsIcon,
      title: "Settings",
      route: "/user/settings"
    },
    {
      icon: LogoutIcon,
      title: "Logout",
      route: "/logout"
    }
  ];

  return (
    <div className={styles.base}>
      <ul>
        {navs.map((item) => (
          <li key={item.route}>
            <Link
              href={item.route}
              className={`${styles.menuItem} ${
                router.pathname === item.route ? styles.active : ""
              }`}
            >
              <item.icon /> <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidenav;
