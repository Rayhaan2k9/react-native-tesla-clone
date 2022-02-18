import React from "react";
import {View, Text, Image} from "react-native";
import { styles } from "../Header/styles";

export const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../tesla-assets/images/logo.png')} />
            <Image style={styles.menu} source={require('../../tesla-assets/images/menu.png')} />
        </View>
    )
}