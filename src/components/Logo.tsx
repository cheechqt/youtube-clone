import logoPath from "assets/logo.svg";

export default function Logo() {
  return (
    <div className="w-[120px]">
      <img src={logoPath} alt="logo" />
    </div>
  );
}
