import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';

function PrivateRoute({ children, ...rest }) {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div>  <div className=" flex justify-center items-center"> <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        </div></div>
    }

    return (
        <Route
            {...rest}
            render={({ location }) => (user.email || user.displayName) ? ( children ) : (<Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute;