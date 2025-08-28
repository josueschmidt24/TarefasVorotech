import React, { useState, useEffect } from "react";
import timezones from "../data/timezones.js";

function TimeDisplay() {
  const [time, setTime] = useState("");
  const [timezone, setTimezone] = useState("America/Sao_Paulo");

  const fetchTime = async (tz) => {
    try {
      const response = await fetch(`http://localhost:3333/timenow?tz=${tz}`);
      if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
      const data = await response.json();
      setTime(data?.datetime || "Sem dados");
    } catch (err) {
      console.error("Erro ao buscar hora:", err);
      setTime("Erro ao buscar hora. Verifique se a API está em execução!");
    }
  };

  useEffect(() => {
    fetchTime(timezone);
    const interval = setInterval(() => fetchTime(timezone), 10000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div>
      <label>
        Selecione o timezone:{" "}
        <select value={timezone} onChange={(e) => setTimezone(e.target.value)}>
          {timezones.map((tz) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </select>
      </label>
      <p>Hora atual: {time}</p>
    </div>
  );
}

export default TimeDisplay;