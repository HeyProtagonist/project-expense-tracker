module.exports = {
    mode: 'jit',
    purge: {
        content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
    },
    darkMode: 'class',
    theme: {},
    variants: {},
    plugins: [require('tailwind-scrollbar-hide')],
}
