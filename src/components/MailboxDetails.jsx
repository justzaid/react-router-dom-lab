import { useParams } from 'react-router-dom'

const MailboxDetails = (props) => {

    const { mailboxId } = useParams()

    const singleMailbox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ))
    console.log('Mailbox Details for singleMailbox: ', singleMailbox)

    return (
        <>
        <h2>Mailbox Details</h2>
        <p><strong>Box Holder: </strong>{singleMailbox.boxholder}</p>
        <p><strong>Box Size: </strong>{singleMailbox.boxSize} Size</p>
        </>
    )
}

export default MailboxDetails