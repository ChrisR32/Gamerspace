import {createContext} from "react";
const AppContext = createContext({
    user: null,
    setUser: () => {},
    handleLogout: () => {}
});

export default AppContext;