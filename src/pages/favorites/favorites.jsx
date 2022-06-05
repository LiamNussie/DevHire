import "./favorites.scss"; 
import { useSelector } from "react-redux";
import store from "../../redux/store";
import { Link } from "react-router-dom";

const Favorites = () => {

    const fav = useSelector(({ userData }) => userData.favorites);
    // const { favorites } = currentUser.data;

    console.log(fav)

    return (
        <div className="favorites">
             <Link to='/' style={{textDecoration: "none"}}><div className="temp">
                 <i className="fas fa-home home-nav"></i>
                 <p className="info">Back to Home</p>
            </div></Link>

             <div className="name"><span className="dev">Dev</span><span className="hire">Hire</span></div>
            <p className="title">Favorites</p>

            <div className="card-list">
                {fav.map((i) => {
                    return (
                        <div className="card" key={i._id}>
                            <div className="top" style={{backgroundImage: `url(${i._source?.service_photo})`}}>
                                {/* <i className={fav.includes(i) ? "fas fa-heart liked" : "fas fa-heart"}></i> */}
                                <div className="avatar" style={{backgroundImage: `url(${i._source?.avatar})`}}></div>
                            </div>
                            <div className="bottom">
                                <div className="txt">
                                    <p className="name">{i._source?.display_name}</p>
                                    <p className="fee">{i._source?.currency_name === "NGN" ? "₦" : "$"}{parseInt(i._source?.starting_from.slice(0,-3)).toLocaleString()}</p>
                                </div>
                                <p className="hire">Hire</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Favorites;