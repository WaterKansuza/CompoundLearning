// Source - https://stackoverflow.com/a/36947750
// Posted by Ajay Singh, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-20, License - CC BY-SA 4.0
const startButton = document.getElementById("startButton")
const pauseButton = document.getElementById("pauseButton")
const resumeButton = document.getElementById("resumeButton")
const resetButton = document.getElementById("resetButton")

function hideLayer(button) {
    button.style.display = "none"
}
function showButton(button) {
    button.style.display = "block"
}


var Clock = {
    totalSeconds: 0,
    start: function () {
        if (!this.interval) {
            var self = this;
            function pad(val) {
                return val > 9 ? val : "0" + val;
            }
            function hour(val) {
                return val > 0 ? val + ":" : "";
            }
            this.interval = setInterval(function () {
                self.totalSeconds += 1;

                document.getElementById("hour").innerHTML = hour(Math.floor(self.totalSeconds / 3600));
                document.getElementById("min").innerHTML = pad(Math.floor(self.totalSeconds / 60 % 60));
                document.getElementById("sec").innerHTML = pad(parseInt(self.totalSeconds % 60));
            }, 1000);
        }
    },

    reset: function () {
        Clock.totalSeconds = 0;
        clearInterval(this.interval);
        document.getElementById("min").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
        delete this.interval;
    },
    pause: function () {
        clearInterval(this.interval);
        delete this.interval;
    },

    resume: function () {
        this.start();
    },

    restart: function () {
        this.reset();
        Clock.start();
    }
};

hideLayer(pauseButton)
hideLayer(resumeButton)

startButton.addEventListener("click", function () {
    Clock.start();
    hideLayer(startButton)
    showButton(pauseButton)
});
pauseButton.addEventListener("click", function () {
    Clock.pause();
    hideLayer(pauseButton)
    showButton(resumeButton)
});
resumeButton.addEventListener("click", function () {
    Clock.resume();
    showButton(pauseButton)
    hideLayer(resumeButton)
});
resetButton.addEventListener("click", function () {
    Clock.reset();
    showButton(startButton)
    hideLayer(pauseButton)
    hideLayer(resumeButton)
});
// document.getElementById("restartButton").addEventListener("click", function () { Clock.restart(); });

