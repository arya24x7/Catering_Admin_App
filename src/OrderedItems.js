import { View,StyleSheet} from 'react-native'
import React, { useEffect ,useState}from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {SelectList} from 'react-native-dropdown-select-list';
import { Appbar } from 'react-native-paper';
import Btn from './Btn';
import { Text } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const OrderedItems = ({route}) => {
  const navigation = useNavigation();
  const {date,userID} = route.params;


    //const [selectDate, setSelectDate] = React.useState('');

    // var Date = [
    //     {key: '1', value: '23-06-23'},
    //     {key: '2', value: '22-06-23'},
    //     {key: '3', value: '21-06-23'},
    //     {key: '4', value: '20-06-23'},
    //   ];
      const[bfCount,setBfCount] = useState()
      const[lunchCount,setLunchCount] =useState();
      const[snacksCount,setSnacksCount] = useState();
      const[dinnerCount,setDinnerCount] = useState();

      
      useEffect(() =>{
        fetchOrderDetails(userID,date);
      },[]);


      const fetchOrderDetails = async (selectedUserID, selectedDate) => {
        try {
          console.log(selectedDate,selectedUserID)
          const documentSnapshot = await firestore()
            .collection('orderDetails')
            .doc(selectedUserID)
            .collection(selectedDate)
            .doc('details')
            .get();
           // console.log(documentSnapshot.data())
      
          if (documentSnapshot.exists) {
            const {bfCount,lunchCount,snacksCount,dinnerCount} = documentSnapshot.data();
            console.log(bfCount,lunchCount)
            setBfCount(bfCount);
            setLunchCount(lunchCount);
            setSnacksCount(snacksCount);
            setDinnerCount(dinnerCount);
            
          
           // console.log("lo",location);
            // Process the retrieved data here
          } else {
            console.log('Document does not exist.');
          }
        } catch (error) {
          console.log('Error fetching order details:', error);
        }
      };

      const handleButton =(userID,date,chooseTime) =>{
        navigation.navigate('ListFoodItems',{userID,date,chooseTime});

      }

  return (
    <SafeAreaView>
        <View>
          <Appbar.Header>
            <Appbar.BackAction onPress={() => {navigation.navigate("Home")}} />
            <Appbar.Content titleStyle={{marginLeft:200,fontWeight:'bold',fontSize:24}} title="Item List"/>
          </Appbar.Header>
          {/* <SelectList
              data={Date}
              setSelected={val => setSelectDate(val)}
              save="value"
              placeholder="ದಿನಾಂಕ"
              boxStyles={{width: 100,marginTop:20,marginLeft:20}}
              inputStyles={{color: 'black'}}
              dropdownStyles={{width: 100,marginLeft:20}}
              dropdownTextStyles={{color: 'black'}}
              maxHeight={150}
            /> */}
            <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 50,
            height: 100,
            borderRadius: 10,
            // backgroundColor:'white'
          }}
        >
          {/* <Text style={{ fontSize: 25, color: 'black', marginTop: 25 }}>ಬ್ರೇಕ್ಫಾಸ್ಟ್</Text> */}
          <Text style={{
            fontSize: 25,
              padding: 10,
              color: 'rgb(71, 71, 72)',
              width: 110,
              height: 60,
              marginTop: 25,
              marginLeft:10
            }} >
            ಬ್ರೇಕ್ಫಾಸ್ಟ್
          </Text>
          <Text
            style={{
              fontSize: 25,
              padding: 10,
              color: 'rgb(71, 71, 72)',
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 10,
              width: 70,
              height: 50,
              marginTop: 25,
            }}
          >
           { bfCount}
          </Text>
          <Btn
            bgColor={'rgba(0, 160, 116, 1)'}
            BtnMgTop={25}
            textColor={'#FEF6E1'}
            btnLabel={'ಪಟ್ಟಿ'}
            btnwidth={70}
            btnHeight={50}
            txtmargin={7}
            btnMarginRight={18}
            Press={() => handleButton(userID,date,"ಬ್ರೇಕ್ಫಾಸ್ಟ್")}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 80,
            backgroundColor: 'white',
            height: 100,
            borderRadius: 10,
          }}
        >
          <Text style={{
            fontSize: 25,
              padding: 10,
              color: 'rgb(71, 71, 72)',
              width: 110,
              height: 60,
              marginTop: 25,
              marginLeft:10
            }} >
            ಲಂಚ್
          </Text>
          {/* <Text style={{ fontSize: 25, padding: 10, color: 'rgb(71, 71, 72)', marginTop: 25 }}>ಲಂಚ್</Text> */}
          <Text
            style={{
              fontSize: 25,
              padding: 10,
              color: 'rgb(71, 71, 72)',
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 10,
              width: 70,
              height: 50,
              marginTop: 25,
              marginLeft: 2,
            }}
          >
           { lunchCount}
          </Text>
          <Btn
            bgColor={'rgba(0, 160, 116, 1)'}
            BtnMgTop={25}
            textColor={'#FEF6E1'}
            btnLabel={'ಪಟ್ಟಿ'}
            btnwidth={70}
            btnHeight={50}
            txtmargin={7}
            btnMarginRight={18}
            Press={() => handleButton(userID,date,"ಲಂಚ್")}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 80,
            backgroundColor: 'white',
            height: 100,
            borderRadius: 10,
          }}
        >
          <Text style={{
            fontSize: 25,
              padding: 10,
              color: 'rgb(71, 71, 72)',
              width: 110,
              height: 60,
              marginTop: 25,
              marginLeft:10
            }} >
            ಸ್ನಾಕ್ಸ್
          </Text>
          {/* <Text style={{ fontSize: 25, padding: 10, color: 'rgb(71, 71, 72)', marginTop: 25 }}>ಸ್ನಾಕ್ಸ್</Text> */}
          <Text
            style={{
              fontSize: 25,
              padding: 10,
              color: 'rgb(71, 71, 72)',
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 10,
              width: 70,
              height: 50,
              marginTop: 25,
              marginLeft: 2,
            }}
          >
            {snacksCount}
          </Text>
          <Btn
            bgColor={'rgba(0, 160, 116, 1)'}
            BtnMgTop={25}
            textColor={'#FEF6E1'}
            btnLabel={'ಪಟ್ಟಿ'}
            btnwidth={70}
            btnHeight={50}
            txtmargin={7}
            btnMarginRight={18}
            Press={() => handleButton(userID,date,"ಸ್ನಾಕ್ಸ್")}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 80,
            backgroundColor: 'white',
            height: 100,
            borderRadius: 10,
          }}
        >
          <Text style={{
            fontSize: 25,
              padding: 10,
              color: 'rgb(71, 71, 72)',
              width: 110,
              height: 60,
              marginTop: 25,
              marginLeft:10
            }} >
            ಡಿನ್ನರ್
          </Text>
          {/* <Text style={{ fontSize: 25, padding: 10, color: 'rgb(71, 71, 72)', marginTop: 25 }}>ಡಿನ್ನರ್</Text> */}
          <Text
            style={{
              fontSize: 25,
              padding: 10,
              color: 'rgb(71, 71, 72)',
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 10,
              width: 70,
              height: 50,
              marginTop: 25,
              marginLeft: 2,
            }}
          >
            {dinnerCount}
          </Text>
          <Btn
            bgColor={'rgba(0, 160, 116, 1)'}
            BtnMgTop={25}
            textColor={'#FEF6E1'}
            btnLabel={'ಪಟ್ಟಿ'}
            btnwidth={70}
            btnHeight={50}
            txtmargin={7}
            btnMarginRight={18}
            Press={() => handleButton(userID,date,"ಡಿನ್ನರ್")}
          />
        </View>
        <Btn
          bgColor={'#A0002C'}
          textColor={'#FEF6E1'}
          btnLabel={'Send Quotation'}
          btnwidth={325}
          btnHeight={60}
          txtmargin={11}
          BtnMgTop={160}
          btnMarginleft={35}
          // Press={() => navigation.navigate('ListFoodItems')}
        />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({})

export default OrderedItems;