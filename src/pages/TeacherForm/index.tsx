import React from "react";

import PageHeader from "../../components/PageHeader";

import lang from "../../assets/lang/pt-br/index.json";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title={lang.awesomeGiveClassesTitle} />
    </div>
  );
}

export default TeacherForm;
