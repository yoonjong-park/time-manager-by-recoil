import React from "react";
import { useRecoilState } from "recoil";
import { minutesState, hourSelector } from "./atom";

function App() {
  const [minutes, setMinutes] = useRecoilState(minutesState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onChangeMinutes = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onChangeHours = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        value={minutes}
        onChange={onChangeMinutes}
        type="number"
        placeholder="분 입력"
      />

      <input
        value={hours}
        onChange={onChangeHours}
        type="number"
        placeholder="시 입력"
      />
    </div>
  );
}

export default App;
