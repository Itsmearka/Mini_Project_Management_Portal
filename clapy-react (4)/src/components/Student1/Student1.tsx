import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon';
import { Ellipse2Icon } from './Ellipse2Icon';
import { EllipseIcon } from './EllipseIcon';
import classes from './Student1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 50:17 */
export const Student1: FC<Props> = memo(function Student1(props = {}) {
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
      <div className={classes.goToPrevious}>Go to previous</div>
      <div className={classes.help}>Help</div>
      <div className={classes.rectangle9}></div>
      <div className={classes.logIn}>Log In</div>
      <div className={classes.sMITLogo}></div>
      <div className={classes.rectangle12}></div>
      <div className={classes.rectangle20}></div>
      <div className={classes.rectangle19}></div>
      <div className={classes.rectangle21}></div>
      <div className={classes.student}>Student</div>
      <div className={classes.nameAvishekSuklabaidya}>Name : Avishek Suklabaidya</div>
      <div className={classes.registrationNo202000119}>Registration no : 202000119</div>
      <div className={classes.branchCSE}>Branch : CSE</div>
      <div className={classes.year3rd}>Year : 3rd </div>
      <div className={classes.semester6th}>Semester : 6th </div>
      <div className={classes.cGPA84}>CGPA : 8.4</div>
      <div className={classes.groupId}>Group id : </div>
      <div className={classes.projectName}>Project Name : </div>
      <div className={classes.mentor}>Mentor :</div>
      <div className={classes.rectangle92}></div>
      <div className={classes.edit}>Edit</div>
    </div>
  );
});
