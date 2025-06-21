import { transform } from "@babel/core"
import { StyleSheet } from "react-native"

const flex = StyleSheet.create({
    "flex": {
        display: "flex",
    },

    // Directions
    "flex-row": {
        flexDirection: "row"
    },
    "flex-col": {
        flexDirection: "column"
    },
    "itesm-center": {
        alignItems: "center",
    },
    "itesm-start": {
        alignItems: "flex-start",
    },
    "itesm-end": {
        alignItems: "flex-end",
    },
    "justify-betwwen": {
        justifyContent: "space-between"
    },
    "justify-start": {
        justifyContent: "flex-start"
    },
    "justify-end": {
        justifyContent: "flex-end"
    },
    "justify-center": {
        justifyContent: "center"
    },
})

export const text = StyleSheet.create({
    "center": {
        textAlign: "center"
    }
})

export const transitions = StyleSheet.create({
    rotate2deg: {
        transform: [{ skewY: "1deg" }],
    },
    rotaten2deg: {
        transform: [{ skewY: "-1deg" }],
    },
})


export {
    flex,
}