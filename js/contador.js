var dataFinal = new Date("Nov 26, 2021 00:00:00").getTime();

var x = setInterval(function() {

  var agora = new Date().getTime();

  var distancia = dataFinal - agora;

  var days = Math.floor(distancia / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("contador").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distancia < 0) {
    clearInterval(x);
    document.getElementById("contador").innerHTML = "CHEGOU!";
  }
}, 1000);