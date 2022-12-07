import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <div className="flex h-[6rem] w-screen justify-start items-center px-[1rem] border-b-2 shadow-xl">
      <Link to="/">
        <h1 className="text-6xl italic font-extrabold px-[1rem]">
          <text className="text-blue-600">BASIc</text>{" "}
          <text className="text-cyan-600">DIAGNOSEs</text>
        </h1>
      </Link>
      <p>search bar</p>
    </div>
  );
}
