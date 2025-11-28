import React from 'react';
import { View } from '../types';
import GenericContent from './GenericContent';

interface Props {
  onComplete: () => void;
}

const MountainWinter: React.FC<Props> = ({ onComplete }) => {
  return <GenericContent view={View.MOUNTAIN} onComplete={onComplete} />;
};

export default MountainWinter;
