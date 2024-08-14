
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

/*const OnboardScreen = () => {
  return (
    <View style={styles.onboardScreen}>
      <View style={styles.iphone14ProMax1} />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone14ProMax1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.buttonGeneralBg,
    overflow: "hidden",
  },
  onboardScreen: {
    width: 784,
    height: 1692,
  },
});

export default OnboardScreen;*/

const Onboard = ({navigation}) => {
    return (
        <SafeAreaView style ={{flex: 1, backgroundColor: COLORS.primary}}>
             <StatusBar backgroundColor = {COLORS.primary}/>
        </SafeAreaView>

       

    );
}
export default Onboard;
