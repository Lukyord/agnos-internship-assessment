export default function Overlay({ isNavBarOpen }) {
  return (
    <div
      className={`absolute z-10 bg-gray-900 opacity-50 w-full h-screen ${
        !isNavBarOpen && "hidden"
      }`}
    ></div>
  );
}
