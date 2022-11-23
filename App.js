//Todo: 
// 1. Make a series of buttons with the names of the cities were gonna use. DONE
// 2. Make an array to store city names, and use that. DONE
// 3. Refactor ButtonsList to generate a button for each city name, to support adding more cities easily. DONE
// 4. Make the button layout prettier, add scrolling. DONE
// 5. Make the buttons change views. DONE
// 6. Add a back button to all the views (except the base one, of course). DONE
// 7. Find and add some pictures for all the cities. DONE
// 8. For the buttons corresponding to MY two cities, add some cool stuff


import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const CityButton = (props) => {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      <Text>{props.cityName}</Text>
    </TouchableOpacity>
  )
}

var BasicCityScreen = (props) => {
  return (
    <ScrollView centerContent={true}>
      <SafeAreaView style={styles.container}>
        <Text>Sample text here.</Text>
        <View style={styles.bottomcontainer}>
          <TouchableOpacity style={styles.backButton} onPress={props.onPress}>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const ButtonsList = () => {
  let cityNames = ["Savannah, Georgia", "Bangkok, Thailand", "Singapore, Singapore", "Dubai, UAE", "Miami, Florida", "Tokyo, Japan", "Rekavik, Iceland", "Shanghai, China", "Chicago, Illinois", "Paris, France", "New York City, New York", "Sydney, Australia", "Medellin, Columbia"];
  const [currView, setCurrView] = useState(0);

  var viewDictionary = {
    //"other" screens
    homeScreen: -2,
    cityList: 0,

    //city info screens
    Savannah: 1,
    Bangkok: 2,
    Singapore: 3,
    Dubai: 4,
    Miami: 5,
    Tokyo: 6,
    Rekavik: 7,
    Shanghai: 8,
    Chicago: 9,
    Paris: 10,
    newYorkCity: 11,
    Sydney: 12,
    Medellin: 13
  };

  //Creates keys for every city and puts them in the dictionary. Note: This means that 1-cityName.length+1 keys are off limits for use elsewhere
  for(let i = 0; i < cityNames.length; i++) {
    let city = cityNames[i]
    viewDictionary[city] = i+1;
  }

  let cityList=cityNames.map((city,index)=>{
    var dictCity = city;
    return <CityButton key={index} style={styles.button} cityName={city} onPress={() => setCurrView(viewDictionary[city])}></CityButton>
  })

  if(currView == viewDictionary.cityList) {
    return (
      <ScrollView centerContent={true}>
        <SafeAreaView style={styles.container}>
          {cityList}
        </SafeAreaView>
      </ScrollView>
      )
  }

  if(currView == viewDictionary.Savannah) {
    return (
      <View style={{justifyContent: "center",
        alignItems: "center", 
        backgroundColor: "purple"}}>
                 <Text> Hello bangkok! </Text>
      </View>
    )
  }

  if(currView == viewDictionary.Bangkok) {
    return (
      <BasicCityScreen onPress={() => setCurrView(0)}></BasicCityScreen>
    )
  }

  if(currView == viewDictionary.Singapore) {
    return (
      <BasicCityScreen onPress={() => setCurrView(0)}></BasicCityScreen>
    )
  }

  if(currView == viewDictionary.Dubai) {
    return (
      <BasicCityScreen onPress={() => setCurrView(0)}></BasicCityScreen>
    )
  }

  if(currView == viewDictionary.Miami) {
    return (
      <BasicCityScreen onPress={() => setCurrView(0)}></BasicCityScreen>
    )
  }

  if(currView == viewDictionary.Tokyo) {
    return (
      <BasicCityScreen onPress={() => setCurrView(0)}></BasicCityScreen>
    )
  }

  if(currView == viewDictionary.Rekavik) {
    return (
      <BasicCityScreen onPress={() => setCurrView(0)}></BasicCityScreen>
    )
  }

  if(currView == viewDictionary.Shanghai) {
    return (
      <BasicCityScreen onPress={() => setCurrView(0)}></BasicCityScreen>
    )
  }

  if(currView == viewDictionary.Chicago) {
    return (
      <BasicCityScreen onPress={() => setCurrView(0)}></BasicCityScreen>
    )
  }

  if(currView == viewDictionary.Paris) {
    return (
      <BasicCityScreen onPress={() => setCurrView(0)}></BasicCityScreen>
    )
  }

  if(currView == viewDictionary.newYorkCity) {
    return (
      <BasicCityScreen onPress={() => setCurrView(0)}></BasicCityScreen>
    )
  }

  if(currView == viewDictionary.Sydney) {
    return (
      <BasicCityScreen onPress={() => setCurrView(0)}></BasicCityScreen>
    )
  }

  if(currView == viewDictionary.Medellin) {
    return (
      <BasicCityScreen onPress={() => setCurrView(0)}></BasicCityScreen>
    )
  }
}

export default ButtonsList;

const styles = StyleSheet.create({
  container: {
    //Property that determines how much overall screen space is used by whatever uses this style
    flex: 0.5,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
    minHeight: 667,
  },
  bottomcontainer: {
    flex: 0.5,
    backgroundColor: '#EEEEEE',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    alignItems: 'bottom',
    minHeight: 667,
  },
  input: {
    //Changes the vertical size of the text box.
    height: 80,

    //Can be either a pre-set color or a hexadecimal value. Hexadecimal values can be formatted either as '#888' or '#888888' with the 2nd providing full RGB control
    borderColor: 'gray',

    //This changes how thick that gray line is.
    borderWidth: 1,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    minWidth: "48%",
    maxWidth: "48%",
    marginBottom: 6,
    backgroundColor: 'skyblue',
  },
  backButton: {
    alignItems: 'center',
    padding: 10,
    minWidth: "90%",
    marginBottom: 10,
    backgroundColor: 'gray',
  }
});