import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({

    carContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
      },
      heading: {
        fontSize: 40,
        fontWeight: '600',
      },
      subheading: {
        fontSize: 16,
        color: '#5c5e62'
      },
      
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },

      buttonContainer: {
        position: "absolute",
        bottom: 50,
        width: '100%'
    }

});