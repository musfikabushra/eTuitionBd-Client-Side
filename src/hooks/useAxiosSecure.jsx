import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://etuitionbd-server-side.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;



//  baseURL: "https://etuitionbd-server-side.vercel.app",
//  zoto jaigai add korchen sob gola local host diye hobe, ekahn theke ekbar change korle hoye zabe