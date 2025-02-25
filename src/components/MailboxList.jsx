import { Link } from 'react-router-dom'
import '../App.css'

const MailboxList = (props) => {
    return (
        <>
            <h2>Mail Box List</h2>
            <ul className='mailbox-list'>
                {props.mailboxes.map((mailbox) => (
                    <li key={mailbox._id}>
                        <Link to={`/mailboxes/${mailbox._id}`}>ID {mailbox._id} {mailbox.boxholder}'s Mailbox</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MailboxList