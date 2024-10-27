"use client";
import React, { useEffect, useRef } from "react";

const LocalTime: React.FC = () => {
  const timeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const updatePhilippinesTime = () => {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true, // 12-hour format with AM/PM
      };

      if (timeRef.current) {
        timeRef.current.textContent = `${new Intl.DateTimeFormat(
          "en-US",
          options
        ).format(date)} UTC+8`;
      }
    };

    // Initial call and interval setup
    updatePhilippinesTime();
    const interval = setInterval(updatePhilippinesTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return <p ref={timeRef} className="text-white font-bold"></p>;
};

export default LocalTime;
