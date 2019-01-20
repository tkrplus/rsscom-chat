import TIME from '../TIME'
import moment from 'moment-timezone'

describe('TIME', () => {
  test('now', () => {
    const now = TIME.now()
    expect(/\+09:00$/.test(now.format())).toBe(true)
  })

  test('fromUnix', () => {
    const timeString = '1543647750'
    const time = TIME.fromUnix(timeString)
    expect(time.format('YYYY-MM-DD HH:mm:ss')).toEqual('2018-12-01 16:02:30')
  })

  test('toUnix', () => {
    const time = moment('2018-12-01 16:02:30', 'YYYY-MM-DD HH:mm:ss')
    expect(TIME.toUnix(time)).toEqual(1543647750)
  })

  test('display', () => {
    const time = moment('2018-12-01 16:02:30', 'YYYY-MM-DD HH:mm:ss')
    expect(TIME.display(time)).toEqual('2018-12-01 16:02')
  })
})
