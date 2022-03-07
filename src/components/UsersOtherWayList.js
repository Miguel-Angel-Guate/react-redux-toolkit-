import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setOtherWayUserList } from "../redux/userOtherWaySlice";
import UserDisplayListOtherWay from "./UserDisplayListOtherWay";

const UsersOtherWayList = () => {
    const {listOtherWay} = useSelector(state => state.usersOtherWay)
    // console.log('list other way', listOtherWay);
    const dispatch = useDispatch()
    const fetchUserOtherWay = async() => {
        const res = await axios.get('https://reqres.in/api/users?per_page=12')
        .catch((err) => {
            console.log(err);
        })
        dispatch(setOtherWayUserList(res.data.data))
        // console.log('res', res.data.data);
    } 
    useEffect(() => {
        fetchUserOtherWay()
    }, [])

    return ( 
        <>
        <div className="container">
        <div className="row">
            {listOtherWay.map((user, index) => (
                    // <UserDisplayList key={index} user={user} />
                    <UserDisplayListOtherWay key={index} user={user} />
            ))}
        </div>
    </div>
        
        </>
     );
}
 
export default UsersOtherWayList;