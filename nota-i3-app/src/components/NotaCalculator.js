import React, { useState } from "react";
import "./css/NotaCalculator.css";

function NotaCalculator() {
  const [counts, setCounts] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    FF: "",
  });

  const pesos = { A: 10, B: 8, C: 6, D: 3, FF: 1 };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCounts((prev) => ({ ...prev, [name]: value }));
  };

  const calcularI3 = () => {
    let totalDisciplinas = 0;
    let somaReciprocais = 0;

    for (let [conceito, qtdStr] of Object.entries(counts)) {
      const qtd = Number(qtdStr);
      const peso = pesos[conceito] || 0;
      if (peso > 0 && qtd > 0) {
        somaReciprocais += qtd * (1 / peso);
        totalDisciplinas += qtd;
      }
    }
    if (totalDisciplinas === 0) return 0;
    return totalDisciplinas / somaReciprocais;
  };

  const totalAlunos = Object.values(counts).reduce(
    (acc, val) => acc + (Number(val) || 0),
    0
  );
  const i3 = calcularI3();

  return (
    <div className="nota-calculator">
      {["A", "B", "C", "D", "FF"].map((grade) => (
        <div key={grade} className="input-group">
          <label>
            {grade}:{" "}
            <input
              type="number"
              min="0"
              name={grade}
              value={counts[grade]}
              onChange={handleChange}
            />
          </label>
        </div>
      ))}
      <h3>Total de conceitos lançados: {totalAlunos}</h3>
      <h3>Nota I3: {i3.toFixed(2)}</h3>
    </div>
  );
}

export default NotaCalculator;