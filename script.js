$(document).ready(function () {
  $("#new-search").on("click", function () {
    event.preventDefault();
    var cityName = $("#search").val();
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
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
      $("#today").append($("<h1>" + city +  moment().format("(MM/DD/YYYY)") + "</h1>"));

      var weatherIcon = response.weather[0].icon;
      // console.log(weatherIcon);
      var icon = "https://openweathermap.org/img/w/" + weatherIcon + ".png";
      var imgEl = $("<img>").attr("src", icon);
      $("#today").append(imgEl);

      var temp = response.main.temp;
      //   console.log(temp);
      $("#today").append($("<h5>" + temp + " °F" + "</h5>"));

      var humidity = response.main.humidity;
      //   console.log(humidity);
      $("#today").append($("<h5>" + humidity + "%" + "</h5>"));

      var windSpeed = response.wind.speed;
      //   console.log(windSpeed);
      $("#today").append($("<h5>" + windSpeed + " MPH" + "</h5>"));
      
      var latitude = response.coord.lat;
      // console.log(latitude);
      var longitude = response.coord.lon;
      // console.log(longitude);
      var ultraURL =
        "https://api.openweathermap.org/data/2.5/uvi?appid=f4bbf7147a555098803bbd3eb95abe19" +
        "&lat=" +
        latitude +
        "&lon=" +
        longitude;
      // console.log(ultraURL)

      $.ajax({
        url: ultraURL,
        method: "GET",
      }).then(function (response) {
        // console.log(response);
        var uvData = response.value;
        // console.log(uvData);
        $("#today").append($(uvData));
      });
    });

    var weeklyURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityName +
      "&units=imperial&appid=f4bbf7147a555098803bbd3eb95abe19";

    $.ajax({
      url: weeklyURL,
      method: "GET",
    }).then(function (response) {
      // console.log(response);
      for (i = 0; i < response.list.length; i++);
      // console.log(response.list);
  
      
    });
  });
});
