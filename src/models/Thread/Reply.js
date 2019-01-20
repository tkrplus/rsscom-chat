import { Record } from 'immutable'
import UUID from '~/src/utils/UUID'
import TIME from '~/src/utils/TIME'

const ReplyRecord = Record({
  replyId: undefined,
  threadId: undefined,
  message: undefined,
  createdAt: undefined
})

export default class Reply extends ReplyRecord {
}
