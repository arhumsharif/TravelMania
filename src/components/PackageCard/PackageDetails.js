import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import bgImage from '../../assets/bgImagePackage.jpg';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import LandingPageFooter from '../Footer/LandingPageFooter';
import {
  viewSpecificTourGuidePortfolio,
  viewSpecificTPackage,
} from '../../api';
import PackageDisplayHelper from './PackageDisplayHelper';

function PackageDetails() {
  const params = useParams();
  document.body.style.zoom = '90%';
  const cookies = new Cookies();
  let token = cookies.get('token');
  let navigate = useNavigate();
  const id = params.id;

  useEffect(() => {
    getPackages();
  }, []);

  const getPackages = async () => {
    let response = await viewSpecificTPackage(id);
    if (response == 404) {
      navigate('/');
    }
    console.log(response.data);
    setPackages(response.data);
  };

  const [packages, setPackages] = useState();
  return (
    <>
      <LandingPageNavbar transparent />
      {packages?.map((obj, index) => (
        <PackageDisplayHelper obj={obj} />
      ))}
      <LandingPageFooter />
    </>
  );
}

export default PackageDetails;
