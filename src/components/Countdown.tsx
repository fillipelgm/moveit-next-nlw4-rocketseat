import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";


export function Countdown() {

  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
   } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          <span>Ciclo encerrado</span>
          <img src="./icons/check.svg" alt="Ícone de check" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              <span>Abandonar ciclo</span>
              <img src="./icons/close_gray.svg" alt="Ícone de fechar" />
              <img src="./icons/close_white.svg" alt="Ícone de fechar" className={styles.imgTop}/>
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              <span>Iniciar um ciclo</span>
              <img src="./icons/play_arrow.svg" alt="Ícone de iniciar" />
            </button>
          )}
        </>
      )}
    </div>
  );
}
