// Import dependencies
import React from 'react';

// Create a gigs context
const GigsContext = React.createContext({
  gigs: null,
  selected: null,
  upNext: null
});

// Export gigs context
export default GigsContext;