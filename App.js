import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { CarItem } from './components/CarItem';
import { CarsList } from './components/CarsList';

export default function App() {
  return (
    <View style={styles.container}>
      

      <CarsList />
      {/* <CarItem 
      name={"Model S"}
      tagline={"Starting at £65600"}
      taglineCTA={"Order now for Touchless Delivery"}
      img={require('./tesla-assets/images/ModelS.jpeg')}
      /> */}

      


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
