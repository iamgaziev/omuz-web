"use client";

import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from "recharts";
import { ChevronRight } from "lucide-react";

// Data
const activityData = Array.from({ length: 30 }).map((_, i) => ({
  day: (i + 1).toString().padStart(2, "0"),
  green: Math.floor(Math.random() * (40 - 20 + 1) + 20),
  red: Math.floor(Math.random() * (35 - 10 + 1) + 10),
}));

const enrollData = [
  { month: "Jun", value: 10 },
  { month: "Feb", value: 18 },
  { month: "Mar", value: 35 },
  { month: "Apr", value: 25 },
  { month: "May", value: 38 },
  { month: "Jun", value: 20 },
  { month: "Jul", value: 45 },
  { month: "Aug", value: 30 },
  { month: "Sep", value: 15 },
  { month: "Oct", value: 32 },
  { month: "Nov", value: 40 },
  { month: "Dec", value: 46 },
];

const leftCoursesData = [
  { month: "Jun", courses: 14, active: false },
  { month: "Jul", courses: 25, active: false },
  { month: "Aug", courses: 20, active: false },
  { month: "Sep", courses: 30, active: false },
  { month: "Oct", courses: 18, active: false },
  { month: "Nov", courses: 38, active: true },
  { month: "Dec", courses: 22, active: false },
  { month: "Jan", courses: 35, active: false },
  { month: "Feb", courses: 28, active: false },
];

const employedData = [
  { name: "Huseinov Hasan", color: "bg-orange-500", course: "JavaScript", date: "Jan 11, 2023", work: "Softclub" },
  { name: "Huseinov Hasan", color: "bg-emerald-500", course: "React", date: "Jan 11, 2023", work: "Alif bank" },
  { name: "Huseinov Hasan", color: "bg-pink-500", course: "HTML & CSS", date: "Jan 11, 2023", work: "Humo" },
  { name: "Huseinov Hasan", color: "bg-yellow-500", course: "UX/UI design", date: "Jan 11, 2023", work: "Megafon" },
  { name: "Huseinov Hasan", color: "bg-blue-500", course: "Graf design", date: "Jan 11, 2023", work: "Humo" },
];

const recentList = [
  { name: "Ahmad Abdulsamad", course: "JavaScript", phone: "93 800 22 74" },
  { name: "Tojiev Olimjon", course: "React", phone: "93 800 22 74" },
  { name: "Najibullo Shamsuddinov", course: "Olympiad", phone: "93 800 22 74" },
  { name: "Alijon Zabiri", course: "HTML & CSS", phone: "93 800 22 74" },
  { name: "Shodmon Inoyatzoda", course: "C# (.net)", phone: "93 800 22 74" },
  { name: "Nazarov Qurbonali", course: "UX/UI design", phone: "93 800 22 74" },
];

