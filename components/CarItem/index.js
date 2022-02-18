import react from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";

export const CarItem = () => {
    return (
        <View style={styles.carContainer}>

      <ImageBackground 
      source={require('../../tesla-assets/images/ModelS.jpeg')} 
      style={styles.image}
      />

        <View style={styles.titles}>
          <Text style={styles.heading}>Model S</Text>
          <Text style={styles.subheading}>Starting at £60,000</Text>
        </View>

      </View>
    )
}