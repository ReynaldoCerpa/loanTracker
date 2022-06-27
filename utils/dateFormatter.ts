const months = new Map()
months.set('Jan','1')
months.set('Feb','2')
months.set('Mar','3')
months.set('Apr','4')
months.set('May','5')
months.set('Jun','6')
months.set('Jul','7')
months.set('Aug','8')
months.set('Sep','9')
months.set('Oct','10')
months.set('Nov','11')
months.set('Dic','12')

export function formatDate(date : string) {
  const splitDate = date.split(" ")
  const finalDate = months.get(splitDate[1]) + "-" + splitDate[2] + "-" + splitDate[3]
  return finalDate
}
