"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  GraduationCap,
  LayoutGrid,
  Send,
  FileText,
  ChevronRight,
  ChevronLeft,
  Edit2
} from "lucide-react";

export function AnimatedDashboard() {
   const groups = [
     { name: "C++ May", absent: 4, late: 2, income: "8 250 c" },
     { name: "C# 2 August", absent: 4, late: 2, income: "8 250 c" },
     { name: "React", absent: 4, late: 2, income: "8 250 c" },
     { name: "Olympiad 4", absent: 4, late: 2, income: "8 250 c" },
     { name: "HTML June", absent: 4, late: 2, income: "8 250 c" },
   ];
 
   const students = [
     { name: "Tojiev Olimjon", group: "HTML June", phone: "985415287", status: "Компютераш вайрон шуд, наомад дарс ..." },
     { name: "Hasan Huseynov", group: "HTML June", phone: "985415287", status: "" },
     { name: "Murodbek Gulmatov", group: "C# June", phone: "232030320", status: "Компютераш вайрон шуд, наомад дарс ..." },
     { name: "Muhammad Sodiq", group: "C# June", phone: "232030320", status: "Компютераш вайрон шуд, наомад дарс ..." },
     { name: "Alijon Zabiri", group: "HTML June", phone: "985415287", status: "Компютераш вайрон шуд, наомад дарс ..." },
   ];
  return (
    <div className="relative w-full max-w-5xl flex items-center justify-center z-10 w-full mb-20 pointer-events-none select-none">
      
      {/* Floating Element: Uptime */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-12 top-16 bg-[#1A2235] border border-white/5 shadow-2xl rounded-2xl px-6 py-4 flex items-center gap-4 text-white z-30 pointer-events-auto"
      >
        <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] animate-pulse" />
        <span className="font-semibold text-xl tracking-wide">99.9% Uptime</span>
      </motion.div>

      {/* Floating Element: 5K+ */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -left-16 bottom-20 bg-[#1A2235] border border-white/5 shadow-2xl rounded-2xl p-5 flex items-center gap-4 text-white z-30 pointer-events-auto"
      >
        <div className="bg-blue-600/20 text-blue-400 font-bold text-2xl px-4 py-3 rounded-xl border border-blue-500/20">
          5K+
        </div>
        <div className="flex flex-col">
          <span className="text-slate-400 text-sm">Маркази фаъол</span>
          <span className="font-semibold text-lg">Дар ҳамаи филиалҳо</span>
        </div>
      </motion.div>

      {/* Main Dashboard Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="w-full bg-white rounded-[2rem] shadow-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-x-8 gap-y-6 text-slate-800"
      >
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          {/* Top Stats */}
          <div className="grid grid-cols-3 gap-4 border-b border-slate-100 pb-6 pt-2">
            <div className="flex flex-col items-center">
              <motion.span 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-3xl font-extrabold text-[#5142E6] mb-1"
              >
                88
              </motion.span>
              <div className="flex items-center gap-1.5 text-slate-600 text-sm font-medium">
                <GraduationCap className="w-4 h-4 text-slate-700" /> Students
              </div>
            </div>
            <div className="flex flex-col items-center border-l border-slate-100">
              <motion.span 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="text-3xl font-extrabold text-[#5142E6] mb-1"
              >
                10
              </motion.span>
              <div className="flex items-center gap-1.5 text-slate-600 text-sm font-medium">
                <FileText className="w-4 h-4 text-slate-700" /> Users
              </div>
            </div>
            <div className="flex flex-col items-center border-l border-slate-100">
              <motion.span 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="text-3xl font-extrabold text-[#5142E6] mb-1"
              >
                15
              </motion.span>
              <div className="flex items-center gap-1.5 text-slate-600 text-sm font-medium">
                <Users className="w-4 h-4 text-slate-700" /> Employees
              </div>
            </div>
          </div>

          {/* Groups */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-slate-700" />
                <h3 className="text-lg font-bold text-slate-800">Groups</h3>
              </div>
              <span className="text-2xl font-extrabold text-[#5142E6]">14</span>
            </div>
            
            <div className="flex flex-col gap-1">
              {groups.map((group, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center justify-between py-2 group cursor-pointer hover:bg-slate-50 px-2 rounded-lg transition-colors border-b border-slate-50 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E5F0FF] flex items-center justify-center text-blue-500">
                      <Send className="w-4 h-4 ml-0.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-700">{group.name}</span>
                      <span className="text-[10px] text-slate-400">Absent: {group.absent} <span className="ml-1">Late: {group.late}</span></span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-bold text-green-500">{group.income}</span>
                      <span className="text-[10px] text-slate-300">Income</span>
                    </div>
                    <div className="w-6 h-6 rounded bg-[#5142E6]/10 flex items-center justify-center text-[#5142E6]">
                      <FileText className="w-3 h-3" />
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leads */}
          <div className="flex flex-col mt-2 h-full justify-end border-t border-slate-100 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-800">Leads</h3>
              <div className="flex items-center gap-2 bg-slate-50 rounded-full px-3 py-1 text-sm font-semibold text-[#5142E6]">
                <ChevronLeft className="w-3 h-3" /> 2024 y <ChevronRight className="w-3 h-3" />
              </div>
            </div>
            <div className="relative mt-2 h-[88px] w-full">
              <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  d="M0 70 Q 50 80, 100 60 T 200 40 T 300 60 T 400 20" 
                  fill="none" 
                  stroke="#F59E0B" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                />
                <motion.path 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ duration: 1, delay: 2 }}
                  d="M0 70 Q 50 80, 100 60 T 200 40 T 300 60 T 400 20 L 400 100 L 0 100 Z" 
                  fill="url(#grad)" 
                />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 px-2 mt-1 -mb-1">
              <span>Jun</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Octr</span><span>Novr</span><span>Dec</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col h-full border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8">
          {/* Status counts */}
          <div className="flex justify-between items-center mb-6 pt-2">
            <div className="bg-[#E6F9F0] text-green-500 px-3 py-1.5 rounded-lg flex items-center gap-2">
              <span className="text-xs font-semibold">Present</span>
              <span className="font-extrabold text-xl">60</span>
            </div>
            <div className="bg-[#FFF0F0] text-red-500 px-3 py-1.5 rounded-lg flex items-center gap-2">
              <span className="text-xs font-semibold">Absent</span>
              <span className="font-extrabold text-xl">24</span>
            </div>
            <div className="bg-[#FFF8EC] text-orange-400 px-3 py-1.5 rounded-lg flex items-center gap-2">
              <span className="text-xs font-semibold">Late</span>
              <span className="font-extrabold text-xl">4</span>
            </div>
          </div>

          {/* Students Table */}
          <div className="flex flex-col mb-6 flex-grow">
            <div className="grid grid-cols-[1.5fr_1fr_2fr] gap-2 mb-2 px-2">
              <span className="text-[10px] font-bold text-slate-400">FULL NAME</span>
              <span className="text-[10px] font-bold text-slate-400">PHONE</span>
              <span></span>
            </div>
            
            <div className="flex flex-col gap-1">
              {students.map((student, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="grid grid-cols-[1.5fr_1fr_2fr] gap-2 items-center py-2.5 px-2 hover:bg-slate-50 rounded-lg group"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-800">{student.name}</span>
                    <span className="text-[10px] font-semibold text-[#5142E6]">{student.group} <ChevronRight className="inline w-3 h-3 -ml-0.5" /></span>
                  </div>
                  <span className="text-xs text-slate-600 font-medium">{student.phone}</span>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 limit-lines">
                    <Edit2 className="w-3 h-3 min-w-[12px] text-[#5142E6]" />
                    <span className="truncate" title={student.status}>{student.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Income Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="bg-[#FAFAFB] rounded-3xl p-6 mt-auto border border-slate-50 pointer-events-auto"
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-slate-800 font-bold mb-1 text-[15px]">Income In this month</h4>
                <div className="text-3xl font-extrabold text-[#5142E6] mb-1">12 580 c</div>
                <p className="text-slate-400 text-[11px] font-medium">-1200% less than last month</p>
                
                <div className="flex items-center gap-3 mt-6 text-[#5142E6] text-xs font-bold bg-white w-fit px-2 py-1.5 rounded-full shadow-sm cursor-pointer">
                  <div className="bg-[#5142E6] text-white rounded-full p-1"><ChevronLeft className="w-3 h-3" /></div>
                  December
                  <div className="bg-[#5142E6] text-white rounded-full p-1"><ChevronRight className="w-3 h-3" /></div>
                </div>
              </div>
              
              <div className="relative w-28 h-28 shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="56" cy="56" r="44" stroke="#EEECFB" strokeWidth="16" fill="none" />
                  <motion.circle 
                    initial={{ strokeDashoffset: 276 }}
                    animate={{ strokeDashoffset: 27.6 }} 
                    transition={{ duration: 2, delay: 1.8, ease: "easeOut" }}
                    cx="56" cy="56" r="44" stroke="#A79EFA" strokeWidth="16" fill="none" 
                    strokeDasharray="276" 
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-extrabold text-slate-800 text-xl">
                  90%
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
