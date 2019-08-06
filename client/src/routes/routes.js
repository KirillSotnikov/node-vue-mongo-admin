import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
// import TableList from "@/pages/TableList.vue";
// import Typography from "@/pages/Typography.vue";
// import Icons from "@/pages/Icons.vue";
// import Maps from "@/pages/Maps.vue";
// import Notifications from "@/pages/Notifications.vue";
// import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Request from "@/pages/Request.vue";
import Team from "@/pages/Team.vue";
import CreateTeam from "@/pages/CreateTeam.vue";
import EditTeam from "@/pages/EditTeam.vue";
import Settings from "@/pages/Settings.vue";
import Login from "@/pages/Login.vue";
import Registration from "@/pages/Registration.vue";
import UserProfile from "@/pages/UserProfile.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/request",
    children: [
      {
        path: "request",
        name: "Request",
        component: Request
      },
      {
        path: "login",
        name: "Login",
        component: Login,
        meta: { loginPage: true }
      },
      {
        path: "registration",
        name: "Registration",
        component: Registration,
        meta: { loginPage: true }
      },
      {
        path: "team",
        name: "Team",
        component: Team
      },
      {
        path: "createTeam",
        name: "Create Team",
        component: CreateTeam
      },
      {
        path: "editTeam/:id",
        name: "Edit Team",
        component: EditTeam,
        props: true
      },
      {
        path: "settings",
        name: "Settings",
        component: Settings
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      }
    ]
  }
];

export default routes;
