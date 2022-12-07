import MainNavigation from "./MainNavigation";

export default function Layout(props) {
  return (
    <div className="flex">
      <MainNavigation />
      {props.children}
    </div>
  );
}
