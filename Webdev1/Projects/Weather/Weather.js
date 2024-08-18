function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
let currentSeason = 0;
const seasons = ['season-winter', 'season-spring', 'season-summer', 'season-fall'];

function changeSeason() {
  document.body.classList.remove(...seasons);
  document.body.classList.add(seasons[currentSeason]);
  currentSeason = (currentSeason + 1) % seasons.length;
}

setInterval(changeSeason, 2000);

document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("#weatherForm");

  form.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent the form from refreshing the page

      let city_name = document.querySelector("#cityInput").value;
      const baseurl = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=168771779c71f3d64106d8a88376808a&units=metric`;
      
      try {
          let response = await fetch(baseurl);
          if (!response.ok) {
              throw new Error('City not found');
          }

          let data = await response.json();

          document.querySelector('#cityName').innerText = data.name;
          document.querySelector('#temperature').innerText = `${Math.round(data.main.temp)}°C`;
          document.querySelector('#description').innerText = data.weather[0].description;
          document.querySelector('#weatherIcon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
          document.querySelector('#rainInfo').innerText = `Humidity: ${data.main.humidity}%`;

          // Display the country flag using the country code
          const countryFlag = document.querySelector('#countryFlag');
          if (countryFlag) {
              const countryCode = data.sys.country.toLowerCase();
              countryFlag.src = `https://flagcdn.com/w80/${countryCode}.png`; // More reliable CDN
              countryFlag.alt = `Flag of ${data.sys.country}`;
          } else {
              console.error('Country flag element not found');
          }

      } catch (error) {
          alert(error.message);
      }
  });
});
