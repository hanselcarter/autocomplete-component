interface HighLighterProps {
  readonly text: string;
  readonly highlight: string;
  readonly className: string;
}

function HighLighter({ text, highlight, className }: HighLighterProps) {
  const textParts = text.split(new RegExp(`(${highlight})`, "gi"));

  return (
    <div>
      {textParts.map((textPart, index) => {
        const highlightClassName =
          textPart.toLowerCase() === highlight.toLowerCase() ? className : "";
        return (
          <span key={index} className={highlightClassName}>
            {textPart}
          </span>
        );
      })}
    </div>
  );
}

export default HighLighter;
