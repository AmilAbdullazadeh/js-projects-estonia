//! JQuery
$(document).ready(function () {
  const storedColor = localStorage.getItem("randomColor");

  storedColor && randomColorFc(storedColor);

  $(".generate-btn").click(function () {
    let randomColor = "#";
    let characters = "0123456789abcdef";

    for (let index = 0; index < 6; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      randomColor += characters[randomIndex];
    }

    localStorage.setItem("randomColor", randomColor);

    randomColorFc(randomColor);
  });

  function randomColorFc(randomColorProps) {
    $("#inputField").val(randomColorProps);
    $("#inputField").css("color", randomColorProps);
    $("#inputField").css("border-color", randomColorProps);
    $("#inputField").val(randomColorProps);
    $(".color-preview, .copy-btn").css("background-color", randomColorProps);
  }

  function add() {
    $(".alert-msg").addClass("slide-effect");
  }

  function remove() {
    $(".alert-msg").removeClass("slide-effect");
  }

  $(".copy-btn").click(function () {
    $("#inputField").select();
    document.execCommand("copy");
    $(".code").text($("#inputField").val());

    add()
    setTimeout(remove, 2000)
  });
});
