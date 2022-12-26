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

  export {
    addUser,
    authenticateUser,
  }