import React, { useEffect } from 'react';
import Layout from '../layouts/Layout';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const DashboardContainer = () => {
    const dispatch = useDispatch();


    return (
        <Layout sidebar={true} dashboard={true} title="Dashboard">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>
        </Layout>
    );
}

export default DashboardContainer;