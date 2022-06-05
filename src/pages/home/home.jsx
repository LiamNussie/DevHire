import axios from "axios";
import { useEffect, useState } from "react";
import AppLoader from "../../components/appLoader/appLoader";
import "./home.scss"; 
import { useDispatch } from "react-redux";
import { userActionTypes } from "../../redux/constants/userActionTypes";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const baseUrl = "https://api.terawork.com";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [developers, setDevelopers] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [currency, setCurrency] = useState([]);
    const [defCurrency, setDefCurrency] = useState("naira");

    const fav = useSelector(({ userData }) => userData.favorites);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get( `${baseUrl}/service-categories/sellers-services/computer-software-development`)
            .then(res => setDevelopers(res?.data?.data?.service_search_results?.hits))
            .then(res => setLoading(false))
            .catch(err => console.log(err))
    }, []);
    useEffect(() => {
        axios.get( `${baseUrl}/resources`)
            .then(res => setCurrency(res?.data?.data?.currencies))
            .then(res => setLoading2(false))
            .catch(err => console.log(err))
    }, []);

    const addArray = (i) => {
        let newArray = [...favorites, i];
        if (favorites.includes(i)) {
        newArray = newArray.filter((d) => d !== i);
        }
        setFavorites(newArray);
        dispatch({
            type: userActionTypes.FAVORITE_UPDATED,
            payload: newArray
        })

    }

    return (
        <div className="home">
            <Link to='/favorites' style={{textDecoration: "none"}}><div className="temp">
                 <i className="fas fa-heart fav-nav"></i>
                 <p className="info">Favorites</p>
            </div></Link>
           
            <div className="name"><span className="dev">Dev</span><span className="hire">Hire</span></div>
            <p className="title">Hire Top Developers</p>

            <div className="card-list">
                { loading ? <AppLoader /> :
                developers.map((i) => {
                    return (
                        <div className="card" key={i._id}>
                            <div className="top" style={{backgroundImage: `url(${i._source?.service_photo})`}}>
                                <i onClick={() => addArray(i)} className={fav.includes(i) ? "fas fa-heart liked" : "fas fa-heart"}></i>
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


            <div className="currency-converter">
                <p className="copy">&copy; 2022 DevHire</p>
                <select>
                   {currency.map(({short, id, name}) => {
                       return (
                           <option key={id} value={short}>{name} ({short})</option>
                       )
                   })}
                </select>
            </div>
        </div>
    )
}

export default Home;