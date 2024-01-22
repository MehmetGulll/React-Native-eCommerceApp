import React from 'react'
import {TouchableOpacity,Text,StyleSheet} from 'react-native'

function Button({onPress,color,fontSize,text, backgroundColor,borderRadius, borderTopLeftRadius, borderBottomLeftRadius}){
    return(
        <TouchableOpacity style = {{...styles.buttonContainer, backgroundColor:backgroundColor, borderRadius:borderRadius, borderTopLeftRadius:borderTopLeftRadius, borderBottomLeftRadius:borderBottomLeftRadius}} onPress={onPress} >
            <Text style ={{fontSize:fontSize, color:color}} >{text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonContainer:{
        alignItems: "center",
        backgroundColor: "#08e8de",
        borderRadius: 15,
        padding: 15,
    }
})

export default Button;