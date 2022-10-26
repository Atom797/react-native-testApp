import messages from "./messages.json"


export const messagesApi = {

  getMessages() {
     return Promise.resolve(messages);
  }
}
