import { borderRadiusScale } from './helper';

export const colorScheme = {
    light: {
        primary: {
            color: '{primary.600}',
            contrastColor: '{primary.200}',
            hoverColor: '{primary.700}',
            activeColor: '{primary.800}',
        },
        highlight: {
            background: '{mada.darkk.transparency.primary.200}',      
            focusBackground: '{mada.darkk.transparency.primary.500}',
            color: '{mada.darkk.transparency.primary.500}',
            focusColor: '{mada.darkk.transparency.primary.500}',
        },
        formField: {
            background: '{mada.lightt.transparency.primary.200}',
            disabledBackground: '{mada.lightt.disabled.200}',
            borderColor: '{mada.lightt.transparency.primary.700}',
            hoverBorderColor: '{mada.lightt.disabled.200}',
            focusBorderColor: '{mada.lightt.disabled.200}',
            invalidBorderColor: '{mada.lightt.invalid}',
            borderRadius: '{mada.rounded.md}',
            shadow: '{mada.lightt.shadow}'
        },
        content: {
            background: '{mada.lightt.transparency.primary.500}',
            border: {
                radius: '{mada.rounded.md}'
            }
        },
        text: {
            color: '{primary.600}',
            hoverColor: '{primary.700}',
            mutedColor: '{primary.500}',
            hoverMutedColor: '{primary.600}'
        },
        border: {
            radius: borderRadiusScale()
        },
        navigation: {
            item: {
                focus: {
                    background: '{mada.darkk.transparency.primary.100}'
                }
            }
        },
        overlay: {
            select: {
                background: '{mada.lightt.transparency.primary.900}',
                shadow: '{mada.lightt.shadow}'
            }
        },
        list: {
            option: {
                group: {
                    background: '{mada.lightt.transparency.primary.900}',
                    shadow: '{mada.lightt.shadow}'

                }
            }
        },
        focus: {
            ring: {
                shadow: '{mada.lightt.shadow}'
            }
        },
    },
    dark: {
        primary: {
            color: '{primary.600}',
            contrastColor: '{primary.200}',
            hoverColor: '{primary.700}',
            activeColor: '{primary.800}',
        },
        highlight: {
            background: '{mada.lightt.transparency.primary.200}',      
            focusBackground: '{mada.lightt.transparency.primary.500}',
            color: '{mada.lightt.transparency.primary.500}',
            focusColor: '{mada.lightt.transparency.primary.500}',
        },
        formField: {
            background: '{mada.darkk.transparency.primary.200}',
            disabledBackground: '{mada.darkk.disabled.200}',
            borderColor: '{mada.darkk.transparency.primary.700}',
            hoverBorderColor: '{mada.darkk.disabled.200}',
            focusBorderColor: '{mada.darkk.disabled.200}',
            invalidBorderColor: '{mada.darkk.invalid}',
            borderRadius: '{mada.rounded.md}',
            shadow: '{mada.darkk.shadow}'
        },
        content: {
            background: '{mada.darkk.transparency.primary.500}',
            border: {
                radius: '{mada.rounded.md}'
            }
        },
        text: {
            color: '{primary.400}',
            hoverColor: '{primary.500}',
            mutedColor: '{primary.200}',
            hoverMutedColor: '{primary.400}'
        },
        border: {
            radius: borderRadiusScale()
        },
        overlay: {
            select: {
                background: '{mada.darkk.transparency.primary.900}',
                shadow: '{mada.darkk.shadow}'
            }
        },
        list: {
            option: {
                group: {
                    background: '{mada.darkk.transparency.primary.900}',
                    shadow: '{mada.darkk.shadow}'

                }
            }
        },
        navigation: {
            item: {
                focus: {
                    background: '{mada.lightt.transparency.primary.100}'
                }
            }
        }
    }
}