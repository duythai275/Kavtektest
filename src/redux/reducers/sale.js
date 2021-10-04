import {
    GET_ALL_SALES
} from "../actions/sale/type";

const initState = {
    sales: [],
    totalSale: 0
};

export default function ( state = initState, action ) {
    switch ( action.type ) {
        case GET_ALL_SALES: {
            let reportsByHours = {};
            action.payload.forEach( sale => {
                const d = new Date(sale.createdAt);
                if (reportsByHours[d.getHours()]) reportsByHours[d.getHours()] += parseFloat(sale.price);
                else reportsByHours[d.getHours()] = parseFloat(sale.price);
            });

            return {
                sales: reportsByHours,
                totalSale: Object.values(reportsByHours).reduce( (sum, currentValue) => sum += currentValue, 0)
            }
        }
        default: 
            return state
    }
}