export function AnimatedAnalyticsDashboard() {
  return (
    <div className="w-full h-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 lg:p-8 select-none border border-slate-100 dark:border-slate-800">
      
      {/* Top Chart */}
      <div className="w-full h-[180px] md:h-[220px] mb-8 lg:mb-10 relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={activityData} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
            <defs>
              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="day" axisLine={{stroke: '#e2e8f0', strokeWidth: 1}} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 500 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 500 }} />
            <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
            <Area type="monotone" dataKey="red" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorRed)" animationDuration={2000} />
            <Area type="monotone" dataKey="green" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorGreen)" animationDuration={2000} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-6 lg:gap-8">
          
          {/* Enroll Chart */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-center mb-6 border-b border-transparent">
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-[17px]">Enroll</h3>
              <button className="text-[#5142E6] dark:text-purple-400 text-sm font-semibold flex items-center gap-1 hover:opacity-80 transition-opacity">
                See more <ChevronRight className="w-4 h-4 text-[#5142E6]/60" />
              </button>
            </div>
            <div className="w-full h-[140px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={enrollData} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#5142E6" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#5142E6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" axisLine={{stroke: '#e2e8f0', strokeWidth: 1}} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 500 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 500 }} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
                  <Area type="monotone" dataKey="value" stroke="#5142E6" strokeWidth={4} fillOpacity={1} fill="url(#colorBlue)" animationDuration={2000} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent List */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-700">
            <div className="flex text-xs font-bold text-slate-400 uppercase tracking-wider mb-5 px-3">
              <div className="flex-[4]">Full Name</div>
              <div className="flex-[3]">Course</div>
              <div className="flex-[3]">Phone</div>
            </div>
            <div className="flex flex-col gap-1.5">
              {recentList.map((item, i) => (
                <div key={i} className="flex text-[13px] items-center px-3 py-2.5 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-xl cursor-default transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-600">
                  <div className="flex-[4] font-bold text-slate-800 dark:text-slate-100 truncate pr-2">{item.name}</div>
                  <div className="flex-[3] text-slate-500 font-medium dark:text-slate-400">{item.course}</div>
                  <div className="flex-[3] text-slate-700 font-semibold dark:text-slate-300">{item.phone}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 lg:gap-8">
          
          {/* Employed Graduates */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 lg:p-6 border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-[17px]">Employed graduates <span className="text-slate-400 font-semibold">(215)</span></h3>
              <button className="text-[#5142E6] dark:text-purple-400 text-sm font-semibold flex items-center gap-1 hover:opacity-80 transition-opacity">
                See more <ChevronRight className="w-4 h-4 text-[#5142E6]/60" />
              </button>
            </div>
            
            <div className="flex text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-5 px-2">
              <div className="w-[40%]">Full Name</div>
              <div className="w-[25%] uppercase">Course</div>
              <div className="w-[20%] uppercase text-center">Date of issue</div>
              <div className="w-[15%] text-right uppercase">Work</div>
            </div>

            <div className="flex flex-col gap-3">
              {employedData.map((emp, i) => (
                <div key={i} className="flex items-center text-sm py-2 px-2 hover:bg-slate-100/50 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-default">
                  <div className="w-[40%] flex items-center gap-3 pr-2">
                    <div className={`w-9 h-9 rounded-full ${emp.color} flex items-center justify-center text-white shrink-0 shadow-sm font-bold text-xs`}>
                      {emp.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 dark:text-slate-100 text-[13px] leading-tight mb-0.5">{emp.name}</div>
                      <div className="text-[11px] text-[#5142E6] font-semibold tracking-tight">18 year</div>
                    </div>
                  </div>
                  <div className="w-[25%] text-slate-500 font-medium dark:text-slate-400 text-[13px]">{emp.course}</div>
                  <div className="w-[20%] text-slate-500 font-medium dark:text-slate-400 text-[12px] whitespace-nowrap text-center">{emp.date}</div>
                  <div className="w-[15%] text-right font-bold text-slate-800 dark:text-slate-200 text-[13px] truncate pl-2">{emp.work}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Courses */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 overflow-hidden relative">
            <div className="flex justify-between items-center mb-6 relative z-10">
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-[17px]">Left courses</h3>
              <button className="text-[#5142E6] dark:text-purple-400 text-[13px] font-bold flex items-center gap-1 hover:opacity-80 bg-[#5142E6]/5 dark:bg-[#5142E6]/20 px-3 py-1.5 rounded-lg transition-colors border border-[#5142E6]/10">
                Show list <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            
            <div className="w-[110%] h-[120px] -ml-5 -mb-5">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={leftCoursesData} margin={{ top: 0, right: 0, left: 0, bottom: -10 }} barSize={12}>
                  <Tooltip 
                    cursor={{fill: 'rgba(59, 130, 246, 0.05)'}}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', padding: '8px 16px' }} 
                    itemStyle={{ color: '#1e293b', fontWeight: 'bold' }}
                    labelStyle={{ color: '#64748b', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}
                  />
                  <Bar dataKey="courses" radius={[6, 6, 0, 0]}>
                    {leftCoursesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.active ? "#a78bfa" : "#e0f2fe"} className="transition-all duration-300 hover:opacity-80" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
