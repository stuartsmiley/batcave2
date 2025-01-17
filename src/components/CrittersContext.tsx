import {Context, createContext, Dispatch, ReactNode, useContext, useReducer} from "react";

const CrittersContext = createContext<Critter[]>([])
const CrittersDispatchContext: Context<Dispatch<CritterAction>|null> = createContext<Dispatch<CritterAction>|null>(null)

interface CritterProviderProps {
    initialCritters: Critter[];
    children: ReactNode;
}
export function CrittersProvider({initialCritters, children}: CritterProviderProps) {
    const [critters, dispatch] = useReducer(crittersReducer, initialCritters)
    console.log('DOES DISPATCH HAVE A VALUE?', dispatch)
    return (
        <CrittersContext.Provider value={critters}>
            <CrittersDispatchContext.Provider value={dispatch}>
                {children}
            </CrittersDispatchContext.Provider>
        </CrittersContext.Provider>
    )
}

export function useCritters() {
    return useContext(CrittersContext)
}

export function useCrittersDispatch() {
    return useContext(CrittersDispatchContext)
}

function crittersReducer(critters: Critter[], action: CritterAction): Critter[] {
    switch (action.type) {
        case 'add': {
            console.log("ADD ACTION", action)
            return action.payload
        }
        case 'delete': {
            return critters.filter((critter) => critter.nickname !== action.payload.nickname)
        }
        case 'edit': {
            return critters.map((critter, index) => {
                if (index === action.payload.index) {
                    return action.payload.critter
                } else {
                    return critter
                }
            })
        }
        default: {
            throw Error(`Unknown action ${action.type}`)
        }
    }
}