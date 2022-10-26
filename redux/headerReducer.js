let initialState = {
  headerTabs: [
    { id: 0, name: "Файл" },
    { id: 1, name: "Правки" },
    { id: 2, name: "Задачи" },
    { id: 3, name: "Окна", },
    { id: 4, name: "Помощь" },
  ],
  fileTabs: [
    { id: 0, name: "1" },
    { id: 1, name: "2" },
  ],
  editTabs: [
    { id: 0, name: "3" },
    { id: 1, name: "4" },
  ],
  taskTabs: [
    { id: 0, name: "5" },
    { id: 1, name: "6" },
  ],
  windowTabs: [
    { id: 0, name: "Журнал сообщений", flag: true},
    { id: 1, name: "Включить пуш события", flag: true},
  ],
  helpTabs: [
    { id: 0, name: "9" },
    { id: 1, name: "10" },
  ],
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default headerReducer;