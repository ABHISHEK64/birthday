var font;
var vehicals = []
var sound;

function preload() {
    font = loadFont('./Roboto/Roboto-Bold.ttf');
    sound = loadSound('rainbow.mp3')
}

function setup() {

    createCanvas(800, 300);
    background(51);
    //font = loadFont('/Roboto/Roboto-BoldItalic.ttf');
    //textfont(font);
    //  textSize(128);
    // text('suprrise', 10, 200);
    sound.play();
    fill(255);
    noStroke();
    text('suprrise', 100, 200);
    var points = font.textToPoints('suprrise', 100, 200);
    console.log(points);
    for (var i = 0; i < points.lenght; i++) {
        var point = points[i];
        var vehical = new Vehical(point.x, point.y);
        vehicals.push(vehical);
        // strokeWeight(4);
        // point(point.x, point.y);
    }

}

function draw() {
    background(51);
    for (var i = 0; i < vehicals.length; i++) {
        var v = vehicals[i];
        v.behaviors();
        v.update();
        v.show();
    }
}

/*chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.contentScriptQuery == 'queryPrice') {
            var url = 'https://another-site.com/price-query?itemId=' +
                encodeURIComponent(request.itemId);
            fetch(url)
                .then(response => response.text())
                .then(text => parsePrice(text))
                .then(price => sendResponse(price))
                .catch(error => connect([text]))
            return true; // Will respond asynchronously.
        }
    });*/