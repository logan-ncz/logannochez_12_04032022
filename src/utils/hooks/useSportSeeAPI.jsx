import { useEffect, useState } from 'react';

/**
 * Hook used to extract from SportSeeAPI to feed the dashboard.
 * 
 * @param {string} service
 * @param {number} userId
 * @returns {undefined|Object} State isLoading, and the data
 */

export function UseSportSeeAPI(service, userId) {
  const baseUrl = "http://localhost:5500"

  const [data, setData] = useState({})

  const [isLoading, setLoading] = useState(true)

  const endpoint = getEndpointByService(service, userId)

  const url = `${baseUrl}/${endpoint}`

  useEffect(() => {
    if (!url) return

    async function fetchData() {
      const response = await fetch(url)

      const data = await response.json()

      setData(data)

      setLoading(false)
    }

    setLoading(true)

    fetchData()
  }, [url])

  return { isLoading, data }
}

/**
 * Function used to get endpoint to call SportSeeAPI
 * 
 * @param {string} service 
 * @param {string} userId 
 * @returns {string} endpoint associated to the service and id
 */

function getEndpointByService(service, userId) {
  switch (service) {
    case "activity":
      return `user/${userId}/activity`;

    case "average-sessions":
      return `user/${userId}/average-sessions`;

    case "performance":
      return `user/${userId}/performance`;

    case "data":
      return `user/${userId}`;

    default:
      return null;
  }
}