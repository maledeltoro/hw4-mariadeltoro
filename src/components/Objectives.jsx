const objectives = [
    { id: 1, goal: "Objetivo 1", target: 100, progress: 30, compliance: 30 },
    { id: 2, goal: "Objetivo 2", target: 150000, progress: 60000, compliance: 40 },
    { id: 3, goal: "Objetivo 3", target: 100, progress: 100, compliance: 100 }
  ];
  
  function getStatus(compliance) {
    if (compliance <= 35) return "Crítico";
    if (compliance <= 75) return "Aceptable";
    return "Exitoso";
  }
  
  function Objectives() {
    return (
      <section className="p-4">
        <h2 className="text-2xl font-bold">Objetivos Estratégicos</h2>
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th>Código</th>
              <th>Objetivo</th>
              <th>Meta</th>
              <th>Avance</th>
              <th>Cumplimiento</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {objectives.map((obj) => (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.goal}</td>
                <td>{obj.target}</td>
                <td>{obj.progress}</td>
                <td>{obj.compliance}%</td>
                <td className={getStatus(obj.compliance) === "Crítico" ? "text-red-500" : getStatus(obj.compliance) === "Aceptable" ? "text-orange-500" : "text-green-500"}>
                  {getStatus(obj.compliance)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
  
  export default Objectives;
  