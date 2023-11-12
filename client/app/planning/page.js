const RetirementPlanning = () => {
  const attached = [
    {
      file: "",
      name: "Diabetis",
    },
    {
      file: "",
      name: "Maleria",
    },
  ];
  return (
    <section>
      <div className="p-4">
        <div className="ml-4 mb-4">
          <h1 className="text-2xl font-medium">Health Details</h1>
          <p className="mt-[5px] text-[14px]">
            Enter any current / past health issues
          </p>
        </div>
        <div className="border-[1.5px] border-[#d9d9d9] w-full py-[10px] px-[20px]">
          <div className="flex justify-between">
            <div className="flex gap-x-8">
              <div>
                <p className="font-inter text-[#57534E] mb-[5px] font-medium text-[14px]">
                  Disease name / Symptoms:
                </p>
                <input
                  className="px-4 border-[1.5px] w-[200px] border-[#D9D9D9] rounded-md py-[5px]"
                  placeholder="Diseases name"
                ></input>
              </div>
              <div>
                <p className="font-inter text-[#57534E] mb-[5px] font-medium text-[14px]">
                  Experiencing from:
                </p>
                <input
                  className="px-4 border-[1.5px] text-[#9ca3af] w-[160px] border-[#D9D9D9] rounded-md py-[5px]"
                  type="date"
                ></input>
              </div>
              <div className="h-[60px]">
                <p className="font-inter text-[#57534E] mb-[5px] font-medium text-[14px]">
                  Report/Doctor's Findings:
                </p>
                <div className="px-4 border-[1.5px] w-[180px] border-[#D9D9D9] rounded-md py-[5px]">
                  <p className="text-[#9ca3af] flex justify-center align-center items-center gap-x-2">
                    <img
                      className="w-4"
                      src="/assets/icons/upload.svg"
                      alt="upload"
                    />
                    Upload File
                  </p>
                </div>
                <input
                  className="px-4 opacity-0	relative top-[-38px] border-[1.5px] w-[180px] border-[#000] rounded-md py-[2px]"
                  type="file"
                  placeholder="Diseases name"
                />
              </div>
              <div>
                <p className="font-inter text-[#57534E] mb-[5px] font-medium text-[14px]">
                  Additional information:
                </p>
                <input
                  className="px-4 border-[1.5px] w-[200px] border-[#D9D9D9] rounded-md py-[5px]"
                  placeholder="Additional information"
                ></input>
              </div>
            </div>
            <div className="min-h-full flex items-end py-2">
              <img
                className="w-6"
                src="/assets/icons/delete.svg"
                alt="delete"
              />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[#7D7C81]">
              Attached: <em>(click on upload button to attach files)</em>
            </p>
            <div className="mt-2 text-[#57534E] mb-[5px] font-normal text-[15px] ">
              {attached.length ? (
                <div>
                  {attached.map((item, id) => (
                    <div className="flex w-[500px] justify-between" key={id}>
                      <p className="font-inter text-[#57534E] mb-[5px] font-medium text-[14px]">
                        {id + 1}. {item.name}
                      </p>
                      <div className="flex gap-x-8">
                        <p className="flex items-end font-medium text-[#9ca3af]">
                          View
                          <img
                            className="w-4 mb-[4px] ml-2"
                            src="/assets/icons/view.svg"
                            alt="view"
                          />
                        </p>
                        <img
                          className="w-5"
                          src="/assets/icons/delete.svg"
                          alt="delete"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="">No files attached</p>
              )}
            </div>
          </div>
        </div>
        <button className="flex items-center gap-x-3 mt-8 justify-center text-[#003865] font-medium text-[14px] font-inter border-[1.5px] w-[145px] py-1.5 rounded-lg border-[#2EADE2]">
          <img className="w-5" src="/assets/icons/add.svg"></img> add more
        </button>
      </div>
    </section>
  );
};
export default RetirementPlanning;
