import { FC, use } from 'react'

interface CrittersProps {
    critters: Promise<Critter[]>
}

const Critters: FC<CrittersProps> = ({critters}) => {
    const resolvedCritters = use(critters)
    return (
        <ul className="no-bullets">
            {resolvedCritters.map((c: Critter) => (
                <li key={c.nickname}>{c.name}</li>
            ))}
        </ul>
    )
}

export default Critters