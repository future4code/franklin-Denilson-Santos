import { calculateEmployeeSalary } from "./calculateEmployeeSalary";
import { validateEmptyProperties } from "./validateEmptyProperties";

const result = calculateEmployeeSalary(
  {
    employeeName: "",
    baseSalary: 1000,
    benefits: [200],
    extraHours: 0,
  },
  validateEmptyProperties
);

console.log(result);
