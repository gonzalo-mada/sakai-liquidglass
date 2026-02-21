// src/theme/preset.ts

import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';
import { primitives } from './primitives';
import { semantic } from './semantic';
import { components } from './components';

export const liquidGlassPreset = definePreset(Aura, {
    primitive: primitives,
    semantic: { ...semantic },
    components: { ...components }
});