const shareIcon1 = document.querySelector(".share-icon1");
const shareIcon2 = document.querySelector(".share-icon2");
const authorSection = document.querySelector(".author");
const shareSectionMobile = document.querySelector(".share-container-mobile");
const shareSectionDesktop = document.querySelector(".share-container-desktop");

// Perform different actions based on screen size
// shareIcon1.addEventListener("click", () => {
//     Desktop code
//     if (window.matchMedia("(min-width: 768px)").matches) {
//         shareSectionDesktop.classList.toggle("hidden");
//     Mobile code
//     } else {
//         authorSection.classList.add("hidden");
//         shareSectionMobile.classList.remove("hidden");
//         shareIcon2.addEventListener("click", () => {
//             authorSection.classList.remove("hidden");
//             shareSectionMobile.classList.add("hidden");
//         });
//     }
// });

const updateLayout = function () {
    if (screen.width >= 768) {
        shareSectionDesktop.classList.toggle("hidden");
    } else {
        authorSection.classList.add("hidden");
        shareSectionMobile.classList.remove("hidden");
        shareIcon2.addEventListener("click", () => {
            authorSection.classList.remove("hidden");
            shareSectionMobile.classList.add("hidden");
        });
    };
};

shareIcon1.addEventListener("click", updateLayout);
// window.addEventListener("resize", updateLayout);
