import { createGlobalStyle } from '@shared/vendor';

import { colors } from '@shared/settings/colors';
import { fontFamilies, fontSizes, fontWeights } from '@shared/settings/fonts';

import 'normalize.css/normalize.css';

const AppStyles = createGlobalStyle`
     html{
        font-size: ${fontSizes.baseFontSize};
        scroll-behavior: smooth;
    }
     *,*:before,*:after  {
        box-sizing: border-box;
    }
  
    body {
        font-size: ${fontSizes.f16};
        background: ${colors.grays.concrete};
        font-family: ${fontFamilies.openSans};        
        color: ${colors.grays.mineShaft};        
        line-height: 1.15;       
    }

    main {
        min-height: 100vh;
    }

    h1, h2{
        line-height: 1.2;
    }

    a, button{
        cursor: pointer;
        color: inherit;
    }

    a {
        text-decoration: none;        
    }
    
    strong {
        font-weight: ${fontWeights.semiBold};
    }
    
    p {
        line-height: 1.5;
        margin-bottom: 10px;
    }
        
	img{
		max-width: 100%;
		height: auto;
    }
`;

export { AppStyles };
