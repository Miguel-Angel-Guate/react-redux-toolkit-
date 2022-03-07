import { useEffect, /* useState */ } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../redux/userSlice";
import UserDisplayList from "./UserDisplayList";
const UserList = () => {
    // const [users, setUser] =useState([])
    // connect the data with reducer
    const {list: users} = useSelector(state => state.users)//his users is the reducer name in store file. <<IMPORTANT>>
    // const {avatar, email, first_name, id, last_name} = list
    // console.log('list', list);
    const dispatch  = useDispatch()
    useEffect(() => {
        dispatch(fetchAllUsers)
    }, [dispatch])
    // console.log('user', users);
    return ( 
    <>
    <div className="container">
        <div className="row">
            {users.map((user, index) => (
                    <UserDisplayList key={index} user={user} />
            ))}
        </div>
    </div>
    </> );
}
 
export default UserList;