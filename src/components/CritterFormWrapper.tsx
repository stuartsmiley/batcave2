import { FC } from 'react'
import { useCritters } from '@/components/CrittersContext';
import CritterForm from "@/components/CritterForm.tsx";

interface CritterFormWrapperProps {
    nickname: string | null
}

const CritterFormWrapper: FC<CritterFormWrapperProps> = ({nickname}) => {
    console.log(`the nickname is ${nickname}`)
    const critters = useCritters()
    const currentCritter = nickname ?
        critters.find((critter) => critter.nickname === nickname) : {
            name: '',
            nickname:'',
            species: {"id": 9614,
                "name": "Canis latrans"},
            is_freak: false
        }
    return <CritterForm critter={currentCritter!} />
}
export default CritterFormWrapper