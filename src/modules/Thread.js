import Thread from '~/src/models/Thread/Thread'
import Threads from '~/src/models/Thread/Threads'

const FETCH_THREADS = '/Rss/Thread/FETCH_THREADS'

const initialState = {
  create: null,
  Threads: new Threads()
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_THREADS:
      return {
        ...state
      }
    default:
      return state
  }
}
