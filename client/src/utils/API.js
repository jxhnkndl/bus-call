// Import Axios
import axios from 'axios';

// Create and export request methods
export default {
  getGigs: function() {
    return axios.get("/api/gigs");
  },
  addGig: function(gigData) {
    return axios.post("/api/gigs", gigData);
  },
  deleteGig: function(id) {
    return axios.delete("/api/gigs/" + id);
  },
  updateGig: function(id, gigData) {
    return axios.put("/api/gigs/" + id, gigData);
  }
}