import styles from "./DoomCat.module.css";

type Props = {
  doomed: number;
};
export const DoomCat = ({ doomed }: Props) => {
  return (
    <div className={styles.DoomCat} data-doomed={doomed === 7}>
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 72 72"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="color"
          className={styles.DoomCat__Color}
          data-doomed={doomed > 6}
        >
          <path
            d="M58.666,48.974C55.068,58.091 46.034,63.987 35.458,63.987C26.341,63.987 16.202,58.281 12.605,49.164L12.479,48.851C11.337,45.991 11.521,42.491 11.521,39.219L15.188,6.847L25.416,16.927C28.339,15.68 31.553,14.988 34.927,14.988L35.99,14.988C39.363,14.988 42.578,15.68 45.5,16.927L56.728,5.847L60.451,39.723C60.451,42.996 59.822,46.12 58.68,48.98"
            style={{ fill: "#18161F", fillRule: "nonzero" }}
          />
          <path
            d="M35.458,63.987C46.067,64.329 55.812,58.124 59.41,49.007L59.521,48.776C60.662,45.917 60.479,41.88 60.479,38.607L56.728,5.847"
            style={{ fill: "#000304", fillRule: "nonzero" }}
          />
        </g>
        <g id="line">
          <g
            id="doomcat-nose"
            className={styles.DoomCat__Nose}
            data-doomed={doomed > 5}
          >
            <path
              d="M40.16,52.08L36,46.88"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "black",
                strokeWidth: "2px"
              }}
            />
            <path
              d="M31.84,52.08L36,46.88"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "black",
                strokeWidth: "2px"
              }}
            />
            <path
              d="M31.84,46.88L40.16,46.88"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "black",
                strokeWidth: "2px"
              }}
            />
          </g>
          <g
            id="doomcat-right-eye"
            className={styles.DoomCat__RightEye}
            data-doomed={doomed > 4}
          >
            <path
              d="M55.106,33.769C55.106,33.769 41.2,39.647 41.854,40.394C55.16,52.497 56.204,35.455 55.106,33.769Z"
              style={{ fill: "white", fillRule: "nonzero" }}
            />
            <circle cx="48.48" cy="38.56" r="2.08" />
            <path
              d="M55.106,33.722C55.106,33.722 41.2,39.6 41.854,40.347C55.16,52.45 56.204,35.408 55.106,33.722Z"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "black",
                strokeWidth: "2px"
              }}
            />
          </g>
          <g
            id="doomcat-right-whiskers"
            className={styles.DoomCat__RightWhiskers}
            data-doomed={doomed > 1}
          >
            <path
              d="M62,54.16L52.64,48.96"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "black",
                strokeWidth: "2px"
              }}
            />
            <path
              d="M57.84,59.36L48.48,54.16"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "black",
                strokeWidth: "2px"
              }}
            />
          </g>
          <g
            id="doomcat-outline"
            data-doomed={doomed > 0}
            className={styles.DoomCat__Outline}
          >
            <path
              d="M13.292,48.032C12.174,45.266 11.56,42.245 11.56,39.08L15.2,6.32L26.18,17.035C29.038,15.828 32.181,15.16 35.48,15.16L36.52,15.16C39.819,15.16 42.961,15.828 45.821,17.035L56.8,6.32L60.44,39.08C60.44,42.245 59.826,45.266 58.708,48.032"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "black",
                strokeWidth: "2px"
              }}
            />
            <path
              d="M22.825,59.382C26.497,61.676 30.834,63 35.48,63L36.52,63C41.167,63 45.504,61.676 49.175,59.382"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "black",
                strokeWidth: "2px"
              }}
            />
          </g>
          <g
            id="doomcat-left-eye"
            className={styles.DoomCat__LeftEye}
            data-doomed={doomed > 3}
          >
            <path
              d="M16.894,33.769C16.894,33.769 29.76,40.687 30.146,40.394C17.301,53.132 15.597,36.535 16.894,33.769Z"
              style={{ fill: "white", fillRule: "nonzero" }}
            />
            <circle cx="23.52" cy="38.56" r="2.08" />
            <path
              d="M16.894,33.722C16.894,33.722 29.76,40.64 30.146,40.347C17.301,53.085 15.597,36.487 16.894,33.722Z"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "black",
                strokeWidth: "2px"
              }}
            />
          </g>
          <g
            id="doomcat-left-whiskers"
            className={styles.DoomCat__LeftWhiskers}
            data-doomed={doomed > 2}
          >
            <path
              d="M10,54.16L19.36,48.96"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "black",
                strokeWidth: "2px"
              }}
            />
            <path
              d="M14.16,59.36L23.52,54.16"
              style={{
                fill: "none",
                fillRule: "nonzero",
                stroke: "black",
                strokeWidth: "2px"
              }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
