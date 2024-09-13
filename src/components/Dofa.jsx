const dofaData = [
    { id: 1, type: "Debilidades", items: [
      { id: 1, description: "Debilidad 1" },
      { id: 2, description: "Debilidad 2" },
      { id: 3, description: "Debilidad 3" }
    ]},
    { id: 2, type: "Oportunidades", items: [
      { id: 1, description: "Oportunidad 1" },
      { id: 2, description: "Oportunidad 2" },
      { id: 3, description: "Oportunidad 3" }
    ]}
  ];
  
  function Dofa() {
    return (
      <section className="p-4">
        <h2 className="text-2xl font-bold">Diagnóstico Actual - DOFA</h2>
        <div className="grid grid-cols-2 gap-4">
          {dofaData.map((element) => (
            <div key={element.id}>
              <h3 className="text-xl">{element.type}</h3>
              <ul>
                {element.items.map((item) => (
                  <li key={item.id}>{item.description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Dofa;
  