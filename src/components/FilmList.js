const FilmList = ({film}) => {
    // console.log('filmlist componen', films);
    const baseImgUrl = "http://image.tmdb.org/t/p/"
    const size = "w300"
    return ( 
        <div  className="col-md-3">
                            <div className="card">
                                <img src={`${baseImgUrl}${size}${film.backdrop_path}`} alt="avatar"  />
                                <div className="card-body">
                                    <h3 className="card-title">{film.title}</h3>
                                    {/* <p className="card-text">{user.email}</p> */}
                                </div>
                            </div>
                    </div>
     );
}
 
export default FilmList;