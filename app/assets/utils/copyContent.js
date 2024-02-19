export const copyContent = async (title, artiste, link) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: title,
        text: `Listen to this song ${title} by ${artiste} now on Super Vibes Records`,
        url: link,
      });
    } catch (error) {
      await navigator.clipboard.writeText(link);
      console.log("Content copied to clipboard");
      console.log("Share not supported on this browser, do it the old way");
    }
  }
};
