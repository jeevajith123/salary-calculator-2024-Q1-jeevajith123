import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Input, Button, Heading, CheckBox } from "../components";
import { useSalaryContext } from "../contexts/SalaryContext";
import Link from "../assets/_Link.png";
import Close from "../assets/Group 821.png";
import Add from "../assets/add.png";
import Table from "../assets/Tabel.png";

export default function SalaryCalculator() {
    const {
        basicSalary,
        setBasicSalary,
        earnings,
        setEarnings,
        deductions,
        setDeductions,
        handleAddEarning,
        handleAddDeduction,
        handleRemoveEarning,
        handleRemoveDeduction,
        handleReset,
      } = useSalaryContext();

    const calculateNetSalary = () => {
        // Calculate total earnings by summing up all earnings
        const totalEarnings = basicSalary + earnings.reduce((sum, earning) => sum + earning.amount, 0);
    
        // Calculate total deductions by summing up all deductions
        const totalDeductions = deductions.reduce((sum, deduction) => sum + deduction.amount, 0);
    
        // Calculate total EPF/ETF allowed earnings
        const totalEPFEarnings = basicSalary + earnings.filter(earning => earning.epfEtf).reduce((sum, earning) => sum + earning.amount, 0);
    
        // Calculate Gross Earnings
        const grossEarnings = totalEarnings - totalDeductions;
    
        // Calculate Gross Salary for EPF
        const grossSalaryForEPF = totalEPFEarnings - totalDeductions;
    
        // Calculate Employee EPF (8% of Gross Salary for EPF)
        const employeeEPF = grossSalaryForEPF * 0.08;
    
        // Calculate Employer EPF (12% of Gross Salary for EPF)
        const employerEPF = grossSalaryForEPF * 0.12;
    
        // Calculate Employer ETF (3% of Gross Salary for EPF)
        const employerETF = grossSalaryForEPF * 0.03;
    
        // Calculate APIT (Advanced Personal Income Tax)
        const apit = (grossEarnings * 0.18) - 25500;
    
        // Calculate Net Salary
        const netSalary = grossEarnings - employeeEPF - apit;
    
        return netSalary
    };
    
    const calculateCTC = () => {
        // Calculate total earnings for EPF
        const totalEarningsForEPF = basicSalary + earnings.reduce((sum, earning) => sum + (earning.epfEtf ? earning.amount : 0), 0);
    
        // Calculate gross salary for EPF (EPF/ETF allowed earnings - gross deductions)
        const grossSalaryForEPF = totalEarningsForEPF - deductions.reduce((sum, deduction) => sum + deduction.amount, 0);
    
        // Calculate employer EPF contribution (12% of gross salary for EPF)
        const employerEPF = grossSalaryForEPF * 0.12;
    
        // Calculate employer ETF contribution (3% of gross salary for EPF)
        const employerETF = grossSalaryForEPF * 0.03;

        // Calculate gross earnings (total earnings minus deductions)
    const grossEarnings = basicSalary + earnings.reduce((sum, earning) => sum + earning.amount, 0) - deductions.reduce((sum, deduction) => sum + deduction.amount, 0);
    
        // Calculate Cost To Company (CTC)
        const ctc = grossEarnings + employerEPF + employerETF;
    
        return ctc; // Return CTC formatted to 2 decimal places
    };
    

    return (
        <>
            <Helmet>
                <title>Salary Calculator - Estimate Your Take-Home Pay</title>
                <meta
                    name="description"
                    content="Use our Salary Calculator to estimate your net salary, including earnings, deductions, and employer contributions. Calculate your take-home pay with ease."
                />
            </Helmet>
            {/* Salary Calculator Section */}
            <div className="flex flex-col items-center justify-center gap-6 bg-gray-white px-4 py-8 md:flex-row md:p-5">
                {/* Salary Input Section */}
                <div className="flex w-680px h-616px mt-142px ml-128px justify-start">
                    {/* Salary Calculation Section */}
                    <div className="w-full rounded-lg border border-solid border-gray-300 bg-gray-50 p-4">
                        {/* Earning and deduction Section */}
                        <div className="mb-2">
                            <div>
                                {/* Salary Title Section */}
                                <div className="flex justify-between items-start w-full mt-166px ml-152px">
                                    <Heading size="heading_4" as="h1" className="self-start">
                                        Calculate Your Salary
                                    </Heading>
                                    {/* Reset Button */}
                                    <a href="#" onClick={handleReset} className="flex items-end py-1">
                                        <img src={Link} alt="reset" className="h-[32px] w-[32px]" />
                                    </a>
                                </div>
                            </div>

                            {/* Basic Salary input Section */}
                            <div className="mt-6 flex flex-1 flex-col items-start justify-center gap-2">
                                <Heading as="h3">Basic Salary</Heading>
                                <Input
                                    name="Salary Input"
                                    value={basicSalary}
                                    onChange={(e) => setBasicSalary(Number(e.target.value))}
                                    className="flex h-[48px] w-[56%] items-center justify-center rounded border border-solid border-gray-300 bg-gray-white pl-3.5 pr-[34px] text-base text-color_usage-text_primary sm:pr-5"
                                />
                            </div>

                            {/* Allowance Section */}
                            <div className="mt-6 flex flex-col gap-3">
                                <div className="flex flex-col items-start justify-center gap-1.5">
                                    <Heading as="h4">Earnings</Heading>
                                    <Text size="body___small" as="p" className="!text-color_usage-text_secondary">
                                        Allowance, Fixed Allowance, Bonus and etc.
                                    </Text>
                                </div>

                                {/* allowance item section */}
                                <div className="flex w-full flex-col gap-2 md:w-[80%]">
                                    {earnings.map((earning, index) => (
                                        <div key={index} className="flex w-[60%] items-center gap-2 sm:flex-row">
                                            <div className="flex flex-1 justify-center gap-2 sm:self-stretch">
                                                <Input
                                                    name="Earning Title"
                                                    value={earning.title}
                                                    onChange={(e) => {
                                                        const newEarnings = [...earnings];
                                                        newEarnings[index].title = e.target.value;
                                                        setEarnings(newEarnings);
                                                    }}
                                                    className="flex h-[48px] flex-grow items-center justify-center rounded border border-solid border-gray-300 bg-gray-white pl-3.5 pr-[34px] text-base text-color_usage-text_primary sm:pr-5"
                                                />
                                                <Input
                                                    name="Earning Amount"
                                                    value={earning.amount}
                                                    onChange={(e) => {
                                                        const newEarnings = [...earnings];
                                                        newEarnings[index].amount = Number(e.target.value);
                                                        setEarnings(newEarnings);
                                                    }}
                                                    className="flex h-[48px] flex-grow items-center justify-center rounded border border-solid border-gray-300 bg-gray-white pl-3.5 pr-[34px] text-base text-color_usage-text_primary sm:pr-5"
                                                />
                                            </div>
                                            <div className="flex w-full items-center justify-center gap-4 sm:w-[28%]">
                                                <Button
                                                    className="flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-gray-200 px-1"
                                                    onClick={() => handleRemoveEarning(index)}
                                                >
                                                    <img src={Close} alt="Close" />
                                                </Button>
                                                <CheckBox
                                                    name={`EPF ETF Checkbox ${index}`}
                                                    label="EPF/ETF"
                                                    checked={earning.epfEtf}
                                                    onChange={(e) => {
                                                        const newEarnings = [...earnings];
                                                        newEarnings[index].epfEtf = e.target.checked;
                                                        setEarnings(newEarnings);
                                                    }}
                                                    id={`EPFETFCheckbox${index}`}
                                                    className="flex flex-1 gap-3 text-base text-color_usage-text_primary"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Add New Allowance Section */}
                                <a href="#" onClick={handleAddEarning}>
                                    <div className="flex items-center py-2">
                                        <img src={Add} alt="add_item" className="h-[24px] w-[24px]" />
                                        <Heading size="textxs" as="h5" className="!text-blue-a700">
                                            Add New Allowance
                                        </Heading>
                                    </div>
                                </a>
                            </div>
                            <img src={Table} alt="Table" className="mt-4 h-px w-full" />


                            {/* Deduction Section */}
                            <div className="mt-4 flex flex-col gap-1">
                                <div className="flex flex-col items-start gap-2">
                                    <Heading as="h6">Deductions</Heading>
                                    <Text size="body___small" as="p" className="!text-color_usage-text_secondary">
                                        Salary, Advances, Loan Deduction and all
                                    </Text>
                                </div>
                                <div className="flex items-center gap-2 md:w-[80%] sm:flex-row">
                                    {deductions.map((deduction, index) => (
                                        <div key={index} className="flex items-center gap-2 sm:flex-row">
                                            <div className="flex flex-1 justify-center gap-2 sm:self-stretch">
                                                <Input
                                                    name="Deduction Title"
                                                    value={deduction.title}
                                                    onChange={(e) => {
                                                        const newDeductions = [...deductions];
                                                        newDeductions[index].title = e.target.value;
                                                        setDeductions(newDeductions);
                                                    }}
                                                    className="flex h-[48px] flex-grow items-center justify-center rounded border border-solid border-gray-300 bg-gray-white pl-3.5 pr-[34px] text-base text-color_usage-text_primary sm:pr-5"
                                                />
                                                <Input
                                                    name="Deduction Amount"
                                                    value={deduction.amount}
                                                    onChange={(e) => {
                                                        const newDeductions = [...deductions];
                                                        newDeductions[index].amount = Number(e.target.value);
                                                        setDeductions(newDeductions);
                                                    }}
                                                    className="flex h-[48px] flex-grow items-center justify-center rounded border border-solid border-gray-300 bg-gray-white pl-3.5 pr-[34px] text-base text-color_usage-text_primary sm:pr-5"
                                                />
                                            </div>
                                            <div className="flex w-full ml-3px gap-1 sm:w-[28%]">
                                                <Button className="flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-gray-200 px-1" onClick={() => handleRemoveDeduction(index)}>
                                                    <img src={Close} alt="Close" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Add New Deduction Section */}
                                <a href="#" onClick={handleAddDeduction}>
                                    <div className="flex items-center py-2">
                                        <img src={Add} alt="add_item" className="h-[24px] w-[24px]" />
                                        <Heading size="textxs" as="h5" className="!text-blue-a700">
                                            Add New Deduction
                                        </Heading>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Salary Summary Section */}
                <div className="flex w-480px h-[610px] mt-[10px] ml-128px justify-end">
                    <div className="flex flex-col items-center gap-[26px] rounded-lg border border-solid border-gray-300 bg-gray-white px-4 py-7 sm:py-5">
                        <Heading size="heading_4" as="h2" className="ml-2 self-start md:ml-0">
                            Your Salary
                        </Heading>
                        <div className="ml-2 mr-2 self-stretch md:mx-0">
                            <div className="flex flex-wrap justify-between gap-5">
                                <Heading size="body__default__semibold" as="h3" className="!text-[#757575] !text-color_usage-text_secondary">
                                    Items
                                </Heading>
                                <Heading size="body__default__semibold" as="h4" className="!text-[#757575] !text-color_usage-text_secondary">
                                    Amount
                                </Heading>
                            </div>
                            <div className="mt-5 flex flex-wrap justify-between gap-5">
                                <Text as="p">Basic Salary</Text>
                                <Text as="p">{basicSalary.toFixed(2)}</Text>
                            </div>
                            <div className="mt-2.5 flex flex-wrap justify-between gap-5">
                                <Text as="p">Gross Earnings</Text>
                                <Text as="p">{earnings.reduce((sum, earning) => sum + earning.amount, 0).toFixed(2)}</Text>
                            </div>
                            <div className="mt-2.5 flex flex-wrap justify-between gap-5">
                                <Text as="p">Gross Deductions</Text>
                                <Text as="p">{deductions.reduce((sum, deduction) => sum + deduction.amount, 0).toFixed(2)}</Text>
                            </div>
                            <div className="mt-2.5 flex flex-wrap justify-between gap-5">
                                <Text as="p">Employee EPF (8%)</Text>
                                <Text as="p">
                                    {earnings.reduce((sum, earning) => sum + (earning.epfEtf ? (earning.amount * 0.08) : 0), 0).toFixed(2)}
                                </Text>
                            </div>
                            <div className="mt-2.5 flex flex-wrap justify-between gap-5">
                                <Text as="p">APIT</Text>
                                <Text as="p">-3740.00</Text>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between gap-5 self-stretch rounded border-[0.78px] border-solid border-gray-300 p-4">
                            <Heading as="h5" className="self-end">
                                Net Salary (Take Home)
                            </Heading>
                            <Heading as="h6" className="self-end">
                                {calculateNetSalary().toFixed(2)}
                            </Heading>
                        </div>

                        {/* Employer Contribution Section */}
                        <div className="mb-[68px] ml-2 mr-3.5 flex flex-col gap-[34px] self-stretch md:mx-0">
                            <div className="flex flex-col items-start gap-3.5">
                                <Heading size="body__default__semibold" as="h3" className="!text-[#757575] !text-color_usage-text_secondary">
                                    Contribution from the Employer
                                </Heading>
                                <div className="flex flex-col gap-2.5 self-stretch">
                                    <div className="flex flex-wrap justify-between gap-5">
                                        <Text as="p">Employer EPF (12%)</Text>
                                        <Text as="p">
                                            {earnings.reduce((sum, earning) => sum + (earning.epfEtf ? (earning.amount * 0.12) : 0), 0).toFixed(2)}
                                        </Text>
                                    </div>
                                    <div className="flex flex-wrap justify-between gap-5">
                                        <Text as="p">Employer ETF (3%)</Text>
                                        <Text as="p">
                                            {earnings.reduce((sum, earning) => sum + (earning.epfEtf ? (earning.amount * 0.03) : 0), 0).toFixed(2)}
                                        </Text>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-between gap-5">
                                <Text as="p">CTC (Cost to Company)</Text>
                                <Text as="p">{calculateCTC().toFixed(2)}</Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
