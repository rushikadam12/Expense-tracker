import { MdLogout } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdDashboardCustomize } from "react-icons/md";
import { IoIosAnalytics } from "react-icons/io";
import { LuList } from "react-icons/lu";
 const list=[
    {
        name:'Home',
        icons:IoMdHome,
        path:"/Home",
    },
    {
        name:'Dashboard',
        icons:MdDashboardCustomize,
        path:"/dashboard"
    },
    {
        name:'Analytics',
        icons:IoIosAnalytics,
        path:"Home/analytics",
    },
    
]
export default list