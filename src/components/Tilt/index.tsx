import { ReactNode } from 'react';
import Tilt from 'react-tilt'

type Options = {
  reverse?: boolean
  max?: number
  perspective?: number
  easing?: string
  scale?: number
  speed?: string
  transition?: boolean
  axis?: string | null
  reset?: boolean
}

type Props = {
  options?: Options
  children: ReactNode
  onMouseEnter?(): void
  onMouseLeave?(): void
  ref?: any
}

const defaultSettings = {
  reverse: false,
  max: 35,
  perspective: 1000,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  scale: 1.1, // "1.1"
  speed: "1000",
  transition: true,
  axis: null,
  reset: true
};

export const TiltComponent = ({
  onMouseEnter,
  onMouseLeave,
  options = defaultSettings,
  children,
  ref
}: Props) => (
  <Tilt
    ref={ref}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    options={options}
  >
    {children}
  </Tilt>
)