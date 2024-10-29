import Link from "next/link";

export default function CountryName({ params }: { params: { country_name: string } }) {
  const countries: {
    name: string;
    population: number;
    capital: string;
  }[] = [
    {
      name: "Pakistan",
      population: 241495112,
      capital: "Islamabad",
    },
    {
      name: "India",
      population: 1450935791,
      capital: "Delhi",
    },
    {
        name: "Japan",
        population: 124352000,
        capital: "Tokyo",
    },
    {
        name: "America",
        population: 346027869,
        capital: "Washington",
    },
  ];

  function findCountry(name: string): {name: string, population: number, capital: string } | undefined {
    return countries.find(
      (country) => name.toLowerCase() == country.name.toLowerCase()
    );
  }

  const result = findCountry(params.country_name);

  return (
    <div>
      <div>
        {result ? (
          <div className=" text-xl">
            <h1>Country Name: {result.name}</h1>
            <h1>Country Population: {result.population}</h1>
            <h1>Country Capital: {result.capital}</h1>
          </div>
        ) : (
          <h1 className="text-xl">
            {params.country_name} not found in the database.         
          </h1>
        )}
      </div>
      <div>
        <ul className="cust_button text-2xl p-4 ">
          <Link className=" px-2 py-2  bg-blue-500 text-white font-semibold rounded hover:bg-blue-400" href="/">
          Back
          </Link>
        </ul>
        
      </div>
    </div>
  );
}