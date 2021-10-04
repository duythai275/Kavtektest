import { useEffect } from 'react';
import Dashboard from './pages/dashboard';
import { getUsers } from './redux/actions/user';
import { getSales } from './redux/actions/sale';
import { connect } from "react-redux";

const App = ({ getUsers, getSales }) => {

    useEffect(() => {
        Promise.all([
            fetch("https://6155a05293e3550017b08b11.mockapi.io/users").then( res => res.json()),
            fetch("https://6155a05293e3550017b08b11.mockapi.io/sales ").then( res => res.json())
        ])
        .then( arr => {
            getUsers(arr[0]);
            getSales(arr[1]);
        })
    }, []);

    return (
        <div>
            <Dashboard />
        </div>
    )
}

const mapDispatchToProps = {
    getUsers, getSales
}

export default connect(null, mapDispatchToProps)(App);