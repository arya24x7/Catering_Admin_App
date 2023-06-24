import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const CustomerDetails = () => {

  const navigation = useNavigation();

  const Name ='Neha';
  const Loc='No.290,KHB Colony 5th Block Koramangala Bangalore- 560095';
  const Phone='9876543210';
  const Delivery = 'Delivery';
  const uid = 'abcd12345';


  return (
    <SafeAreaView>
        <View>
            <Appbar.Header>
            <Appbar.BackAction onPress={() => {navigation.navigate("Home")}} />
            <Appbar.Content titleStyle={{marginLeft:110,fontWeight:'bold',fontSize:24}} title="Customer Details"/>
          </Appbar.Header>
        </View>
        <View style={{marginHorizontal:30,marginVertical:30,backgroundColor:'white',height:625,borderRadius:20}}>
            <Text style={{height:80,fontSize:50,marginTop:50,marginHorizontal:30,color:'black'}}>{Name}</Text>
            <Text style={{height:55,fontSize:20,marginTop:40,marginLeft:30,color:'black'}}>Uid : {uid}</Text>
            <Text style={{height:85,fontSize:20,marginTop:20,marginHorizontal:30,color:'black'}}>Location : {Loc}</Text>
            <Text style={{height:55,fontSize:20,marginTop:40,marginLeft:30,color:'black'}}>Phone No : {Phone}</Text>
            <Text style={{height:55,fontSize:20,marginTop:40,marginLeft:30,color:'black'}}>OrderType : {Delivery}</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
export default CustomerDetails;