import data from "./stocks-data";

export const stockLoader = ({params}) => {
    const {symbol} = params
    const stock = data.find(stock => stock.symbol === symbol)
    return stock;
}