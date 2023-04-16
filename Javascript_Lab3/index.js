let inputElement = document.getElementById('city')

inputElement.addEventListener('keypress', (e) => {
  if (e.keyCode == 13) {
    fetchWeatherData(e.target.value)
  }
})

function fetchWeatherData(value) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=7e3f21edee540e6110af347b55eb1ab2`
  )
    .then((res) => res.json())
    .then((res) => {
      showResults(res)
    })
}

function showResults(res) {
  let cityElement = document.querySelector('.city-name')
  cityElement.innerText = `${res.name}, ${res.sys.country}`

  let cityTemp = document.querySelector('.temp')
  cityTemp.innerHTML = `${Math.round(res.main.temp)}` + '&#8451;'

  let cityWeather = document.querySelector('.weather')
  cityWeather.innerText = `${res.weather[0].main}`

  let cityHighLow = document.querySelector('.high-low-temp')
  cityHighLow.innerHTML =
    `${Math.round(res.main.temp_min)}` +
    '&#8451;' +
    `/ ${Math.round(res.main.temp_max)}` +
    '&#8451;'

  showDate()
}

function showDate() {
  let dt = new Date()
  let month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  let currDate = document.querySelector('.city-date')
  currDate.innerText = `${days[dt.getDay()]} ${
    month[dt.getMonth()]
  } ${dt.getFullYear()}`
}
