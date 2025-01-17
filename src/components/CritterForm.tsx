import {ChangeEvent, Dispatch, FC, useActionState, useEffect, useState} from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import {useNavigate} from "react-router";
import {FormLabel} from "react-bootstrap";
import CritterApi from "@/api/CritterApi";
import { useCrittersDispatch } from "@/components/CrittersContext";
import Card from 'react-bootstrap/Card'

const species: Species[] = [
    {id: 9606, name: 'Homo sapiens'},
    {id: 9685, name: 'Felis catus Linnaeus'},
    {id: 9614, name: 'Canis latrans'}
    ]
const convertFormToCritter = (formData: any)=> {
    const critter: any = {}
    formData.forEach((value: string, key: string) => {
        if (key === 'species') {
            const speciesId = parseInt(value)
            const mySpecies = species.find((s: Species) => s.id === speciesId)
            critter[key] = mySpecies
        } else if (key === 'is_freak') {
            critter[key] = value === 'true'
        } else {
            critter[key] = value
        }
    })
    return critter
}

interface CritterFormProps {
    critter: Critter
}

const CritterForm: FC<CritterFormProps> = ({critter}) => {
    const [formData, setFormData] = useState<Critter>(critter)
    let navigate = useNavigate()
    const dispatch = useCrittersDispatch()
    // @ts-ignore
    const [state, formAction, isPending] = useActionState(async (prevState: any, formData: any) => {
        console.log('prevState', prevState)
        console.log('formData', formData)
        const toSubmit = convertFormToCritter(formData)
        const message = await CritterApi.addCritter(toSubmit)
        // @ts-ignore
        critter['saved'] = message
        return critter
    }, critter)
    useEffect(() => {
        const addCritters = async (dispatch: Dispatch<CritterAction>) => {
            const newCritters = await CritterApi.fetchCritters()
            dispatch({type: 'add', payload: newCritters})
        }
        console.log(`current state: ${JSON.stringify(state)} and isPending: ${isPending}`)
        // @ts-ignore
        if (state['saved'] == 'OK' && !isPending) {
            console.log(`DISPATCH IS ${typeof dispatch}`, dispatch)
            if (!!dispatch) {
                addCritters(dispatch)
            }
            navigate('/home')
            // @ts-ignore
        } else if (!isPending && !!state['saved']) {

        }
    }, [state, isPending])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('Event', event)
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleSpeciesChange = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(`the new value ${event.currentTarget.value}`)
        const val = parseInt(event.currentTarget.value)
        const selected = species.find((s) => s.id ===  val)
        setFormData({...formData, 'species': selected!})
    }
    const handleFreakChange = (event: ChangeEvent<HTMLSelectElement>)=> {
        setFormData({...formData, 'is_freak': event.currentTarget.value === 'true'})
    }
    return (
        <form action={formAction}>
            {/* @ts-ignore */}
            {!isPending && !!state['saved'] && <Card bg="danger" text="white" className="mb-2">
                <Card.Body>
                    {/* @ts-ignore */}
                    <Card.Text>{state.saved}</Card.Text>
                </Card.Body>
            </Card>}
            <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Name</label>
                <input type="text" className="form-control" id="nameInput"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       placeholder="name"/>
            </div>
            <div className="mb-3">
                <Form.Label htmlFor="nickNameInput">
                    Nickname
                </Form.Label>
                <Form.Control type="text" id="nickNameInput" placeholder="Spike"
                              name="nickname"
                              value={formData.nickname}
                              onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <Form.Label htmlFor="speciesInput">
                    Species
                </Form.Label>
                <Form.Select id="speciesInput" name="species" onChange={handleSpeciesChange}
                             value={formData.species.id}>
                    {species.map((s) => (
                        <option value={s.id}>{s.name}</option>
                    ))}
                </Form.Select>
            </div>
            <div className="mb-3">
                <FormLabel htmlFor="freakInput">
                    Is a Freak
                </FormLabel>
                <Form.Select id="freakInput" name="is_freak" onChange={handleFreakChange}
                    value={formData.is_freak.toString()}>
                    <option>true</option>
                    <option>false</option>
                </Form.Select>
            </div>
            <Button type="submit" disabled={isPending}>
                {isPending ? 'Saving' : 'Save'}
            </Button>
            <Button disabled={isPending}
                    onClick={() => navigate('/home')}>
                Cancel
            </Button>
        </form>
    )
}

export default CritterForm