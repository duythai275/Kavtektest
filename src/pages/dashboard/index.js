import './index.css';
import Sidebar from '../../components/sidebar';
import Sales from '../../components/sales';
import Users from '../../components/users';

const Dashboard = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="container">
        <Sales />
        <Users />
      </div>
    </div>
  );
}

export default Dashboard;
