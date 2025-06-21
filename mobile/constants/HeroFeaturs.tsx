import { Colors } from "@/globals/colors";
import FeatherIcon from "react-native-vector-icons/Feather";
import AntIcon from "react-native-vector-icons/AntDesign";

const HeroFeatures = [
    {
        ico: <FeatherIcon name="shield" color={Colors[200]} size={18} />,
        label: "500+ verified providers",
    },
    {
        ico: <AntIcon name="heart" color={Colors[200]} size={18} />,
        label: "Zero fraud incidents",
    },
    {
        ico: <FeatherIcon name="users" color={Colors[200]} size={18} />,
        label: "Zero fraud incidents",
    },
];

export const FEATURES = [
    {
        ico: <FeatherIcon name="shield" color={Colors["white"]} size={20} />,
        label: "Identity Verified",
        description: "100% authenticated professionals. Every provider goes through rigorous identity verification to ensure your safety.",
        tilt: "br"
    },
    {
        ico: <AntIcon name="heart" color={Colors["white"]} size={20} />,
        label: "Secure Sessions",
        description: "End-to-end encrypted video, voice, and chat sessions. Your conversations remain private and secure.",
        tilt: "bl"
    },
    {
        ico: <FeatherIcon name="users" color={Colors["white"]} size={20} />,
        label: "Global Access",
        description: "Connect with caring professionals from anywhere in the world. Cultural understanding meets professional expertise.",
        tilt: "br"
    },
]


export default HeroFeatures;