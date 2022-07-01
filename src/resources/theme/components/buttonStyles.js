export const buttonStyles = {
  // Styles for the base style
  baseStyle: {
    bg:'buttons.default',
    color:'white',   
    width:'100%', 
    m:'40px 0px 20px', 
    borderRadius:'0',
    p:'25px 0px',

    _hover: {
      background:'buttons.hoverBg',
    },
    _disabled: {
      color: 'buttons.disabledColor',
      bg: 'buttons.bg',
      opacity: '1',
      _hover: {
        bg: 'buttons.disabledbg',
        color: 'buttons.disabledColor',
        
      },
    },
  },

  // Styles for the style variations
  variants: {
    solidPrimary: {
      fontWeight: '300',
      fontSize:'sm',
      bg:'buttons.default',
      _focus:{
        boxShadow:'borders.greenDefault'
      }
    },
  },
  
  // Styles for the size variations
  sizes: {
    sm: {
      lineHeight: '40px',
      fontSize: '10px',
      fontWeight: 'semibold',
    },
    md: {
      height: '40px',
      maxHeight: '40px',
      fontSize: 'xs',
    },
    lg: {
      height: '50px',
      maxHeight: '50px',
      fontSize: 'lg',
    },
    '2lg': {
      height: '48px',
      maxHeight: '48px',
      padding: '10px 45px',
    },
    xl: {
      height: '48px',
      maxHeight: '48px',
      fontSize: 'xs',
      px: { base: '40px', lg: '70px' },
    },
    '2xl': {
      height: '48px',
      maxHeight: '48px',
      fontSize: 'xs',
      px: { base: '40px', lg: '100px' },
      padding: '',
    },
  },
  
}
