function Result({apiResponse, apiKey }) {
  return (
    <div className="m-6 p-10 w-3/6 text-2xl bg-gray-100 dark:bg-gray-900 rounded-md overflow-auto">
      {apiKey ? apiResponse : "Enter API Key!"}
    </div>
  );
}

export default Result;