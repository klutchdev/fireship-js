function App() {
  return (
    <>
      <div className="header" />
      <div className="npm-command">
        <code>
          $ npx create-react-app
          <span className="npm-cra"> yourAppName </span>
          --template
          <span className="npm-template"> fireship</span>
        </code>
      </div>
    </>
  );
}

export default App;
