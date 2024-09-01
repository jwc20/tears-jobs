const RAILS_API_URL = process.env.RAILS_API_URL

export async function fetchData(endpoint) {
  const response = await fetch(`${RAILS_API_URL}/${endpoint}`)
  const data = await response.json()
  return data
}
