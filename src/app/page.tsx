import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-3xl font-serif">Countries List</h1>
      <h2 className="text-xl mt-2">Click on any country button to show its data: </h2>
      <ol className="d-flex text-xl list-decimal ml-5 space-y-2 ">
            <li className="cust_button"><Link className="hover:text-blue-500" href="./country/pakistan">Pakistan</Link></li>
            <li className="cust_button"><Link className="hover:text-blue-500" href="./country/india">India</Link></li>
            <li className="cust_button"><Link className="hover:text-blue-500" href="./country/japan">Japan</Link></li>
            <li className="cust_button"><Link className="hover:text-blue-500" href="./country/america">America</Link></li>
            <li className="cust_button"><Link className="hover:text-blue-500" href="./country/korea">Korea</Link></li>
        </ol>
        <div >
</div>
    </div>
  );
}