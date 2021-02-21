import { Global } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={{
        html: {
          boxSizing: 'border-box',
          width: '100%'
        },
        
        body: {
          backgroundColor: '#efefbb',
          background: 'linear-gradient(to right, #d4d3dd, #efefbb)',
          boxSizing: 'border-box',
          fontFamily: "'Lato', sans-serif",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          width: '100%'
        }
      }}
    />
  )
}

export default GlobalStyles;