/*
    ███████╗██╗██████╗ ███████╗███████╗██╗  ██╗██╗██████╗ 
    ██╔════╝██║██╔══██╗██╔════╝██╔════╝██║  ██║██║██╔══██╗
    █████╗  ██║██████╔╝█████╗  ███████╗███████║██║██████╔╝
    ██╔══╝  ██║██╔══██╗██╔══╝  ╚════██║██╔══██║██║██╔═══╝ 
    ██║     ██║██║  ██║███████╗███████║██║  ██║██║██║     
    ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝  
 */
import React from "react";
    
function App() {
    return (
        <>
          <div className="header" />
            <div className="npm-command">
              <code>
              $ npx create-react-app
              <span className="npm-cra"> your-app </span>
               --template
              <span className="npm-template"> fireship-js</span>
            </code>
          </div>
        </>
    );
}
    
export default App;
