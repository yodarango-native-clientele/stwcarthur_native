import React from "react";
import { View } from "react-native";

// molecules
import HeaderInfo from "../molecules/layouts/HeaderInfo";

//styles
import Styles from "./Header.style";

const Header =({title})=>{

return (
    <View style={Styles.Header} >
        <HeaderInfo title={title}/>
    </View>
)
}

export default Header;