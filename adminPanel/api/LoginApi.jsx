import { useState, useEffect } from "react";
import { BASE_URL } from "../utils/api";

export const adminLogin = async (payload) => {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            body: payload,
        });
        if (!response.ok) {
            return false;
        }
        localStorage.setItem('userInfo', "admin logged in");
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};


