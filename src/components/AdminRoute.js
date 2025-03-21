import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AdminRoute = ({ children }) => {
    const { currentUser, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="loading">Đang tải...</div>;
    }

    if (!currentUser || currentUser.role !== 'admin') {
        return <Navigate to="/" />;
    }

    return children;
};

export default AdminRoute;