import axios from "axios";

// Fetch one random quote
export const fetchRandomQuote = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/quotes/random");
    return {
      _id: res.data.id,
      author: res.data.author || "Unknown",
      content: res.data.quote || "",
    };
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};
