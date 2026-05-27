// REPLACE THIS LINK WITH YOUR RAILWAY LINK
const BACKEND_URL = "agrohelio-backend-production.up.railway.app"; 

export const solarService = {
  async getFarmerEstimate(data) {
    const response = await fetch(`${BACKEND_URL}/api/farmer/calculate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },

  async getSiteAnalysis(lat, lon) {
    const response = await fetch(`${BACKEND_URL}/api/analyze?lat=${lat}&lon=${lon}`);
    return response.json();
  }
};
