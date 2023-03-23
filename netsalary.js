const basicSalary = 100000;
const benefits = 20000;

const PAYE = calculatePAYE(basicSalary + benefits);
const NHIFDeductions = 500;
const NSSFDeductions = calculateNSSFDeductions(basicSalary + benefits);
const grossSalary = basicSalary + benefits;
const netSalary = grossSalary - PAYE - NHIFDeductions - NSSFDeductions;

console.log(`PAYE: ${PAYE}`);
console.log(`NHIF Deductions: ${NHIFDeductions}`);
console.log(`NSSF Deductions: ${NSSFDeductions}`);
console.log(`Gross Salary: ${grossSalary}`);
console.log(`Net Salary: ${netSalary}`);

function calculatePAYE(salary) {
  let tax = 0;
  if (salary <= 24000) {
    tax = 0;
  } else if (salary <= 40667) {
    tax = (salary - 24000) * 0.1;
  } else if (salary <= 57333) {
    tax = 1667 + (salary - 40667) * 0.15;
  } else if (salary <= 74000) {
    tax = 4667 + (salary - 57333) * 0.2;
  } else if (salary <= 140000) {
    tax = 8467 + (salary - 74000) * 0.25;
  } else if (salary <= 200000) {
    tax = 24917 + (salary - 140000) * 0.3;
  } else if (salary <= 240000) {
    tax = 47917 + (salary - 200000) * 0.32;
  } else {
    tax = 61717 + (salary - 240000) * 0.35;
  }
  return tax;
}

function calculateNSSFDeductions(salary) {
  let nssf = 0;
  if (salary <= 6000) {
    nssf = salary * 0.06;
  } else if (salary <= 18000) {
    nssf = 360;
  } else {
    nssf = salary * 0.12;
  }
  return nssf;
}