export const inputStyles = {
  // Styles for the visual style variations
  baseStyle: {
    field: {
      outline: 'none !important',
      fontSize: 'sm',
      border:'1px solid',

      _active: {
        borderColor: 'badge',
        boxShadow: '0 0 0 1px var(--chakra-colors-badge)',
      },
      _invalid: {
        borderColor: 'red',
        boxShadow: 'none',
      },
      _disabled: {
        bg: 'gray',
        _placeholder: {
          color: 'text.lightText',
        },
      },
    },
  },

  variants: {
    outline: {
      field: {
        color:'text.titleForm',
        height:'50px',
        background:'white',
        borderColor:'gray',
        fontSize:'xs',

        _hover:{
          borderColor:'borders.grayDefault'
        },
        _focus: {
          borderColor:'badge',
          outline:'none',
          boxShadow: '0 0 0 1px var(--chakra-colors-badge)',
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        height: '45px',
        borderRadius: '4px',
        padding: '11px 12px',
      },
    },
    lg: {
      field: {
        height: '48px',
        borderRadius: '4px',
        padding: '16px 12px',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
}
