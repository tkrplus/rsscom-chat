import Thread from '~/src/models/Thread/Thread'
import Threads from '~/src/models/Thread/Threads'

const OPEN_Thread_CREATE_DIALOG = 'Thread/OPEN_Thread_CREATE_DIALOG'
const CLOSE_Thread_CREATE_DIALOG = 'Thread/CLOSE_Thread_CREATE_DIALOG'
const EDIT_CREATE_Thread = 'Thread/EDIT_CREATE_Thread'
const CREATE_Thread = 'Thread/CREATE_Thread'
const CHANGE_TO_NEXT_STATUS = 'Thread/CHANGE_TO_NEXT_STATUS'

export const openThreadCreateDialog = () => ({
  type: OPEN_Thread_CREATE_DIALOG
})

export const closeThreadCreateDialog = () => ({
  type: CLOSE_Thread_CREATE_DIALOG
})

export const editCreateThread = (summary, category, deadline) => ({
  type: EDIT_CREATE_Thread,
  summary,
  category,
  deadline
})

export const createThread = () => ({
  type: CREATE_Thread
})

export const changeToNextStatus = (id) => ({
  type: CHANGE_TO_NEXT_STATUS,
  id
})

const initialState = {
  create: null,
  Threads: new Threads()
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_Thread_CREATE_DIALOG:
      return {
        ...state,
        create: Thread.createThread(null, null, null)
      }
    case CLOSE_Thread_CREATE_DIALOG:
      return {
        ...state,
        create: null
      }
    case EDIT_CREATE_Thread:
      return {
        ...state,
        create: Thread.createThread(
          action.summary,
          action.category,
          action.deadline
        )
      }
    case CREATE_Thread:
      return {
        ...state,
        Threads: state.Threads.addThread(state.create),
        create: null
      }
    case CHANGE_TO_NEXT_STATUS:
      return {
        ...state,
        Threads: state.Threads.changeThreadToNextStatus(action.id)
      }
    default:
      return state
  }
}
