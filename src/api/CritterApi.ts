const critterApi = {
    fetchCritters: async (): Promise<Critter[]> => {
        const requestHeaders = new Headers()
        requestHeaders.append("Accept", "application/json")
        try {
            const apiUrl: string = import.meta.env.VITE_API_URL
            console.log(`The API URL is ${apiUrl}`)
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
    addCritter: async (something: any): Promise<String> => {
        console.log(`Calling addCritter with ${JSON.stringify(something)}`)
        const requestHeaders = new Headers()
        requestHeaders.append("Accept", "application/json")
        requestHeaders.append("Content-Type", "application/json")
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
                return "OH NO"
            }
            const json: Critter  = await response.json()
            console.log(`The response has been returned`, json)
            return "OK"
        } catch (error: any) {
            console.error(error.message, error)
            return error.message
        }
    }




}

export default critterApi