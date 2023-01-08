import React from "react";
import SideNav from "../Sidenav/TravellerSideNav";
import Navbar from "../Navbar/TravellerNavbar";
const layout = (Component) => ({ ...props }) => {
    return (
        <>
            <div>
                <Navbar/>
                {/* body */}
                <div className="flex h-full mt-20">
                    <SideNav/>
                    {/* Component  */}
                    <div className="ml-72 w-full">
                        <Component {...props} />
                    </div>
                    {/* Component end */}

                </div>

            </div>
        </>
    )
}

export default layout