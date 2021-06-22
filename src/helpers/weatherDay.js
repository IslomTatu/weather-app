import dayjs from 'dayjs'

export const filterHourlyDataByDate = (item) => {
  const dt = sessionStorage.getItem('dt')
  const current = dayjs.unix(item.dt).format('DD/MM')
  const selected = dayjs.unix(dt).format('DD/MM')
  return current === selected
}
