import React, { useContext } from 'react';
import ContentLoader from 'react-content-loader';

import { colors, darkColors } from '../../common/styleguide';
import CustomAppearanceContext from '../../context/CustomAppearanceContext';

const LoadingContent = () => {
  const { isDark } = useContext(CustomAppearanceContext);
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={206}
      backgroundColor={isDark ? '#2a2e36' : '#f3f3f3'}
      foregroundColor={isDark ? '#383c42' : '#ecebeb'}
      style={{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: isDark ? darkColors.border : colors.gray2,
        borderRadius: 4,
        marginBottom: 16,
      }}>
      <rect x="16" y="16" rx="3" ry="3" width="251" height="25" />
      <rect x="16" y="56" rx="3" ry="3" width="62" height="16" />
      <rect x="16" y="88" rx="3" ry="3" width="410" height="10" />
      <rect x="16" y="106" rx="3" ry="3" width="380" height="10" />
      <rect x="16" y="124" rx="3" ry="3" width="194" height="10" />
      <rect x="90" y="56" rx="3" ry="3" width="62" height="16" />
      <rect x="164" y="56" rx="3" ry="3" width="62" height="16" />
      <rect x="16" y="180" rx="3" ry="3" width="306" height="14" />
    </ContentLoader>
  );
};

export default LoadingContent;
