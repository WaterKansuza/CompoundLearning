const homePage = document.getElementById("home-page")
const timerPage = document.getElementById("timer")
const musicPage = document.getElementById("music")

function hideAllPages() {
    homePage.style.display = "none"
    timerPage.style.display = "none"
    musicPage.style.display = "none"
}

function showPage(page) {
    hideAllPages()
    page.style.display = "block"
}

showPage(timerPage)