import React from 'react';
import Svg, {G, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const Bang = () => (
  <Svg width={64} height={64} fill="none">
    <G filter="url(#a)">
      <Path
        d="M31.499 61.733c16.569 0 30-13.431 30-30 0-16.568-13.431-30-30-30-16.569 0-30 13.432-30 30 0 16.569 13.431 30 30 30Z"
        fill="url(#b)"
      />
    </G>
    <Path
      d="M32.567 19.832c-6.626 0-11.999 3.883-11.999 10.354a9.544 9.544 0 0 0 2.6 6.744 6.157 6.157 0 0 1-2.373 3.806.6.6 0 0 0-.187.671.62.62 0 0 0 .22.294.65.65 0 0 0 .353.122c1.893.065 4.813-.18 6.6-2.032 1.541.506 3.159.759 4.786.748 6.626 0 11.999-3.882 11.999-10.353s-5.373-10.354-12-10.354Zm1 14.236a.956.956 0 0 1-.293.687 1.015 1.015 0 0 1-.707.284c-.265 0-.52-.102-.707-.284a.957.957 0 0 1-.293-.687v-3.882c0-.258.105-.505.293-.686.187-.183.442-.285.707-.285.265 0 .52.102.707.285a.956.956 0 0 1 .293.686v3.883Zm-.974-6.47a1.37 1.37 0 0 1-.944-.375 1.275 1.275 0 0 1-.395-.913 1.275 1.275 0 0 1 .385-.917c.25-.244.588-.382.941-.384h.013c.354 0 .693.136.943.38.25.242.39.571.39.914 0 .343-.14.673-.39.915-.25.243-.589.38-.943.38Z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={61.499}
        y1={61.733}
        x2={1.499}
        y2={1.733}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D52E3F" />
        <Stop offset={1} stopColor="#FF7786" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Bang;