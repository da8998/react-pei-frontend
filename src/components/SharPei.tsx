import { useEffect, useState } from "react";
import axios from "axios";
import "./Components.css";

function SharPei() {

    interface SharPei {
        name: string;
        color: string;
        age: number;
        imageUrl: string;
    }

    const [sharPeis, setSharPeis] = useState<SharPei[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3001/retrieve").then((response) => {
            setSharPeis(response.data.items);
        })
    }, []);

    return (
        <div className="sharpei-main">
            {sharPeis.map((item: any, i: number) => (
                <div key={i} className="card shadow" id="sharpei">
                    <div className="sharpei-content">
                        <img className="sharpei-image" alt={item.name} src={item.imageUrl}></img>
                        <p>My name is...</p>
                        <h5>{item.name}</h5>
                        <p>I'm a {item.color} coat Shar Pei and am {item.age} years old.</p>

                        <h6>Friend?</h6>
                        <button className="btn btn-success">Yes</button>
                        <p>or...</p>
                        <button className="btn btn-danger">No</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SharPei;