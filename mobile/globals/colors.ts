import { StyleSheet } from "react-native";

export const Colors = {
    50: "#dcfce7",
    75: "#b9f8cf",
    100: "#00a63e",
    200: "#016630",
    "gray": "#4a5565",
    "gray-50": "#e5e7eb77",
    "gold": "#FFD700",
    "light-gold": "#FFECB3",
    "rich-gold": "#DAA520",
    "dark-gold": "#B8860B",
    "danger": "#e7000b",
    "white": "#fff",
    "black": "#000",
}

export const backgrounds = StyleSheet.create({
    // Colors
    "primary-50": {
        backgroundColor: Colors[50]
    },
    "primary-75": {
        backgroundColor: Colors[75]
    },
    "primary-100": {
        backgroundColor: Colors[100]
    },
    "primary-200": {
        backgroundColor: Colors[200]
    },
    "secondary": {
        backgroundColor: Colors["gray"]
    },
    "secondary-50": {
        backgroundColor: Colors["gray-50"]
    },
    "danger": {
        backgroundColor: Colors.danger,
    },
    "white": {
        backgroundColor: Colors.white,
    },
    "black": {
        backgroundColor: Colors.black,
    }
})

export const text = StyleSheet.create({
    // Colors
    "primary-50": {
        color: Colors[50]
    },
    "primary-75": {
        color: Colors[75]
    },
    "primary-100": {
        color: Colors[100]
    },
    "primary-200": {
        color: Colors[200]
    },
    "gray": {
        color: Colors["gray"]
    },
    "gray-50": {
        color: Colors["gray-50"]
    },
    "gold": {
        color: Colors["gold"]
    },
    "danger": {
        color: Colors.danger,
    },
    "white": {
        color: Colors.white,
    },
    "black": {
        color: Colors.black
    }
})

export const border = StyleSheet.create({
    "primary-50": {
        borderColor: Colors[50]
    },
    "primary-75": {
        borderColor: Colors[75]
    },
    "primary-100": {
        borderColor: Colors[100]
    },
    "primary-200": {
        borderColor: Colors[200]
    },
    "secondary": {
        borderColor: Colors["gray"]
    },
    "secondary-50": {
        borderColor: Colors["gray-50"]
    },
    "danger": {
        borderColor: Colors.danger,
    },
    "white": {
        borderColor: Colors.white,
    },
    "black": {
        borderColor: Colors.black,
    }
})