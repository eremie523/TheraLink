import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { font, gap, margin, padding, rounded, text as texts, width } from '@/globals/sizes'
import { backgrounds, text } from '@/globals/colors'
import { flex, text as texta, transitions } from "@/globals/stlyes"
import { FEATURES } from '@/constants/HeroFeaturs'

const Features = () => {
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
            ]}>Experience Authentic Care</Text>
            <Text style={[
                texts.xl,
                texta.center,
                margin['y-4'],
                text.gray
            ]}>
                Connect with verified professionals who provide genuine emotional support
            </Text>
            <View style={[
                flex.flex,
                flex['flex-col'],
                gap[6]
            ]}>
                {
                    FEATURES.map(({ ico, label, description, tilt }, i) => (
                        <View key={i} style={[
                            flex.flex,
                            flex['flex-row'],
                            flex['itesm-center'],
                            (tilt === "br") ? rounded['2xl'] : rounded['3xl'],
                            padding[5],
                            gap[3],
                            (i === 0) ? backgrounds['primary-100']
                                : (i === 1) ? backgrounds['primary-75']
                                    : (i === 2) && backgrounds['primary-200'],
                            (tilt === "br") ? transitions.rotate2deg : transitions.rotaten2deg,
                            {
                                paddingVertical: 30,
                            }
                        ]}>
                            <View style={[
                                (tilt === "br") ? backgrounds["secondary-50"] : backgrounds['primary-100'],
                                padding[4],
                                (tilt === "br") ? rounded.full : rounded.xl
                            ]}>
                                {ico}
                            </View>
                            <View style={[
                                flex.flex,
                                flex['flex-col'],
                                gap['y-3']
                            ]}>
                                <Text style={[width['1/3'], font.xl, texts['2xl'], (tilt === "br") ? text.white : text.black]}>{label}</Text>
                                <Text style={[width['1/3'], font.lg, texts.lg, (tilt === "br") ? text.white : text.black, {
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

export default Features

const styles = StyleSheet.create({})