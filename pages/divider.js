import React,{useState} from 'react';
import { Stylesheet, View } from 'react-native'


function Dividerline(props) {
    return(
        <View style={{height: props.height, width: props.width, backgroundColor:props.color, alignSelf:props.align, marginBottom:16, borderRadius:20}}></View>
    )
}

export default Dividerline;