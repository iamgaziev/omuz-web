"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, CheckSquare, Square, MessageSquare, Edit2, X } from "lucide-react";

// Types
type AttendanceStatus = "none" | "present" | "absent";
type ScoreValue = "5" | "4" | "3" | "2" | "1" | "0";

interface DayData {
  date: string;
  attendance: AttendanceStatus;
  score: ScoreValue;
  hasMessage: boolean;
  message?: string;
  lateMinutes?: string;
}

interface StudentRecord {
  id: number;
  name: string;
  days: DayData[];
  endOfWeek: {
    att: number;
    bonus: number;
    exam: number;
    sum: number;
  };
}

interface WeekData {
  weekNum: number;
  isOpen: boolean;
  students: StudentRecord[];
}

const createStudent = (id: number, name: string): StudentRecord => {
  const days: DayData[] = [
    { date: "01.11.22", attendance: "none", score: "5", hasMessage: false },
    { date: "02.11.22", attendance: "present", score: "5", hasMessage: true },
    { date: "03.11.22", attendance: "none", score: "0", hasMessage: false },
    { date: "04.11.22", attendance: "none", score: "4", hasMessage: false },
    { date: "05.11.22", attendance: "none", score: "5", hasMessage: false },
  ];
  
  const bonus = 20;
  const exam = 40;
  const att = days.filter(d => d.attendance === "present").length;
  const sum = bonus + exam + att + days.reduce((acc, d) => {
    const val = parseInt(d.score as string, 10);
    return acc + (isNaN(val) ? 0 : val);
  }, 0);

  return {
    id,
    name,
    days,
    endOfWeek: { att, bonus, exam, sum }
  };
};

