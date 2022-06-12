import { useState, useEffect } from "react";

export default function useLocal (key, defaultValue) {
    const [value, setValue] = useState(() => {
        const localValue = localStorage.getItem(key);
        if (localValue) return JSON.parse(localValue);
        return defaultValue;
    });

    useEffect(() => {
        if (value === null) localStorage.removeItem(key);
        else localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
