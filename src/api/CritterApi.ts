const critterApi = {
    fetchCritters: async (accessToken: string): Promise<Critter[]> => {
        const requestHeaders = new Headers()
        requestHeaders.append("Accept", "application/json")
        requestHeaders.append('Authorization', 'Bearer ' + accessToken)
        try {
            const apiUrl: string = import.meta.env.VITE_API_URL
            const response = await fetch(`${apiUrl}/critters`, {
                method: "GET",
                headers: requestHeaders,
                mode: 'cors',

            })
            if (!response.ok) {
                console.warn('fetchCritters RESPONSE not OK', response)
                return []
            }
            const json: Critter[]  = await response.json()
            console.log(`The response has been returned`, json)
            return json
        } catch (error: any) {
            console.error(error.message, error)
            return []
        }
    },
    addCritter: async (something: any, accessToken: string): Promise<String> => {
        console.log(`Calling addCritter with ${JSON.stringify(something)}`)
        const requestHeaders = new Headers()
        requestHeaders.append("Content-Type", "application/json")
        requestHeaders.append('Authorization', 'Bearer ' + accessToken)
        try {
            const apiUrl: string = import.meta.env.VITE_API_URL
            const response = await fetch(`${apiUrl}/critter`, {
                method: "POST",
                headers: requestHeaders,
                mode: 'cors',
                body: JSON.stringify(something)
            })
            console.log('MY RESPONSE', response)
            if (response.status !== 201) {
                console.warn('fetchCritters RESPONSE not OK', response)
                const info: any  = await response.json()
                console.log('DID WE GET INFO', info)
                return info ? info.detail : "OH NO, something went wrong"
            }
            const json: Critter  = await response.json()
            console.log(`The response has been returned`, json)
            return "OK"
        } catch (error: any) {
            console.error(`Caught the error: ${error.message}!`, error)
            return error.message
        }
    },
    fetchKitchenData: async (accessToken: string): Promise<KitchenData[]> => {
        const requestHeaders = new Headers()
        requestHeaders.append("Accept", "application/json")
        requestHeaders.append('Authorization', 'Bearer ' + accessToken)
        try {
            const apiUrl: string = import.meta.env.VITE_API_URL
            const response = await fetch(`${apiUrl}/sensor/kitchen/24`, {
                method: "GET",
                headers: requestHeaders,
                mode: 'cors',
            })
            if (!response.ok) {
                console.warn('fetchKitchenData RESPONSE not OK', response)
                return []
            }
            const json: KitchenData[] = await response.json()
            console.log(`Kitchen data response:`, json)
            return json
        } catch (error: any) {
            console.error('fetchKitchenData error:', error.message, error)
            return []
        }
    }
}

export default critterApi