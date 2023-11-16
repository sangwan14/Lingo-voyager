function Result({apiResponse, apiKey}) {
  return (
    <div className="grow p-10 w-3/6 text-2xl">
      {apiKey ? apiResponse : "Enter API Key!"}
    </div>
  );
}

export default Result;