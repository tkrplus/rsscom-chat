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
  static create(title, text) {
    return new Thread({
      threadId: UUID.generate(),
      createdAt: TIME.now(),
      title: title,
      text: text
    })
  }

  buildFirestoreDoc() {
    return {
      threadId: this.threadId,
      title: this.title,
      text: this.text,
      createdAt: this.createdAt.valueOf()
    }
  }
}
