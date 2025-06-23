import { Text, View } from 'react-native'
import React from 'react'
import { font, gap, margin, padding, text as texts } from '@/globals/sizes'
import { flex, text as texta } from "@/globals/stlyes"
import { backgrounds, Colors, text } from '@/globals/colors'
import Button from './Button'
import FeatherIcon from "react-native-vector-icons/Feather"

const CallToAction = () => {
    return (
        <View style={[
            padding['x-5'],
            padding['y-6'],
            margin["y-5"],
            backgrounds['primary-50'],
            flex.flex,
            flex['flex-col'],
            gap[4]
        ]}>
            <Text style={[
                font.xl,
                texts["3xl"],
                texta.center
            ]}>Ready for Caring Support?</Text>
            <Text style={[
                texts.xl,
                texta.center,
                margin['y-4'],
                text.gray
            ]}>
                Join thousands who have found comfort, understanding, and emotional growth through our caring community.
            </Text>
            <Button label={"Start Your Journey Today"} size="lg" rounded="2xl" ico={<FeatherIcon name='arrow-right' size={20} color={Colors.white} />} icoPosition="r" />
        </View>
    )
}

export default CallToAction