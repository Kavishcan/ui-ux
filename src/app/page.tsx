export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-orange-500 p-8">
      <div className="max-w-5xl">
        <h1 className="mb-4 text-4xl text-start font-bold text-white md:text-5xl lg:text-6xl">
          Welcome to UI/UX Components{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
        <p className="text-xl text-white md:text-2xl text-start">
          The ultimate code learning platform empowers you to code with ease
          while enhancing your coding skills!
        </p>
      </div>
    </div>
  );
}
