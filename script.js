// var menuIcon = document.querySelector("#menu-icon");
// var navbar = document.querySelector(".navbar");

// var sections = document.querySelectorAll("section");
// var navLinks = document.querySelectorAll("header nav ul li a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector('header nav ul li a[href="' + id + '"]')
//           .classList.add("active");
//       });
//     }
//   });
// };

// menuIcon.onclick = () => {
//   menuIcon.classList.toggle("bx bx");
//   navbar.classList.toggle("active");
// };


document.addEventListener("DOMContentLoaded", () => {
  var menuIcon = document.querySelector("#menu-icon");
  var navbar = document.querySelector(".navbar");

  var sections = document.querySelectorAll("section");
  var navLinks = document.querySelectorAll("header nav ul li a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector('header nav ul li a[href="' + id + '"]')
            .classList.add("active");
        });
      }
    });
  };

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx bx");
    navbar.classList.toggle("active");
  };
});