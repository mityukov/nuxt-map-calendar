const colors = require('tailwindcss/colors')

module.exports = {
    safelist: [
        'sm:max-w-4xl',
        'sm:max-w-5xl',
        'sm:max-w-6xl',
        'sm:max-w-screen-lg',
        'bg-blue-500',
        'bg-yellow-500',
        'bg-green-500',
        'bg-red-500',
        'bg-gray-500',
        'bg-is-past', 'bg-reservation', 'bg-type1', 'bg-type2', 'bg-type3'
    ],

    corePlugins: {
        preflight: false,
        container: false,
    },

    theme: {
        extend: {
            fontFamily: {
                'newsans': ['"SF Pro Display"', 'Helvetica', 'Arial', 'sans-serif'],
                'gilroy': ['Gilroy', 'sans-serif'],
            },
            colors: {
                green: colors.emerald,
                yellow: colors.amber,
                purple: colors.violet,
                current: 'currentColor',
                'menu-base': '#353d64',
                'menu-user': '#38416b',
                'menu-separator': '#4a5174',
                'main-fill': '#f9f9f9',
                'dash-border': '#f0f0f0',
                'progress-green': 'rgb(46, 208, 60)',
                'progress-red': 'rgb(221, 35, 40)',
                'progress-gold': 'rgb(211, 175, 55)',
                'progress-bg': '#e8e8e8',
                'transparent-black': 'rgba(0, 0, 0, 0.1)',

                'kz-dark': '#014557',
                'kz-light': '#009ba4',
                'kz-green': '#00b297',

                'top-nav': '#ededed',
                'top-nav-b': '#d9dee4',
                'right-col': '#f7f7f7',
                'left-col': '#2a3f54',
                'nav-color': '#515356',
                'user-profile': '#5E6974',

                'help': '#737373',
                'blank': '#fff',
                'gray-50': '#fbfcfd',

                // Auth pages:
                'gray-body': '#f5f6f8',
                'borders': '#C2CFE0',
                'line': '#EBEFF2',
                'icons': '#9CA4C1',
                'osnova2': '#005A79',
                'osnova1': '#019DA4',
                'osnova1-50': '#019DA488',

                // DnD Calendar
                'gray-fa': '#fafafa',
                'gray-f2': '#f2f2f2',
                'gray-f3': '#f3f3f3',
                'gray-33': '#333333',
                'cal-lightest': '#f0f0f0',
                'cal-lighter': '#e0e0e0',
                'cal-muted': 'rgba(51, 51, 51, 0.5)',
                'cal-primary': '#0984E3',

                'cal-green': '#09B959',
                'dark2': '#5E6473',
                'text-light': '#8890A6',
                'text-dark': '#192A3E',
                'text-us': '#334D6E',
                'state-focused': '#86B1EB',
                'state-success': '#71BD8E',
                'state-error': '#E08687',
                'state-disable': '#DFE4EB',

                // dubldom stats
                'dd-panel-bg': '#192A3E',
                'dd-stats-item': 'rgba(255, 255, 255, 0.1)',
                // '[#569253]': '#569253',
                // '[#B9B9B9]': '#B9B9B9',
                'white/10': 'rgba(255, 255, 255, 0.1)',
                'white/50': 'rgba(255, 255, 255, 0.5)',

                // form-potolochkin
                // '[#334D6E]': '#334D6E',
                // '[#192A3E]': '#192A3E',
                // '[#EBEFF2]': '#EBEFF2',//background unput
                // '[#9CA4C1]': '#9CA4C1',//text in input
                // '[#019DA4]': '#019DA4',//button bgc
                // '[#8890A6]': '#8890A6',//cancel button
            },

            fontSize: {
                // Auth pages
                'input-md': ['14px', {
                    lineHeight: '32px',
                }],
                'login-title': ['40px', {
                    lineHeight: '48px',
                }],
                'h2': '26px',
                'h2-mobile': '32px',

                // dubldom stats
                'dd-xs': '8px',
                // DnD Calendar
                'cal-xs': '10px',
                'cal-sm': '12px',
                'cal-base': '14px',
                'cal-lg': '16px',
                'cal-xl': '18px',
            },

            boxShadow: {
                'kz-logo': '0 0 8px 0 #000',
                'progress-green': '0 0 3px 1px rgba(46, 208, 60, .5)',
                'progress-red': '0 0 3px 1px rgba(221, 35, 40, .5)',
                'progress-gold': '0 0 3px 1px rgba(211, 175, 55, .5)',
                'mobile-menu': '0 -4px 18px 0 rgba(0, 0, 0, .08)'
            },

            spacing: {
                'screen/2': '50vh',
                'screen/3': '33vh',
                '7': '1.75rem',
                '9': '2.25rem',
                '18': '4.5rem',
                '26': '6.5rem',
                '36': '9rem',
                'cal-cell': '60px',
                'menu-sm': '70px',
                'menu-md': '230px',
                'logo-h': '57px',
                'menu-toggle': '26px',
                'cal-worker-col': '172px',
                'control-h': '4.2rem',
                // Auth pages
                'login-right-col': '580px',
                'login-form': '377px',
                'auth-input-height': '50px',
                'auth-input-height-mobile': '52px',
                // '[52px]': '52px',
                // dubldom stats
                'dd-panel-width': '429px',
                // '[2px]': '2px',
                // '[5px]': '5px',
                // '[8px]': '8px',
                // '[14px]': '14px',
                // '[16px]': '16px',
                // '[25px]': '25px',
                // '[29px]': '29px',
                // '[72px]': '72px',
                // '[75px]': '75px',
                // '[77px]': '77px',
                // '[90px]': '90px',
                // '[147px]': '147px'
            },
            maxWidth: {
                'cal-popup': '700px',
                'screen/2': '50vw',
                'screen/3': '33vw',
            },
            minHeight: {
                'top-nav': '56px',
            },
            lineHeight: {
                '12': '3rem',
                // dubldom stats
                // '[20px]': '20px',
                // '[26px]': '26px'
            },
            opacity: {
                '35': '.35',
                '40': '.4',
            },

            borderRadius: {
                // dubldom stats
                'dd-stats': '18px',
                // '[8px]': '8px'
            },

            translate: {
                '9/10': '90%',
            },
            backgroundImage: {
                //for potolochkin form
                'potolochkin-background-form': "url('/img/forms_background.svg')"
            },
            screens: {
                'tall': { 'raw': '(max-height: 1000px)' },
                'small': { 'raw': '(max-height: 960px)' }
            }

        }
    },

    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('tailwind-accent-color')(),
        require('@tailwindcss/container-queries'),
    ]
}
