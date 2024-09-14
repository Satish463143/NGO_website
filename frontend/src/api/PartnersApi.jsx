import { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/api";

export const getAllPartners = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${BASE_URL}/our-partners/get-all-partners`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const result = await response.json();
                setData(result.data);
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
