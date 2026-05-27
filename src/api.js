export const solarService = {
  // This will eventually fetch real data from NASA
  async getFarmerEstimate(data) {
    return new Promise((resolve) => setTimeout(() => resolve({
      savings: data.pumpHp * 15000,
      recommendedKw: data.pumpHp * 1.5
    }), 800));
  }
};
