import { useEffect, useState } from 'react';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './mockedData.js'

/**
 * Custom Hook used to simulate an API to extract the data from mockedData to feed the dashboard.
 * 
 * @param {string} service
 * @param {number} userId
 * @returns {undefined|Object} State isLoading, and the data
 */

export function MockedAPI(service, logedUserId) {  
  const [data, setData] = useState({})

  const [isLoading, setLoading] = useState(true)

  const endpoint = getMockedEndpointByService(service, logedUserId)

  const url = endpoint

  useEffect(() => {
    if (!url) return

    async function fetchData() {
      let data = {}

      if(service === 'data') {
        data = !logedUserId ? url : url.filter(url => url.id === logedUserId);
      } else {
        data = !logedUserId ? url : url.filter(url => url.userId === logedUserId);
      }          

      setData(data)

      setLoading(false)
    }

    setLoading(true)

    fetchData()
  }, [url, service, logedUserId])

  return { isLoading, data }
}

/**
 * Function used to get endpoint to call MockedAPI
 * 
 * @param {string} service 
 * @param {string} userId 
 * @returns {string} endpoint associated to the service and id
 */

function getMockedEndpointByService(service) {
  switch (service) {
    case "activity":
      return USER_ACTIVITY;

    case "average-sessions":
      return USER_AVERAGE_SESSIONS;

    case "performance":
      return USER_PERFORMANCE;

    case "data":
      return USER_MAIN_DATA;

    default:
      return null;
  }
}