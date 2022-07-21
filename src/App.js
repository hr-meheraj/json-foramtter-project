import React from 'react';
import './style.css';
import Json from './Json';
import Error from './Error';
import { motion } from 'framer-motion';

export default function App() {
  const [errorMessage, setErrorMessage] = React.useState('');
  return (
    <div>
      <Error>
        {errorMessage && (
          <motion.p
            animate={{ x: 0 }}
            initial={{ x: 50 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="error"
          >
            {errorMessage}
          </motion.p>
        )}
      </Error>

      <Json setErrorMessage={setErrorMessage} />
    </div>
  );
}
