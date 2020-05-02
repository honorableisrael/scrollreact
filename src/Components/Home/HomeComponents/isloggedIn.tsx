import * as React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../assets/avatar.svg';

export interface IAppProps {
}

export function NavIsLoggedIn (props: IAppProps) {
  return (
    <React.Fragment>
        <div className="title1">
            <button className="title_ll">Save Progress</button>
        </div>
        <div className="title1">
            <Link to="/clarityforteams"><span className="useravatarwraper"><img src={avatar} className="useravatar" alt="avatar"/></span></Link>
        </div>
    </React.Fragment>
  );
}
