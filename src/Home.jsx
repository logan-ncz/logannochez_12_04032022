import { USER_MAIN_DATA } from "./mockData/data"
import { Link } from "react-router-dom"

export default function Home() {
    const users = USER_MAIN_DATA
    
    return (
        users.map(user => 
            <Link to={'/user/' + user.id} key={user.id}>
                <div className="user_select">
                    <div><span>{user.userInfos.firstName} {user.userInfos.lastName}</span></div>
                </div>
            </Link>
        )
    )
}