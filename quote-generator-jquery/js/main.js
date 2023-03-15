$(document).ready(function () {
  function fetchData() {
    $.ajax({
      type: "GET",
      url: "https://geek-jokes.sameerkumar.website/api?format=json",
      success: (response, statusText) => {
        $("#joke").text(response.joke);
      },
      error: (error, statusText) => {
        console.log("ERROR => ", error);
      },
    });
  }

  fetchData();

  $("#btn").click(fetchData);
});
