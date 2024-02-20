export async function generateMetadata({ params, searchParams }, parent) {
    const event = await fetch(`http://localhost:3001/api/v1/events/ticket/${params.ticket}`, {
        cache: 'no-store'
    }).then((res) => res.json());
    console.log(event);
    return {
      title: `${event.data.ticket.tag} ticket for ${event.data.event.eventName}`,
      openGraph: {
        images: event.data.event.eventFlier,
      },
      description: `Buy ${event.data.ticket.tag} for ${event.data.event.eventName} hosted by Super Vibez Records.`
    }
}

export default function Layout({children}) {
    return (
        <section>
            {children}
        </section>
    )
}