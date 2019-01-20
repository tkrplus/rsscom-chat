import { Record } from 'immutable'
import UUID from '~/src/utils/UUID'
import TIME from '~/src/utils/TIME'

const ThreadRecord = Record({
  threadId: undefined,
  title: undefined,
  text: undefined,
  createdAt: undefined
})

export default class Thread extends ThreadRecord {
}
