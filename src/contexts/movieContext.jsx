import {
    createContext,
    useContext,
    useState,
    useReducer,
    useEffect,
} from "react";

const MovieContext = createContext();

const initialState = {};

function reducer() {}

function MovieProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <MovieContext.Provider value={{}}>{children}</MovieContext.Provider>;
}

function useMovies() {
    const context = useContext(MovieContext);
    if (context === undefined) {
        throw new Error("useMovies must be used within a MovieProvider");
    }
    return context;
}

export { MovieProvider, useMovies };

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTFiZTFkZjE2N2FmYjRkZWE0ZTcyOTZjODgyYTU2ZiIsIm5iZiI6MTcyNTk4NjI1Ni43NjM2NTUsInN1YiI6IjY2Yjk4MzEzYWFlOTM5ZGNiNWE5MGZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PAFGGDG38ixrS_yb11RCZlqOX9cgMKbJZJ7UIN7Ttjk",
    },
};
