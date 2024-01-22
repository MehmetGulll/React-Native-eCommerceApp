import React from 'react'
import {View,TextInput,StyleSheet} from 'react-native'

function Input({placeholder,secureTextEntry,onChangeText, keyboardType, value, maxLength, marginHorizontal, borderWidth, style, editable=true}){
    return(
        <TextInput placeholder={placeholder} style = {[styles.inputContainer, style]} secureTextEntry={secureTextEntry} onChangeText={onChangeText} keyboardType={keyboardType} value = {value} maxLength={maxLength} marginHorizontal={marginHorizontal} borderWidth={borderWidth} editable={editable} />
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        padding:15,
        borderWidth:1,
        borderColor:'#d3d3d3',
        borderRadius:12,
        backgroundColor:'#fff',
        width:'100%'
    }
})

export default Input;