import { Record, List } from 'immutable'
import Thread from './Thread'

const ThreadsRecord = Record({
  Threads: List()
})

class Threads extends ThreadsRecord {
  constructor(threads = []) {
    super()
    const list = List(threads)
      .map(thread => new Thread(thread))
      .sort((a, b) => a.createdAt - b.createdAt)
    return this.set('Threads', list)
  }

  addThread(thread) {
    return this.set('Threads', this.Threads.push(thread))
  }
}

export default Threads
