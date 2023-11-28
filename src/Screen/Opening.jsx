import { View, Text, Image, TouchableOpacity, StatusBar, StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

function Screen({ navigation }){
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#9ADE7B" />   
        <View style={styles.caildContainer}>
          <Text style={styles.title}>Nussa Do'a</Text>
            <Text style={styles.paragraph}>Hafallah Do'a- doa</Text>
          <Text style={styles.text}>"Berdoalah kepada Tuhanmu dengan rendah hati dan suara yang lembut. Sungguh, Dia tidak menyukai orang-orang yang melampaui batas" (QS Al-A'raf: 55)</Text>
        </View>

        <View style={styles.cardImage}>
          <Image style={styles.image}
            resizeMode="cover"
            source={require("../assets/image/wall.jpg")} />
              <TouchableOpacity style={styles.button}
                  onPress={()=> navigation.navigate("Home")}>
                  <Text style={styles.textbutton}>Baca Doa-Doa</Text>
              </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#ffffff'
  },
  caildContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'30%',
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    fontFamily: 'Poppins',
    color: '#008170',
  },
  paragraph: {
    color: '#9ADE7B',
    fontFamily: 'Poppins',
    fontWeight: 'regular',
    fontSize: 18,
    marginTop: '10%'
  },
  text: {
    color: '#008170', 
    fontFamily: 'Poppins',
    fontWeight: 'regular',
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 18
  },
  cardImage : {
    flex : 0.7,
    // backgroundColor :  '#ffffff',
    justifyContent: 'center',
    alignItems:'center',
  },
  image: {
    width: '80%',
    height: '80%',
    borderRadius: 25,
    position: 'absolute',
  },
    button: {
    alignItems: "center",
    backgroundColor: "#54B435",
    justifyContent:'center',
    marginTop: 20,
    height:'16%',
    width:'80%',
    borderRadius: 15,
    top:'49%',
  },
  textbutton: {
    textAlign: "center",
    fontSize: 25,
    color: "#ffffff",
  }
})

export default Screen
