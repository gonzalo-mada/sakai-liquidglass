// src/theme/helpers.ts

export function transparencyScale(rgb: string) {
    return {
        50:  `rgba(${rgb},0.05)`,
        100: `rgba(${rgb},0.1)`,
        200: `rgba(${rgb},0.2)`,
        300: `rgba(${rgb},0.3)`,
        400: `rgba(${rgb},0.4)`,
        500: `rgba(${rgb},0.5)`,
        600: `rgba(${rgb},0.6)`,
        700: `rgba(${rgb},0.7)`,
        800: `rgba(${rgb},0.8)`,
        900: `rgba(${rgb},0.9)`
    };
}

export function borderRadiusScale(){
    return {
        none: '0rem',
        xs: '1rem',
        sm: '1.25rem',
        md: '1.5rem',
        lg: '1.75rem',
        xl: '2rem' 
    };
}

export function glassShadow(light = true) {
    return light
        ? 'inset 0 2px 0px rgba(255, 255, 255, 0.934),0 0 9px rgba(0, 0, 0, 0.2),0 3px 8px rgba(0, 0, 0, 0.15)'
        : 'inset 0 2px 0px rgba(255, 255, 255, 0.379),0 0 9px rgba(255, 255, 255, 0.05),0 3px 8px rgba(255, 255, 255, 0.05)';
}