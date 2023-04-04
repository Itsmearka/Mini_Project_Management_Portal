import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 341 441' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse opacity={0.6} cx={170.5} cy={220.5} rx={170.5} ry={220.5} fill='#8E55FF' />
  </svg>
);

const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
