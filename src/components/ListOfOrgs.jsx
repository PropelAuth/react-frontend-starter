import {useRedirectFunctions, withRequiredAuthInfo} from "@propelauth/react";
import {Link} from "react-router-dom";

function NoOrganizations() {
    const {redirectToCreateOrgPage} = useRedirectFunctions()

    return <div>
        You aren't a member of any organizations.<br/>
        You can either create one below, or ask for an invitation.<br/>
        <button onClick={redirectToCreateOrgPage}>
            Create an organization
        </button>
    </div>
}

function ListOrganizations({orgs}) {
    return <>
        <h3>Your organizations</h3>
        <ul>
            {orgs.map(org => {
                return <li key={org.orgId}>
                    <Link to={`/org/${org.urlSafeOrgName}`}>
                        {org.orgName}
                    </Link>
                </li>
            })}
        </ul>
    </>
}

function ListOfOrgs(props) {
    const orgs = props.orgHelper.getOrgs()
    if (orgs.length === 0) {
        return <NoOrganizations />
    } else {
        return <ListOrganizations orgs={orgs}/>
    }
}

// By default, if the user is not logged in they are redirected to the login page
export default withRequiredAuthInfo(ListOfOrgs);