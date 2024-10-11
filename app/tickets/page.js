import TicketsPage from "@/app/tickets/ticketsList";


export default function Tickets(){


    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently Open Tickets</small></p>
                </div>
            </nav>

            <TicketsPage />
        </main>
    )
}