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

const ButtonsList = () => {
  let cityNames = ["Savannah, Georgia", "Bangkok, Thailand", "Singapore, Singapore", "Dubai, UAE", "Miami, Florida", "Tokyo, Japan", "Rekavik, Iceland", "Shanghai, China", "Chicago, Illinois", "Paris, France", "New York City, New York", "Sydney, Australia", "Medellin, Columbia"];
  const [currView, setCurrView] = useState(0);
  //CurrView Chart:
  // 0: Home menu for city selection
  // 1-13: Pages containing information on specific cities

  //This is a really cool trick.
  let cityList=cityNames.map((city,index)=>{
    return <CityButton key={index} style={styles.button} cityName={city} onPress={() => setCurrView(index+1)}></CityButton>
  })

  //The home view
  if(currView == 0) {
    return (
      <ScrollView centerContent={true}>
        <SafeAreaView style={styles.container}>
          {cityList}
        </SafeAreaView>
      </ScrollView>
      )
  }

  //View for info on Savannah, Georgia
  if(currView == 1) {
    return (
      <ScrollView centerContent={true}>
        <SafeAreaView style={styles.container}>
          <Text>Sample text here.</Text>
          <View style={styles.bottomcontainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => setCurrView(0)}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }

  //View for info on Bangkok, Thailand
  if(currView == 2) {
    return (
      <ScrollView centerContent={true}>
        <SafeAreaView style={styles.container}>
          <Text>Sample text here.</Text>
          <View style={styles.bottomcontainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => setCurrView(0)}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }

  //View for info on Singapore, Singapore
  if(currView == 3) {
    return (
      <ScrollView centerContent={true}>
        <SafeAreaView style={styles.container}>
          <Text>Sample text here.</Text>
          <View style={styles.bottomcontainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => setCurrView(0)}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }

  //View for info on Dubai, UAE
  if(currView == 4) {
    return (
      <ScrollView centerContent={true}>
        <SafeAreaView style={styles.container}>
          <Text>Sample text here.</Text>
          <View style={styles.bottomcontainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => setCurrView(0)}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }

  //View for info on Miami, Florida
  if(currView == 5) {
    return (
      <ScrollView centerContent={true}>
        <SafeAreaView style={styles.container}>
          <Text>Sample text here.</Text>
          <View style={styles.bottomcontainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => setCurrView(0)}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }

  //View for info on Tokyo, Japan
  if(currView == 6) {
    return (
      <ScrollView centerContent={true}>
        <SafeAreaView style={styles.container}>
          <Text>Sample text here.</Text>
          <View style={styles.bottomcontainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => setCurrView(0)}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }

  //View for info on Rekavik, Iceland
  if(currView == 7) {
    return (
      <ScrollView centerContent={true}>
        <SafeAreaView style={styles.container}>
          <Text>Sample text here.</Text>
          <View style={styles.bottomcontainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => setCurrView(0)}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }

  //View for info on Shanghai, China
  if(currView == 8) {
    return (
      <ScrollView centerContent={true}>
        <SafeAreaView style={styles.container}>
          <Text>Sample text here.</Text>
          <View style={styles.bottomcontainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => setCurrView(0)}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }

  //View for info on Chicago, Illinois
  if(currView == 9) {
    return (
      <ScrollView centerContent={true}>
        <SafeAreaView style={styles.container}>
          <Text>Sample text here.</Text>
          <View style={styles.bottomcontainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => setCurrView(0)}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }

  //View for info on Paris, France
  if(currView == 10) {
    return (
      <ScrollView centerContent={true}>
        <SafeAreaView style={styles.container}>
          <Text>Sample text here.</Text>
          <View style={styles.bottomcontainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => setCurrView(0)}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }

  //View for info on New York City, New York
  if(currView == 11) {
    return (
      <ScrollView centerContent={true}>
        <SafeAreaView style={styles.container}>
          <Text>Sample text here.</Text>
          <View style={styles.bottomcontainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => setCurrView(0)}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }

  //View for info on Sydney, Australia
  if(currView == 12) {
    return (
      <ScrollView centerContent={true}>
        <SafeAreaView style={styles.container}>
          <Text>Sample text here.</Text>
          <View style={styles.bottomcontainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => setCurrView(0)}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }

  //View for info on Medellin, Columbia
  if(currView == 13) {
    return (
      <ScrollView centerContent={true}>
        <SafeAreaView style={styles.container}>
          <Text>Sample text here.</Text>
          <View style={styles.bottomcontainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => setCurrView(0)}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }
}

function changeCurrView(currView) {
  if(currView != 0) return(<Text style={{color: '#888'}}>This is a new view!</Text>)
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