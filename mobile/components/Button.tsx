import { backgrounds, border, text } from '@/globals/colors';
import { border as borders, font, gap, text as texts, width, rounded as radius, padding } from "@/globals/sizes";
import { flex } from '@/globals/stlyes';
import { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
    label?: string,
    ico?: ReactNode,
    icoPosition?: "l" | "r",
    variant?: "primary" | "outlined" | "secondary" | "secondary-outlined" | "danger" | "danger-outlined",
    rounded?: "md" | 'lg' | "sm" | "xl" | "2xl" | "pill",
    size?: "md" | 'lg' | "sm",
    full?: boolean
}

export default function Button({ label, ico, icoPosition, variant, rounded, full, size }: ButtonProps) {
    return (
        <TouchableOpacity style={[
            styles.button,
            flex.flex,
            flex['flex-row'],
            gap[3],
            size === "sm" ? [padding["x-3"], padding['y-2']]
                : size === "md" ? [padding['x-4'], padding['y-3']]
                    : size === "lg" ? [padding['x-5'], padding['y-4']]
                        : [padding['x-4'], padding['y-3']],
            full && width.full,
            (rounded === "sm") ? radius.sm
                : (rounded === "md") ? radius.md
                    : (rounded === "lg") ? radius.lg
                        : (rounded === "xl") ? radius.xl
                            : (rounded === "2xl") ? radius['2xl']
                                : (rounded === "pill") ? radius["pill"]
                                    : radius.pill,
            (variant === "primary") ? backgrounds['primary-100']
                : (variant === "outlined") ? [border['primary-100'], borders[2]]
                    : (variant === "secondary") ? backgrounds.secondary
                        : (variant === "secondary-outlined") ? [border['secondary'], borders[2]]
                            : (variant === "danger") ? backgrounds.danger
                                : (variant === "danger-outlined") ? [border['danger'], borders[2]]
                                    : backgrounds['primary-100']
        ]}
        //   onPress={onPress}
        >
            {
                (ico && icoPosition !== "r") &&
                ico
            }
            <Text style={[
                size === "sm" ? [texts.md, font.md]
                    : size === "md" ? [texts.lg, font.lg]
                        : size === "lg" ? [texts.xl, font.xl]
                            : [texts.lg, font.lg],
                (variant === "primary") ?
                    text.white
                    : (variant === "outlined") ? text['primary-200']
                        : (variant === "secondary") ? text.black
                            : (variant === "secondary-outlined") ? text['gray']
                                : (variant === "danger") ? text.white
                                    : (variant === "danger-outlined") ? text['danger']
                                        : text.white
            ]}>{label ? label : "Button"}</Text>
            {
                (ico && icoPosition === "r") &&
                ico
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: { // Tailwind's green-500
        alignItems: 'center',
        justifyContent: 'center',
        display: "flex",
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
});
