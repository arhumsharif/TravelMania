var BASEURL = "http://localhost:5000/";

const addUser = (
    email,
    password,
    usertype
  ) => {
    let promiseOne = new Promise((resolve, reject) => {
      let myData = fetch(
        BASEURL + "post/user/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Email: email,
            Password: password,
            UserType: usertype
          }),
        }
      ).then((data) => {
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
      let myData = fetch(BASEURL + "authenticate/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Email: email,
          Password: password,
        }),
      }).then((data) => {
        if (data.status == 200) {
          return data.json();
        }
        else
        {
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
      let myData = fetch(
        BASEURL + "post/tourguide/portfolio/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          Authorization: "Barrier " + token,
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept, Authorization",
          "Access-Control-Allow-Methods": "PUT, POST, DELETE, GET",
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
        }
      ).then((data) => {
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


  const viewTourGuidePorfolio = (
    token
  ) => {
      let promiseOne = new Promise((resolve, reject) => {
        let myData = fetch(BASEURL + "get/tourguide/portfolio/view", {
          method: "GET",
          headers: {
            Authorization: "Barrier " + token,
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            "Access-Control-Allow-Methods": "PUT, POST, DELETE, GET",
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
    viewTourGuidePorfolio,
  }