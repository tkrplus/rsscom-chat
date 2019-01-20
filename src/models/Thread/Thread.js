import { Record } from 'immutable'
import UUID from '~/src/utils/UUID'
import TIME from '~/src/utils/TIME'
import Category from '~/src/models/category/Category'
import ThreadStatus from './ThreadStatus'

const ThreadRecord = Record({
  threadId: undefined,
  title: undefined,
  message: undefined,
  createdAt: undefined
})

export default class Thread extends ThreadRecord {
}
