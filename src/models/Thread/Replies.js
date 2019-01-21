import { Record, List } from 'immutable'
import Reply from './Reply'

const RepliesRecord = Record({
  replies: List()
})

class Replies extends RepliesRecord {
  constructor(replies = []) {
    super()
    const list = List(replies)
      .map(reply => new Reply(reply))
      .sort((a, b) => a.createdAt - b.createdAt)
    return this.set('replies', list)
  }

  addReply(Reply) {
    return this.set('replies', this.replies.push(Reply))
  }
}

export default Replies
