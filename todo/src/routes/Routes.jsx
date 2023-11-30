import App from "../App";
import Home from "../components/Home";
import Users from "../components/Users";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
];
