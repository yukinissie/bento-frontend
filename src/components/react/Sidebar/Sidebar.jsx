import {
    BellIcon,
    FillBellIcon,
    FillHomeIcon,
    FillUserCircleIcon,
    FillUserGroupIcon,
    HomeIcon,
    UserCircleIcon,
    UserGroupIcon,
} from "../icons/icons";

export const Sidebar = ({ path }) => {
    return (
        <div className="flex flex-col w-16 content-between h-[90vh] self-stretch gap-[100px] font-semibold text-xs text-center">
            <a href="/home">
                {path.startsWith("/home") ? <FillHomeIcon /> : <HomeIcon />}
                home
            </a>
            <a href="/group">
                {path.startsWith("/group") ? (
                    <FillUserGroupIcon />
                ) : (
                    <UserGroupIcon />
                )}
                group
            </a>
            <a href="/notification">
                {path.startsWith("/notification") ? (
                    <FillBellIcon />
                ) : (
                    <BellIcon />
                )}
                notification
            </a>
            <a href="/profile">
                {path.startsWith("/profile") ? (
                    <FillUserCircleIcon />
                ) : (
                    <UserCircleIcon />
                )}
                profile
            </a>
        </div>
    );
};
