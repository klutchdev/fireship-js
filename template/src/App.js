/*
    ███████╗██╗██████╗ ███████╗███████╗██╗  ██╗██╗██████╗ 
    ██╔════╝██║██╔══██╗██╔════╝██╔════╝██║  ██║██║██╔══██╗
    █████╗  ██║██████╔╝█████╗  ███████╗███████║██║██████╔╝
    ██╔══╝  ██║██╔══██╗██╔══╝  ╚════██║██╔══██║██║██╔═══╝ 
    ██║     ██║██║  ██║███████╗███████║██║  ██║██║██║     
    ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝  
 */

    import React from "react";
    // import { auth } from "./firebase";
    // import { useAuthState } from "react-firebase-hooks/auth";
    
    function App() {
      // const [user, loading, error] = useAuthState(auth);
    
      // if (loading) {
      //   return <h1>Loading...</h1>;
      // }
      // else if (error) {
      //   return <h1>Error: {error}</h1>;
      // }
      return (
        <>
          <div className="header" />
          <div className="tags">
            <Tag
              link="https://fireship.io/"
              title="#fireship"
              className="tag-fireship"
            />
    
            <Tag
              link="https://fireship.io/tags/react/"
              title="#react"
              className="tag-react"
            />
            <Tag
              link="https://fireship.io/tags/css/"
              title="#css"
              className="tag-css"
            />
            <Tag
              link="https://fireship.io/tags/firebase/"
              title="#firebase"
              className="tag-firebase"
            />
          </div>
          <NpmCommand />
        </>
      );
    }
    
    const Tag = ({ className, link, title }) => {
      return (
        <a href={link} target="blank" className={`tag ${className}`}>
          {title}
        </a>
      );
    };
    
    const NpmCommand = () => (
      <div className="npm-command">
        <code>
          $ npx create-react-app
          <span className="npm-cra"> your-app </span>
          --template
          <span className="npm-template"> fireship-js</span>
        </code>
      </div>
    );
    
    export default App;
    