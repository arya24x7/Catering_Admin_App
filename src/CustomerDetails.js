import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect ,useState} from 'react'
import { Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const CustomerDetails = ({route}) => {
  
  
  
  const [Name,setName] =useState();
  const [Loc,setLoc] =useState();
  const [Phone,setPhone] =useState();
  const [Delivery,setDelivery]  =useState();
  
  

  const navigation = useNavigation();
  const {date,userID} = route.params;
  useEffect(()=>{
    //console.log("route",userID,date)
      fetchOrderDetails(userID,date);
      
  },[]);
  const fetchOrderDetails = async (selectedUserID, selectedDate) => {
    try {
      const documentSnapshot = await firestore()
        .collection('orderDetails')
        .doc(selectedUserID)
        .collection(selectedDate)
        .doc('details')
        .get();
  
      if (documentSnapshot.exists) {
        const {name,location,phoneNum,delivery} = documentSnapshot.data();
        setName(name);
        setLoc(location);
        setPhone(phoneNum);
        setDelivery(delivery);
      
       // console.log("lo",location);
        // Process the retrieved data here
      } else {
        console.log('Document does not exist.');
      }
    } catch (error) {
      console.log('Error fetching order details:', error);
    }
  };
  
  
  

  
  //const uid = 'abcd12345';


  return (
    <SafeAreaView>
        <View>
            <Appbar.Header>
            <Appbar.BackAction onPress={() => {navigation.navigate("Home")}} />
            <Appbar.Content titleStyle={{marginLeft:110,fontWeight:'bold',fontSize:24}} title="Customer Details"/>
          </Appbar.Header>
        </View>
        <View style={{marginHorizontal:30,marginVertical:30,backgroundColor:'white',height:625,borderRadius:20}}>
            <Text style={{height:80,fontSize:20,marginTop:50,marginHorizontal:30,color:'black'}}>Name:{Name}</Text>
            {/* <Text style={{height:55,fontSize:20,marginTop:40,marginLeft:30,color:'black'}}>Uid : {uid}</Text> */}
            <Text style={{height:85,fontSize:20,marginTop:20,marginHorizontal:30,color:'black'}}>Location : {Loc}</Text>
            <Text style={{height:55,fontSize:20,marginTop:40,marginLeft:30,color:'black'}}>Phone No : {Phone}</Text>
            <Text style={{height:55,fontSize:20,marginTop:40,marginLeft:30,color:'black'}}>OrderType : {Delivery}</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
export default CustomerDetails;