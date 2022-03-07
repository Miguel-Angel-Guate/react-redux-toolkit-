const UserDisplayList = ({user}) => {
    return (  
        <div  className="col-md-3">
                            <div className="card">
                                <img src={user.avatar} alt="avatar"  />
                                <div className="card-body">
                                    <h3 className="card-title">{`${user.first_name} ${user.last_name}`}</h3>
                                    <p className="card-text">{user.email}</p>
                                </div>
                            </div>
                    </div>
    );
}
 
export default UserDisplayList;