import React from "react";
import { MemoryRouter,Navigate,Route,Routes as DomRoutes } from "react-router-dom"
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/DashBoard';

import paths from './paths';


const Routes = () => {


    return (
    <MemoryRouter>
        <DomRoutes>
            <Route path={paths.LOGIN} element={<Login />} />
            <Route path={paths.REGISTER} element={<Register />} />
            <Route path={paths.DASHBOARD} element={<Dashboard />} />
            <Route path="*" element={<Navigate to={paths.LOGIN} replace/> } />
        </DomRoutes>
    </MemoryRouter>
    );
}

export default Routes;