import React from "react";

const Cart = ({ level }) => {
  return (
    <svg
      width="903"
      height="749"
      viewBox="0 0 903 749"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`cart ${level > 9 ? "cart-move" : ""}`}
    >
      <rect
        x="79.4551"
        y="144.847"
        width="607.251"
        height="290.075"
        fill="#BBC0C3"
      />

      {level > 9 && (
        <rect
          x="79.4551"
          y="164.903"
          width="607.251"
          height="27.002"
          fill="#A0C814"
        />
      )}
      {level > 8 && (
        <rect
          x="79.4551"
          y="191.905"
          width="607.251"
          height="27.002"
          fill="#A0C814"
        />
      )}
      {level > 7 && (
        <rect
          x="79.4551"
          y="218.906"
          width="607.251"
          height="27.002"
          fill="#A0C814"
        />
      )}
      {level > 6 && (
        <rect
          x="79.4551"
          y="245.908"
          width="607.251"
          height="27.002"
          fill="#A0C814"
        />
      )}
      {level > 5 && (
        <rect
          x="79.4551"
          y="272.91"
          width="607.251"
          height="27.002"
          fill="#A0C814"
        />
      )}
      {level > 4 && (
        <rect
          x="79.4551"
          y="299.912"
          width="607.251"
          height="27.002"
          fill="#A0C814"
        />
      )}
      {level > 3 && (
        <rect
          x="79.4551"
          y="326.914"
          width="607.251"
          height="27.002"
          fill="#A0C814"
        />
      )}
      {level > 2 && (
        <rect
          x="79.4551"
          y="353.916"
          width="607.251"
          height="27.002"
          fill="#A0C814"
        />
      )}
      {level > 1 && (
        <rect
          x="79.4551"
          y="380.918"
          width="607.251"
          height="27.002"
          fill="#A0C814"
        />
      )}
      {level > 0 && (
        <rect
          x="79.4551"
          y="407.92"
          width="607.251"
          height="27.002"
          fill="#A0C814"
        />
      )}
      <path
        d="M671.576 500.686L782.061 68.0767H902.932V0.0766602H729.246L703.2 102.057L0.0722656 101.554L74.8253 500.683H671.576V500.686ZM685.838 170.045L618.761 432.685H131.271L82.0003 169.613L685.838 170.045Z"
        fill="#BBC0C3"
      />
      <path
        d="M578.49 748.498C638.451 748.498 687.233 699.715 687.233 639.754C687.233 579.793 638.451 531.012 578.49 531.012H168.789C108.828 531.012 60.0453 579.793 60.0453 639.754C60.0453 699.715 108.827 748.498 168.789 748.498C228.751 748.498 277.532 699.715 277.532 639.754C277.532 625.354 274.711 611.602 269.605 599.012H477.674C472.567 611.602 469.746 625.354 469.746 639.754C469.747 699.715 518.529 748.498 578.49 748.498ZM209.532 639.754C209.532 662.221 191.255 680.498 168.789 680.498C146.323 680.498 128.045 662.221 128.045 639.754C128.045 617.289 146.322 599.012 168.789 599.012C191.255 599.012 209.532 617.289 209.532 639.754ZM619.234 639.754C619.234 662.221 600.957 680.498 578.491 680.498C556.025 680.498 537.748 662.221 537.748 639.754C537.748 617.289 556.025 599.012 578.491 599.012C600.957 599.012 619.234 617.289 619.234 639.754Z"
        fill="#BBC0C3"
      />
      <path
        d="M225.551 641.48C225.551 670.535 201.422 694.089 171.658 694.089C141.893 694.089 117.765 670.535 117.765 641.48C117.765 612.424 141.893 588.87 171.658 588.87C201.422 588.87 225.551 612.424 225.551 641.48Z"
        fill="#BBC0C3"
      />
      <path
        d="M624.614 639.755C624.614 668.81 600.485 692.364 570.721 692.364C540.957 692.364 516.828 668.81 516.828 639.755C516.828 610.699 540.957 587.145 570.721 587.145C600.485 587.145 624.614 610.699 624.614 639.755Z"
        fill="#BBC0C3"
      />
    </svg>
  );
};

export default Cart;