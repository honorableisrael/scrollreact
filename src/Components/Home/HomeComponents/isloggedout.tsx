import * as React from 'react';
import {Link} from 'react-router-dom';

export interface IAppProps {
}

export function NavIsLoggedOut (props: IAppProps) {
  return (
    <React.Fragment>
        <div className="title1">
            <button className="title_l">LOGIN</button>
        </div>
        <div className="title1">
            <Link to="/clarityforteams"> <button className="title_t">TEST</button></Link>
        </div>
    </React.Fragment>
  );
}
