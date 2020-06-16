const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [],
    theme: {
        extend: {
            colors: {
                theme_primary_light: 'var(--theme-primary_light)',
                theme_primary: 'var(--theme-primary)',
                theme_primary_dark: 'var(--theme-primary_dark)',
                theme_secondary: 'var(--theme-secondary)',
                default: '#172b4d',
                primary_light: 'var(--color-primary_light)',
                primary: 'var(--color-primary)',
                primary_dark: 'var(--color-primary_dark)',
                secondary: '#f4f5f7',
                info: '#11cdef',
                success: '#2dce89',
                danger: '#f5365c',
                warning: '#fb6340',
            }
        },
    },
    variants: {},
    plugins: [],
}