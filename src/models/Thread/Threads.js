import { Record, List } from 'immutable'
import Thread from './Thread'

const ThreadsRecord = Record({
  threads: List()
})

class Threads extends ThreadsRecord {
  constructor(threads = []) {
    super()
    const list = List(threads)
      .map(thread => new Thread(thread))
      .sort((a, b) => b.createdAt - a.createdAt)
    return this.set('threads', list)
  }

  addThread(thread) {
    return this.set('threads', this.threads.unshift(thread))
  }
}

export default Threads
