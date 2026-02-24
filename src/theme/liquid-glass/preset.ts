// src/theme/preset.ts

import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';
import { primitives } from './primitives';
import { semantic } from './semantic';
// import { components } from './components';
import { transparencyScale, glassShadow, borderRadiusScale } from './helper';

export const liquidGlassPreset = definePreset(Aura, {
    primitive: primitives,
    semantic: { ...semantic },
    components: {
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
        tabs: {
            tab: {
                hoverBackground: '{mada.darkk.transparency.primary.100}',
                margin: '0.5rem',
                padding: '0.75rem'
            },
            tablist: {
                borderWidth: '0'
            },
            css: ({dt}) => `
                .p-tablist {
                    border-radius: ${dt('mada.rounded.xl')};
                }
                .p-tab {
                    border-radius: ${dt('mada.rounded.sm')};
                }
            `
        },
    },
    css: ({dt}) => `
        .p-button {
            box-shadow: ${dt('mada.lightt.shadow')};
        }

        .p-inputgroup {
            box-shadow: ${dt('mada.lightt.shadow')};
            border-radius: ${dt('mada.rounded.md')};
            .p-inputtext {
                box-shadow: none;
            }
            .p-button {
                box-shadow: none;
            }
        }

        .p-autocomplete{
            box-shadow: ${dt('mada.lightt.shadow')};
            border-radius: ${dt('mada.rounded.md')};
            .p-autocomplete-input{
                box-shadow: none;
                border: none;
            }
        }

        .p-autocomplete-dropdown {
            box-shadow: ${dt('mada.lightt.shadow')};
        }

        .p-datepicker-dropdown {
            box-shadow: ${dt('mada.lightt.shadow')};
        }

        
        :root[class*='app-dark'] {
            .p-button {
                box-shadow: ${dt('mada.darkk.shadow')};
            }

            .p-inputgroup {
                box-shadow: ${dt('mada.darkk.shadow')};
                border-radius: ${dt('mada.rounded.md')};
                .p-inputtext {
                    box-shadow: none;
                }
                .p-button {
                    box-shadow: none;
                }
            }

            .p-autocomplete{
                box-shadow: ${dt('mada.darkk.shadow')};
                border-radius: ${dt('mada.rounded.md')};
                .p-autocomplete-input{
                    box-shadow: none;
                    border: none;
                }
            }

            .p-autocomplete-dropdown {
                box-shadow: ${dt('mada.darkk.shadow')};
            }

            .p-datepicker-dropdown {
                box-shadow: ${dt('mada.darkk.shadow')};
            }
                
        }
    `
});
