import React from 'react';
import SideNav from '../Sidenav/TravellerSideNav';
import Navbar from '../Navbar/TravellerNavbar';
const layout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <div>
          <Navbar />
          {/* body */}
          {/* Component  */}
          <div className='w-full'>
            <Component {...props} />
            {/* Component end */}
          </div>
        </div>
      </>
    );
  };

export default layout;
