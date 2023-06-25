let target = document.querySelectorAll(".animate");
let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
};

let callback = (entries) => {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-init");
        } else {
            entry.target.classList.remove("animate-init");
        }
    });
};

let observer = new IntersectionObserver(callback, options);

target.forEach((el) => {
    console.log("target", el);
    observer.observe(el);
});
