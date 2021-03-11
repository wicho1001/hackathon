const plugin = require('tailwindcss/plugin')

module.exports = {
  important: true,
  theme: {
    colors: {
      royalblue: {
        '50':  '#f5fafd',
        '100': '#e5f7fc',
        '200': '#c1e7fa',
        '300': '#98d1f9',
        '400': '#5592f0',
        '500': '#307df7',
        '600': '#2159f0',
        '700': '#1e46d7',
        '800': '#1a36a5',
        '900': '#162c7e',
      },
      indigo: {
        '50':  '#f5f7fc',
        '100': '#eaeffb',
        '200': '#d2d7fa',
        '300': '#b9bbf9',
        '400': '#998ff9',
        '500': '#7762f9',
        '600': '#5c41f4',
        '700': '#4934e1',
        '800': '#392ab6',
        '900': '#2e2490',
      },
      flamingo: {
        '50':  '#f8f6fa',
        '100': '#f4e9f9',
        '200': '#eaccf6',
        '300': '#e2aaf4',
        '400': '#dd7af1',
        '500': '#d84eef',
        '600': '#c031e6',
        '700': '#9527ca',
        '800': '#70219c',
        '900': '#581d79',
      },
      cerise: {
        '50':  '#fcf9f9',
        '100': '#fceff4',
        '200': '#fad1e8',
        '300': '#f9a9d4',
        '400': '#fa71b2',
        '500': '#fb458e',
        '600': '#f42967',
        '700': '#d72052',
        '800': '#a91a3f',
        '900': '#841732',
      },
      tomato: {
        '50':  '#fcf8f4',
        '100': '#fcf0e9',
        '200': '#f9dace',
        '300': '#f8bba2',
        '400': '#f78b64',
        '500': '#f76038',
        '600': '#ed3e24',
        '700': '#cc2e24',
        '800': '#a12524',
        '900': '#7f1f20',
      },
      carrot: {
        '50':  '#faf6eb',
        '100': '#faf0d0',
        '200': '#f7e39a',
        '300': '#f3cd57',
        '400': '#eeab21',
        '500': '#eb860d',
        '600': '#db6109',
        '700': '#b8480d',
        '800': '#933913',
        '900': '#772e14',
      },
      sunglow: {
        '50':  '#faf8ef',
        '100': '#faf5d2',
        '200': '#f5ec93',
        '300': '#eedb4d',
        '400': '#e0bd19',
        '500': '#d19d08',
        '600': '#b37805',
        '700': '#8d5b08',
        '800': '#6c450e',
        '900': '#54370f',
      },
      olive: {
        '50':  '#fafaf4',
        '100': '#f9f8dc',
        '200': '#f2f1a1',
        '300': '#e7e25a',
        '400': '#cdc71f',
        '500': '#aca80a',
        '600': '#848406',
        '700': '#646509',
        '800': '#4b4c0d',
        '900': '#3a3b0f',
      },
      shamrock: {
        '50':  '#f0f9f8',
        '100': '#ddf7f2',
        '200': '#b7f0e1',
        '300': '#7fe5cd',
        '400': '#34d1ac',
        '500': '#12b785',
        '600': '#0f9a66',
        '700': '#157c55',
        '800': '#176046',
        '900': '#154d3a',
      },
      cerulean: {
        '50':  '#f1f9fb',
        '100': '#dbf7f9',
        '200': '#afeef3',
        '300': '#78e0ed',
        '400': '#33c6e5',
        '500': '#13a5da',
        '600': '#0f83c5',
        '700': '#1368a0',
        '800': '#145076',
        '900': '#12415c',
      },
    },
    borderRadius: {
      'none': '0',
      'card': '4px 4px 0 0',
      default: '4px',
      '2': '8px',
      '4': '16px',
      'xl': '54px',
      'full': '50%',
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif'],
      'monospace': ['Overpass Mono', 'monospace']
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '24': '24px',
      '2xl': '28px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '64px',
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
      'primary-200': '0 0 0 3px #F77D86',
      'secondary-200': '0 0 0 3px #7DA2F7',
      'box': '0 0 10px 0 rgba(38,39,41,0.2)',
      'up-box': '0 10px 10px 0 rgba(224,230,234,0.8)',
      'down-box': '0 2px 2px 0 rgba(224,230,234,0.8)',
    },
    spacing: {
      npx: '-1px',
      px: '1px',
      '2px': '2px',
      '14px': '14px',
      '13px': '13px',
      '0': '0px',
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '20px',
      '6': '24px',
      '7': '28px',
      '8': '32px',
      '9': '36px',
      '10': '40px',
      '11': '44px',
      '12': '48px',
      '13': '52px',
      '14': '56px',
      '15': '60px',
      '16': '64px',
      '17': '68px',
      '18': '72px',
      '19': '76px',
      '20': '80px',
      '21': '84px',
      '22': '88px',
      '23': '92px',
      '24': '96px',
      '25': '100px',
      '26': '104px',
      '27': '108px',
      '28': '112px',
      '29': '116px',
      '30': '120px',
      '31': '124px',
      '32': '128px',
      '33': '132px',
      '34': '136px',
      '35': '140px',
      '36': '144px',
      '37': '148px',
      '38': '152px',
      '39': '156px',
      '40': '160px',
      '41': '164px',
      '42': '168px',
      '43': '172px',
      '44': '176px',
      '45': '180px',
      '46': '184px',
      '47': '188px',
      '48': '192px',
      '49': '196px',
      '50': '200px',
      '51': '204px',
      '52': '208px',
      '53': '212px',
      '54': '216px',
      '55': '220px',
      '56': '224px',
      '57': '228px',
      '58': '232px',
      '59': '236px',
      '60': '240px',
      '61': '244px',
      '62': '248px',
      '63': '252px',
      '64': '256px',
      '65': '260px',
      '66': '264px',
      '67': '268px',
      '68': '272px',
      '69': '276px',
      '70': '280px',
      '71': '284px',
      '72': '288px',
      '73': '292px',
      '74': '296px',
      '75': '300px',
      '76': '304px',
      '77': '308px',
      '78': '312px',
      '79': '316px',
      '80': '320px',
      '81': '324px',
      '82': '328px',
      '83': '332px',
      '84': '336px',
      '85': '340px',
      '86': '344px',
      '87': '348px',
      '88': '352px',
      '89': '356px',
      '90': '360px',
      '91': '364px',
      '92': '368px',
      '93': '372px',
      '94': '376px',
      '95': '380px',
      '96': '384px',
      '97': '388px',
      '98': '392px',
      '99': '396px',
      '100': '400px',
      '103': '412px',
      '105': '420px',
      '106': '424px',
      '125': '500px',
      '128': '512px',
      '141': '566px',
      '150': '600px',
      '171': '684px',
      '289': '1156px',
      '290': '1160px',
    },
    extend: {
      height: theme => ({
        'header': theme('spacing.17'),
        '3/4': '75%',
        '1/2': '50%',
        '1/3': '33%',
      }),
      margin: theme => ({
        'header': theme('spacing.17')
      }),
      padding: theme => ({
        'header': theme('spacing.17')
      }),
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'display': 'display'
      }
    },
    screens: {
      'xs': {'min': '150px'},
      'sm': {'min': '640px'},
      'md': {'min': '768px'},
      'lg': {'min': '1024px'},
      'xl': {'min': '1280px'},
    },
    opacity: {
      '0': '0',
      '10': '.1',
      '20': '.2',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '80': '.8',
      '90': '.9',
      '100': '1',
    },
    lineHeight: {
      default: '1rem',
      '1': '1.5rem',
      '2': '1.75rem',
      '3': '2rem',
    },
    zIndex: {
      '-1': '-1',
      '9999': '9999',
      '0': '0',
      '1': '4',
      '2': '8',
      '3': '12'
    },
    inset: {
      '0': 0,
      '20': '20px',
      '100': '100px',
    }
  },
  variants:[ 
    'active',
    'first',
    'last',
    'responsive',
    'hover',
    'focus',
  ],
};
