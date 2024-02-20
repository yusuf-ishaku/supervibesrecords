export async function generateMetadata({ params, searchParams }, parent) {
    const event = await fetch(`https://super-vibes-record.onrender.com/api/v1/events/ticket/${params.ticket}`, {
        cache: 'no-store'
    }).then((res) => res.json()).then((value) => value.data);
    console.log(event);
    return {
      title: `${event.ticket.tag} ticket for ${event.event.eventName}`,
      openGraph: {
        images: event.event.eventFlier,
      },
      description: `Buy ${event.ticket.tag} for ${event.event.eventName} hosted by Super Vibez Records.`
    }
}

export default function Layout({children}) {
    return (
        <section>
            {children}
        </section>
    )
}