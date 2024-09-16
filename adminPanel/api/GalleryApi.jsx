import { useState, useEffect } from "react";
import { BASE_URL } from "../utils/api";

export const getAllImages = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${BASE_URL}/gallery/get-all-images`);
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

export const addNewImages = async (payload) => {
    try {
        const response = await fetch(`${BASE_URL}/gallery/add-image`, {
            method: "POST",
            body: payload,
        });
        if (!response.ok) {
            throw new Error("Failed to add images.");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteImage = async (payload) => {
    try {
        const response = await fetch(`${BASE_URL}/gallery/delete-image/${payload}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("Failed to delete image");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
