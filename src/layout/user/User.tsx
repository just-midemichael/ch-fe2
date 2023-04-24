import Sidenav from "@/components/user/sidenav/Sidenav";
import type { PropsWithChildren } from "react";
import React from "react";
import Main from "../main/Main";

const UserDashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Main>
      <div className="flex gap-6">
        <div className="w-[315px]">
          <Sidenav />
        </div>
        <div className="min-h-[80vh] w-full">{children}</div>
      </div>
    </Main>
  );
};

export default UserDashboardLayout;
