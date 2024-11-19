import { ISvgIcon } from "../../interfaces/SvgIcon";

const TimelineIcon = ({ fill }: ISvgIcon) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon20_TimeLinePage.5d075c0.svg">
        <g id="Group">
          <g id="Group_2">
            <g id="Group_3">
              <path
                id="Vector"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 8C17.5523 8 18 8.44772 18 9V16C18 16.5523 17.5523 17 17 17H3C2.44772 17 2 16.5523 2 16V9C2 8.44772 2.44772 8 3 8H17ZM16 5C16.5523 5 17 5.44772 17 6V7H3V6C3 5.44772 3.44772 5 4 5H16ZM14 2C14.5523 2 15 2.44772 15 3V4H5V3C5 2.44772 5.44772 2 6 2H14Z"
                fill={fill}
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default TimelineIcon;
