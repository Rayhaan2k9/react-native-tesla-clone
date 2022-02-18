import react from "react";
import { View, Text, ImageBackground, Alert } from "react-native";
import { styles } from "./styles";
import { StyledButton } from "../StyledButton";

export const CarItem = (props) => {

    const { name, tagline, image } = props.car;

    const alertMessage = () => {
      Alert.alert(
        "Ahh man!",
        "Work hard and you'll be able to afford it one day, Insha Allah! :)"
      )
    }

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
         onPress={() => alertMessage()} />

        <StyledButton type='secondary'
         content={'EXISTING INVENTORY'}
         onPress={() => alertMessage()} />
        </View>
      </View>
    )
}