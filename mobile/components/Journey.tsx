import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { font, gap, margin, padding, rounded, text as texts, width } from '@/globals/sizes'
import { backgrounds, text } from '@/globals/colors'
import { flex, text as texta, transitions } from "@/globals/stlyes"
import { JOURNEY } from '@/constants/index'

const Journey = () => {
    return (
        <View style={[
            padding['x-5'],
            padding['y-5'],
            margin["y-5"]
        ]}>
            <Text style={[
                font.xl,
                texts["3xl"],
                texta.center
            ]}>Your Journey to Emotional Wellness</Text>
            <Text style={[
                texts.xl,
                texta.center,
                margin['y-4'],
                text.gray
            ]}>
                Simple steps to connect with care and begin your path to emotional awareness
            </Text>
            <View style={[
                flex.flex,
                flex['flex-col'],
                gap[6]
            ]}>
                {
                    JOURNEY.map(({ ico, label, description }, i) => (
                        <View key={i} style={[
                            flex.flex,
                            flex['flex-row'],
                            flex['itesm-start'], ,
                            padding["y-4"],
                            padding["x-3"],
                            gap[3],
                        ]}>
                            <View style={[
                                backgrounds['primary-100'],
                                padding[4],
                                rounded.full,
                                flex['itesm-center'],
                                flex['justify-center'],
                                {
                                    width: 50,
                                    height: 50
                                }
                            ]}>
                                {ico}
                            </View>
                            <View style={[
                                flex.flex,
                                flex['flex-col'],
                                gap['y-3']
                            ]}>
                                <Text style={[font.xl, texts['2xl'], text.gray]}>{label}</Text>
                                <Text style={[width['1/3'], font.lg, texts.xl, text.gray, {
                                    lineHeight: 28
                                }]}>{description}</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default Journey

const styles = StyleSheet.create({})