import Account from "@/components/user/settings/accountInfo/Account";
import Billing from "@/components/user/settings/billingInfo/Billing";
import Password from "@/components/user/settings/passwordInfo/Password";

import UserDashboardLayout from "@/layout/user/User";
import React from "react";

function index() {
  return (
    <UserDashboardLayout>
      <Account />
      <Billing />
      <Password />
    </UserDashboardLayout>
  );
}

export default index;
