const users = [{name:"admin",pass:123,email:"",rating:5}];
const userNameTxt = document.getElementById("USERNAME");
const passwordTxt = document.getElementById("PASSWORD");
const emailTxt = document.getElementById("EMAIL");
const textarea = document.getElementById("textarea");
const messages = document.getElementById("msg");
const profileName = document.getElementById("username");
const profileRating = document.getElementById("rating");
const textMessage = document.getElementById("textMessage");

var trucy = false;

window.onload = () => {
  try {
    const json = JSON.parse(localStorage.getItem("users"));
    if (json) {
      json.map((item) => {
        users.push(item);
      });
    }
    profileName.innerHTML = `USERNAME: ${json[0].name}`;
    profileRating.innerHTML = `RATING: ${json[0].rating}`;
    console.log("Sucsseed");
  } catch (error) {
    console.log(error.message);
  }
  // const localUsers=localStorage.getItem(JSON.parse(users))
};
const register = () => {
  const user = {
    name: userNameTxt.value,
    pass: passwordTxt.value,
    email: emailTxt.value,
    rating: 1,
  };
  try {
    const old = JSON.parse(localStorage.getItem("users"));
    if (old) {
      old.map((item) => {
        users.push(item);
      });
    }
    users.push(user);
    const json = JSON.stringify(users);
    localStorage.setItem("users", json);
  } catch (error) {
    console.log(error.message);
  }
  // localStorage.setItem('users',JSON.stringify(users))
  console.log("Register");
  window.location = "index.html";
};

const singin = () => {
  users.map((user, index) => {
    if (user.name == userNameTxt.value && user.pass == passwordTxt.value) {
      console.log("Welcome");
      window.location = "profile.html";
      trucy = true;
      return;
    }
  });
  if (!trucy) {
    messages.innerHTML = "User Name Or Password Not Correct";
  }
};

const singout = () => {
  window.location = "index.html";
};

const addMessage = () => {
  textarea.innerHTML += textMessage.value+"<br>";
  textMessage.value = "";
};
