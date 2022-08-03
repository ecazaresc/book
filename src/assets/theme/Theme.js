import Montserrat from '../fonts/Montserrat-Regular.ttf'
import MontserratBold from '../fonts/Montserrat-Bold.ttf'
import { 
  grey,
  cyan,
} from '@mui/material/colors'


const textColor = '#696969'
const textColorLight = '#6c6c6c'
const textLight = '#F5F5F6'
const textLighter = '#ababab'




let theme = (mode) => ({
    text:{
      primary:textColor,
    },
    typography: {
        fontFamily: 'Montserrat, Arial',
        h1: {
          fontSize:'3.6rem',
          lineHeight:'3.4rem',
          fontWeight:'400',
          color:'#00363A',
          '@media (min-width:600px)': {
            fontSize: '4rem',
          },
          '@media (min-width:768px)': {
            fontSize: '4.6rem',
            lineHeight:'4rem'
          },
          '@media (min-width:821px)': {
            fontSize: '4.7rem',
            lineHeight:'4.2rem'
          },
          ...(mode === 'dark' && {
            color: textLight,
          }),
        },
        h2: {
          fontSize:'2.6rem',
          lineHeight:'2.7rem',
          fontWeight:'700',
          color:'#00363A',
          ...(mode === 'dark' && {
            color: textLight,
          }),
          '@media (min-width:600px)': {
            fontSize: '3.6rem',
            lineHeight:'3.7rem',
          },
        },
        h3: {
          fontSize:'1.5rem',
          fontWeight:'400',
          color: grey[700],
          ...(mode === 'dark' && {
            color: textLight,
          }),
          '@media (min-width:600px)': {
            fontSize: '2rem',
          },
        },
        h4: {
          fontSize:'2.8rem',
          color: grey[700],
          lineHeight:'2.9rem',
          ...(mode === 'dark' && {
            color: textLight,
          }),
          '@media (min-width:600px)': {
            fontSize: '3rem',
          },
        },
        h5: {
          fontSize:'1rem',
          color: grey[700],
          fontFamily: 'MontserratBold, Arial',
          fontWeight:'800',
          textTransform: 'uppercase',
          ...(mode === 'dark' && {
            color: textLight,
          }),
          '@media (min-width:600px)': {
            fontSize: '1.1rem',
            lineHeight: '1.3rem',
          },
        },

        h6: {
          fontSize:'1.2rem',
          color: grey[700],
          ...(mode === 'dark' && {
            color: textLight,
          }),
          '@media (min-width:600px)': {
            fontSize: '1.3rem',
            lineHeight: '1.4rem',
          },
        },
        body1:{
          color:textColor,
          ...(mode === 'dark' && {
            color: textLight,
          }),
        },
        body2:{
          color:textColorLight,
          fontSize: '0.9rem',
          lineHeight: '1.1rem',
          ...(mode === 'dark' && {
            color: textLighter,
          }),
        },
        subtitle1:{
          color:textColor,
          fontSize: '1.4rem',
          lineHeight: '1.5rem',
          fontWeight: '500',
          '@media (min-width:600px)': {
            fontSize: '1.3rem',
            lineHeight: '1.4rem',
          },
          ...(mode === 'dark' && {
            color: textLight,
          }),
        },
        
    },


    palette: {
      mode,
      primary: {
        main: cyan[900],
        ...(mode === 'dark' && {
          main: textLight,
        }),
      },
      background: {
        default: '#F5F5F6',
        paper: '#fff',
      },
      ...(mode === 'dark' && {
        background: {
          default: grey[900],
          paper: grey[700],
        },
      }),
      text: {
        ...(mode === 'light'
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: grey[300],
              secondary: grey[500],
          }),
      },
    },



    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
                font-family: 'Montserrat';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('Raleway'), local('Raleway-Regular'), url(${Montserrat}) format('woff2');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            };
            @font-face {
                font-family: 'MontserratBold';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('Raleway'), local('Raleway-Regular'), url(${MontserratBold}) format('woff2');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }
            `,
        },
        MuiButton: {
            styleOverrides: {
                root: {
                  fontFamily: 'MontserratBold, Arial',
                  fontSize: '1rem',
                  fontWeight:'700',
                  lineHeight: '1.2rem',
                  padding: '20px 25px'
                },
            },
        
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                  ...(mode === 'light'
                  ? {
                      backgroundColor:grey[100],
                    }
                  : {
                      backgroundColor:grey[800],
                  }),
                },
            },
            
        },
       
        MuiBottomNavigation: {
          styleOverrides: {
            root: {
              backgroundColor: cyan[900],
              height:'13vh',
              boxShadow:'0px -4px 14px rgba(0,0,0,0.3)',
              zIndex:'130',
            },
          },
        },
        MuiBottomNavigationAction: {
          styleOverrides: {
            root: {
              color: '#fff',
              '&.Mui-selected': {
                color: '#fff',
              }
            },
          },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                fontFamily: 'MontserratBold, Arial',
                fontWeight:'700',
                fontSize: '16px',
                },
            },
        
        },
    },

  })

  export default theme