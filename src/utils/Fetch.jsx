import { useEffect, useState } from 'react';

/**
 * This function makes API calls for retrieves the data
 * 
 * @param {*} url The url for fetch the data 
 * @param {Object} data The state for retrieve the data
 * @param {boolean} isLoading The state to know if the data are loaded or not, to render that 
 * @returns {Object} Return the data and the state isLoading to render only after the data are loaded
 */

export function useFetch(url) {

  const [data, setData] = useState({})

  const [isLoading, setLoading] = useState(true)

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