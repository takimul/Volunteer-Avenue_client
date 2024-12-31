import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://volunteer-avenue-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;