function Result({apiResponse, apiKey}) {
  return (
    <div className="grow p-10 w-3/6 text-2xl">
      <h1>{apiKey ? apiResponse : "Enter API Key!"}</h1>
    </div>
  );
}

export default Result;