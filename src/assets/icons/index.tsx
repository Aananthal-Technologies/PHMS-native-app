import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../styles/global';

interface IconProps {
  size?: number;
  color?: string;
}

export function ArrowRightIcon({ size = 16, color = colors.iconStroke }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d="M3.33331 8.00001H12.6666M7.99998 12.6667L12.6666 8.00001L7.99998 3.33334"
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ArrowLeftIcon({ size = 16, color = colors.iconStroke }: IconProps) {
  return (
    <View style={{ transform: [{ rotate: '180deg' }] }}>
      <ArrowRightIcon size={size} color={color} />
    </View>
  );
}

export function ChevronDownIcon({ size = 26, color = '#1D1B20' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 26 26" fill="none">
      <Path
        d="M18.4166 10.8333L13 16.25L7.58329 10.8333H18.4166Z"
        fill={color}
      />
    </Svg>
  );
}