const CustomSelect = ({ value, onChange }: { value: ScoreValue, onChange: (v: ScoreValue) => void }) => {
  const [open, setOpen] = useState(false);
  const options: ScoreValue[] = ["5", "4", "3", "2", "1", "0"];

  return (
    <div className={`relative inline-block text-left ${open ? 'z-50' : 'z-10'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-1.5 py-1 text-xs font-semibold text-slate-700 bg-transparent hover:bg-slate-100 rounded transition-colors"
      >
        {value} <ChevronDown className="w-3 h-3 text-slate-400" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full mt-1 w-12 bg-white rounded-md shadow-xl border border-slate-100 py-1 z-50 flex flex-col items-center"
          >
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`w-full text-center py-1 text-xs font-medium hover:bg-slate-50 transition-colors ${value === opt ? 'text-primary bg-primary/5' : 'text-slate-600'}`}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const GradebookWeek = ({ week, toggleWeek }: { week: WeekData; toggleWeek: () => void }) => {
  const [students, setStudents] = useState<StudentRecord[]>(
    [...week.students].sort((a, b) => b.endOfWeek.sum - a.endOfWeek.sum)
  );
  const [commentModalData, setCommentModalData] = useState<{ 
    isOpen: boolean; 
    text: string; 
    lateMinutes: string;
    studentIndex: number | null; 
    dayIndex: number | null; 
  }>({ isOpen: false, text: "", lateMinutes: "0", studentIndex: null, dayIndex: null });

  const getSumColor = (sum: number) => {
    if (sum >= 90) return "bg-green-100 text-green-700";
    if (sum >= 80) return "bg-amber-100 text-amber-700";
    return "bg-red-100 text-red-700";
  };

  const closeCommentModal = () => {
    setCommentModalData(prev => ({ ...prev, isOpen: false }));
  };

  const saveCommentModal = () => {
    if (commentModalData.studentIndex !== null && commentModalData.dayIndex !== null) {
      setStudents(prev => {
        const next = [...prev];
        const sIdx = commentModalData.studentIndex!;
        const dIdx = commentModalData.dayIndex!;
        next[sIdx] = { ...next[sIdx], days: [...next[sIdx].days] };
        next[sIdx].days[dIdx] = { 
          ...next[sIdx].days[dIdx], 
          message: commentModalData.text,
          lateMinutes: commentModalData.lateMinutes,
          hasMessage: commentModalData.text.trim().length > 0 || parseInt(commentModalData.lateMinutes || "0", 10) > 0
        };
        return next;
      });
    }
    closeCommentModal();
  };

  const openCommentModal = (studentIndex: number, dayIndex: number, day: DayData) => {
    setCommentModalData({
      isOpen: true,
      text: day.message || "",
      lateMinutes: day.lateMinutes || "0",
      studentIndex,
      dayIndex
    });
  };

  const toggleAttendance = (studentIndex: number, dayIndex: number) => {
    setStudents(prev => {
      const next = [...prev];
      next[studentIndex] = { ...next[studentIndex], days: [...next[studentIndex].days], endOfWeek: { ...next[studentIndex].endOfWeek } };
      next[studentIndex].days[dayIndex] = { ...next[studentIndex].days[dayIndex] };
      const current = next[studentIndex].days[dayIndex].attendance;
      next[studentIndex].days[dayIndex].attendance = current === "present" ? "none" : "present";
      
      next[studentIndex].endOfWeek.att = next[studentIndex].days.filter(d => d.attendance === "present").length;
      const totalScore = next[studentIndex].days.reduce((acc, d) => {
        const val = parseInt(d.score as string, 10);
        return acc + (isNaN(val) ? 0 : val);
      }, 0);
      next[studentIndex].endOfWeek.sum = next[studentIndex].endOfWeek.bonus + next[studentIndex].endOfWeek.exam + totalScore + next[studentIndex].endOfWeek.att;
      
      next.sort((a, b) => b.endOfWeek.sum - a.endOfWeek.sum);
      return next;
    });
  };

  const updateScore = (studentIndex: number, dayIndex: number, newScore: ScoreValue) => {
    setStudents(prev => {
      const next = [...prev];
      next[studentIndex] = { ...next[studentIndex], days: [...next[studentIndex].days], endOfWeek: { ...next[studentIndex].endOfWeek } };
      next[studentIndex].days[dayIndex] = { ...next[studentIndex].days[dayIndex], score: newScore };
      
      const totalScore = next[studentIndex].days.reduce((acc, d) => {
        const val = parseInt(d.score as string, 10);
        return acc + (isNaN(val) ? 0 : val);
      }, 0);
      next[studentIndex].endOfWeek.sum = next[studentIndex].endOfWeek.bonus + next[studentIndex].endOfWeek.exam + totalScore + next[studentIndex].endOfWeek.att;
      
      next.sort((a, b) => b.endOfWeek.sum - a.endOfWeek.sum);
      return next;
    });
  };

  return (
    <motion.div
      layout
      transition={{ duration: 0.3 }}
      className="w-full bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-slate-100/50"
    >
      <button
        onClick={toggleWeek}
        className={`w-full flex items-center justify-between px-6 py-5 ${week.isOpen ? 'border-b border-slate-50' : ''}`}
      >
        <h3 className="text-[17px] font-bold text-slate-900">Week {week.weekNum}</h3>
        {week.isOpen ? (
          <ChevronUp className="w-5 h-5 text-slate-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400" />
        )}
      </button>

      <AnimatePresence>
        {week.isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-x-auto p-6 pt-2"
          >
            <div className="min-w-[900px]">
              {/* Header Row */}
              <div className="flex border-b border-slate-100 pb-2 mb-2">
                <div className="w-[180px] shrink-0 text-xs font-bold text-slate-700">Students</div>
                {students[0]?.days.map((day, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center border-l border-slate-50">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-2">
                      {day.date}
                      <Edit2 className="w-3 h-3 text-[#5142E6] cursor-pointer" />
                    </div>
                    <div className="flex w-full text-[10px] font-bold text-slate-400">
                      <div className="flex-1 text-center font-medium">Att</div>
                      <div className="flex-1 text-center font-medium">Score</div>
                    </div>
                  </div>
                ))}
                <div className="w-[180px] shrink-0 flex flex-col items-center border-l border-slate-50">
                  <div className="text-xs font-bold text-slate-700 mb-2">End of week</div>
                  <div className="flex w-full text-[10px] font-bold text-slate-400">
                    <div className="flex-1 text-center font-medium">Att</div>
                    <div className="flex-1 text-center font-medium">Bonus</div>
                    <div className="flex-1 text-center font-medium">Exam</div>
                    <div className="flex-1 text-center font-medium">Sum</div>
                  </div>
                </div>
              </div>

              {/* Student Rows */}
              <div className="flex flex-col gap-1">
                {students.map((student, sIndex) => (
                  <motion.div
                    key={student.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + sIndex * 0.05 }}
                    className="flex items-center hover:bg-slate-50 rounded-lg py-2 transition-colors cursor-default"
                  >
                    <div className="w-[180px] shrink-0 text-[13px] font-semibold text-slate-600 pl-1">
                      {sIndex + 1}. {student.name}
                    </div>

                    {student.days.map((day, dIndex) => (
                      <div key={dIndex} className="flex-1 flex items-center justify-center border-l border-transparent">
                        <div className="flex-1 flex justify-center items-center gap-1.5 relative">
                          <button
                            onClick={() => openCommentModal(sIndex, dIndex, day)}
                            className={`transition-colors ${day.hasMessage ? 'text-[#5142E6]' : 'text-slate-300 hover:text-[#5142E6]'}`}
                          >
                             <MessageSquare className={`w-4 h-4 ${day.hasMessage ? 'fill-[#5142E6]/20' : ''}`} />
                          </button>
                          <button
                            onClick={() => toggleAttendance(sIndex, dIndex)}
                            className="text-slate-300 hover:text-[#5142E6] transition-colors"
                          >
                            {day.attendance === "present" ? (
                              <CheckSquare className="w-4 h-4 text-[#5142E6]" />
                            ) : (
                              <Square className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                          <CustomSelect
                            value={day.score}
                            onChange={(val) => updateScore(sIndex, dIndex, val)}
                          />
                        </div>
                      </div>
                    ))}

                    <div className="w-[180px] shrink-0 flex items-center justify-center border-l border-transparent pl-2">
                      <div className="flex-1 text-center text-xs font-semibold text-slate-500">{student.endOfWeek.att}</div>
                      <div className="flex-1 text-center text-xs font-semibold text-slate-500">{student.endOfWeek.bonus}</div>
                      <div className="flex-1 text-center text-xs font-semibold text-slate-500">{student.endOfWeek.exam}</div>
                      <div className="flex-1 flex justify-center">
                        <div className={`${getSumColor(student.endOfWeek.sum)} text-[11px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm min-w-[28px] text-center`}>
                          {student.endOfWeek.sum}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {commentModalData.isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">Comment Student</h3>
                <button onClick={closeCommentModal} className="text-slate-400 hover:text-slate-600 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative mt-2">
                <label className="absolute -top-2 left-3 bg-white px-1.5 text-xs font-semibold text-slate-400">Reason</label>
                <textarea
                  className="w-full border border-slate-300 rounded-xl p-4 text-[15px] font-medium text-slate-900 focus:outline-none focus:border-slate-400 min-h-[110px] resize-none leading-relaxed"
                  autoFocus
                  placeholder="Эзоҳро инҷо нависед..."
                  value={commentModalData.text}
                  onChange={(e) => setCommentModalData({ ...commentModalData, text: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      saveCommentModal();
                    }
                  }}
                />
              </div>

              <div className="relative mt-6">
                <label className="absolute -top-2 left-3 bg-white px-1.5 text-xs font-semibold text-slate-400">Late Minutes</label>
                <input
                  type="text"
                  className="w-full border border-slate-300 rounded-xl p-4 text-[15px] font-medium text-slate-900 focus:outline-none focus:border-slate-400"
                  value={commentModalData.lateMinutes}
                  onChange={(e) => setCommentModalData({ ...commentModalData, lateMinutes: e.target.value.replace(/[^0-9]/g, '') })}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      saveCommentModal();
                    }
                  }}
                />
              </div>

              <div className="flex justify-end gap-3 mt-8">
                <button
                  onClick={saveCommentModal}
                  className="px-7 py-2.5 text-[15px] font-semibold text-white bg-[#5142E6] hover:bg-[#4335c0] rounded-xl transition-colors shadow-sm"
                >
                  Confirm
                </button>
                <button
                  onClick={closeCommentModal}
                  className="px-7 py-2.5 text-[15px] font-semibold text-[#5142E6] border border-[#5142E6]/20 bg-white hover:bg-slate-50 rounded-xl transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
            <div className="absolute inset-0 -z-10" onClick={closeCommentModal} />
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function AnimatedGradebook() {
  const initialData: WeekData[] = [
    {
      weekNum: 1,
      isOpen: true,
      students: [
        createStudent(1, "Tojiev Olimjon"),
        createStudent(2, "Hasan Huseynov"),
        createStudent(3, "Murodbek Gulmatov"),
        createStudent(4, "Muhammad Sodiq"),
        createStudent(5, "Alijon Zabiri"),
      ]
    },
    {
      weekNum: 2,
      isOpen: false,
      students: [
        createStudent(6, "Tojiev Olimjon"),
        createStudent(7, "Hasan Huseynov"),
      ]
    },
    {
      weekNum: 3,
      isOpen: false,
      students: [
        createStudent(8, "Murodbek Gulmatov"),
      ]
    }
  ];

  const [weeks, setWeeks] = useState(initialData);

  const toggleWeek = (index: number) => {
    setWeeks(weeks.map((w, i) => ({
      ...w,
      isOpen: i === index ? !w.isOpen : w.isOpen
    })));
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-4 z-10 w-full pointer-events-auto select-none mt-10">
      {weeks.map((week, index) => (
        <GradebookWeek
          key={week.weekNum}
          week={week}
          toggleWeek={() => toggleWeek(index)}
        />
      ))}
    </div>
  );
}
