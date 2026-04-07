"use client";

import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChevronLeft, ChevronRight, Plus, Search } from "lucide-react";

// Data
const branchesData = [
  { month: "January", sadbarg: 20, profsous: 40 },
  { month: "February", sadbarg: 25, profsous: 30 },
  { month: "March", sadbarg: 45, profsous: 80 },
  { month: "April", sadbarg: 90, profsous: 45 },
  { month: "May", sadbarg: 40, profsous: 108 },
  { month: "June", sadbarg: 110, profsous: 60 },
  { month: "July", sadbarg: 40, profsous: 30 }
];

const tableData = [
  { name: "Sadbarg", city: "Dushanbe", district: "Shohmansur", address: "Ayni street 46", groups: 6, students: 55, status: "Active" },
  { name: "Profsous", city: "Dushanbe", district: "Shohmansur", address: "Ayni street 46", groups: 6, students: 55, status: "Active" }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 select-none">
        <p className="text-sm text-slate-500 font-semibold mb-3">{label}</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]"></span>
            <p className="text-slate-800 dark:text-slate-200 font-bold text-sm">
              Sadbarg - <span className="font-bold">{payload[0].value}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span>
            <p className="text-slate-800 dark:text-slate-200 font-bold text-sm">
              Profsous - <span className="font-bold">{payload[1].value}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export function AnimatedBranchesDashboard() {
  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 lg:p-10 select-none border border-slate-100 dark:border-slate-800 overflow-hidden relative">
      
      {/* Header */}
      <div className="flex flex-col gap-6 sm:flex-row justify-between items-start sm:items-center mb-8">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">Branches</h2>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center font-semibold text-slate-700 dark:text-slate-300 text-sm">
            <button className="p-1.5 hover:text-[#5142E6] transition-colors"><ChevronLeft className="w-4 h-4" /></button>
            <span className="mx-2">Year: 2023</span>
            <button className="p-1.5 hover:text-[#5142E6] transition-colors"><ChevronRight className="w-4 h-4" /></button>
          </div>
          
          <button className="bg-[#5142E6] hover:bg-[#4335c0] text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-[#5142E6]/20 transition-all hover:scale-105 active:scale-95">
            <Plus className="w-5 h-5" /> Add
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mb-12">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#0ea5e9]"></span>
          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Sadbarg</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#f59e0b]"></span>
          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Profsous</span>
        </div>
      </div>

      {/* Chart */}
      <div className="w-[105%] -ml-[2.5%] h-[240px] md:h-[300px] mb-12">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={branchesData} margin={{ top: 20, right: 20, left: 20, bottom: 0 }}>
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 500 }} 
              dy={15}
            />
            {/* Custom Tooltip */}
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#e2e8f0', strokeWidth: 1, strokeDasharray: '5 5' }} />
            
            <Line 
              type="monotone" 
              dataKey="sadbarg" 
              stroke="#0ea5e9" 
              strokeWidth={4} 
              dot={{ r: 6, fill: '#0ea5e9', strokeWidth: 3, stroke: '#fff' }} 
              activeDot={{ r: 8, fill: '#0ea5e9', strokeWidth: 4, stroke: '#fff' }} 
              animationDuration={2000}
            />
            <Line 
              type="monotone" 
              dataKey="profsous" 
              stroke="#f59e0b" 
              strokeWidth={4} 
              dot={{ r: 6, fill: '#f59e0b', strokeWidth: 3, stroke: '#fff' }} 
              activeDot={{ r: 8, fill: '#f59e0b', strokeWidth: 4, stroke: '#fff' }} 
              animationDuration={2000}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Search & Table Section */}
      <div className="mt-8 relative">
        <div className="relative max-w-sm mb-6 z-10 w-full sm:w-[300px]">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search by name" 
            className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#5142E6]/50 transition-all text-slate-900 dark:text-white"
          />
        </div>

        <div className="overflow-x-auto pb-4">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50">
                <th className="py-4 px-6 text-left text-xs font-bold text-slate-500 uppercase tracking-wider rounded-tl-xl rounded-bl-xl w-[20%]"></th>
                <th className="py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">City</th>
                <th className="py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">District</th>
                <th className="py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Adress</th>
                <th className="py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Groups</th>
                <th className="py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Students</th>
                <th className="py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider rounded-tr-xl rounded-br-xl">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {tableData.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="py-5 px-6 whitespace-nowrap text-sm font-bold text-slate-800 dark:text-slate-100">{row.name}</td>
                  <td className="py-5 whitespace-nowrap text-sm font-medium text-slate-500 dark:text-slate-400">{row.city}</td>
                  <td className="py-5 whitespace-nowrap text-sm font-medium text-slate-500 dark:text-slate-400">{row.district}</td>
                  <td className="py-5 whitespace-nowrap text-sm font-medium text-slate-500 dark:text-slate-400">{row.address}</td>
                  <td className="py-5 whitespace-nowrap text-sm font-medium text-slate-500 dark:text-slate-400 pl-4">{row.groups}</td>
                  <td className="py-5 whitespace-nowrap text-sm font-medium text-slate-500 dark:text-slate-400 pl-4">{row.students}</td>
                  <td className="py-5 whitespace-nowrap">
                    <span className="px-3 py-1 inline-flex text-[13px] leading-5 font-bold rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
