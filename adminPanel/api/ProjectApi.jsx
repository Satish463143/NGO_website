// src/hooks/useProjects.js
import { useState, useEffect } from "react";
import { BASE_URL } from "../utils/api";

export const getAllProjects = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${BASE_URL}/project/get-all-projects`);
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

export const getProject = (projectID) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${BASE_URL}/project/get-project/${projectID}`);
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

export const addProject = async (payload) => {
    try {
        const response = await fetch(`${BASE_URL}/project/create-project`, {
            method: "POST",
            body: payload,
        });
        if (!response.ok) {
            throw new Error("Failed to add project.");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const editProject = async (payload, projectID) => {
    try {
        const response = await fetch(`${BASE_URL}/project/edit-project/${projectID}`, {
            method: "PUT",
            body: payload,
        });
        if (!response.ok) {
            throw new Error("Failed to edit project.");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteProject = async (payload) => {
    try {
        const response = await fetch(`${BASE_URL}/project/delete-project/${payload}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("Failed to delete project");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
