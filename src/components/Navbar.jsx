import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, LogOutIcon, MenuIcon, ShipWheelIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import useLogout from "../hooks/useLogout";
import Avatar from "./Avatar";
import { useQuery } from "@tanstack/react-query";
import { getFriendRequests } from "../lib/api";

const Navbar = ({ showSidebar }) => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");

  const { logoutMutation } = useLogout();

  // Fetch friend requests for notification count
  const { data: friendRequests } = useQuery({
    queryKey: ["friendRequests"],
    queryFn: getFriendRequests,
  });

  const incomingReqs = friendRequests?.incomingReqs || [];
  const acceptedReqs = friendRequests?.acceptedReqs || [];
  const notificationCount = incomingReqs.length + acceptedReqs.length;

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full gap-4">
          <div className="flex items-center gap-2">
            {/* MOBILE DRAWER TOGGLE */}
            {showSidebar && (
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost btn-circle lg:hidden drawer-button"
              >
                <MenuIcon className="h-6 w-6" />
              </label>
            )}

            {/* LOGO - ALWAYS ON MOBILE IF SIDEBAR ENABLED, OR IN CHAT PAGE */}
            {(isChatPage || (showSidebar && !isChatPage)) && (
              <div className={!isChatPage ? "lg:hidden" : ""}>
                <Link to="/" className="flex items-center gap-2">
                  <ShipWheelIcon className="size-8 text-primary" />
                  <span className="text-xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary  tracking-tight hidden xs:block">
                    Dardasha
                  </span>
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link to={"/notifications"}>
              <div className="indicator">
                {notificationCount > 0 && (
                  <span className="indicator-item badge badge-primary badge-sm mt-[10px] mr-[10px]">
                    {notificationCount > 9 ? "9+" : notificationCount}
                  </span>
                )}
                <button className="btn btn-ghost btn-circle">
                  <BellIcon className="h-6 w-6 text-base-content opacity-70" />
                </button>
              </div>
            </Link>

            <ThemeSelector />

            <Avatar src={authUser?.profilePic} alt="User Avatar" size="w-9" />

            {/* Logout button */}
            <button
              className="btn btn-ghost btn-circle"
              onClick={logoutMutation}
            >
              <LogOutIcon className="h-6 w-6 text-base-content opacity-70" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
