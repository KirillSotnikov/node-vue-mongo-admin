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
import ImagesPage from "@/pages/ImagesPage.vue";
import AddImage from "@/pages/AddImage.vue";

const getTokenSC = (itemName) => {
  return window.sessionStorage.getItem(itemName)
}

const serverAPI = `http://${window.location.hostname}:3000`

const validateToken = (next) => {
  let sessionToken = getTokenSC('token')
  let data = {
    token: sessionToken
  }
  fetch(`${serverAPI}/get-user-token`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    }
  }).then(res => {
    return res.json()
  }).then(body => {
    if(body.success) {
      next()
    } else {
      next('/login')
    }
  })
}

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/request",
    children: [
      {
        path: "request",
        name: "Request",
        component: Request,
        beforeEnter: (to, form, next) => {
          validateToken(next)
        }
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
        component: Team,
        beforeEnter: (to, form, next) => {
          validateToken(next)
        }
      },
      {
        path: "createTeam",
        name: "Create Team",
        component: CreateTeam,
        beforeEnter: (to, form, next) => {
          validateToken(next)
        }
      },
      {
        path: "editTeam/:id",
        name: "Edit Team",
        component: EditTeam,
        beforeEnter: (to, form, next) => {
          validateToken(next)
        },
        props: true
      },
      {
        path: "settings",
        name: "Settings",
        component: Settings,
        beforeEnter: (to, form, next) => {
          validateToken(next)
        }
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
        beforeEnter: (to, form, next) => {
          validateToken(next)
        }
      },
      {
        path: "images",
        name: "Images",
        component: ImagesPage,
        beforeEnter: (to, form, next) => {
          validateToken(next)
        }
      },
      {
        path: "add-image",
        name: "Add image",
        component: AddImage,
        beforeEnter: (to, form, next) => {
          validateToken(next)
        }
      },
    ]
  }
];

export default routes;
