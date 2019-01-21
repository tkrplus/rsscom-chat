import { Record, Map, List } from 'immutable'
import Reply from './Reply'
import Replies from './Replies'

const RepliesRecord = Record({
  repliesMap: Map()
})

class RepliesMap extends RepliesRecord {
  constructor(replies = []) {
    super()
    const repliesMap = List(replies)
      .map(reply => new Reply(reply))
      .groupBy(reply => reply.threadId)
      .map(replies => new Replies(replies))
    return this.set('repliesMap', repliesMap)
  }

  addReply(reply) {
    let targetReplies = this.repliesMap.get(reply.threadId)
    if (!targetReplies) {
      targetReplies = new Replies()
    }
    return this.set(
      'repliesMap',
      this.repliesMap.set(
        reply.threadId,
        targetReplies.addReply(reply)
      ))
  }
}

export default RepliesMap
