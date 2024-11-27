import React from 'react';
import styles from './hanukia.module.scss';

export interface HanukiaProps {
  /** Number of candles to light */
  on?: number;
}

export const Hanukia: React.FC<HanukiaProps> = ({ on = 0 }) => {
  const setOn = (index: number): boolean | undefined => {
    if (on > 0) {
      if (index === 5) {
        return true;
      }
      if (index > 5 && 9 - on <= index) {
        return true;
      }
      if (index < 5 && 9 - on <= index) {
        return true;
      }
    }
    return undefined;
  };

  const getCandles = (): JSX.Element[] => {
    return Array.from({ length: 9 }, (_, index) => (
      <div key={`key-candle${index}`} className={styles.candleWrapper}>
        <input
          type="checkbox"
          id={`candle${index}`}
          checked={setOn(index + 1)}
          readOnly
          className={styles.checkbox}
        />
        <label htmlFor={`candle${index}`} className={styles.candle}>
          <div className={styles['flame-container']}>
            <div className={styles['flame-box']}>
              <div className={styles.flame}></div>
            </div>
          </div>
          <div className={styles.stick}></div>
        </label>
      </div>
    ));
  };

  return <div className={styles.main}>{getCandles()}</div>;
};

export default Hanukia;
