import React from 'react';
import { Redirect, Route } from 'react-router';
import { PuffLoader } from 'react-spinners';
import useAuth from '../Hooks/useAuth'
const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth()
    if (loading) {
        return (
            <div className="p-5 ">
                <PuffLoader color="#FF5A00" size={200} />
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }

        >

        </Route>
    );
};


export default PrivateRoute;