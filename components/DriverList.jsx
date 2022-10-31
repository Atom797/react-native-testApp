import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native'
import { Preloader } from './common/Preloader/Preloader';
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { getDrivers } from '../redux/driverListReducer'
import data from '../api/Drivers.json';
import IconSignal from "react-native-vector-icons/Entypo";
import IconClose from "react-native-vector-icons/AntDesign";

const DriverListView = styled.View`
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


export const DriverList = () => {

  const [isLoading, setLoading] = useState(true);
  const [currentPage, setcurrentPage] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        dispatch(getDrivers(currentPage));
        setLoading(false)
      }, 3000)
    }
  }, [isLoading, currentPage])

  let arrColumns = data.columns.map(el => {
    return el.text
  })

  let drivers = useSelector(state => state.driverListReducer.drivers)

  let arrLenght = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]


  const elementBalance = (dr) => (
    <View style={{ width: '100%', height: 5, backgroundColor: '#ddd' }}>
      {dr.Balance < 20 ? <View style={{ width: dr.Balance, height: 5, backgroundColor: 'red' }} /> : dr.Balance < 50 ? <View style={{ width: dr.Balance, height: 5, backgroundColor: 'orange' }} /> : <View style={{ width: dr.Balance, height: 5, backgroundColor: 'green' }} />
      }
    </View>
  )

  const elementConnectionSt = (dr) => {
    return <View style={{ alignItems: "center" }}>
      {dr.ConnectionSt ? <IconSignal name="signal" /> : <IconClose name="close" color="red" />}
    </View>
  }

  let arrRows = drivers.map((dr, index) => {
    return (
      <TableWrapper key={dr.ID} style={styles.row}>
        {<Cell style={styles.cell} data={dr.ID}></Cell>}
        {<Cell style={styles.cell} data={dr.Name}></Cell>}
        {<Cell style={styles.cell} data={dr.Surname}></Cell>}
        {<Cell style={styles.cell} data={dr.Patronymic}></Cell>}
        {<Cell style={styles.cell} data={dr.Status}></Cell>}
        {<Cell style={styles.cell} data={dr.PhoneNumber}></Cell>}
        {<Cell style={styles.cell} data={dr.SessionType}></Cell>}
        {<Cell style={styles.cell} data={dr.Ranking}></Cell>}
        {<Cell style={{ width: 100, alignItems: 'center', backgroundColor: "rgb(233, 233, 233)" }} data={dr.Division}></Cell>}
        {<Cell style={styles.cell} data={dr.StateNumber}></Cell>}
        {<Cell style={styles.cell} data={dr.MarkingPlate}></Cell>}
        {<Cell style={styles.cell} data={dr.Model}></Cell>}
        {<Cell style={styles.cell} data={<IconSignal name="controller-record" color={dr.Color} />} ></Cell>}
        {<Cell style={{ width: 100, alignItems: 'center', backgroundColor: "rgb(233, 233, 233)" }} data={elementBalance(dr)} />}
        {<Cell style={{ width: 100, alignItems: 'center', backgroundColor: "rgb(233, 233, 233)" }} data={elementConnectionSt(dr)} />}
        {<Cell style={styles.cell} data={dr.TimeLeft}>{dr.TimeLeft}</Cell>}
        {<Cell style={styles.cell} data={dr.TimeStampBegin}>{dr.TimeStampBegin}</Cell>}
        {<Cell style={styles.cell} data={dr.TimeStampEnd}>{dr.TimeStampEnd}</Cell>}
      </TableWrapper>
    )
  })



  return (
    <DriverListView>
      <HeaderView>
        <Text>Список водителей</Text>
      </HeaderView>
      <Body>
        {isLoading ? <Preloader /> :
          <ScrollView>
            <View>
              <ScrollView horizontal={true}>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                  <Row data={arrColumns} widthArr={arrLenght} textStyle={styles.text} style={{ backgroundColor: '#efefef', height: 40, }} />
                  {arrRows}
                </Table>
              </ScrollView>
            </View>
          </ScrollView>
        }
      </Body>
    </DriverListView>
  )
}

const styles = StyleSheet.create({
  text: { textAlign: 'center', fontWeight: '50' },
  row: { flexDirection: 'row' },
  cell: { width: 100, alignItems: 'center' }
});