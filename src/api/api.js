export default {
  getList: ({ lat, lon }) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${process.env.API_KEY}`,

  getHourlyList: ({ lat, lon }) =>
    `http://api.openweathermap.org/data/2.5/forecast?&units=metric&lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`,

  iconUrl: icon => `http://openweathermap.org/img/wn/${icon}@2x.png`
}
