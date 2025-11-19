
const cards = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("show", entry.isIntersecting);
            if (entry.isIntersecting) observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.3,
    }
);
cards.forEach((card) => {
    observer.observe(card);
});
// !------------------------------------------------------------|
const cards2 = document.querySelectorAll(".hidden2");
const observer2 = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("show2", entry.isIntersecting);
            if (entry.isIntersecting) observer2.unobserve(entry.target);
        });
    },
    {
        threshold: 0.3,
    }
);
cards2.forEach((card) => {
    observer2.observe(card);
});

// !------------------------------------------------------------|
const cards3 = document.querySelectorAll(".hidden3");
const observer3 = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("show3", entry.isIntersecting);
            if (entry.isIntersecting) observer3.unobserve(entry.target);
        });
    },
    {
        threshold: 0.3,
    }
);
cards3.forEach((card) => {
    observer3.observe(card);
});

// !------------------------------------------------------------|
const cards4 = document.querySelectorAll(".hidden4");
const observer4 = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("show4", entry.isIntersecting);
            if (entry.isIntersecting) observer4.unobserve(entry.target);
        });
    },
    {
        threshold: 0.3,
    }
);
cards4.forEach((card) => {
    observer4.observe(card);
});
// !------------------------------------------------------------|
// !------------------------------------------------------------|

const header = document.querySelector("header")
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
header.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    header.classList.toggle("sticked", !entries[0].isIntersecting);
}, { rootMargin: '0px 0px 0px 0px' });

navObserver.observe(scrollWatcher)

// !------------------------------------------------------------|
// !------------------------------------------------------------|

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".logo_header h1").onmouseover = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
};

document.querySelector(".logo_header").onclick = (event => {
    location.reload()
})

// !------------------------------------------------------------|
// !------------------------------------------------------------|

function disableScroll() {
    // Get the current page scroll position in the vertical direction
    scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;


    // Get the current page scroll position in the horizontal direction 

    scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;


    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function () { };
}
// !------------------------------------------------------------|
// !------------------------------------------------------------|

window.addEventListener('DOMContentLoaded', function () {
    let menuBTN = document.querySelector('.header_menuBTN'),
        menu_cont = document.querySelector('.responsive_menu'),
        backdrop = document.querySelector('.backdrop');

    menuBTN.addEventListener('click', function () {
        menuBTN.classList.toggle('header_menuBTN2')
        backdrop.classList.toggle('backdrop2')
        menu_cont.classList.toggle('responsive_menu2')
    })
    menu_cont.addEventListener('click', function () {
        menu_cont.classList.toggle('responsive_menu2')
        menuBTN.classList.toggle('header_menuBTN2')
        backdrop.classList.toggle('backdrop2')
    })
})

// !------------------------------------------------------------|
// !------------------------------------------------------------|
