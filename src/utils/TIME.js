import moment from 'moment-timezone'

moment.tz.setDefault('Asia/Tokyo')

export const now = () => {
  return moment()
}

export const fromUnix = (time) => {
  return moment.unix(time)
}

export const toUnix = (time) => {
  return time.unix()
}

export const fromFieldValue = (time) => {
  if (!time) {
    return undefined
  }
  return moment(time, 'YYYY-MM-DD')
}

export const toFieldValue = (time) => {
  if (!time) {
    return undefined
  }
  return time.format('YYYY-MM-DD')
}

export const display = (time) => {
  return time.format('YYYY-MM-DD HH:mm')
}

export const validate = (time) => {
  return !time || !time.isValid()
}

export default {
  now,
  fromUnix,
  toUnix,
  fromFieldValue,
  toFieldValue,
  display,
  validate
}
