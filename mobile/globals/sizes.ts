import { StyleSheet } from "react-native"

export const gap = StyleSheet.create({
    "1": {
        gap: 4,
    },
    "2": {
        gap: 8
    },
    "3": {
        gap: 12
    },
    "4": {
        gap: 16
    },
    "5": {
        gap: 20
    },
    "6": {
        gap: 30
    },

    // Row - Gap
    "y-1": {
        rowGap: 4,
    },
    "y-2": {
        rowGap: 8
    },
    "y-3": {
        rowGap: 12
    },
    "y-4": {
        rowGap: 16
    },
    "y-5": {
        rowGap: 20
    },

    // Column - Gap
    "x-1": {
        columnGap: 4,
    },
    "x-2": {
        columnGap: 8
    },
    "x-3": {
        columnGap: 12
    },
    "x-4": {
        columnGap: 16
    },
    "x-5": {
        columnGap: 20
    }
})

export const padding = StyleSheet.create({
    "0.5": {
        padding: 2,
    },
    "1": {
        padding: 4,
    },
    "2": {
        padding: 8
    },
    "3": {
        padding: 12
    },
    "4": {
        padding: 16
    },
    "5": {
        padding: 20
    },
    "6": {
        padding: 30
    },

    // Horizontal - Padding
    "x-0.5": {
        paddingHorizontal: 2,
    },
    "x-1": {
        paddingHorizontal: 4,
    },
    "x-2": {
        paddingHorizontal: 8,
    },
    "x-3": {
        paddingHorizontal: 12,
    },
    "x-4": {
        paddingHorizontal: 16
    },
    "x-5": {
        paddingHorizontal: 20
    },
    "x-6": {
        paddingHorizontal: 30
    },

    // Vertical - Padding
    "y-0.5": {
        paddingVertical: 2,
    },
    "y-1": {
        paddingVertical: 4,
    },
    "y-2": {
        paddingVertical: 8
    },
    "y-3": {
        paddingVertical: 12
    },
    "y-4": {
        paddingVertical: 16
    },
    "y-5": {
        paddingVertical: 20
    },
    "y-6": {
        paddingVertical: 30
    },
})

export const margin = StyleSheet.create({
    "0.5": {
        margin: 2,
    },
    "1": {
        margin: 4,
    },
    "2": {
        margin: 8
    },
    "3": {
        margin: 12
    },
    "4": {
        margin: 16
    },
    "5": {
        margin: 20
    },

    // Horizontal - Padding
    "x-0.5": {
        marginHorizontal: 2,
    },
    "x-1": {
        marginHorizontal: 4,
    },
    "x-2": {
        marginHorizontal: 8
    },
    "x-3": {
        marginHorizontal: 12
    },
    "x-4": {
        marginHorizontal: 16
    },
    "x-5": {
        marginHorizontal: 20
    },

    // Vertical - Padding
    "y-0.5": {
        marginVertical: 2,
    },
    "y-1": {
        marginVertical: 4,
    },
    "y-2": {
        marginVertical: 8
    },
    "y-3": {
        marginVertical: 12
    },
    "y-4": {
        marginVertical: 16
    },
    "y-5": {
        marginVertical: 20
    }
})

export const border = StyleSheet.create({
    "0.5": {
        borderStyle: "solid",
        borderWidth: .5,
    },
    "1": {
        borderStyle: "solid",
        borderWidth: 1,
    },
    "2": {
        borderStyle: "solid",
        borderWidth: 2,
    },
    "3": {
        borderStyle: "solid",
        borderWidth: 3,
    },
    "4": {
        borderStyle: "solid",
        borderWidth: 4,
    },
    "5": {
        borderStyle: "solid",
        borderWidth: 5,
    },

    // Horizontal - Padding
    "x-0.5": {
        borderStyle: "solid",
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
    },
    "x-1": {
        borderStyle: "solid",
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
    "x-2": {
        borderStyle: "solid",
        borderLeftWidth: 2,
        borderRightWidth: 2,
    },
    "x-3": {
        borderStyle: "solid",
        borderLeftWidth: 3,
        borderRightWidth: 3,
    },
    "x-4": {
        borderStyle: "solid",
        borderLeftWidth: 4,
        borderRightWidth: 4,
    },
    "x-5": {
        borderStyle: "solid",
        borderLeftWidth: 5,
        borderRightWidth: 5,
    },

    // Vertical - Padding
    "y-0.5": {
        borderStyle: "solid",
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
    },
    "y-1": {
        borderStyle: "solid",
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    "y-2": {
        borderStyle: "solid",
        borderTopWidth: 2,
        borderBottomWidth: 2,
    },
    "y-3": {
        borderStyle: "solid",
        borderTopWidth: 3,
        borderBottomWidth: 3,
    },
    "y-4": {
        borderStyle: "solid",
        borderTopWidth: 4,
        borderBottomWidth: 4,
    },
    "y-5": {
        borderStyle: "solid",
        borderTopWidth: 5,
        borderBottomWidth: 5,
    },
})

export const rounded = StyleSheet.create({
    "sm": {
        borderRadius: 4
    },
    "md": {
        borderRadius: 6
    },
    "lg": {
        borderRadius: 8
    },
    "xl": {
        borderRadius: 12
    },
    "2xl": {
        borderRadius: 16
    },
    "3xl": {
        borderRadius: 30
    },
    "full": {
        borderRadius: "50%"
    },
    "pill": {
        borderRadius: 9999
    }
})

export const text = {
    "sm": {
        fontSize: 12
    },
    "md": {
        fontSize: 14
    },
    "lg": {
        fontSize: 16
    },
    "xl": {
        fontSize: 20
    },
    "2xl": {
        fontSize: 24
    },
    "3xl": {
        fontSize: 32,
    },
    "4xl": {
        fontSize: 40
    },
}

export const font = StyleSheet.create({
    "sm": {
        fontWeight: "100"
    },
    "md": {
        fontWeight: "300"
    },
    "lg": {
        fontWeight: "500"
    },
    "xl": {
        fontWeight: "700"
    },
    "2xl": {
        fontWeight: "900"
    },
    "header": {
        fontWeight: "800"
    },
})

export const width = StyleSheet.create({
    "auto": {
        width: "auto"
    },
    "full": {
        width: "100%"
    },
    "1/2": {
        width: "50%"
    },
    "1/3": {
        width: "33.3333%"
    }
})