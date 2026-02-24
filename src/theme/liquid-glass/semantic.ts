// src/theme/semantic.ts

import { palette } from '@primeuix/themes';
import { colorScheme } from './colorScheme';

export const semantic = {
    transitionDuration: '0.4s',
    primary: palette('{slate}'),
    list: {
        option: {
            borderRadius: '{mada.rounded.md}',
        }
    },
    navigation: {
        item: {
            borderRadius: '{mada.rounded.md}',
        }
    },
    overlay: {
        select: {
            borderRadius: '{mada.rounded.md}',
        },
        popover: {
            borderRadius: '{mada.rounded.md}',
        },
        modal: {
            borderRadius: '{mada.rounded.md}',
        },
        navigation: {
            borderRadius: '{mada.rounded.md}',
        },
    },
    content: {
        borderRadius: '{mada.rounded.xl}'
    },

    colorScheme: { ...colorScheme }
};