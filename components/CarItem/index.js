import react from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";
import { StyledButton } from "../StyledButton";

export const CarItem = (props) => {

    const { name, tagline, image } = props.car;

    return (
        <View style={styles.carContainer}>

      <ImageBackground 
      source={image} 
      style={styles.image}
      />

        <View style={styles.titles}>
          <Text style={styles.heading}>{name}</Text>
          <Text style={styles.subheading}>{tagline}</Text>
        </View>
        <View style={styles.buttonContainer}>
        <StyledButton type='primary'
         content={'custom order'}
         onPress={() => {
           console.log('Custom button pressed')
         }} />

        <StyledButton type='secondary'
         content={'EXISTING INVENTORY'}
         onPress={() => {
           console.log('Existing order pressed')
         }} />
        </View>
      </View>
    )
}