import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { backgrounds, text as textc } from '@/globals/colors'
import { font, gap, padding, rounded, text } from '@/globals/sizes'
import { flex, text as texta } from '@/globals/stlyes'
import Icon from "react-native-vector-icons/Ionicons"
import { Link } from 'expo-router'

const Footer = () => {
    return (
        <View style={[
            flex.flex,
            flex['flex-col'],
            flex['itesm-center'],
            gap[5],
            padding['y-5']
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
                    ]}><Icon name="heart" size={16} color={"white"} /></View>
                </View>
                <View style={[
                    flex.flex,
                    flex['flex-row'],
                    flex['itesm-start']
                ]}>
                    <Text style={[
                        text['xl'],
                        font['xl']
                    ]}>TheraLink Globals</Text>
                    <View style={[
                        rounded.full,
                        backgrounds['primary-50'],
                        padding[1]
                    ]}></View>
                </View>
            </View>
            <Text style={[
                texta.center,
                text.lg,
                padding["x-2"]
            ]}>Connecting hearts, fostering awareness, spreading kindness worldwide</Text>
            <View style={[
                flex.flex,
                flex['flex-row'],
                gap['x-5'],
            ]}>
                <Link href={"/"} style={[
                    textc.gray,
                    font.xl
                ]}>About</Link>
                <Link href={"/"} style={[
                    textc.gray,
                    font.xl
                ]}>Privacy</Link>
                <Link href={"/"} style={[
                    textc.gray,
                    font.xl
                ]}>Terms</Link>
                <Link href={"/"} style={[
                    textc.gray,
                    font.xl
                ]}>Support</Link>
            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({})