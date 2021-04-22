// Import Axios
import axios from 'axios';

// Create and export request methods
export default {
  getGigs: function() {
    return axios.get("/api/gigs");
  }
}