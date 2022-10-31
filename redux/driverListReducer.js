import { driversApi } from "../api/api";
const SHOW_DRIVERS = "SHOW_DRIVERS";
const GET_DRIVERS = "drivers/GET_DRIVERS";
const GET_COLUMNS = "drivers/GET_COLUMNS";
const CHANGE_COL_VISIBILITY = "drivers/CHANGE_COL_VISIBILITY";


let initialState = {
  сurrentState: true,
  nameTabs: "Список водителей",
  drivers: [],
  columns: []
};

const driverList = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DRIVERS: {
      return {
        ...state,
        сurrentState: action.сurrentState
      }
    }
    case GET_DRIVERS: {
      return {
        ...state,
        drivers: [...state.drivers, ...action.drivers]
      }
    }
    case GET_COLUMNS: {
      return {
        ...state,
        columns: [...action.columns]
      }
    }
    case CHANGE_COL_VISIBILITY: {
      let customColumns = state.columns.map((col) => {
        if (col.dataField === action.payload.ID) {
          col.visibility = action.payload.visibility
        }
        return col;
      })
      return {
        ...state,
        columns: customColumns
      }
    }
    default:
      return state
  }
};

export const showDrivers = (сurrentState) => ({ type: SHOW_DRIVERS, сurrentState });

export const getDriversAC = (drivers) => {
  return {
    type: GET_DRIVERS,
    drivers
  }
}

export const getColumnsAC = (columns) => {
  return {
    type: GET_COLUMNS,
    columns
  }
}

export const changeColumnsAC = (payload) => {
  return {
    type: CHANGE_COL_VISIBILITY,
    payload
  }
}

export const getDrivers = (currentPage) => {
  return async (dispatch) => {
    const response = await driversApi.getDrivers(currentPage)
    if (response !== null) {
      dispatch(getDriversAC(response.drivers));
    }
  }
}

export const getColumns = () => {
  return async (dispatch) => {
    const columnsResponse = await driversApi.getColumns();
    dispatch(getColumnsAC(columnsResponse));

  }
}

export const changeColumns = (payload) => {
  return (dispatch) => {
    dispatch(changeColumnsAC(payload));
  }
}


export default driverList;
