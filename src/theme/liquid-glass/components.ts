import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';
import { transparencyScale, glassShadow, borderRadiusScale } from './helper';

const componentsTest = definePreset(Aura , {
    components: {
        button:{
            colorScheme: {
                light: {

                    root: {
                        primary: {
                            
                        },
                        raisedShadow: glassShadow(true)
                    }
                },
                dark: {
                    root: {
                        raisedShadow: glassShadow(false)
                    }
                },
            },

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
        datatable: {

        }
    }
});

export const components = componentsTest.components;