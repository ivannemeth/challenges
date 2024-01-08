import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  if (error) return <div>Error</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <h1>Random characters</h1>
      <p>First name: {data.firstName}</p>
      <p>Last name: {data.lastName}</p>
      <p>Twitter: {data.twitterName}</p>
    </>
  );
}
