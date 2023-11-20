const dashboard = () => {
  const list = {
    error: false,
    data: {
      current_monthly_expense: 6700,
      future_monthly_expense_start: 57763.94,
      future_monthly_expense_end: 949993.55,
      total_corpus: 116589904.8,
      future_expenses: [
        {
          name: "grocery",
          current_expense: 5000,
          inflation_rate: 4.58,
          future_expense_start: 19161.5,
          category_total: 182047014.72000003,
          future_expense_end: 73432.62,
        },
        {
          name: "gas",
          current_expense: 1200,
          inflation_rate: 10.97,
          future_expense_start: 27248.81,
          category_total: 627099689.88,
          future_expense_end: 618749.73,
        },
        {
          name: "light",
          current_expense: 500,
          inflation_rate: 10.97,
          future_expense_start: 11353.63,
          category_total: 261290334.12,
          future_expense_end: 257811.2,
        },
      ],
      current_health_conditions: [
        {
          disease_name: "diabetes",
          experiencing_from: "2 years",
        },
      ],
      future_diseases: [
        {
          "disease name": "diabetic retinopathy",
          "surgery name": "diabetic retinopathy treatment",
          reason: "",
          cost: 55000.0,
          inflation_considered_cost: 329581.35,
          health_inflation_rate: 6.15,
        },
        {
          "disease name": "kidney failure",
          "surgery name": "ESWL surgery or PCNL surgery",
          reason: "",
          cost: 50000.0,
          inflation_considered_cost: 299619.43,
          health_inflation_rate: 6.15,
        },
      ],
      toatl_health_corpus: 9047790.57,
      final_corpus: 125637695.37,
    },
  };
  return (
    <section className="p-4">
      <div className="flex text-[#000000] text-[16px] font-medium px-4 justify-between border-[1px] border-[#404040] bg-[#FFD87A] pr-[70px] h-[30px] items-center">
        <div>Total corpus for recurring expenses:</div>
        <div>₹ {list.data.final_corpus}</div>
      </div>
      <h1 className="font-medium text-[16px] my-4">Recurring Expenses</h1>
      <div className="flex-col w-fit">
        <div className="flex text-[#404040] text-[14px] w-fit font-medium border-[1px] border-[#404040] bg-[#FFD87A]">
          <div className="border-r-[1px] border-[#000] w-[248px] flex justify-center py-[5px]">
            Name
          </div>
          <div className="border-r-[1px] border-[#000] w-[160px] flex justify-center py-[5px]">
            Current expense
          </div>
          <div className="border-r-[1px] border-[#000] w-[160px] flex justify-center py-[5px]">
            Current Inflation
          </div>
          <div className="border-r-[1px] border-[#000] w-[160px] flex justify-center py-[5px]">
            At age 61
          </div>
          <div className="border-r-[1px] border-[#000] w-[160px] flex justify-center py-[5px]">
            At age 90
          </div>
          <div className="border-[#000] w-[140px] w-[180px] flex justify-center py-[5px]">
            Total
          </div>
        </div>
        {list.data.future_expenses.map((item) => {
          return (
            <div className="flex text-[#404040] text-[14px] font-medium border-l-[1px] border-r-[1px] border-b-[1px] border-[#]">
              <div className="border-r-[1px] border-l-[1px] border-[#000] w-[248px] flex justify-center py-[5px]">
                {item.name}
              </div>
              <div className="border-r-[1px] border-[#000] w-[160px] flex justify-center py-[5px]">
                {item.current_expense}
              </div>
              <div className="border-r-[1px] border-[#000] w-[160px] flex justify-center py-[5px]">
                {item.inflation_rate} %
              </div>
              <div className="border-r-[1px] border-[#000] w-[160px] flex justify-center py-[5px]">
                {item.future_expense_start}
              </div>
              <div className="border-r-[1px] border-[#000] w-[160px] flex justify-center py-[5px]">
                {item.future_expense_end}
              </div>
              <div className="border-[#000] border-r-[1px] w-[140px] w-[180px] flex justify-center py-[5px]">
                {item.category_total}
              </div>
            </div>
          );
        })}
        <div className="flex text-[#000000] text-[14px] font-medium px-4 justify-between border-[1px] border-[#404040] bg-[#FFD87A] pr-[70px] h-[30px] items-center">
          <div>Total corpus for recurring expenses:</div>
          <div>₹ {list.data.total_corpus}</div>
        </div>
      </div>
      <h1 className="font-medium text-[16px] my-4">Health Expenses</h1>

      <div className="flex-col w-fit">
        <div className="flex text-[#404040] text-[14px] font-medium border-[1px] border-[#404040] bg-[#FFD87A] w-fit">
          <div className="border-r-[1px] border-[#000] w-[260px] flex justify-center py-[5px]">
            Disease Name
          </div>
          <div className="border-r-[1px] border-[#000] w-[310px] flex justify-center py-[5px]">
            Surgery Name
          </div>
          <div className="border-r-[1px] border-[#000] w-[160px] flex justify-center py-[5px]">
            Cost
          </div>
          <div className="border-r-[1px] border-[#000] w-[160px] flex justify-center py-[5px]">
            Inflation rate
          </div>
          <div className="border-[#000] w-[180px] flex justify-center py-[5px]">
            Inflation Considered Cost
          </div>
        </div>
        {list.data.future_diseases.map((item) => {
          return (
            <div className="flex text-[#404040] text-[14px] font-medium border-l-[1px] border-r-[1px] border-b-[1px] border-[#404040] w-fit">
              <div className="border-r-[1px] border-[#000] w-[260px] flex justify-center py-[5px]">
                {item["disease name"]}
              </div>
              <div className="border-r-[1px] border-[#000] w-[310px] flex justify-center py-[5px]">
                {item["surgery name"]}
              </div>
              <div className="border-r-[1px] border-[#000] w-[160px] flex justify-center py-[5px]">
                {item.cost}
              </div>
              <div className="border-r-[1px] border-[#000] w-[160px] flex justify-center py-[5px]">
                {item.health_inflation_rate} %
              </div>
              <div className="border-[#000] w-[180px] flex justify-center py-[5px]">
                {item.inflation_considered_cost}
              </div>
            </div>
          );
        })}
        <div className="flex text-[#000000] text-[14px] font-medium border-l-[1px] px-4 justify-between border-r-[1px] border-b-[1px] border-[#404040] bg-[#FFD87A] pr-[70px] h-[30px] items-center">
          <div>Total corpus for heatlh expenses:</div>
          <div>₹ {list.data.toatl_health_corpus}</div>
        </div>
      </div>
    </section>
  );
};
export default dashboard;
