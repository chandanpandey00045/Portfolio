"use client";

import { motion, useReducedMotion } from "framer-motion";

const lines = [
  { prompt: "whoami", output: "Data Engineer · Python · SQL" },
  { prompt: "cat focus.txt", output: "Reliable pipelines, clean data, useful insights" },
  { prompt: "ls ./toolkit", output: "PySpark  Databricks  Azure  Delta Lake" },
  { prompt: "echo $STATUS", output: "Building. Learning. Improving." }
];

export default function TerminalCard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="panel relative z-10 w-full max-w-[440px] overflow-hidden shadow-glow"
      aria-label="Decorative animated terminal showing data engineering interests"
    >
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3">
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[11px] text-slate-500">chandan@portfolio: ~</span>
        <span className="h-2 w-2 rounded-full bg-emerald-400" aria-label="Decorative status indicator" />
      </div>
      <div className="space-y-5 p-5 font-mono text-[11px] leading-6 sm:p-6 sm:text-xs">
        {lines.map((line, index) => (
          <div className="terminal-line" key={line.prompt}>
            <div><span className="text-cyan">chandan@portfolio</span><span className="text-slate-500">:~$ </span><span className="text-slate-100">{line.prompt}</span></div>
            <div className="pl-1 text-slate-400">{line.output}</div>
          </div>
        ))}
        <div className="text-cyan">chandan@portfolio<span className="text-slate-500">:~$</span><span className="terminal-cursor" /></div>
      </div>
      <div className="flex items-center gap-2 border-t border-slate-200 px-5 py-3 text-[10px] text-slate-500">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
        <span>Decorative terminal · no commands are executed</span>
      </div>
    </motion.div>
  );
}
