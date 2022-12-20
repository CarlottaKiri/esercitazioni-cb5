export function Button() {
  const log = () => {
    console.log("Hello World!");
  };

  return (
    <button
      aria-label="Click me for a console log"
      className="button"
      onClick={log}
    >
      💙🌏💙
    </button>
  );
}
