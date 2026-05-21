window.addEventListener("load", () => {
    const loader = document.querySelector(".custom-loader");

    setTimeout(() => {
        loader.classList.add("custom-loader--hidden");

        loader.addEventListener("transitionend", () => {
            document.body.removeChild(loader);
        });
    }, 500);
});