import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg";

import api from "../../services/api";

import lang from "../../assets/lang/pt-br/index.json";

import "./styles.css";

function TeacherForm() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItens, setScheduleItens] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItens([...scheduleItens, { week_day: 0, from: "", to: "" }]);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItens = scheduleItens.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItens(updatedScheduleItens);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api
      .post("classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItens,
      })
      .then(() => {
        alert("Cadastro realizado com sucesso!");

        history.push("/");
      })
      .catch(() => {
        alert("Erro no cadastro!");
      });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title={lang.awesomeGiveClassesTitle}
        description={lang.firstStepFormSub}
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label={lang.fullName}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              name="avatar"
              label={lang.avatar}
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
            <Input
              name="whatsapp"
              label={lang.whatsApp}
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
            <Textarea
              name="bio"
              label={lang.bio}
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label={lang.subject}
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              options={lang.subjectList}
            />
            <Input
              name="cost"
              label={lang.costPerHour}
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              {lang.availableTimes}
              <button onClick={addNewScheduleItem} type="button">
                {lang.plusNewTime}
              </button>
            </legend>

            {scheduleItens.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label={lang.weekDay}
                    value={scheduleItem.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)
                    }
                    options={lang.dayList}
                  />
                  <Input
                    name="from"
                    label={lang.fromHour}
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) =>
                      setScheduleItemValue(index, "from", e.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label={lang.toHour}
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)
                    }
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt={lang.importatntInfo} />
              {lang.importantEx} <br />
              {lang.insertAllData}
            </p>
            <button type="submit">{lang.saveSub}</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
