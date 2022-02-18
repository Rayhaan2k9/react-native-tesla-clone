import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from "../StyledButton/styles";

export const StyledButton = (props) => {

    const type = props.type;
    const onPress = props.onPress
    
    const bgColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style={styles.container}>
            <TouchableOpacity
             style={[styles.button, {backgroundColor: bgColor}]}
             onPress={onPress}>
            <Text style={[styles.btnText], {color: textColor}}>{props.content}</Text>

            </TouchableOpacity>
        </View>
    )
}