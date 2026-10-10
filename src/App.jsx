// import React from 'react'
import { Bounce, ToastContainer } from 'react-toastify'
import AppRoutes from './components/routes/AppRoutes'

const App = () => {
  return (
    <div>
      <AppRoutes />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
    </div>
  )
}
export default App