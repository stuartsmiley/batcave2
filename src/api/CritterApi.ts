const critterApi = {
    fetchCritters: async (): Promise<Critter[]> => {
        const requestHeaders = new Headers()
        requestHeaders.append("Accept", "application/json")
        try {
            const response = await fetch('http://localhost:8000/critters', {
                method: "GET",
                headers: requestHeaders,
                mode: 'cors',

            })
            if (!response.ok) {
                console.warn('fetchCritters RESPONSE not OK', response)
                return []
            }
            const json: Critter[]  = await response.json()
            console.log(`The reponse has been returned`, json)
            return json
        } catch (error: any) {
            console.error(error.message, error)
            return []
        }

        // const cat = {id: 9685, name: "Felis catus Linnaeus"}
        // const human = {id: 9606, name: "Homo sapiens"}
        // const critters: Critter[] = [
        //     {name:'Bruce Wayne', nickname:'BW', is_freak: true, species:cat},
        //     {name:'Lu-Lu Fishpaw', nickname:'LuLu', is_freak: true, species:cat},
        //     {name:'Stuart Smiley', nickname:'Stu', is_freak: false, species:human},
        //     {name:'Jennifer Lentz', nickname:'Doc', is_freak: false, species:human}
        // ]
        // return new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve(critters)
        //     }, 3000)
        // })
    }
}

export default critterApi