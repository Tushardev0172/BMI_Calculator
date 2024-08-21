import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

const BMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const handleCalculateBMI = () => {
    if (height && weight) {
      const bmiValue = (parseFloat(weight) / parseFloat(height) ** 2).toFixed(
        2
      );
      setBmi(`Your BMI is ${bmiValue}`);
      let category;
      if (bmiValue < 18.5) {
        category = "Underweight";
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        category = "Normal weight";
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        category = "Overweight";
      } else {
        category = "Obesity";
      }
      setCategory(`Category: ${category}`);
    } else {
      setBmi("Please enter both height and weight.");
      setCategory("");
    }
  };
  const handleReset = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setCategory("");
  };
  return (
    <div
      className="flex justify-center bg-cover bg-center h-screen sm:items-center xs:items-start xs:pt-28"
      style={{ "background-image": "url('src/img/bg.jpg')" }}
    >
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
          <div className="mt-4 p-2 bg-white rounded-md text-center">
            {bmi} <br />
            {category}
          </div>
        )}
      </div>
    </div>
  );
};

export default BMI;
