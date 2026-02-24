import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';
import { transparencyScale, glassShadow, borderRadiusScale } from './helper';

const componentsTest = definePreset(Aura , {
    components: {
        button: {
            extend: {
                accent: {
                    color: '#f59e0b',
                    inverseColor: '#ffffff'
                }
            },
            css: ({ dt }) => `
                .p-button-accent {
                    background: ${dt('button.accent.color')};
                    color: ${dt('button.accent.inverse.color')};
                }
            `
        },
        card: {
            colorScheme: {
                light: {
                    root: {
                        shadow: glassShadow(true)
                    }
                },
                dark: {
                    root: {
                        shadow: glassShadow(false)
                    }
                },
            }
        },
    }
});

