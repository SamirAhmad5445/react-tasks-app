import DownloadButton from "./DownloadButton";

const Header = () => {
  return (
    <header className="py-3 bg-primary-500 text-2xl text-center font-bold text-neutral-100">
      <div className="max-container relative">
        <h1>Task Management App</h1>
        <DownloadButton />
      </div>
    </header>
  );
};

export default Header;
