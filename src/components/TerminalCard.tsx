"use client";

import { motion, useReducedMotion } from "framer-motion";

const lines = [
  { prompt: "whoami", output: "Chandan Pandey · Data Engineer & SDE 1" },
  { prompt: "cat current_work.txt", output: "SDE 1 (Data Engineering) @ Tranzita Systems (P&G Collaboration)" },
  { prompt: "ls ./toolkit", output: "Azure Databricks  Delta Lake  ADLS  PySpark  Python  SQL  Azure Data Factory" },
  { prompt: "echo $IMPACT", output: "24h → <60min pipeline runtime · -15% stockouts · -40% query latency" }
];

export default function TerminalCard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="panel relative z-10 w-full max-w-[460px] overflow-hidden shadow-glow bg-white"
      aria-label="Animated terminal overview"
    >
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/90 px-4 py-3">
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[11px] font-medium text-slate-500">chandan@portfolio: ~</span>
        <span className="h-2 w-2 rounded-full bg-emerald-500" aria-label="Active indicator" />
      </div>
      <div className="space-y-3.5 p-5 font-mono text-[11px] leading-6 sm:p-6 sm:text-xs bg-white">
        {lines.map((line) => (
          <div className="terminal-line" key={line.prompt}>
            <div>
              <span className="text-cyan font-semibold">chandan@portfolio</span>
              <span className="text-slate-400">:~$ </span>
              <span className="text-slate-900 font-medium">{line.prompt}</span>
            </div>
            <div className="pl-2 text-slate-600 font-normal">{line.output}</div>
          </div>
        ))}
        <div>
          <span className="text-cyan font-semibold">chandan@portfolio</span>
          <span className="text-slate-400">:~$</span>
          <span className="terminal-cursor" />
        </div>
      </div>
      <div className="flex items-center gap-2 border-t border-slate-100 bg-slate-50/60 px-5 py-2.5 text-[10px] text-slate-500 font-mono">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
        <span>enterprise cloud runtime · p&amp;g data pipelines active</span>
      </div>
    </motion.div>
  );
}
