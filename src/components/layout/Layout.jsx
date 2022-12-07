import MainNavigation from "./MainNavigation";

export default function Layout(props) {
  return (
    <div>
      <MainNavigation />
      {props.children}
    </div>
  );
}
