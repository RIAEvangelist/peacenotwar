import fs, { readFileSync } from 'fs';

var thinkaboutit='WITH-LOVE-FROM-THE-WORLD.txt';
var WITH_LOVE_FROM_THE_WORLD=fs.readFileSync(`./${thinkaboutit}`);

// Send a message of love without war.
// Without the need of taking the war like path.
// An eye for an eye make the world blind.
// Diplomacy wins out over action,
// which is a lot more of what the world needs at this stage. 
// <3
console.log(WITH_LOVE_FROM_THE_WORLD.toString())

var whatWeWant='♥';

export {
    whatWeWant as default,
    whatWeWant
}