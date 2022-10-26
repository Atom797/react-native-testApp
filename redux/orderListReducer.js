import { ordersApi } from "../api/api";
const SHOW_ORDERS = "SHOW_ORDERS";
const GET_ORDERS = "orders/GET_ORDERS";
const GET_COLUMNS = "orders/GET_COLUMNS";
const CHANGE_COL_VISIBILITY = "orders/CHANGE_COL_VISIBILITY";


let initialState = {
  сurrentState: true,
  nameTabs: "Список заказов",
  orders: [],
  columns: []
};

const orderListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ORDERS: {
      return {
        ...state,
        сurrentState: action.сurrentState
      }
    }
    case GET_ORDERS: {
      return {
        ...state,
        orders: [...state.orders, ...action.orders]
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

export const showOrders = (сurrentState) => ({ type: SHOW_ORDERS, сurrentState });

export const getOrdersAC = (orders) => {
  return {
    type: GET_ORDERS,
    orders
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

export const getOrders = (currentPage) => {
  return async (dispatch) => {
    const response = await ordersApi.getOrders(currentPage)
    if (response !== null) {
      dispatch(getOrdersAC(response.orders.slice(currentPage * 20, currentPage * 20 + 20)));
    }
  }
}

export const getColumns = () => {
  return async (dispatch) => {
    const columnsResponse = await ordersApi.getColumns();
    dispatch(getColumnsAC(columnsResponse));

  }
}

export const changeColumns = (payload) => {
  return (dispatch) => {
    dispatch(changeColumnsAC(payload));
  }
}

export default orderListReducer;