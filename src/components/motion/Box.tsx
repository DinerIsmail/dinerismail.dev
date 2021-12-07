import React from 'react';
import { chakra } from '@chakra-ui/react';
import type { HTMLChakraProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

import { Merge } from 'types/merge';

type MotionBoxProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>;

const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);

export default MotionBox;
