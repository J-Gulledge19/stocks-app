import { useLoaderData } from "react-router-dom";

const Stock = props => {
    const stockData = useLoaderData();
    return (
        <div>
            <h1>{stockData.name}</h1>
            <h2>
            {stockData.symbol}
            </h2>
            <h2>
            Last Price: {stockData.lastPrice}
            </h2>
            <h2>
            Change: {stockData.change}
            </h2>
            <h2>
            High: {stockData.high}
            </h2>
            <h2>
            Low: {stockData.low}
            </h2>
            <h2>
            Open: {stockData.open}
            </h2>
        </div>
    )
}

export default Stock;