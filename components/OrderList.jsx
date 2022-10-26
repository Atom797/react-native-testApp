import { Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native'
import { Preloader } from './common/Preloader/Preloader';
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { getOrders } from '../redux/orderListReducer'
import data from '../api/Orders.json';

const OrderListView = styled.View`
    height: 40%;
    border-radius: 20px;
`
const HeaderView = styled.View`
    display: flex;
    border-radius: 8px;
    height: 7%;
    flex-direction: row;
    align-items: center;
    background-color: #f3f3f3;
`

const Body = styled.View`
    flex:1;
    background-color: white;
    height: 10px;
`

export const OrderList = () => {

  const [isLoading, setLoading] = useState(true);
  const [currentPage, setcurrentPage] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(getOrders(currentPage));
      setLoading(false)
    }
  }, [isLoading])

  let columns = data.columns;
  let arrColumns = columns.map(el => {
    return el.dataField
  })

  // const z = (u) => {
  //   let arrInformation = [];
  //   for (let i in u) {
  //     arrInformation.push(u.i)
  //   }
  //   return arrInformation
  // }

  let orders = useSelector(state => state.orderListReducer.orders)
  let arrRows = data.orders.map(el => {
    let arrInformation = [];
    for (let i in el) {
      arrInformation.push(el[i])
    }
    return <Row data={arrInformation} />
  })

  return (
    <OrderListView>
      <HeaderView>
        <Text>Список заказов</Text>
      </HeaderView>
      <Body>
        <ScrollView >
          <View>
            <ScrollView horizontal={true}>
              <Table>
                <Row data={arrColumns} />
                {arrRows}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </Body>
    </OrderListView>
  )
}