import React from "react";
import SideNav from "../Sidenav/TourOrganizationSideNav";
import Navbar from "../Navbar/TourOrganizationNavbar";
const layout = (Component) => ({ ...props }) => {
    return (
        <>
            <div>
                <Navbar/>
                {/* body */}
                <div className="flex h-full mt-20">
                    <SideNav/>
                    {/* Component  */}
                    <div className="ml-72">
                        <Component {...props} />
                    </div>
                    {/* Component end */}

                </div>

            </div>
        </>
    )
}

export default layout