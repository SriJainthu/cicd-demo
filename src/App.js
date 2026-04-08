function App() {
  const today = new Date().toLocaleString();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>VANAKAN BRO</h1>

      <p>This change was deployed automatically!</p>

      <h2>Current Time:</h2>
      <p>{today}</p>

      <h3>Status:</h3>
      <p style={{ color: "green", fontWeight: "bold" }}>
        Deployment Successful ✅
      </p>
    </div>
  );
}

export default App;