import RsvpView from "@/components/RsvpView";
import Landing from "@/pages/Landing";
import PageNotFound from "@/pages/PageNotFound";
import { useRoutes } from "react-router-dom";

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Landing />,
    },  
    {
      path: "/rsvp-view-list",
      element: <RsvpView /> 
    },
    { path: "*", element: <PageNotFound />}
  ],
};

export default function ThemeRoutes() {
  return useRoutes([MainRoutes]);
}
