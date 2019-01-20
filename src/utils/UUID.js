import uuid from 'uuid/v4'

export const generate = () => {
  return uuid().replace(/-/g, '').toUpperCase()
}

export default {
  generate
}
