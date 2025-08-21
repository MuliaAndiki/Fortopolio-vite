import ToggleTheme from "../core/components/toggole.theme";
export default function HeaderApp() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <ToggleTheme />
      </div>
    </header>
  );
}
