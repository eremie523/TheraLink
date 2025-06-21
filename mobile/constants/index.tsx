import FontAwesome6Icons from "react-native-vector-icons/FontAwesome6"
import { Colors } from "react-native/Libraries/NewAppScreen"

export const JOURNEY = [
    {
        ico: <FontAwesome6Icons name="1" color={Colors["white"]} size={18} />,
        label: "Share Your Story",
        description: "Tell us about your emotional needs and what kind of support would help you most",
    },
    {
        ico: <FontAwesome6Icons name="2" color={Colors["white"]} size={18} />,
        label: "Find Your Match",
        description: "We'll connect you with verified care providers who understand your unique situation",
    },
    {
        ico: <FontAwesome6Icons name="3" color={Colors["white"]} size={18} />,
        label: "Begin Your Journey",
        description: "Start meaningful conversations that foster growth, awareness, and emotional healing",
    },
]