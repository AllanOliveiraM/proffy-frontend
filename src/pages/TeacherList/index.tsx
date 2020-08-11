import React from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import lang from "../../assets/lang/pt-br/index.json";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title={lang.availableProffysTitle}>
        <form id="search-teachers">
          <Select
            name="subject"
            label={lang.subject}
            options={lang.subjectList}
          />
          <Select
            name="week_day"
            label={lang.weekDay}
            options={lang.dayList}
          />
          <Input name="time" label="time" type="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
