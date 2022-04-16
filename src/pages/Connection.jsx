import { USER_MAIN_DATA } from "../utils/mock/mockedData"
import { Link } from "react-router-dom"

/**
 * This component render the Connection page, to select the user
 * 
 * @component
 * 
 * @returns {}
 */

function Connection() {
    const users = USER_MAIN_DATA
    
    return (
        <div className="user_select">
            {users.map(user => 
                <Link to={'/user/' + user.id} key={user.id}>
                    <span>{user.userInfos.firstName} {user.userInfos.lastName}</span>
                </Link>
            )}
        </div>
    )
}

export default Connection