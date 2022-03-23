import React from "react";
import { Text } from "react-native";
import Styles from './MediumTitle.style';

const MediumTitle =({title})=>{
    return (
        <Text style={Styles.MediumTitle}>{title}</Text>
    )
    }
    
export default MediumTitle;