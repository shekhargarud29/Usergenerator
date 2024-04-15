var heading3 = document.querySelectorAll(".change h4")[0];
var heading1 = document.getElementsByTagName("h1")[1];
var fullName, email, dob, address, no, pass;
window.onload = dataupdate;
function dataupdate() {
  fetch("https://randomuser.me/api/")
    .then((data) => {
      if (data.status == 200) {
        var res = data.json();

        return res;
      }
    })
    .then((res) => {
      console.log("fggghg", res);
      var form = res.results[0];

      {
        var photo = form.picture.medium;
        document.getElementById("photo").src = photo;
      }

      fullName = form.name.first + form.name.last;
      userinfo();
      // callME(0);

      email = form.email;
      dob = form.dob.date;
      address =
        form?.location?.city +
        ", " +
        form?.location?.state +
        ", " +
        form?.location?.country;
      no = form.phone;
      pass = form?.login?.password;
    });
}
// function thirdparty(name1) {
//   // var data = name;
//   console.log(name);
//   userinfo(data);
// }

document
  .getElementsByClassName("element")[0]
  .addEventListener("mouseover", (e) => {
    // alert("Please fill out all the fields");
    // console.log(e.target.id);
    // console.log(e.target.childElement.id);

    if (e.target.id) {
      console.log(e.target.id);
      if (e.target.id == 0) {
        heading3.innerHTML = "Hi, My name is";
        heading1.innerHTML = fullName;
      }

      if (e.target.id == 1) {
        heading3.innerHTML = "My email address is";
        heading1.innerHTML = email;
      }
      if (e.target.id == 2) {
        heading3.innerHTML = "My birthday is";
        heading1.innerHTML = dob;
      }
      if (e.target.id == 3) {
        heading3.innerHTML = "My address is";
        heading1.innerHTML = address;
      }
      if (e.target.id == 4) {
        heading3.innerHTML = "My phone number is";
        heading1.innerHTML = no;
      }
      if (e.target.id == 5) {
        heading3.innerHTML = "My password is";
        heading1.innerHTML = pass;
      }
    }
  });

function userinfo() {
  // console.log(name1);
  heading3.innerHTML = "Hi, My name is";
  heading1.innerHTML = fullName;
}

// function emailinfo() {
//   heading3.innerHTML = "My email address is";
//   heading1.innerHTML = email;
// }

// function dobinfo() {
//   heading3.innerHTML = "My birthday is";
//   heading1.innerHTML = dob;
// }

// function addressinfo() {
//   heading3.innerHTML = "My address is";
//   heading1.innerHTML = address;
// }

// function noinfo() {
//   heading3.innerHTML = "My phone number is";
//   heading1.innerHTML = no;
// }

// function passinfo() {
//   heading3.innerHTML = "My password is";
//   heading1.innerHTML = pass;
// }
