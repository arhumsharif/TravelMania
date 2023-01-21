import axios from 'axios';

var BASEURL = 'http://localhost:5000/';

// Calling api to fetch data regarding location-based-filtering

const getPlacesData = async (type, sw, ne) => {
  const apiURL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
  try {
    // request
    const {
      data: { data },
    } = await axios.get(apiURL, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

const addUser = (email, password, usertype) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: email,
        Password: password,
        UserType: usertype,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

//   Login a user

const authenticateUser = (email, password) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'authenticate/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Email: email,
        Password: password,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

// add portfolio for tour guide

const addTourGuidePorfolio = (
  token,
  name,
  age,
  gender,
  cnic,
  phone,
  city,
  country,
  about
) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/tourguide/portfolio/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        Name: name,
        Age: age,
        Gender: gender,
        Cnic: cnic,
        Phone: phone,
        City: city,
        Country: country,
        About: about,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

// Tour Organization

const addTourOrgPorfolio = (token, name, country, contact, phone, about) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/tourorg/portfolio/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        Name: name,
        Country: country,
        Contact: contact,
        Phone: phone,
        About: about,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

// Traveler

const addTravelerPorfolio = (
  token,
  name,
  phone,
  cnic,
  language,
  dob,
  gender,
  city,
  country,
  about
) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/traveler/portfolio/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        Name: name,
        Phone: phone,
        Cnic: cnic,
        Language: language,
        Dob: dob,
        Gender: gender,
        City: city,
        Country: country,
        About: about,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const addPackage = (token, title, desc, place, hotel, price, capacity) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/package/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        Title: title,
        Desc: desc,
        Place: place,
        Hotel: hotel,
        Price: price,
        Capacity: capacity,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const viewTourGuidePorfolio = (token) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get/tourguide/portfolio/view', {
      method: 'GET',
      headers: {
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

// Tour Org

const viewTourOrgPorfolio = (token) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get/tourorg/portfolio/view', {
      method: 'GET',
      headers: {
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

// Traveler

const viewTravelerPorfolio = (token) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get/traveler/portfolio/view', {
      method: 'GET',
      headers: {
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

// View Package
const viewPackages = (token) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get/package/view', {
      method: 'GET',
      headers: {
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

export {
  addUser,
  authenticateUser,
  addTourGuidePorfolio,
  addTourOrgPorfolio,
  addTravelerPorfolio,
  viewTourGuidePorfolio,
  viewTourOrgPorfolio,
  viewTravelerPorfolio,
  viewPackages,
  addPackage,
  getPlacesData,
};
