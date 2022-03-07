const UserDisplayListOtherWay = ({user}) => {
    const {avatar, first_name, last_name, email} = user
    return ( 
        <div  className="col-md-3">
                            <div className="card">
                                <img src={avatar} alt="avatar"  />
                                <div className="card-body">
                                    <h3 className="card-title">{`${first_name} ${last_name}`}</h3>
                                    <p className="card-text">{email}</p>
                                </div>
                            </div>
                    </div>
     );
}
 
export default UserDisplayListOtherWay;