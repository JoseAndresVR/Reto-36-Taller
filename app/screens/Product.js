import {View, Text, StyleSheet, Button} from 'react-native'

export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text>BIENVENIDOS A MI TIENDA, SOY EL E1</Text>
        <Text style={{backgroundColor:'blue'}}>PRODUCTO 1: PAPITAS</Text>
        <Text style={{backgroundColor:'red'}}>PRODUCTO 2: SARITAS</Text>
        <Text style={{backgroundColor:'purple'}}>PRODUCTO 3: DORITOS</Text>
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('WellcomeE1');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });