export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Check API key
  if (!process.env.OPENROUTER_API_KEY) {
    return res.status(500).json({ error: "Server not configured — missing API key." });
  }

  const { messages, temperature = 0.2 } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid request — messages array required." });
  }

  const model = process.env.DEFAULT_MODEL || "openrouter/auto";

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.NEXT_PUBLIC_URL || "https://masterforge.vercel.app",
        "X-Title": "MasterForge",
      },
      body: JSON.stringify({ model, messages, temperature }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenRouter error:", response.status, data);
      return res.status(response.status).json({
        error: `AI error ${response.status}: ${data?.error?.message || JSON.stringify(data)}`
      });
    }

    return res.status(200).json(data);

  } catch (err) {
    console.error("API route error:", err.message);
    return res.status(500).json({ error: "Server error: " + err.message });
  }
}
