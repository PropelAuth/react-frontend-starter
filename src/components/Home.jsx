import { withRequiredAuthInfo} from "@propelauth/react";
import {Link} from "react-router-dom";


function Home(props) {
   return <div>
        <Link to="/user_info">
            Click Here to see user info
        </Link>
        <br/>
        <Link to="/orgs">
            Click Here to see org info
        </Link>
        <br/>
        <Link to="/auth">
            Click Here to see an authenticated request to the backend
        </Link>
   </div>
}

// By default, if the user is not logged in they are redirected to the login page
export default withRequiredAuthInfo(Home);