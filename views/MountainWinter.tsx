import React from 'react';
import { View } from '../types';
import GenericContent from './GenericContent';

interface Props {
  onComplete: () => void;
}

const MountainWinter: React.FC<Props> = React.memo(({ onComplete }) => {
  return <GenericContent view={View.MOUNTAIN} onComplete={onComplete} />;
});

MountainWinter.displayName = 'MountainWinter';

export default MountainWinter;
