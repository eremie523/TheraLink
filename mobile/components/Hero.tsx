import { View, Text, Dimensions } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Button from "@/components/Button";
import Ratings from "@/components/Ratings";
import { flex, text as texta } from "../globals/stlyes";
import { gap, margin, padding, rounded, width, text as texts, font } from "@/globals/sizes";
import { backgrounds, Colors, text } from "@/globals/colors";
import HeroFeatures from "@/constants/HeroFeaturs";

const Hero = () => {
    return (
        <View style={[
            flex.flex,
            flex["flex-col"],
            gap["y-4"]
        ]}>
            <View style={[
                flex.flex,
                gap[4],
                padding["y-3"]
            ]}>
                <View style={[
                    flex.flex,
                    flex["flex-row"],
                    flex["itesm-center"],
                    // flex["justify-center"],
                    gap[1],
                    margin["x-2"],
                    padding[3],
                    padding["x-4"],
                    backgrounds["primary-50"],
                    rounded.pill,
                ]}>
                    <Icon name="shield-checkmark-outline" size={20} />
                    <Text style={[
                        text["primary-200"],
                        texts.lg,
                        flex.flex,
                        width.full,
                        gap[1],
                        texta.center
                    ]}>
                        <Text>100% Verified Care Providers</Text> <View style={[
                            padding[0.5],
                            backgrounds["primary-200"],
                            rounded.full,
                        ]} /> <Text>Zero Frauds Guaranteed</Text>
                    </Text>
                </View>

                <View style={[
                    flex["itesm-center"]
                ]}>
                    <Text style={[texts["4xl"], font["header"], texta.center, {
                        lineHeight: 55
                    }]}>Trusted emotional support from</Text>
                    <Text style={[texts["4xl"], font["header"], texta.center, {
                        lineHeight: 55
                    }, text["primary-100"]]}>Verified</Text>
                    <Text style={[texts["4xl"], font["header"], texta.center, {
                        lineHeight: 55
                    }]}>Caring Professionals</Text>
                </View>


            </View>
            <Text style={[
                padding["x-4"],
                texts["2xl"],
                texta.center,
                padding["y-2"],
                text.gray,
                font.lg,
                {
                    lineHeight: 33
                }
            ]}>Connect with identity-verified care providers who understand your needs. Every professional is authenticated to ensure genuine, safe support.</Text>
            <View style={[
                flex["flex-row"],
                flex["itesm-center"],
                flex["justify-center"],
                margin["y-4"],
                gap["2"],
            ]}>
                <Ratings count={5} />
                <Text style={[
                    texts["xl"],
                    text.gray
                ]}>4.9/5 from 2,000+ sessions</Text>
            </View>
            <View style={[
                flex.flex,
                flex["flex-col"],
                gap["y-3"],
                padding["x-3"]
            ]}>
                <Button label="Find Your Care Provider" ico={<FontAwesomeIcon name="angle-right" size={18} color={Colors.white} />} icoPosition="r" rounded={"xl"} size={"lg"} full />
                <Button label="How it Works" variant={"outlined"} rounded={"xl"} size={"lg"} full />
            </View>
            <FeaturesHero />
        </View>
    )
}

export default Hero

function FeaturesHero() {
    return (
        <View style={[
            flex.flex,
            flex["flex-row"],
            flex["justify-center"],
            padding["5"],
            gap[5],
            {
                overflow: "hidden",
                width: Dimensions.get("screen").width,
                boxSizing: "border-box"
            }
        ]}>
            {
                HeroFeatures.map(({ label, ico }, i) => (
                    <View key={i} style={[
                        flex["itesm-center"],
                        gap["y-1"],
                        width["1/3"],
                        padding["x-1"]
                    ]}>
                        {ico}
                        <Text style={[
                            width.full,
                            texta.center,
                            text["primary-200"],
                            {
                                flexWrap: "wrap"
                            }
                        ]}>{label}</Text>
                    </View>
                ))
            }
        </View>
    )
}