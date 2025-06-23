import { View } from 'react-native'
import React from 'react'
import AntIcon from "react-native-vector-icons/AntDesign";
import { flex } from '@/globals/stlyes';
import { text } from '@/globals/colors';

const Ratings = ({ count }: { count: number }) => {
    return (
        <View style={[
            flex["flex-row"],
        ]}>
            {
                Array.from({ length: count }).map((i, x) => (<AntIcon key={x} name="star" size={20} style={[
                    text.gold
                ]} />))
            }
        </View>
    )
}

export default Ratings