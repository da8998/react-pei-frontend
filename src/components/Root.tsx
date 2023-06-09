import { Link } from "react-router-dom";
import "./Components.css";

function Root() {

    return (
        <div className="the-root">
            <div className="root-main">
                <h5>Wrinkles and rolls. Let's compare them!</h5>
                <p>Join the revolution.</p>
                <Link to="/sharpei">
                    <button className="btn btn-dark">Sure</button>
                </Link>   
            </div>
        </div>
    )
}

export default Root;