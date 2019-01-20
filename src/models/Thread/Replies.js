import { Record, List } from 'immutable'
import Reply from './Reply'

const RepliesRecord = Record({
  Replies: List()
})

class Replies extends RepliesRecord {
  constructor(replies = []) {
    super()
    const list = List(replies)
      .map(reply => new Reply(reply))
      .sort((a, b) => a.createdAt - b.createdAt)
    return this.set('Replies', list)
  }

  addReply(Reply) {
    return this.set('Replies', this.Replies.push(Reply))
  }
}

export default Replies
