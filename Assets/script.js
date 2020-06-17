$(document).ready(function () {
  $("#new-search").on("click", function () {
    var cityName = $("#search").val();
    var queryURL =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&units=imperial&appid=f4bbf7147a555098803bbd3eb95abe19";

    // console.log(cityName);

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      $("#today").empty();
      console.log(response);

      var city = response.name;
      //   console.log(city);
      $("#today").append($("<h1>" + city + "</h1>"));

      var temp = response.main.temp;
      //   console.log(temp);
      $("#today").append($("<h5>" + temp + " °F" + "</h5>"));

      var humidity = response.main.humidity;
      $("#today").append($("<h5>" + humidity + "%" + "</h5>"));

      var windSpeed = response.wind.speed;
      $("#today").append($("<h5>" + windSpeed + " MPH" + "</h5>"));

      var currentDate = moment().subtract(10, "days").calendar();
      console.log(currentDate);
     
    });
  });
});
