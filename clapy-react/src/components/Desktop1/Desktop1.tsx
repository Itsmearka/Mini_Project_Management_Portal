import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop1.module.css';
import { Ellipse1Icon } from './Ellipse1Icon';
import { Ellipse2Icon } from './Ellipse2Icon';
import { EllipseIcon } from './EllipseIcon';

interface Props {
  className?: string;
}
/* @figmaId 4:3 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle8}></div>
      <div className={classes.rectangle10}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon} />
      </div>
      <div className={classes.ellipse}>
        <EllipseIcon className={classes.icon2} />
      </div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon3} />
      </div>
      <div className={classes.home}>Home</div>
      <div className={classes.help}>Help</div>
      <div className={classes.rectangle9}></div>
      <div className={classes.logIn}>Log In</div>
      <div className={classes.sMITLogo}></div>
    </div>
  );
});
