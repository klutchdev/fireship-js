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
  //   return (
  //     <div>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
  // if (error) {
  //   return (
  //     <div>
  //       <h1>Error: {error}</h1>
  //     </div>
  //   );
  // }
  return (
    <>
      {/* {user && (
        <div className='body'>
          <h1>{user.email}</h1>
        </div>
      )} */}
      <div className='header' />
      <div className='tags'>
        <div className='tag tag-fireship'>#fireship</div>
        <div className='tag tag-react'>#react</div>
        <div className='tag tag-css'>#css</div>
        <div className='tag tag-firebase'>#firebase</div>
      </div>
      <div className='npm-command'>
        <code>
          $ npx create-react-app
          <span className='npm-cra'> your-app </span>
          --template
          <span className='npm-template'> fireship-js</span>
        </code>
      </div>
    </>
  );
}

export default App;
