import useAxiosPublic from "./useAxiosPublic";
import { useEffect, useState } from 'react';


const useVolunteerData = () => {
    const axiosPublic = useAxiosPublic();

    const [data, setData] = useState([]);

    useEffect(() => {
        axiosPublic.get('/need-volunteer-section')
        .then((res) =>{
            setData(res.data);
        })
    }, [axiosPublic]);


    return [data];
};

export default useVolunteerData;