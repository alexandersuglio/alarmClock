//err exceeds the maxbuffer limit causing song to stop playing

var second = 1000;
var min = second * 60;
var hour = min * 60;
var set = 7 * second;


var alarm = require("alarm");
var now = new Date();
var date = new Date(+now + set);

console.log("alarm set");

function music() {

    const player = require('play-sound')();
    player.play('./Isostasy.mp3', (err) => {
        if (err) {
            console.log("WAKE UP! ctrl+c to SHUT OFF!");
            music();

        }
    });
};

alarm(date, function() {
    console.log('Good Morning!');
    music();
});
