import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { 
    TableContainer, Table, TableHead, TableBody, TableRow, TableCell,
    Paper, IconButton, InputBase
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import "./index.css";

const Users = ({ users }) => {

    const [ search, setSearch ] = useState("");
    const [ filter, setFilter] = useState([]);

    useEffect(() => {
        setFilter(
            users.filter( 
                ({name, createdAt, city}) => ( 
                    search.startsWith("@") ? 
                        city.toLowerCase().includes(search.slice(1,search.length).toLowerCase()) 
                        : 
                        ( name.toLowerCase().includes(search.toLowerCase()) || createdAt.toLowerCase().includes(search.toLowerCase()) || city.toLowerCase().includes(search.toLowerCase()) )
                )
            )
        )
    }, [search]);

    return (
        <div className="card-wrapper">
            <Paper variant="outlined">
                <div className="card-container">
                    <div className="card-user-header">
                        <div className="card-title">Users</div>
                        <div className="card-user-search">
                            <Paper
                                sx={{ p: '1px', display: 'flex', alignItems: 'center' }}
                                variant="outlined"
                            >
                                <IconButton type="submit" sx={{ p: '5px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search"
                                    inputProps={{ 'aria-label': 'search' }}
                                    value={search}
                                    onChange={ e => setSearch(e.target.value)}
                                />
                            </Paper>
                        </div>
                    </div>
                    <div className="card-content">
                        <TableContainer sx={{ maxHeight: 350 }}>
                            <Table stickyHeader >
                                <TableHead>
                                    <TableRow>
                                        <TableCell><div className="table-header">Full Name</div></TableCell>
                                        <TableCell><div className="table-header">City</div></TableCell>
                                        <TableCell><div className="table-header">Date Registered</div></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {
                                    (filter.length === 0) ? 
                                    users.map( user => <TableRow key={user.id}>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.city}</TableCell>
                                        <TableCell>{user.createdAt}</TableCell>
                                    </TableRow>)
                                    : 
                                    filter.map( user => <TableRow key={user.id}>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.city}</TableCell>
                                        <TableCell>{user.createdAt}</TableCell>
                                    </TableRow>)
                                }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.user.users
    }
}

export default connect(mapStateToProps)(Users);