import React from "react";
import Button from "./Button";

const ENDPOINT = "https://api.adviceslip.com/advice";

function Card() {
  const [advice, setAdvice] = React.useState(null);
  const [isWaiting, setIsWaiting] = React.useState(false);

  React.useEffect(() => {
    generateAdvice();
  }, []);

  const timeOut = React.useCallback(() => {
    setIsWaiting((prevWait) => !prevWait);
    const timer = setTimeout(() => {
      setIsWaiting((prevWait) => !prevWait);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  async function generateAdvice() {
    const response = await fetch(ENDPOINT);
    const json = await response.json();
    setAdvice(json.slip);
  }

  function handleClick() {
    timeOut();
    generateAdvice();
  }

  return (
    <div className="relative flex w-[90%] max-w-[540px] flex-col items-center gap-[24px] rounded-[10px] bg-dark-grayish-blue px-[24px] pt-[40px] pb-[64px] text-center sm:px-[48px] sm:pt-[48px]">
      <h1 className=" font-manrope text-[11px] font-extrabold leading-[15px] tracking-[3.46px] text-neon-green sm:text-[13px] sm:leading-[18px]">
        ADVICE #{advice?.id}
      </h1>
      <p className="font-manrope text-[24px] font-extrabold leading-[33px] tracking-[-0.26px] text-light-cyan sm:text-[28px] sm:leading-[38px] sm:tracking-[-0.3px]">
        {advice?.advice}
      </p>
      <img
        src="../images/pattern-divider-desktop.svg"
        alt="card middle border"
      />
      <Button generateAdvice={handleClick} isWaiting={isWaiting}>
        <img src="../images/icon-dice.svg" alt="dice icon" />
      </Button>
    </div>
  );
}

export default Card;
