// Use the value below whenever you need the value //of Pi
const PI = 3.14159 ;
const sphereVolume = function (radius) {
let x = 4/3 * PI * radius * radius * radius;
return x;
}
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);


const coneVolume = function (radius, height) {
 let y = PI * radius * radius * height /3;
 return y;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);


const prismVolume = function (height, width, depth) {
let z = height * width * depth
return z;
}

console.log(prismVolume(3, 4, 5) === 60);