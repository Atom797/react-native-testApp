import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native'
import { Preloader } from './common/Preloader/Preloader';
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { getOrders } from '../redux/orderListReducer'
import data from '../api/Orders.json';

const OrderListView = styled.View`
  height: 30%;
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
      setTimeout(() => {
        dispatch(getOrders(currentPage));
        setLoading(false)
      }, 3000)
    }
  }, [isLoading])

  let arrColumns = data.columns.map(el => {
    return el.text
  })

  let orders = useSelector(state => state.orderListReducer.orders)

  let arrLenght = [160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160]

  let arrRows = orders.map((dr, index) => {
    return (
      <TableWrapper key={dr.ID} style={styles.row}>
        {<Cell data={dr.ID} style={styles.cell}></Cell>}
        {<Cell data={dr.OrderHealth} style={styles.cell}></Cell>}
        {<Cell data={dr.PassagNumber} style={{ width: 160, alignItems: 'center', backgroundColor: "rgb(233, 233, 233)" }}></Cell>}
        {<Cell data={dr.PassagComment} style={styles.cell}></Cell>}
        {<Cell data={dr.DriverID} style={styles.cell}></Cell>}
        {<Cell data={dr.GovNumber} style={styles.cell}></Cell>}
        {<Cell data={dr.Status} style={{ width: 160, alignItems: 'center', backgroundColor: "rgb(233, 233, 233)" }}></Cell>}
        {<Cell data={dr.AddressFrom} style={styles.cell}></Cell>}
        {<Cell data={dr.TimeFrom} style={{ width: 160, alignItems: 'center', backgroundColor: "rgb(233, 233, 233)" }}></Cell>}
        {<Cell data={dr.AddressTo} style={styles.cell}></Cell>}
        {<Cell data={dr.Other} style={styles.cell}></Cell>}
        {<Cell data={dr.Promocode} style={styles.cell}></Cell>}
        {<Cell data={dr.creatDate} style={styles.cell}></Cell>}
      </TableWrapper>
    )
  })

  return (
    <OrderListView>
      <HeaderView>
        <Text>Список заказов</Text>
      </HeaderView>
      <Body>
        {isLoading ? <Preloader /> :
          <ScrollView >
            <View>
              <ScrollView horizontal={true}>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                  <Row data={arrColumns} widthArr={arrLenght} textStyle={styles.text} style={{ backgroundColor: '#efefef' }} />
                  {arrRows}
                </Table>
              </ScrollView>
            </View>
          </ScrollView>}
      </Body>
    </OrderListView>
  )
}

const styles = StyleSheet.create({
  text: { textAlign: 'center', fontWeight: '50' },
  row: { flexDirection: 'row' },
  cell: { width: 160, alignItems: 'center' }
});