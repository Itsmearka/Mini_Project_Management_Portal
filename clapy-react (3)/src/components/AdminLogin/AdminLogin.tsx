import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AdminLogin.module.css';
import { Ellipse1Icon } from './Ellipse1Icon';
import { Ellipse2Icon } from './Ellipse2Icon';
import { EllipseIcon } from './EllipseIcon';

interface Props {
  className?: string;
}
/* @figmaId 34:84 */
export const AdminLogin: FC<Props> = memo(function AdminLogin(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle8}></div>
      <div className={classes.rectangle10}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes.ellipse}>
        <EllipseIcon className={classes.icon} />
      </div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon2} />
      </div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon3} />
      </div>
      <div className={classes.home}>Home</div>
      <div className={classes.help}>Help</div>
      <div className={classes.rectangle9}></div>
      <div className={classes.logIn}>Log In</div>
      <div className={classes.sMITLogo}></div>
      <div className={classes.rectangle13}></div>
      <div className={classes.rectangle12}></div>
      <div className={classes.rectangle14}></div>
      <div className={classes.rectangle19}></div>
      <div className={classes.rectangle16}></div>
      <div className={classes.rectangle17}></div>
      <div className={classes.rectangle15}></div>
      <div className={classes.student}>Student</div>
      <div className={classes.userId}>User id</div>
      <div className={classes.rectangle18}></div>
      <div className={classes.logIn2}>Log In</div>
      <div className={classes.password}>Password</div>
      <div className={classes.faculty}>Faculty</div>
      <div className={classes.admin}>Admin</div>
    </div>
  );
});
