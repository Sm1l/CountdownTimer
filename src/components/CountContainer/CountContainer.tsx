import React, { useEffect, useState } from "react";

import styles from "./CountContainer.module.scss";
import { CountItem } from "../CountItem";

interface CountContainerProps {}

const CountContainer: React.FC<CountContainerProps> = () => {
  const finalDate = new Date("2024 Jan 1 00:00:00");
  // const finalDate = new Date("2023 Oct 8 17:14:00");
  const diff: boolean = +finalDate > Date.now();
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    if (diff) {
      setTimeLeft(+finalDate - Date.now());
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

  useEffect(() => {
    if (timeLeft >= 0) {
      const interval = setInterval(() => {
        setTimeLeft((timeLeft) => (timeLeft >= 1000 ? timeLeft - 1000 : 0));
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <>
      {diff ? (
        <div className={styles.countContainer}>
          <CountItem number={days} text="days" />
          <CountItem number={hours} text="hours" />
          <CountItem number={minutes} text="minutes" />
          <CountItem number={seconds} text="seconds" />
        </div>
      ) : (
        <h2 className={styles.title}>It's time!</h2>
      )}
    </>
  );
};

export { CountContainer };
