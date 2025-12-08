const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');




// Select all resume lists (tabs) and resume boxes (content)
const resumeLists = document.querySelectorAll(".resume-list");
const resumeBoxes = document.querySelectorAll(".resume-box");

// Select all portfolio lists (tabs) and portfolio boxes (content)
const portfolioLists = document.querySelectorAll(".portfolio-list");
const portfolioBoxes = document.querySelectorAll(".portfolio-box");


navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        // Remove active class from previous active nav
        document.querySelector('.nav-list li.active').classList.remove('active');

        // Add active class to clicked nav
        nav.classList.add('active');

        // Rotate cube
        cube.style.transform = `rotateY(${idx * -90}deg)`;

        // Remove active class from previous active section
        document.querySelector('.section.active').classList.remove('active');

        // Add active class to the corresponding section
        sections[idx].classList.add('active');

        const array = Array.from(sections);
const arrSecs = array.slice(1, -1);

arrSecs.forEach(arrSec => {
    if (arrSec.classList.contains('active')) {
        sections[4].classList.add('action-contact');
    }
});

if (sections[0].classList.contains('active')) {
    sections[4].classList.add('action-contact');
}


    });
});





// ========== RESUME TAB SWITCHING ==========
resumeLists.forEach((list, idx) => {
  list.addEventListener("click", () => {

    // Remove active from current tab
    document.querySelector(".resume-list.active")
      ?.classList.remove("active");

    // Add active to clicked tab
    list.classList.add("active");

    // Hide current resume box
    document.querySelector(".resume-box.active")
      ?.classList.remove("active");

    // Show matching resume box
    resumeBoxes[idx].classList.add("active");
  });
});


// ========== PORTFOLIO TAB SWITCHING ==========
portfolioLists.forEach((list, idx) => {
  list.addEventListener("click", () => {

    // Remove active from current portfolio tab
    document.querySelector(".portfolio-list.active")
      ?.classList.remove("active");

    // Add active to clicked tab
    list.classList.add("active");

    // Hide current portfolio box
    document.querySelector(".portfolio-box.active")
      ?.classList.remove("active");

    // Show matching portfolio box
    portfolioBoxes[idx].classList.add("active");
  });
});

setTimeout(() => {
    sections[4].classList.remove('active');
}, 1500);
