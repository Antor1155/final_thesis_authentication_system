import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import Officials from "../pages/officials/Officials";
import auth from "./firebase.init";


function RequireAuth({ children }) {
    const [user, loading, error] = useAuthState(auth);
    if(loading){
        return <h2> laoding....</h2>
    }
    if (!loading && !user) {
        console.log("no users");
        return <Navigate to="/login" />;
    }
    if(user.email != "md.antor1155@gmail.com"){
        return <Officials></Officials>
    }
    return children;
}

export default RequireAuth;