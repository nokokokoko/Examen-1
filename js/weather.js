// JavaScript source code
            var lat, long;
            function getLocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(showPosition);
                }
            }
            function    showPosition(position) {
                lat = position.coords.latitude;
                long = position.coords.longitude;
}
// Llama para obtener la ubicacion del navegador
getLocation()

//Funcion que en base a Longitud y Latitutd, obtiene la temperatura actual.
 // < !--Llamada de API para Weather Forecast, de Open meteo para la temperatura actual en base a las coordenadas del PC.-- >

$(document).ready(function () {
    $("#weather").click(function () {
        this.disabled = true;
        $.ajax({
            url: "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + long + "&current_weather=true&temperature_2m&timezone=auto",
            type: "GET",
            crossDomain: true,
            dataType: "json",
            success: function (data) {
                console.log(data);
                var currentTemp = data.current_weather.temperature;
                var currentTime = data.current_weather.time;
                var displayString = "La temperatura actual es de: " + currentTemp + "\u00B0C.\n"; // \u00B0 Es para el caracter Grados
                displayString += "Hora de medicion: " + currentTime.substring(11) + ".";
                $("#resultadoWeather").val(displayString)
;
            },
            error: function (xhr, status, error) {
                console.log("Error: " + error);
            }
        });
        this.disabled = false;
    });
});