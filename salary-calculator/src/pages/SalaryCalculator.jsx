import {Helmet} from "react-helmet";
import {Text, Input, Button, Heading, CheckBox} from "../components";
import React from "react";
import Link from "../assets/_Link.png"
import Close from "../assets/Group 821.png"
import Add from "../assets/add.png"
import Table from "../assets/Tabel.png"

export default function SalaryCalculator() {
    return(
        <>
            <Helmet>
                <title>Salary Calculator - Estimate Your Take-Home Pay</title>
                <meta 
                    name="description" 
                    content="Use our Salary Calculator to estimate your net salary, including earnings, deductions, and employer contributions. Calculate your take-home pay with ease " 
                />
            </Helmet>
            {/*Salary calculator container section */}
            <div className="flex w-full items-center justify-center gap-6 bg-gray-white px-14 py-[142px] md:flex-col md:p-5">
                {/*Salary Input Section*/}
                <div className="flex w-680px h-616px mt-142px ml-128px justify-center md:w-full">
                    {/*Salary calculation Section*/}
                    <div className="w-full rounded-lg border border-solid border-gray-300 bg-gray-50 p-4">
                        {/*Earning and deduction section*/}
                        <div className="mb-2">
                            {/*Salary Title section*/}
                            <div>
                                <div className="flex items-start justify-start w-209px h-32px mt-166px ml-152px">
                                    <Heading size="heading_4" as="h1" className="self-start">
                                        Calculate Your Salary
                                    </Heading>
                                </div>
                                <div className="flex items-end justify-end w-66px h-40px mt-158px ml-718px">
                                    <a href="#">
                                        <div className="flex flex-1 items-end py-1">
                                            <img src={Link} alt="reset" className="h-[18px] w-[21px] mt-3px wl 1px" />
                                            <Heading size="textxs" as="h2" className="!text-blue-a700">
                                                 Reset
                                            </Heading>
                                        </div>
                                    </a>
                                </div>
                            </div>


                            {/*Salary Input Section*/}
                            <div className="mt-6 flex flex-col items-start justify-center gap-2">
                                <Heading as="h3">Basic Salary</Heading>
                                <Input name="Salary Input"
                                 placeholder={`150,000.00`} 
                                 className="flex h-[48px] w-[50%] items-center justify-center rounded border border-solid border-gray-300 bg-gray-white pl-3.5 pr-[34px] text-base text-color_usage-text_primary sm:pr-5"
                                />
                            </div>

                            {/*allowance section*/}
                            <div className="mt-6 flex flex-col gap-3">
                                <div className="flex flex-col items-start justify-center gap-1.5">
                                    <Heading as="h4">Earnings</Heading>
                                    <Text size="body___small" as="p" className="!text-color_usage-text_secondary">
                                        Allowance, Fixed Allowance , Bonus and etc.
                                    </Text>
                                </div>
                            
                                {/*Allowance items section*/}
                                <div className="flex w-[80%] flex-col gap-2 md:w-full">
                                    <div className="flex items-center gap-2 sm:flex-row">
                                        <div className="flex flex-1 justify-center gap-2 sm:self-stretch">
                                            <Input name="Travel Input" 
                                             placeholder={`Travel`} 
                                            className="flex h-[48px] flex-grow items-center justify-center rounded border border-solid border-gray-300 bg-gray-white pl-3.5 pr-[34px] text-base text-color_usage-text_primary sm:pr-5" 
                                            />
                                            <Text as="p" className="rounded border border-solid border-gray-300 bg-gray-white py-3.5 pl-[34px] pr-3.5 sm:pl-5">
                                                10,000.00
                                            </Text>
                                        </div>
                                        <div className="flex w-full items-center justify-center gap-4 sm:w-[28%]">
                                            <Button className="flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-gray-200 px-1">
                                                <img src={Close} alt="Close" />
                                            </Button>
                                            <CheckBox
                                                name="EPF ETF Checkbox"
                                                label ="EPF/ETF"
                                                id="EPFETFCheckbox"
                                                className="flex flex-1 gap-3 text-base text-color_usage-text_primary"    
                                            />    
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 sm:flex-row">
                                        <div className="flex flex-1 justify-center gap-2 sm:self-stretch">
                                            <Input name="Pay Input" 
                                            placeholder={`Pay Details (Title)`} 
                                            className="flex h-[48px] flex-grow items-center justify-center rounded border border-solid border-gray-300 bg-gray-white pl-3.5 pr-[34px] text-base text-color_usage-text_primary sm:pr-5" 
                                            />
                                            <Text as="p" className="rounded border border-solid border-gray-300 bg-gray-white py-3.5 pl-[34px] pr-3.5 !text-color_usage-text_secondary sm:pl-5">
                                                Amount
                                            </Text>
                                        </div>
                                        <div className="flex w-full items-center justify-center gap-4 sm:w-[28%]">
                                            <Button className="flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-gray-200 px-1">
                                                <img src={Close} alt="Close" />
                                            </Button>
                                            <CheckBox
                                                name="Thumbs Up Checkbox"
                                                label ="EPF/ETF"
                                                id="ThumbsUpCheckbox"
                                                className="flex flex-1 gap-3 text-base text-color_usage-text_primary"    
                                            />    
                                        </div>
                                    </div>
                                </div>
                            
                                <a href="#">
                                    {/*Add Allowance Button*/}
                                    <div className="flex items-center py-2">
                                        <img src={Add} alt="add_item" className="h-[24px] w-[24px]"/>
                                        <Heading size="textxs" as="h5" className="!text-blue-a700">
                                            Add New Allowance
                                        </Heading>
                                    </div>
                                </a>    
                            </div>
                            <img src={Table} alt="Table" className="mt-4 h-px w-full" />

                            {/*Deduction Section*/}
                            <div className="mt-4 flex flex-col gap-1">
                                <div className="flex flex-col items-start gap-2">
                                    <Heading as="h6">Deductions</Heading>
                                    <Text size="body___small" as="p" className="!text-color_usage-text_secondary">
                                     Salary, Advances, Loan Deduction and all
                                    </Text>
                                </div>
                                <div className="flex w-[62%] items-center gap-2 md:w-full sm:flex-row">
                                    <div className="flex flex-1 gap-2 sm:self-stretch">
                                        <Input name="No Pay Input" 
                                        placeholder={`No Pay`} 
                                        className="flex h-[48px] flex-grow items-center justify-center rounded border border-solid border-gray-300 bg-gray-white pl-3.5 pr-[34px] text-base text-color_usage-text_primary sm:pr-5" 
                                        />

                                        <Input name="No Pay Amount" 
                                        placeholder={`8,000.00`} 
                                        className="flex h-[48px] flex-grow items-center justify-center rounded border border-solid border-gray-300 bg-gray-white pl-3.5 pr-[34px] text-base text-color_usage-text_primary sm:pr-5" 
                                        />
                                    </div>
                                    <Button className="flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-gray-200 px-1">
                                        <img src={Close} alt="Close" />
                                    </Button>
                                </div>
                            </div>
                            <a href="#">
                                {/*Add Deduction Button*/}
                                <div className="flex items-center py-2">
                                    <img src={Add} alt="add_item" className="h-[24px] w-[24px]"/>
                                    <Heading size="textxs" as="h5" className="!text-blue-a700">
                                        Add New Deduction
                                    </Heading>
                                </div>        
                            </a>
                        </div>
                    </div>
                </div>

                {/*Salary Summary Section*/}
                <div className="w-[36%] md:w-full">
                    {/*Salary detail Section*/}
                    <div className="flex flex-col items-center gap-[26px] rounded-lg border border-solid border-gray-300 bg-gray-white px-4 py-7 sm:py-5">
                        <Heading size="heading_4" as="h2" className="ml-2 self-start md:ml-0">
                            Your Salary
                        </Heading>
                        <div className="ml-2 mr-2 self-stretch md:mx-0">
                            <div className ="flex flex-wrap justify-between gap-5">
                                <Heading size="body__default__semibold" as="h3" className="!text-color_usage-text_secondary">
                                    Items
                                </Heading>
                                <Heading size="body__default__semibold" as="h4" className="!text-color_usage-text_secondary">
                                    Amount
                                </Heading>
                            </div>
                            <div className="mt-5 flex flex-wrap justify-between gap-5">
                                <Text as="p"> Basic Salary</Text>
                                <Text as="p"> 150,000.00</Text>
                            </div>
                            <div className="mt-2.5 flex flex-wrap justify-between gap-5">
                                <Text as="p">Gross Earning</Text>
                                <Text as="p"> 160,000.00</Text>
                            </div>   
                            <div className="mt-2.5 flex flex-wrap justify-between gap-5">
                                <Text as="p"> Gross Deduction</Text>
                                <Text as="p"> -8,000.00</Text>
                            </div>   
                            <div className="mt-2.5 flex flex-wrap justify-between gap-5">
                                <Text as="p"> Employee EPF</Text>
                                <Text as="p"> -12,160.00</Text>
                            </div>   
                            <div className="mt-2.5 flex flex-wrap justify-between gap-5">
                                <Text as="p"> APIT</Text>
                                <Text as="p"> -3740.00</Text>
                            </div>      
                        </div>
                        <div className="flex flex-wrap justify-between gap-5 self-stretch rounded border-[0.78px] border-solid border-gray-300 p-4">
                            <Heading as="h5" className="self-end">
                                Net Salary (Take Home)
                            </Heading>
                            <Heading as="h6" className="self-end">
                                136,100.00
                            </Heading>
                        </div>
                        {/*employer contribution section*/}
                        <div className="mb-[68px] ml-2 mr-3.5 flex flex-col gap-[34px] self-stretch md:mx-0"> 
                            <div className="flex flex-col items-start gap-3.5">
                                <Heading size="body__default__semibold" as="p" className="!text-color_usage-text_secondary">
                                    Contribution from the Employer

                                </Heading>
                                <div className="flex flex-col gap-2.5 self-stretch">
                                    <div className="flex flex-wrap justify-between gap-5">
                                        <Text as="p"> Employer EPF</Text>
                                        <Text as="p"> 18240.00</Text>
                                    </div>
                                    <div className="flex flex-wrap justify-between gap-5">
                                        <Text as="p"> Employer ETF</Text>
                                        <Text as="p"> 18240.00</Text>
                                    </div>
                                </div>     
                            </div>
                            {/*Total cost to company section*/}
                            <div className="flex flex-wrap justify-between gap-5">
                                <Text as="p"> CTC (Cost to Company)</Text>
                                <Text as="p"> 174,800.00</Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}