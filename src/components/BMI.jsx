import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

const BMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const handleCalculateBMI = () => {
    if (height && weight) {
      const bmiValue = (parseFloat(weight) / parseFloat(height) ** 2).toFixed(
        2
      );
      setBmi(`Your BMI is ${bmiValue}`);
    } else {
      setBmi("Please enter both height and weight.");
    }
  };
  const handleReset = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
  };
  return (
    <div className="flex justify-center bg-[url('https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center h-screen sm:items-center xs:items-start xs:pt-28">
      <div className="sm:w-1/2 xs:w-11/12 bg-white rounded-xl flex flex-col items-center gap-4 border border-black h-auto py-10">
        <h1 className="m-4 text-2xl font-bold">BMI Calculator</h1>
        <Box
          sx={{
            width: 400,
            maxWidth: "85%",
          }}
        >
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "purple",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "purple",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "purple",
              },
            }}
            label="Height (Meters)"
            variant="outlined"
            fullWidth
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            width: 400,
            maxWidth: "85%",
          }}
        >
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "purple",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "purple",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "purple",
              },
            }}
            fullWidth
            value={weight}
            label="Weight (KG)"
            varient="outline"
            onChange={(e) => setWeight(e.target.value)}
          />
        </Box>
        <div className="flex gap-4">
          <button
            className="p-3 w-[100px] rounded-md transition-all bg-purple-700 hover:bg-purple-900 text-white"
            onClick={handleCalculateBMI}
          >
            Calculate
          </button>
          <button
            className="p-3 w-[100px] rounded-md transition-all bg-gray-500 hover:bg-gray-700 text-white"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        {bmi && (
          <div className="mt-4 p-2 bg-white rounded-md text-center">{bmi}</div>
        )}
      </div>
    </div>
  );
};

export default BMI;
