let canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
let ctx = canvas.getContext("2d");

addEventListener('resize', function () {

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

})

let posa = { x: -1000, y: 600, r: 0 }
let posd = { x: 1000, y: -600 }
let posd2 = { x: 1000, y: -600 }
let posi = { x: 1000, y: 3000 }
let posa2 = { x: -1000, y: 600, r: 0 }
let poss = { x: 1000, y: -600 }
let posc1 = { x: 1000, y: -600 }
let posc2 = { x: 1000, y: -600 }
let posc3 = { x: 1000, y: -600 }

let colors = ["#DF3A01", "#31B404", "#5372D4", "#ffff00", "#663300", "#cc00ff", "#00ffcc"];
let colorsbars = ["#333300", "#006600", "#000000", "#003366", "#663300", "#3d3d5c", "#660033"];
let colorsbarsMID = ["#cc3399", "#ff0000", "#ff9900", "#009900", "#009999", "#cc00ff", "#999966"];
let rotationsap = [20 * Math.PI / 180, Math.PI / 180, -10 * Math.PI / 180, 30 * Math.PI / 180, -30 * Math.PI / 180];
let sizesap = [70, 90, 110 , 130, 150];
let ncores = colors.length;

let seed = Math.random();

let c1 = { s: 0.5 };
let c2 = { s: 0 };
let c3 = { s: -0.5 };
let sapatos = [];
let sapatosa = [];

let interval = 250;

let ca = colors[randomIntFromInterval(ncores)];
let cd = colors[randomIntFromInterval(ncores)];
let ci = colors[randomIntFromInterval(ncores)];
let cd2 = colors[randomIntFromInterval(ncores)];
let ca2 = colors[randomIntFromInterval(ncores)];
let cs = colors[randomIntFromInterval(ncores)];
let cc1 = colorsbars[randomIntFromInterval(ncores)];
let cc2 = colorsbarsMID[randomIntFromInterval(ncores)];
let cc3 = colorsbars[randomIntFromInterval(ncores)];
let rsap = rotationsap[randomIntFromInterval(rotationsap.length)];
let sizes = sizesap[randomIntFromInterval(sizesap.length)];
let csapato = color();
let csola = color();
let cburacosap = color();
let cbarra1 = color();
let cbarra2 = color();
let cbarra3 = color();
let ccaneleira = color();
let speed = 900;


function color() {

  return "#" + ((1 << 24) * Math.random() | 0).toString(16);

}

