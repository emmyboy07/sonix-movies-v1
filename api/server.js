export default async function handler(req, res) {
  const query = req.query.query;
  if (!query) {
    return res.status(400).json({ error: "Missing 'query' parameter" });
  }

  try {
    const response = await fetch(
      `https://clipsave-movies-api.onrender.com/v1/movies/search?query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch movies" });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
