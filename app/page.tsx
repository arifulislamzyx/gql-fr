import { gqlPeople } from "@/GqlOprations/query";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { loading, error, data } = useQuery(gqlPeople);

  console.log("Data is Here=>", data);

  useEffect(() => {
    fetch("https://api.react-finland.fi/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        {
          people{
            firstName
            lastName
            about
            aboutShort

          }
          }

          `,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Data is here=>", data));
  }, []);
  return (
    <main>
      <h3 className="text-white text-9xl">Here Is GQL Data</h3>
    </main>
  );
}
