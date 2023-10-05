$(".continuar").on("click", function () {
  var cardWelcome = document.querySelector(".card-welcome");
  var cardPrazer = document.querySelector(".card-prazer");
  var inputName = $("#input").val();
  sessionStorage.setItem("inputName", inputName);
  cardWelcome.classList.add("d-none");
  $("#name").html(sessionStorage.getItem("inputName"));
  cardPrazer.classList.remove("d-none");
});
function changeSize(element) {
  element.classList.toggle("enlarged");
}
function button(element) {
  element.classList.toggle("click");
}
var saldoVal = "0,00";
$(".resposta-nu").click(function (params) {
  saldoVal = "29,71";
  localStorage.setItem("valor", saldoVal);
  $("#saldo").html(localStorage.getItem("valor"));

  $(".nubankCard").addClass("disabled");
  window.location.href = "./cards1.html";
});
$(".resposta-mag").click(function (params) {
  $(".magaluCard").addClass("disabled");
  window.location.href = "./cards2.html";
});
$(".resposta-bra").click(function (params) {
  $("bradescoCard").addClass(".disable");
  window.location.href = "./cards3.html";
});
var numeroElement = document.getElementById("numero");
var numeroAtual = 0;

function mostrarProximoNumero() {
  if (numeroAtual <= 90) {
    numeroElement.innerHTML = numeroAtual + "%";
    numeroAtual++;
    setTimeout(mostrarProximoNumero, 70); // Mostrar próximo número a cada segundo (1000 ms)
  }
  // Iniciar a contagem
}
mostrarProximoNumero();
function myFunction() {
  // Get the snackbar DIV
  var x = $("#snackbar");
  console.log("aa");
  // Add the "show" class to DIV
  x.addClass("show");

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.removeClass("show");
  }, 3000);
}
