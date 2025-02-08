import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import { UserProvider } from './Context/userContext';


const App = () => {


  return (
    <div>

      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>



    </div>

  );
}

export default App;
