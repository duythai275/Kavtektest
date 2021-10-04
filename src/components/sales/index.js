import { connect } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Line } from '@ant-design/charts';
import "./index.css";

const Sales = ({
    sale: {
        sales,
        totalSale
    }
}) => {

    const data = Object.keys(sales).map( h => ({
        time: `${h} am`,
        sale: sales[h]
    }));
    const chart = {
        data,
        height: 300,
        xField: 'time',
        yField: 'sale',
        point: {
            size: 5,
            shape: 'diamond',
        }
    }

    return (
        <div className="card1-wrapper">
            <Card variant="outlined">
                <CardContent>
                    <div className="card1-container">
                        <div className="card1-title">Total Sales</div>
                        <div className="card1-subtitle">${totalSale.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," )}</div>
                    </div>
                    {
                        (chart) && <Line {...chart} />
                    }
                </CardContent>
            </Card>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        sale: state.sale
    }
}

export default connect(mapStateToProps)(Sales);