function random() {
  var x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function randomIntFromInterval(max) {
  return Math.floor(Math.random() * (max));
}

var tween1 = new TWEEN.Tween(posa)
  .to({ x: 100, y: 350, r: 0 }, speed)
  .easing(TWEEN.Easing.Linear.None)

var tween1_2 = new TWEEN.Tween(posa2)
  .to({ x: 100, y: 350, r: 0 }, speed)
  .easing(TWEEN.Easing.Linear.None)
tween1.start();
tween1_2.start();

var tween2 = new TWEEN.Tween(posd)
  .to({ x: 210, y: 325 }, speed)
  .easing(TWEEN.Easing.Linear.None)

var tween3 = new TWEEN.Tween(posd2)
  .to({ x: 210, y: 325 }, speed)
  .easing(TWEEN.Easing.Linear.None)
tween1.chain(tween2, tween3);

var tween4 = new TWEEN.Tween(posi)
  .to({ x: 320, y: 325 }, speed)
  .easing(TWEEN.Easing.Linear.None)

tween3.chain(tween4);

var tween5 = new TWEEN.Tween(posd2)
  .to({ x: 350, y: 325 }, speed)
  .easing(TWEEN.Easing.Linear.None)
tween4.chain(tween5);

var tween6 = new TWEEN.Tween(posa2)
  .to({ x: 465, y: 350, r: Math.PI * 2 }, speed)
  .easing(TWEEN.Easing.Linear.None)
tween5.chain(tween6);

var tween7 = new TWEEN.Tween(poss)
  .to({ x: 540, y: 310 }, speed)
  .easing(TWEEN.Easing.Linear.None)
tween6.chain(tween7);

var tween8 = new TWEEN.Tween(posc1)
  .to({ x: 107, y: 211 }, speed)
  .easing(TWEEN.Easing.Linear.None)
tween7.chain(tween8);

var tween9 = new TWEEN.Tween(posc2)
  .to({ x: 252, y: 211 }, speed)
  .easing(TWEEN.Easing.Linear.None)
tween8.chain(tween9);

var tween10 = new TWEEN.Tween(posc3)
  .to({ x: 400, y: 211 }, speed)
  .easing(TWEEN.Easing.Linear.None)
tween9.chain(tween10);

tween10.chain({
  start: function () {

    setInterval(function () {

      let nc1 = { s: random() * 0.5 };
      let nc2 = { s: random() * -0.5 };
      let nc3 = { s: -0.5 - random() * 0.5 };
      let s = random() * canvas.width;
      let z = random() * 2;

      if (Math.floor(z) < 1) {

        let p = sapatos.length;

        sapatos[p] = {
          x: s, 
          y: -350,
          c: color(),
          sola: color(),
          bur: color(),
          bar1: color(),
          bar2: color(),
          bar3: color(),
          rsap: rotationsap[randomIntFromInterval(rotationsap.length)],
          sizes: sizesap[randomIntFromInterval(sizesap.length)],
          canel: color()
        };

        new TWEEN.Tween(sapatos[p])
          .to({ x: s, y: canvas.height + 350 }, 10000)
          .easing(TWEEN.Easing.Linear.None)
          .start()
          .chain({
            start: function () {

              sapatos.splice(sapatos[p], 1);

            }
          });

      } else {

        let p = sapatosa.length;

        sapatosa[p] = {
          x: s, y: -350,
          c: color(),
          sola: color(),
          bur: color(),
          bar1: color(),
          bar2: color(),
          bar3: color(),
          rsap: rotationsap[randomIntFromInterval(rotationsap.length)],
          sizes: sizesap[randomIntFromInterval(sizesap.length)],
          canel: color()
        };

        new TWEEN.Tween(sapatosa[p])
          .to({ x: s, y: canvas.height + 350 }, 10000)
          .easing(TWEEN.Easing.Linear.None)
          .start()
          .chain({
            start: function () {

              sapatosa.splice(sapatosa[p], 1);

            }
          });

      }

      ca = colors[randomIntFromInterval(ncores)];
      cd = colors[randomIntFromInterval(ncores)];
      ci = colors[randomIntFromInterval(ncores)];
      cd2 = colors[randomIntFromInterval(ncores)];
      ca2 = colors[randomIntFromInterval(ncores)];
      cs = colors[randomIntFromInterval(ncores)];
      cc1 = colorsbars[randomIntFromInterval(ncores)];
      cc2 = colorsbarsMID[randomIntFromInterval(ncores)];
      cc3 = colorsbars[randomIntFromInterval(ncores)];

      new TWEEN.Tween(c1)
        .to(nc1, interval)
        .easing(TWEEN.Easing.Linear.None)
        .start();
      new TWEEN.Tween(c2)
        .to(nc2, interval)
        .easing(TWEEN.Easing.Linear.None)
        .start();
      new TWEEN.Tween(c3)
        .to(nc3, interval)
        .easing(TWEEN.Easing.Linear.None)
        .start();

    }, interval)

  }
})

function a(transx, transy, scalex, scaley, rotate, color) {
  ctx.save();
  ctx.translate(transx, transy);
  ctx.scale(scalex, scaley);
  ctx.rotate(rotate);
  ctx.beginPath();

  ctx.arc(0.5, 0.5, 0.5, 0, Math.PI * 2, false);
  ctx.arc(0.5, 0.5, 0.25, 0, Math.PI * 2, true);
  ctx.rect(0.75, 0, 0.25, 1);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();

  ctx.restore();
}
function d(transx, transy, scalex, scaley, rotate, color) {
  ctx.save();
  ctx.translate(transx, transy);
  ctx.rotate(rotate);
  ctx.scale(scalex, scaley);

  ctx.beginPath();
  ctx.arc(0.4, 0.6, 0.4, 0, Math.PI * 2, false);
  ctx.arc(0.4, 0.6, 0.2, 0, Math.PI * 2, true);
  ctx.rect(0.6, 0, 0.2, 1);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();

  ctx.restore();
}
function i(transx, transy, scalex, scaley, rotate, color) {
  ctx.save();
  ctx.translate(transx, transy);
  ctx.scale(scalex, scaley);
  ctx.rotate(rotate);

  ctx.beginPath()
  ctx.rect(0, 0, 0.2, 0.2);
  ctx.rect(0, 0 + 0.25, 0.2, 0.75);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();

  ctx.restore();
}
function s(transx, transy, scalex, scaley, rotate, color) {
  ctx.save();
  ctx.translate(transx, transy);
  ctx.scale(scalex, scaley);
  ctx.rotate(rotate);

  ctx.beginPath();
  ctx.arc(0.64, 0.66, 0.31, -Math.PI, 0);
  ctx.lineTo(0.65, 0.66);
  ctx.arc(0.65, 0.66, 0.10, 0, -Math.PI, true);
  ctx.bezierCurveTo(0.55, 0.74, 0.94, 0.73, 0.96, 1);
  ctx.arc(0.65, 1, 0.31, 0, -Math.PI);
  ctx.lineTo(0.54, 1);
  ctx.arc(0.65, 1, 0.10, -Math.PI, 0, true);
  ctx.bezierCurveTo(0.75, 0.88, 0.37, 0.96, 0.33, 0.67);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();

  ctx.restore();
}
function coluna(s, transx, transy, scalex, scaley, rotate, color) {
  ctx.save();
  ctx.translate(transx, transy);
  ctx.scale(scalex, scaley);
  ctx.rotate(rotate);

  ctx.beginPath();
  ctx.moveTo(0, s);
  ctx.lineTo(0.5, s);
  ctx.lineTo(0.5, 0.74);
  ctx.lineTo(0, 0.7);
  ctx.lineTo(0, 0);
  ctx.closePath();

  ctx.fillStyle = color;
  ctx.fill();

  ctx.beginPath();
  ctx.lineTo(0, 0.7);
  ctx.lineTo(0.5, 1);
  ctx.lineTo(0.5, 0.7);
  ctx.closePath();

  ctx.fill();

  ctx.restore();

}
function sapato(transx, transy, scalex, scaley, rotate, csp, csl, cbur, cb1, cb2, cb3, cnl) {
  ctx.save();
  ctx.translate(transx, transy);
  ctx.scale(scalex, scaley);
  ctx.rotate(rotate);

  ctx.lineWidth = 0.01;
  ctx.strokeStyle = "#000";

  //Corpo do Sapato
  ctx.beginPath()
  ctx.moveTo(0, 1);
  ctx.quadraticCurveTo(-0.04, 0.85, 0.25, 0.80);
  ctx.lineTo(0.7, 0.62);
  ctx.quadraticCurveTo(0.8, 0.6, 0.65, 0.72);
  ctx.quadraticCurveTo(0.7, 0.85, 0.95, 0.72);
  ctx.quadraticCurveTo(1, 0.6, 1, 0.72);
  ctx.quadraticCurveTo(1.01, 0.8, 1, 1);
  ctx.stroke();
  ctx.closePath();
  ctx.fillStyle = csp;
  ctx.fill();

  //Sola
  ctx.beginPath()
  ctx.moveTo(-0.01, 1.01);
  ctx.quadraticCurveTo(-0.02, 0.95, 0, 0.95);
  ctx.lineTo(1, 0.95);
  ctx.quadraticCurveTo(1.015, 0.95, 1.007, 1);
  ctx.lineTo(1.007, 1);
  ctx.closePath();

  ctx.fillStyle = csl;
  ctx.fill();

  //Semi-Corpo do Sapato
  ctx.lineWidth = 0.007;

  ctx.beginPath()
  ctx.moveTo(0.25, 0.80);
  ctx.lineTo(0.6, 0.66);
  ctx.quadraticCurveTo(0.64, 0.65, 0.65, 0.72);
  ctx.quadraticCurveTo(0.7, 0.85, 0.95, 0.72);
  ctx.quadraticCurveTo(1, 0.6, 1, 0.72);
  ctx.quadraticCurveTo(1.02, 0.8, 1.003, 0.95);
  ctx.lineTo(0.25, 0.95);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath()
  ctx.moveTo(0.25, 0.95);
  ctx.lineTo(0, 0.95);
  ctx.closePath();
  ctx.stroke();

  //Linha Cordão Sapato
  ctx.beginPath()
  ctx.setLineDash([0.005, 0.007]);
  ctx.moveTo(0.25, 0.83);
  ctx.lineTo(0.64, 0.68);
  ctx.closePath();
  ctx.stroke();

  //Barra nº1 Adidas
  ctx.beginPath()
  ctx.moveTo(0.45, 0.947);
  ctx.lineTo(0.32, 0.8);
  ctx.lineTo(0.5 - 0.98 * 0.15, 0.947 - 0.98 * 0.164);
  ctx.lineTo(0.5, 0.947);
  ctx.closePath();

  ctx.fillStyle = cb1;
  ctx.fill();

  //Barra nº2 Adidas
  ctx.beginPath()
  ctx.moveTo(0.6, 0.947);
  ctx.lineTo(0.43, 0.755);
  ctx.lineTo(0.55 - 1.07 * 0.15, 0.947 - 1.07 * 0.164);
  ctx.lineTo(0.55, 0.947);
  ctx.closePath();

  ctx.fillStyle = cb2;
  ctx.fill();

  //Barra nº3 Adidas
  ctx.beginPath()
  ctx.moveTo(0.7, 0.947);
  ctx.lineTo(0.5, 0.728);
  ctx.lineTo(0.65 - 1.24 * 0.15, 0.947 - 1.24 * 0.164);
  ctx.lineTo(0.65, 0.947);
  ctx.closePath();

  ctx.fillStyle = cb3;
  ctx.fill();

  //Buracos
  ctx.fillStyle = cbur;

  ctx.beginPath()
  ctx.arc(0.27, 0.805, 0.008, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath()
  ctx.arc(0.315, 0.788, 0.008, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath()
  ctx.arc(0.36, 0.771, 0.008, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath()
  ctx.arc(0.405, 0.754, 0.008, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath()
  ctx.arc(0.45, 0.737, 0.008, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath()
  ctx.arc(0.495, 0.72, 0.008, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath()
  ctx.arc(0.54, 0.703, 0.008, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();

  //Canela
  ctx.beginPath()
  ctx.setLineDash([]);
  ctx.moveTo(0.85, 0.765);
  ctx.lineTo(0.95, 0.72);
  ctx.quadraticCurveTo(1, 0.6, 1, 0.72);
  ctx.quadraticCurveTo(1.01, 0.8, 1, 0.8);
  ctx.bezierCurveTo(0.95, 0.8, 0.94, 0.73, 0.85, 0.765);
  ctx.stroke();
  ctx.closePath();
  ctx.fillStyle = cnl;
  ctx.fill();

  //Linhas Biqueira
  ctx.beginPath()
  ctx.setLineDash([]); // ou com ctx.setLineDash([]) comentado!
  ctx.moveTo(0.015, 0.95);
  ctx.quadraticCurveTo(0.018, 0.86, 0.25, 0.80);
  ctx.moveTo(0.07, 0.95);
  ctx.quadraticCurveTo(0.07, 0.86, 0.25, 0.81);
  ctx.moveTo(0.125, 0.95);
  ctx.quadraticCurveTo(0.122, 0.86, 0.25, 0.82);
  ctx.moveTo(0.18, 0.95);
  ctx.quadraticCurveTo(0.174, 0.86, 0.25, 0.83);
  ctx.stroke();
  ctx.closePath();

  ctx.restore();
}

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  sapatosa.forEach(function (sap) {

    sapato(sap.x, sap.y, sap.sizes, sap.sizes, sap.rsap, sap.c, sap.sola, sap.bur, sap.bar1, sap.bar2, sap.bar3, sap.canel);

  })

  a(posa.x + 350, posa.y, 100, 100, posa.r, ca);

  d(posd.x + 350, posd.y, 125, 125, 0, cd);

  i(posi.x + 350, posi.y, 125, 125, 0, ci);

  d(posd2.x + 350, posd2.y, 125, 125, 0, cd2);

  a(posa2.x + 350, posa2.y, 100, 100, posa2.r, ca2);

  s(poss.x + 350, poss.y, 110, 110, 0, cs);

  coluna(c1.s, posc1.x + 350, posc1.y, 190, 190, -Math.atan(0.3 / 0.5), cc1);

  coluna(c2.s, posc2.x + 350, posc2.y, 190, 190, -Math.atan(0.3 / 0.5), cc2);

  coluna(c3.s, posc3.x + 350, posc3.y, 190, 190, -Math.atan(0.3 / 0.5), cc3);

  sapatos.forEach(function (sap) {

    sapato(sap.x, sap.y, sap.sizes, sap.sizes, sap.rsap, sap.c, sap.sola, sap.bur, sap.bar1, sap.bar2, sap.bar3, sap.canel);

  })


  TWEEN.update();

  requestAnimationFrame(draw);

}


requestAnimationFrame(draw);
