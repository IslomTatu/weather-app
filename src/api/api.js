/* api key for weather api
  added for bug free and trouble-free operation
  should be located in .env file
*/
const apiKey = '7387304fef0358b40e1a3f0ce27a72bf'

export default {
  getList: ({ lat, lon }) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${process.env.API_KEY || apiKey}`,

  getHourlyList: ({ lat, lon }) =>
    `http://api.openweathermap.org/data/2.5/forecast?&units=metric&lat=${lat}&lon=${lon}&appid=${process.env.API_KEY || apiKey}`,

  iconUrl: icon => `http://openweathermap.org/img/wn/${icon}@2x.png`
}
