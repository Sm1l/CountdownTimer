import React, { useEffect, useState } from "react";

import styles from "./CountContainer.module.scss";
import { CountItem } from "../CountItem";

interface CountContainerProps {
  finalDate: number;
  setCountIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CountContainer: React.FC<CountContainerProps> = ({ finalDate, setCountIsVisible }) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    if (finalDate > Date.now()) {
      setTimeLeft(finalDate - Date.now());
      const interval = setInterval(() => {
        setTimeLeft((timeLeft) => (timeLeft >= 1000 ? finalDate - Date.now() : 0));
        setCountIsVisible(finalDate > Date.now());
        console.log("setInterval");
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    setDays(Math.floor(timeLeft / 1000 / 60 / 60 / 24));
    setHours(Math.floor(timeLeft / 1000 / 60 / 60) % 24);
    setMinutes(Math.floor(timeLeft / 1000 / 60) % 60);
    setSeconds(Math.floor(timeLeft / 1000) % 60);
  }, [timeLeft]);

  return (
    <div className={styles.countContainer}>
      <CountItem number={days} text="days" />
      <CountItem number={hours} text="hours" />
      <CountItem number={minutes} text="minutes" />
      <CountItem number={seconds} text="seconds" />
    </div>
  );
};

export { CountContainer };
