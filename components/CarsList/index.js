import react from "react";
import {View, Text, FlatList, Dimensions} from 'react-native';
import { CarItem } from "../CarItem";
import { styles } from "../CarsList/styles";
import cars from "./cars";

export const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList
            data={cars}
            renderItem={({item}) => <CarItem car={item}/>}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}