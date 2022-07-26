function aboutPage() {
    location.href = "./aboutUs.html"
};
function omPage() {
    location.href = "./ourMission.html"
}
function donatePage() {
    location.href = "./donate.html"
}

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1400,
    speedAsDuration: true
});