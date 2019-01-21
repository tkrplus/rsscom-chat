import FirebaseUtil from '~/src/utils/FirebaseUtil'
import Thread from '~/src/models/Thread/Thread'
import Threads from '~/src/models/Thread/Threads'
import Reply from '~/src/models/Thread/Reply'
import RepliesMap from '~/src/models/Thread/RepliesMap'

const FETCH_THREADS_SUCCESS = '/Rss/Thread/FETCH_THREADS_SUCCESS'
const FETCH_REPLIES_SUCCESS = '/Rss/Thread/FETCH_REPLIES_SUCCESS'
const POST_THREAD_SUCCESS = '/Rss/Thread/POST_THREAD_SUCCESS'
const POST_REPLY_SUCCESS = '/Rss/Thread/POST_REPLY_SUCCESS'

export const initialize = () => {
  return dispatch => {
    dispatch(fetchThreads())
    dispatch(fetchReplies())
  }
}

const fetchThreads = () => {
  return dispatch => {
    return FirebaseUtil.list('threads')
      .then(payload => dispatch(fetchThreadsSuccess(payload)))
  }
}

const fetchThreadsSuccess = (payload) => {
  const threads = new Threads(payload.docs.map(doc => doc.data()))
  return {
    type: FETCH_THREADS_SUCCESS,
    threads
  }
}

const fetchReplies = () => {
  return dispatch => {
    return FirebaseUtil.list('replies')
      .then(payload => dispatch(fetchRepliesSuccess(payload)))
  }
}

const fetchRepliesSuccess = (payload) => {
  const repliesMap = new RepliesMap(payload.docs.map(doc => doc.data()))
  return {
    type: FETCH_REPLIES_SUCCESS,
    repliesMap
  }
}

export const postThread = (title, text) => {
  const thread = Thread.create(title, text)
  return dispatch => {
    return FirebaseUtil.add('threads', thread.threadId, thread.buildFirestoreDoc())
      .then(() => dispatch(postThreadSuccess(thread)))
  }
}

const postThreadSuccess = (thread) => {
  return {
    type: POST_THREAD_SUCCESS,
    thread
  }
}

export const postReply = (threadId, text) => {
  const reply = Reply.create(threadId, text)
  return dispatch => {
    return FirebaseUtil.add('replies', reply.replyId, reply.buildFirestoreDoc())
      .then(() => dispatch(postReplySuccess(reply)))
  }
}

const postReplySuccess = (reply) => {
  return {
    type: POST_REPLY_SUCCESS,
    reply
  }
}

const initialState = {
  threads: new Threads(),
  repliesMap: new RepliesMap()
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_THREADS_SUCCESS:
      return {
        ...state,
        threads: action.threads
      }
    case FETCH_REPLIES_SUCCESS:
      return {
        ...state,
        repliesMap: action.repliesMap
      }
    case POST_THREAD_SUCCESS:
      return {
        ...state,
        threads: state.threads.addThread(action.thread)
      }
    case POST_REPLY_SUCCESS:
      return {
        ...state,
        repliesMap: state.repliesMap.addReply(action.reply)
      }
    default:
      return state
  }
}
