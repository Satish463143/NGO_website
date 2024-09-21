// src/hooks/useProjects.js
import { useState, useEffect } from "react";

export const getAllVideos = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=UUbJH3ToKkkayePw4fjm20EA&key=AIzaSyAPGAMbr3I2kxPd9XwQNB66CUmOztZmQIo');

                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();

                setData(result.items);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { data, loading, error };
};


