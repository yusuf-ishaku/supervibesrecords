export async function generateMetadata({ params, searchParams }, parent) {
    const audio = await fetch(`https://super-vibes-records.onrender.com/api/v1/audio/${params.audio}`).then((res) => res.json());
    return {
      title: audio.data.title,
      openGraph: {
        images: audio.data.imageUrl,
      },
      description: `${audio.data.title} by ${audio.data.artiste} only on Super Vibez Records, your perfect record label`
    }
}

export default function Layout({children}) {
    return (
        <section>
            {children}
        </section>
    )
}