import { MdOutlineFileDownload } from "react-icons/md";
const DownloadButton = () => {
  const url =
    "https://www.googleapis.com/drive/v3/files/1O2uUUYJ8gwjBiMeEx5uVoJXZlsl9ZB7s/?key=AIzaSyBzNDp5TvlGcsGVfK94D-VB7LmX30672v0&alt=media";

  return (
    <a
      href={url}
      className="absolute text-3xl md:text-xl top-0.5 md:-top-1 right-4 flex justify-center items-center gap-2 md:bg-primary-400 md:px-6 md:py-2 md:rounded-full"
    >
      <span className="hidden md:block text-base font-normal text-neutral-100">
        Download
      </span>
      <MdOutlineFileDownload />
    </a>
  );
};

export default DownloadButton;
