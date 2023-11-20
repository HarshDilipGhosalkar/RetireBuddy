"use client";
import React, { useState } from "react";
import AddExpenses from "@/components/AddExpenses/AddExpenses";
import AddHealthRecord from "@/components/HealthRecords/HeathRecords";

const PredictCorpus = () => {
  const [data, setData] = useState({});
  const [step, setStep] = useState(1);

  const addExpenses = (list, totalExpense) => {
    setData((prevData) => ({
      ...prevData,
      age: 30,
      retirement_age: 60,
      current_monthly_expense: parseInt(totalExpense),
      current_expenses: list,
    }));
    setStep(2);
  };

  const addHealthRecord = (list) => {
    const healthData = [];
    const currentDate = new Date();

    list.forEach((item) => {
      const recordDate = new Date(item.date);
      const yearsDiff = currentDate.getFullYear() - recordDate.getFullYear();
      healthData.push({
        disease_name: item.diseaseName,
        experiencing_from: `${yearsDiff} years`,
      });
    });

    setStep(3);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var body = data;
    body["current_health_conditions"] = healthData;
    var raw = JSON.stringify(data);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:5000/predictRetirementCorpus", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const sendPostRequest = () => {};

  console.log(step);
  console.log(data);
  return (
    <>
      {step == 1 ? (
        <AddExpenses handleSubmit={addExpenses} />
      ) : step == 2 ? (
        <AddHealthRecord handleSubmit={addHealthRecord} />
      ) : null}
    </>
  );
};

export default PredictCorpus;
