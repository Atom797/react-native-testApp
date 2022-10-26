import { messagesApi } from "../api/messages/api";

const SHOW_MESSAGES = "SHOW_MESSAGES"
const CLOSE_MESSAGES = "CLOSE_MESSAGES"
const SET_MESSAGES = "GET_MESSAGES"


let initialState = {
  messageArray: [],
  сurrentState: true,
  currentStateClose: true,
  nameTabs: "Журнал сообщений"
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGES: {
      return {
        ...state,
        сurrentState: action.сurrentState
      }
    }
    case CLOSE_MESSAGES: {
      return {
        ...state,
        currentStateClose: action.currentStateClose
      }
    }
    case SET_MESSAGES: {
      return {
        ...state,
        messageArray: [...state.messageArray, ...action.messageArray]
      }
    }
    default:
      return state
  }
};

export const showMessages = (сurrentState) => ({ type: SHOW_MESSAGES, сurrentState });
export const closeMessages = (currentStateClose) => ({ type: CLOSE_MESSAGES, currentStateClose });
export const setMessagesToStore = (messageArray) => ({ type: SET_MESSAGES, messageArray });

export const getMessagesFetch =  (currentPage) => {
  return async (dispatch) => {
    return await messagesApi.getMessages(currentPage).then((response) => {
      if (response !== null) {
        let numberOfMessages = response.length;
        console.log(numberOfMessages);
        let objToSet = response.slice(currentPage * 20, currentPage * 20 + 20)
        if (objToSet.length !== 0)  {
          dispatch(setMessagesToStore(objToSet))
        } else{
          return "Error"
        }
      }
    })

  }
}

export default messageReducer;