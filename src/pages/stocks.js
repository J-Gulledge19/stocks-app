import { Link } from "react-router-dom";
import data from "../stocks-data";

const Stocks = (props) => {

    return (
        <div className="stocks">
            {data.map((stock) => {
                const { name, symbol } = stock;
                return (
                    <Link to={`/stocks/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                );
            })}
        </div>
    );
};

export default Stocks;