const RAILS_API_URL = process.env.RAILS_API_URL || 'http://localhost:10524';

export async function fetchData(endpoint) {
  const response = await fetch(`${RAILS_API_URL}/${endpoint}`, {
    cache:"no-cache"
  })
  const data = await response.json()
  return data
}


// const apiUrl = process.env.API_URL || 'http://localhost:10524';

// async function fetchJobs() {
//   try {
//     const response = await fetch(`${apiUrl}/api/jobs`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Fetching jobs failed:", error);
//     throw error;
//   }
// }

