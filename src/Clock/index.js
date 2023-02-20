import { useState, useEffect } from "react";
import "./style.css"

const Clock = () => {

    const [date, setDate] = useState(new Date());

    const updateDate = () => {
        setDate(new Date());
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateDate();
        }, 1000);
        return () => {
            clearInterval(intervalId)
        };
    }, [])

    const dateFormat = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }

    return (
        <p className="clockContent">
            Dzisiaj jest&nbsp;
            {
                date.toLocaleString("pl-PL", { ...dateFormat })
            }
        </p>
    );
};

export default Clock;