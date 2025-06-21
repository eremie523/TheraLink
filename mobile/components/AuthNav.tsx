import { View, Text, StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import React from 'react'
import Button from './Button'
import { flex } from '@/globals/stlyes'
import { font, gap, padding, rounded, text } from '@/globals/sizes'
import { backgrounds } from '@/globals/colors'

const AuthNav = () => {
    return (
        <View style={[
            styles.pt,
            styles['white-bg'],
            flex.flex,
            flex['flex-row'],
            flex['justify-betwwen'],
            flex['itesm-center'],
            padding[2],
            gap[2],
            {
                position: "sticky",
                top: 0
            }
        ]}>
            <View style={[
                flex.flex,
                flex['flex-row'],
                flex['itesm-center'],
                gap[2]
            ]}>
                <View>
                    <View style={[
                        backgrounds['primary-100'],
                        padding[2],
                        rounded.lg
                    ]}><Icon name="heart" size={20} color={"white"} /></View>
                </View>
                <View style={[
                    flex.flex,
                    flex['flex-row'],
                    flex['itesm-start']
                ]}>
                    <Text style={[
                        text['2xl'],
                        font['2xl']
                    ]}>TheraLink</Text>
                    <View style={[
                        rounded.full,
                        backgrounds['primary-50'],
                        padding[1]
                    ]}></View>
                </View>
            </View>
            <Button label='Sign In' />
        </View>
    )
}

const styles = StyleSheet.create({
    "pt": {
        paddingTop: 50
    },
    "white-bg": {
        backgroundColor: "white"
    },
    "justify-bet": {
        justifyContent: "space-between"
    }
})


export default AuthNav