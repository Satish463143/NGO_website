import { useState, useEffect } from "react";
import { BASE_URL } from "../utils/api";

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

export const getPartner = (partnerID) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${BASE_URL}/our-partners/get-partner/${partnerID}`);
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

export const addNewPartner = async (payload) => {
    try {
        const response = await fetch(`${BASE_URL}/our-partners/add-partner`, {
            method: "POST",
            body: payload
        });
        if (!response.ok) {
            throw new Error("Failed to add partner");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const editPartner = async (payload, partnerID) => {
    try {
        const response = await fetch(`${BASE_URL}/our-partners/edit-partner/${partnerID}`, {
            method: "PUT",
            body: payload
        });
        if (!response.ok) {
            throw new Error("Failed to add partner");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deletePartner = async (payload) => {
    try {
        const response = await fetch(`${BASE_URL}/our-partners/delete-partner/${payload}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("Failed to delete partner");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};