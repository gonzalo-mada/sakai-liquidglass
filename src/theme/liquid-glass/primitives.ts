// src/theme/primitives.ts

import { transparencyScale, glassShadow, borderRadiusScale } from './helper';

export const primitives = {
    mada: {
        rounded: borderRadiusScale(),
        lightt: {
            transparency: {
                primary: transparencyScale('255,255,255'),
            },
            disabled: transparencyScale('0,0,0'),
            invalid: 'rgba(146, 3, 3, 0.553)',
            shadow: glassShadow(true)
        },
        darkk: {
            transparency: {
                primary: transparencyScale('0,0,0')
            },
            disabled: transparencyScale('255,255,255'),
            invalid: 'rgba(255, 77, 77, 0.553)',
            shadow: glassShadow(false)
        }
    }
};