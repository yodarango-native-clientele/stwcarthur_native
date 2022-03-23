import React from "react";
import { View } from "react-native";

// atoms
import StandardIcon from "../../atoms/images/StandardIcon";
import LargeTitle from "../../atoms/texts/LargeTitle";

// styles
import Styles from './HeaderInfo.style';

const HeaderInfo =({title})=>{
    return (
        <View style={Styles.HeaderInfo}>
            <StandardIcon style={Styles.Icon} logoSource={'https://scontent.fcae1-1.fna.fbcdn.net/v/t1.18169-9/10252045_10152400523628908_1916257529824937685_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=FGKLfuAhEKYAX-FCmZI&_nc_ht=scontent.fcae1-1.fna&oh=00_AT98Cy4Lmu2RRfsDWdRTtMtvOnOJH0MWAn1cEALSW_oP-Q&oe=623A3A6A'}/>
            <LargeTitle title={title}/>
        </View>
    )
    }
    
export default HeaderInfo;