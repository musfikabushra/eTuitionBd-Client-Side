// import { createContext, useContext, useState } from "react";
// import Loading from "../components/Loading/Loading";

// const LoadingContext = createContext();

// export const useLoading = () => useContext(LoadingContext);

// export const LoadingProvider = ({ children }) => {
//   const [loading, setLoading] = useState(false);

//   return (
//     <LoadingContext.Provider value={{ loading, setLoading }}>
//       {loading && <Loading />}   
//       {children}
//     </LoadingContext.Provider>
//   );
// };
