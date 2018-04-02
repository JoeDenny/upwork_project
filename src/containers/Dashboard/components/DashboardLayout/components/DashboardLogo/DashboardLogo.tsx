import * as React from 'react';
import './DashboardLogo.css';
import { Link } from 'react-router-dom';
const logo = require('../../../../../../images/logo.svg');

const DashboardLogo = () => (
    <div className="dashboard-logo">
        <Link to={'/'}>
            <img src={logo} />
        </Link>
    </div>
);

export default DashboardLogo;