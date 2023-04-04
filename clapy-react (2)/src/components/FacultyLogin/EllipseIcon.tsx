import { memo, SVGProps } from 'react';

const EllipseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 449 449' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle opacity={0.5} cx={224.5} cy={224.5} r={224.5} fill='#5326CA' />
  </svg>
);

const Memo = memo(EllipseIcon);
export { Memo as EllipseIcon };
