import { addMinutes, differenceInMinutes, format, set } from "date-fns";
import {
  FruitType,
  HemisphereType,
  useIslandActions,
  useIslandInfo,
} from "../store/setting";
import { Wrapper } from "@src/commons/styled";
import { ChangeEvent, useState } from "react";

const MyIsland = () => {
  const { name, time, fruit, hemisphere } = useIslandInfo();
  const { setName, setTime, setFruit, setHemisphere } = useIslandActions();

  const [editField, setEditField] = useState<
    "name" | "time" | "fruit" | "hemisphere" | ""
  >("");

  const [newName, setNewName] = useState<string>(name);
  const [newTime, setNewTime] = useState<Date>(addMinutes(new Date(), time));

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "date") {
      const [year, month, date] = value.split("-");
      const newDate = set(newTime, {
        year: parseInt(year),
        month: parseInt(month) - 1,
        date: parseInt(date),
      });
      setNewTime(newDate);
    }
    if (name === "time") {
      const [hours, minutes] = value.split(":");
      const newDate = set(newTime, {
        hours: parseInt(hours),
        minutes: parseInt(minutes),
      });
      setNewTime(newDate);
    }
  };

  const handleFruitChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFruit(event.target.value as FruitType);
    setEditField("");
  };

  const handleHemisphereChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHemisphere(event.target.value as HemisphereType);
    setEditField("");
  };
  return (
    <Wrapper>
      <div>
        <div>섬 정보</div>

        <div>
          <div>
            <div>섬 이름</div>
            {editField === "name" ? (
              <div>
                <input value={newName} onChange={handleNameChange} />{" "}
                <button
                  onClick={() => {
                    setName(newName);
                    setEditField("");
                  }}
                >
                  submit
                </button>
              </div>
            ) : (
              <div>
                {name === "" ? "섬 이름을 설정해 주세욥" : name}
                <button onClick={() => setEditField("name")}>수정</button>
              </div>
            )}
          </div>

          <div>
            <div>날짜</div>
            {editField === "time" ? (
              <div>
                <input
                  type="date"
                  name="date"
                  value={format(newTime, "yyyy-MM-dd")}
                  onChange={handleTimeChange}
                />
                <input
                  type="time"
                  name="time"
                  value={format(newTime, "HH:mm")}
                  onChange={handleTimeChange}
                />
                <button
                  onClick={() => {
                    setTime(0);
                    setEditField("");
                  }}
                >
                  today
                </button>
                <button
                  onClick={() => {
                    setTime(differenceInMinutes(newTime, new Date()));
                    setEditField("");
                  }}
                >
                  submit
                </button>
              </div>
            ) : (
              <div>
                {format(addMinutes(new Date(), time), "yyyy-MM-dd HH시 mm분")}
                <button onClick={() => setEditField("time")}>수정</button>
              </div>
            )}
          </div>

          <div>
            <div>과일</div>
            {editField === "fruit" ? (
              <div>
                <select value={fruit} onChange={handleFruitChange}>
                  <option value="" label="-" />
                  <option value="apple" label="사과" />
                  <option value="pear" label="배" />
                  <option value="orange" label="오렌지" />
                  <option value="peach" label="복숭아" />
                  <option value="cherry" label="체리" />
                </select>
              </div>
            ) : (
              <div>
                {fruit === "" ? "과일을 선택해 주세요" : fruit}
                <button onClick={() => setEditField("fruit")}>수정</button>
              </div>
            )}
          </div>

          <div>
            <div>반구</div>
            {editField === "hemisphere" ? (
              <div>
                <label>
                  <input
                    type="radio"
                    name="hemisphere"
                    value="north"
                    checked={hemisphere === "north"}
                    onChange={handleHemisphereChange}
                  />
                  북
                </label>
                <input
                  type="radio"
                  name="hemisphere"
                  value="south"
                  checked={hemisphere === "south"}
                  onChange={handleHemisphereChange}
                />
                <label htmlFor="south">남</label>
              </div>
            ) : (
              <div>
                {hemisphere === "north" ? "북" : "남"}
                <button onClick={() => setEditField("hemisphere")}>수정</button>
              </div>
            )}
          </div>
        </div>
        {/*
          정보 localstorage에 저장, 추후 로그인 추가 시에 supabase 연동
          평판 기록할 수 있게 하고, 만약 평판이 5점 이하라면 현재 평판보다 한 단계 높은 평판이 되기 위한 조건 나열
        */}
      </div>
    </Wrapper>
  );
};

export default MyIsland;
