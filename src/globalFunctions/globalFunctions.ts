import { useState } from "react";
import { UseInputProps } from "../interfaces/interfaces";

//function for a random userID
export function generateUserId() {
    const randomNumber = Math.floor(Math.random() * 9000) + 1000; 
    const timestamp = new Date().getTime();
    const userId = `U${timestamp}${randomNumber}`;
    return userId;
}

// useInput hook
export const useInput = ({ initialValue }: UseInputProps) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(event.target.value)
    }

    const handleReset = () => {
        setValue(initialValue)
    }
    return {
        value,
        onChange: handleChange,
        handleReset: handleReset,
    }
}