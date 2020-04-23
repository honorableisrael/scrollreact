import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IAppProps {
}

export function NavIsLoggedIn (props: IAppProps) {
  return (
    <React.Fragment>
        <div className="title1">
            <button className="title_l">Logout</button>
        </div>
        <div className="title1">
            <Link to="/clarityforteams"> <button className="title_t">Test</button></Link>
        </div>
    </React.Fragment>
  );
}
