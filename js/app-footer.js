document.addEventListener('DOMContentLoaded', () => {
    fadeInPage();
    loadSVG()
    new WOW().init();
});

function fadeInPage() {
    if (!window.AnimationEvent) { // bail out for browsers not supporting CSS animations
        return;
    }
    let fader = document.getElementById('fader');
    fader.setAttribute('class', 'fade-out');
}

document.addEventListener('DOMContentLoaded', function () {
    if (!window.AnimationEvent) { // bail out for browsers not supporting CSS animations
        return;
    }

    let anchors = document.getElementsByTagName('a');

    for (let idx = 0; idx < anchors.length; idx++) {
        if (anchors[idx].hostname !== window.location.hostname || anchors[idx].pathname === window.location.pathname) { // Links to other websites and links to anchors on the same page are disregarded
            continue;
        }

        anchors[idx].addEventListener('click', function (event) {
            if (event.metaKey || event.ctrlKey) return;

            let fader = document.getElementById('fader'),
                anchor = event.currentTarget,
                listener = function () {
                    window.location = anchor.href;
                    fader.removeEventListener('animationend', listener);
                };

            fader.addEventListener('animationend', listener);
            event.preventDefault();
            fader.setAttribute('class', 'fade-in');
        });
    }

    window.addEventListener('pageshow', function (event) {
        if (!event.persisted) {
            return;
        }
        var fader = document.getElementById('fader');
        fader.removeAttribute('class', 'fade-in');
    });
});

function loadSVG() {
    fetch('img/backpack.svg').then(res => res.text()).then(text => {
        var svgEl = new DOMParser().parseFromString(text, "text/xml").firstChild;
        svgEl.classList.add('svg-backpack');
        document.querySelectorAll('.svg-backpack').forEach(el => {
            el.parentNode.insertBefore(svgEl, el);
            el.remove();
        });
        console.log(svgEl);
    });
}

function openForm() {
    document.getElementById("myForm").style.maxHeight = "500px";
}

function closeForm() {
    document.getElementById("myForm").style.maxHeight = "0";
}