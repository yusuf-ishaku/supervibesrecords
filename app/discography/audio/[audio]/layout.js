export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = params.audio
   
    // fetch data
    const audio = await fetch(`https://super-vibes-records.onrender.com/api/v1/audio/${id}`).then((res) => res.json())
   
    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: audio.data.title,
      openGraph: {
        images: audio.data.imageUrl,
      },
    }
}

export default function Layout({children}) {
    return (
        <section>
            {children}
        </section>
    )
}