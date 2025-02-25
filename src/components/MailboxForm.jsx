import { useState } from "react"
import { useNavigate } from "react-router-dom"

const MailboxForm = (props) => {

    const navigate = useNavigate()

    const defaultState = {
        _id: null,
        boxSize: '',
        boxholder: '',
      }

    const [formData, setFormData] = useState(defaultState)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addBox(formData)
        setFormData(defaultState)
        console.log(formData)
        navigate('/mailboxes')
    }
  
    return (
        <>
        <h2>Details</h2>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="">Enter a Box Holder: </label>
                <input
                placeholder="Boxholder name"
                type="text"
                onChange={handleChange}
                value={formData.boxholder}
                name="boxholder"
                />
                <label htmlFor="">Box Size: </label>
                <select name="boxSize" onChange={handleChange}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <button type="submit">Submit Mailbox</button>
            </form>
        </>
    )
}

export default MailboxForm