import OurService from "../components/ui/OurService";

export default function Home() {
  return (
    <div
      className="h-screen w-full bg-gradient-to-r from-blue-900 to-blue-500 
flex flex-col justify-around items-center"
    >
      <h1 className="text-9xl font-extrabold italic">
        <text className="text-blue-400">BASIc</text>
        <text className="text-cyan-400"> DIAGONOSEs</text>
      </h1>
      <OurService />
    </div>
  );
}
