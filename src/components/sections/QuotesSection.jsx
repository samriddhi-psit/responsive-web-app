import { useEffect, useState } from "react";
import { fetchRandomQuote } from "../../services/api";

export default function QuotesSection() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const loadQuote = async () => {
    try {
      if (quote) setRefreshing(true);
      setLoading(!quote);
      setError("");
      const data = await fetchRandomQuote();
      setQuote(data);
    } catch (err) {
      setError("⚠️ Failed to fetch quote. Please try again.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadQuote();
  }, []);

  return (
    <section id="quotes" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          ✨ Quote of the Moment
        </h2>
        

        <div className="mt-10">
          {/* Loading Skeleton */}
          {loading && (
            <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-8 animate-pulse">
              <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-red-600 mt-6">
              <p>{error}</p>
              <button
                onClick={loadQuote}
                className="mt-4 px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
              >
                Retry
              </button>
            </div>
          )}

          {/* Quote Card */}
          {!loading && !error && quote && (
            <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-10 transition transform hover:scale-105 hover:shadow-2xl">
              <div className="text-5xl mb-6 text-indigo-500">❝</div>
              <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
                “{quote.content}”
              </p>
              <p className="mt-6 font-semibold text-gray-900">— {quote.author}</p>
            </div>
          )}
        </div>

        {/* Refresh Button */}
        <div className="mt-10">
          <button
            onClick={loadQuote}
            disabled={refreshing}
            className={`px-8 py-3 font-semibold rounded-full shadow-lg transition transform hover:scale-105 
              ${refreshing ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}
          >
            {refreshing ? (
              <span className="flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5 animate-spin text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 4v1m0 14v1m8-9h1M4 12H3m15.364-6.364l.707.707M6.343 17.657l-.707.707M17.657 17.657l.707-.707M6.343 6.343l-.707-.707"
                  />
                </svg>
                <span>Refreshing...</span>
              </span>
            ) : (
              "🔄 New Quote"
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
