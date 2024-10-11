
export default function TicketsPage() {

    const tickets = [
        {
            "id": "1",
            "title": "Fix the footer links please",
            "body": "Lorem ipsum Triforce sit amet, Linkus Hyruleus tempus Ganondorf. Nunc ocarina sagittis quis Majoras Mask. Nulla in metus arcu. Suspendisse potenti. In vel mauris varius, consectetur Zora ipsum eget, Master Sword porttitor urna. Fusce elementum urna elit, eget eleifend velit consectetur eget. Integer vel lobortis ipsum, vitae auctor Ocarina of Time. Donec sed urna dapibus, interdum magna a, eleifend magna. Curabitur tincidunt enim a neque volutpat. Phasellus auctor magna vel nunc pretium, ut volutpat justo tristique. Pellentesque cursus convallis mauris, in tempus enim tincidunt vitae.",
            "priority": "low",
            "user_email": "mario@netninja.dev"
        },
        {
            "id": "2",
            "title": "Add in a new stylesheet",
            "body": "Lorem ipsum Triforce sit amet, Linkus Hyruleus tempus Ganondorf. Nunc ocarina sagittis quis Majoras Mask. Nulla in metus arcu. Suspendisse potenti. In vel mauris varius, consectetur Zora ipsum eget, Master Sword porttitor urna. Fusce elementum urna elit, eget eleifend velit consectetur eget. Integer vel lobortis ipsum, vitae auctor Ocarina of Time. Donec sed urna dapibus, interdum magna a, eleifend magna. Curabitur tincidunt enim a neque volutpat. Phasellus auctor magna vel nunc pretium, ut volutpat justo tristique. Pellentesque cursus convallis mauris, in tempus enim tincidunt vitae.",
            "priority": "medium",
            "user_email": "mario@netninja.dev"
        },
        {
            "id": "3",
            "title": "Fix the footer links",
            "body": "Lorem ipsum Triforce sit amet, Linkus Hyruleus tempus Ganondorf. Nunc ocarina sagittis quis Majoras Mask. Nulla in metus arcu. Suspendisse potenti. In vel mauris varius, consectetur Zora ipsum eget, Master Sword porttitor urna. Fusce elementum urna elit, eget eleifend velit consectetur eget. Integer vel lobortis ipsum, vitae auctor Ocarina of Time. Donec sed urna dapibus, interdum magna a, eleifend magna. Curabitur tincidunt enim a neque volutpat. Phasellus auctor magna vel nunc pretium, ut volutpat justo tristique. Pellentesque cursus convallis mauris, in tempus enim tincidunt vitae.",
            "priority": "high",
            "user_email": "peach@netninja.dev"
        }
    ]
    const another_tickets = [];
    return (<>
        {tickets.map(ticket => (
            <div key={ticket.id} className="card my-5">
                <h3>{ticket.title}</h3>
                <p>{ticket.body.slice(0,200)}...</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
        </div>))}
        {another_tickets.length === 0 && (
            <p className="text-center">No more additional tickets!</p>
        ) }
        </>)
}