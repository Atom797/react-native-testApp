import data from './Drivers.json';
import orderData from './Orders.json'

export const driversApi = {

    getDrivers(currentPage) {
        return Promise.resolve({ drivers: data.drivers });
    },
    getColumns() {
        return Promise.resolve(data.columns);
    }
}

export const ordersApi = {

    getOrders(currentPage) {
        return Promise.resolve({ orders: orderData.orders });
    },
    getColumns() {
        return Promise.resolve(orderData.columns);
    }
}

export const authAPI = {
    login(login, password) {
        return Promise.resolve({ login, password });
    }
}
