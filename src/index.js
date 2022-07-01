import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { theme }  from './resources/theme/theme'
import './index.css'
import './fonts/ProximaNova/proxima_nova_black-webfont.woff'
import './fonts/ProximaNova/proxima_nova_black-webfont.woff2'
import './fonts/ProximaNova/proxima_nova_bold-webfont.woff'
import './fonts/ProximaNova/proxima_nova_bold-webfont.woff2'
import './fonts/ProximaNova/proxima_nova_extrabold-webfont.woff'
import './fonts/ProximaNova/proxima_nova_extrabold-webfont.woff2'
import './fonts/ProximaNova/proxima_nova_thin-webfont.woff'
import './fonts/ProximaNova/proxima_nova_thin-webfont.woff2'
import './fonts/ProximaNova/proximanova-regular-webfont.woff'
import './fonts/ProximaNova/proximanova-regular-webfont.woff2'
import './fonts/SharpSans/SharpSansNo1-Bold.woff'
import './fonts/SharpSans/SharpSansNo1-Bold.woff2'
import './fonts/SharpSans/SharpSansNo1Medium-Regular.woff'
import './fonts/SharpSans/SharpSansNo1Medium-Regular.woff2'
import './fonts/ProximaNovaAlt/proxima_nova_alt_bold-webfont.woff'
import './fonts/ProximaNovaAlt/proxima_nova_alt_bold-webfont.woff2'
import './fonts/ProximaNovaAlt/proxima_nova_alt_light-webfont.woff'
import './fonts/ProximaNovaAlt/proxima_nova_alt_light-webfont.woff2'
import './fonts/ProximaNovaAlt/proxima_nova_alt_thin-webfont.woff'
import './fonts/ProximaNovaAlt/proxima_nova_alt_thin-webfont.woff2'
import './fonts/Shsn/shsn-webfont.woff'
import './fonts/Shsn/shsn-webfont.woff2'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

reportWebVitals();
