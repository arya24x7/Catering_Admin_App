import { StyleSheet, Text, View, FlatList,ScrollView } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import { Appbar } from 'react-native-paper';

const ListFoodItems = () => {

    const navigation = useNavigation();

    const foodList = [
        {ID: 1 , Name: "Qrst"},
        {ID: 2 , Name: "Abcd"},
        {ID: 3 , Name: "Wxyz"},
        {ID: 4 , Name: "Mnop"},
      ];

  return (
    <ScrollView nestedScrollEnabled={true}>
        <Appbar.Header>
            <Appbar.BackAction onPress={() => {navigation.navigate("OrderedItems")}} />
            <Appbar.Content titleStyle={{marginLeft:200,fontWeight:'bold',fontSize:24}} title="Food Items"/>
          </Appbar.Header>
        <FlatList
          data={foodList}
          style={{flex: 1, marginTop: 40}}
          renderItem={({item}) => (
              <View style={styles.container1}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text style={{fontSize:20,fontWeight:'bold',marginHorizontal:20,marginVertical:10,color:'black'}}>{item.Name}</Text>
                  </View>
              </View>
          )}
          keyExtractor={item => item.ID.toString()}
        />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})

export default ListFoodItems;