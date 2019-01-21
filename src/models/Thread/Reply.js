import { Record } from 'immutable'
import UUID from '~/src/utils/UUID'
import TIME from '~/src/utils/TIME'

const ReplyRecord = Record({
  replyId: undefined,
  threadId: undefined,
  text: undefined,
  createdAt: undefined
})

export default class Reply extends ReplyRecord {
  static create(threadId, text) {
    return new Reply({
      replyId: UUID.generate(),
      createdAt: TIME.now(),
      threadId: threadId,
      text: text
    })
  }

  buildFirestoreDoc() {
    return {
      replyId: this.replyId,
      threadId: this.threadId,
      text: this.text,
      createdAt: this.createdAt.valueOf()
    }
  }
}
