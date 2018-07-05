import {StyledComponent as EmotionStyledComponent} from 'react-emotion'

import Theme from './Theme'

type StyledComponent<P = {}, IP = {}, T = any> = EmotionStyledComponent<{}, {}, Theme>

export default StyledComponent
