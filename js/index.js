function get_elements (city = "moscow"){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5354982182b8db311c3f8756f56a43fc`)
.then (function (value) {return value.json()})
.then (function (data) { 
    console.log(data)
    city_name.innerHTML = data.name;
    temp_comment.innerHTML = `Temperature:      ${Math.trunc(data.main.temp-272)}°C`
    feels_comment.innerHTML = `Feels like:            ${Math.trunc(data.main.feels_like-272)}°C`
    wind_comment.innerHTML = `Wind speed:       ${data.wind.speed} m/s`
    if (Math.trunc(data.main.temp-272) > 15) {
        city_name.innerHTML = data.name;
        document.querySelector(".icon-space").innerHTML = `<img src="img/hot.png"class="weather-img">`;
        }
        else {
            document.querySelector(".icon-space").innerHTML = `<img src="img/cold.png "class="weather-img">`;
        }
        

})}
get_elements();
let city_name = document.querySelector(".city-name");
let temp_comment = document.querySelector(".temperature");
let feels_comment = document.querySelector(".feels-like");
let wind_comment = document.querySelector(".wind-speed");
let get_button = document.querySelector(".get-button");
get_button.addEventListener("click" , try_elements)

function try_elements (a = "Moscow") {
    a  = document.getElementById("floatingInput").value;
    console.log (a);
    get_elements(a);
    document.getElementById("floatingInput").value = "";
}


