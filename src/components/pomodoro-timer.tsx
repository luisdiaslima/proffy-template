import React, { useEffect, useCallback } from 'react';
import { useInterval } from '../hooks/useInterval';
import { secondsToTime } from '../utils/seconds-to-time';
import { Button } from './button';
import { Timer } from './timer';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellStart = require('../sounds/bell-start.mp3');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellFinish = require('../sounds/bell-finish.mp3');

const auidioStartWorking = new Audio(bellStart);
const auidioStopWorking = new Audio(bellFinish);

interface Props {
  defaultPomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  // eslint-disable-next-line react/destructuring-assignment
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);
  const [timeCounting, setTimeCouting] = React.useState(false);
  const [working, setWorking] = React.useState(false);
  const [resting, setResting] = React.useState(false);
  const [cycles, setCycles] = React.useState(
    // eslint-disable-next-line react/destructuring-assignment
    new Array(props.cycles - 1).fill(true),
  );

  const [completedCycles, setCompletedCycles] = React.useState(0);
  const [fullWorkingTime, setFullWorkingTime] = React.useState(0);
  const [numberOfPomodoros, setnumberOfPomodoros] = React.useState(0);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setFullWorkingTime(fullWorkingTime + 1);
    },
    timeCounting ? 1000 : null,
  );

  const configureWork = useCallback(() => {
    setTimeCouting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.defaultPomodoroTime);
    auidioStartWorking.play();
  }, [
    setTimeCouting,
    setWorking,
    setResting,
    setMainTime,
    // eslint-disable-next-line react/destructuring-assignment
    props.defaultPomodoroTime,
  ]);

  const configureRest = useCallback(
    (long: boolean) => {
      setTimeCouting(true);
      setWorking(false);
      setResting(true);

      if (long) {
        setMainTime(props.longRestTime);
      } else {
        setMainTime(props.shortRestTime);
      }

      auidioStopWorking.play();
    },
    [
      setTimeCouting,
      setWorking,
      setResting,
      setMainTime,
      // eslint-disable-next-line react/destructuring-assignment
      props.longRestTime,
      // eslint-disable-next-line react/destructuring-assignment
      props.shortRestTime,
    ],
  );

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');

    if (mainTime > 0) return;

    if (working && cycles.length > 0) {
      configureRest(false);
      cycles.pop();
    } else if (working && cycles.length <= 0) {
      configureRest(true);
      setCycles(new Array(props.cycles - 1).fill(true));
      setCompletedCycles(completedCycles + 1);
    }

    if (working) setnumberOfPomodoros(numberOfPomodoros + 1);
    if (resting) configureWork();
  }, [
    working,
    resting,
    mainTime,
    cycles,
    completedCycles,
    numberOfPomodoros,
    configureRest,
    setCycles,
    configureWork,
    // eslint-disable-next-line react/destructuring-assignment
    props.cycles,
  ]);
  return (
    <div className="pomodoro">
      <h2>
        You are:
        {working ? ' working' : ' resting'}
      </h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
        <Button text="Work" onClick={() => configureWork()} />
        <Button text="Rest" onClick={() => configureRest(false)} />
        <Button
          className={!working && !resting ? 'hidden' : ''}
          text={timeCounting ? 'Pause' : 'Play'}
          onClick={() => setTimeCouting(!timeCounting)}
        />
      </div>
      <div className="details">
        <p>
          Ciclos concluídos:
          {completedCycles}
        </p>
        <p>
          Horas trabalhadas:
          {secondsToTime(fullWorkingTime)}
        </p>
        <p>
          Pomodoros concluídos:
          {numberOfPomodoros}
        </p>
      </div>
    </div>
  );
}
