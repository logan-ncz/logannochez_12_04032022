import { USER_MAIN_DATA } from "./mockData/data"
import { Link } from "react-router-dom"

export default function Home() {
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