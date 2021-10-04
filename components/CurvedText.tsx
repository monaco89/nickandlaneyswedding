import React from 'react';

type CurvedTextProps = {
  text: string;
  objectSize?: number;
  spacing?: number;
  offset?: number;
  overlap?: boolean;
};

function CurvedText({
  text,
  objectSize = 280,
  spacing = 12,
  offset = 30,
  overlap = false,
}: CurvedTextProps): JSX.Element {
  const d = objectSize + spacing * 2;
  const r = objectSize / 2 + spacing / 2;

  return (
    <div
      className="curved-text m-auto"
      style={{
        marginBottom: overlap ? `-${r}px` : '0',
        width: `${d + offset * 2}px`,
        height: `${r + offset}px`,
        fontSize: '34pt',
      }}
    >
      <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
        <path
          id="curve"
          d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${d + offset},${
            r + offset
          }`}
        />
        <text width="500">
          <textPath xlinkHref="#curve" startOffset="50%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export default CurvedText;
