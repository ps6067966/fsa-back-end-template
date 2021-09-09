import axios from 'axios';
import { ALPHA_API_KEY } from '../keys';

export const loadStockHistory = async (symbol) => {
    const apiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY'
                 + `&symbol=${symbol}`
                 + '&interval=30min'
                 + `&outputsize=full`
                 + `&apikey=${ALPHA_API_KEY}`;
    const response = await axios.get(apiUrl);
    const history = await response.data;
    return history;
}