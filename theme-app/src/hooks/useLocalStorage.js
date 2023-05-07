import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storadeValue, setStoredValue] = useState(() => {
        try {
          const item = localStorage.getItem(key);
          return item ? JSON.parse(item) : initialValue;
        } catch (error) {
          console.error(error);
          return initialValue;
        }
    })

    const setValue = value => {
        try {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    }

    return [storadeValue, setValue];
}

export default useLocalStorage