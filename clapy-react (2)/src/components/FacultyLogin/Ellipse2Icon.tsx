import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 449 449' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle opacity={0.6} cx={224.5} cy={224.5} r={224.5} fill='#FF79DF' fillOpacity={0.5} />
  </svg>
);

const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
