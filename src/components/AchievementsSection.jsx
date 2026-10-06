import { motion } from "framer-motion";
import {
  Award,
  Trophy,
  Medal,
  Star,
  BadgeCheck,
  ExternalLink,
} from "lucide-react";

import { portfolioData } from "../data/portfolio";

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden border-t border-white/5"
    >

      {/* ================= BACKGROUND EFFECT ================= */}

      <div className="pointer-events-none absolute -left-[200px] top-20 h-[25rem] w-[25rem] rounded-full bg-emerald-500/4 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 -right-[200px] h-[25rem] w-[25rem] rounded-full bg-emerald-900/8 blur-[120px]" />


      <div className="relative mx-auto max-w-7xl px-6 py-28">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-400">
            Credentials
          </p>

          <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <h2 className="text-4xl font-bold tracking-tight text-[#F5F7F6] md:text-5xl">
                Achievements
                <span className="text-emerald-400"> & </span>
                Certifications
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#94A3A0]">
                Recognition and certifications that reflect my academic
                achievements, technical skills, and continuous learning.
              </p>

            </div>


            {/* ================= CREDENTIAL COUNT ================= */}

            <div className="flex items-center gap-3">

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/10 px-5 py-3">

                <p className="text-xs uppercase tracking-widest text-white/35">
                  Total Credentials
                </p>

                <p className="mt-1 text-2xl font-bold text-white">
                  {portfolioData.achievements.length +
                    portfolioData.certifications.length}
                </p>

              </div>

            </div>

          </div>

        </motion.div>


        {/* ===================================================== */}
        {/* ================= MAIN CONTENT ======================= */}
        {/* ===================================================== */}

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.05fr_0.95fr]">


          {/* ================================================= */}
          {/* ================= ACHIEVEMENTS ================== */}
          {/* ================================================= */}

          <div>

            <div className="mb-7 flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-950/20">

                <Trophy className="h-5 w-5 text-emerald-400" />

              </div>

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Recognition
                </p>

                <h3 className="text-xl font-semibold text-white">
                  Achievements
                </h3>

              </div>

            </div>


            <div className="space-y-5">

              {portfolioData.achievements.map((achievement, index) => {

                const Icon =
                  index === 0
                    ? Trophy
                    : index === 1
                      ? Medal
                      : Award;

                return (

                  <motion.div
                    key={achievement.id}
                    initial={{
                      opacity: 0,
                      x: -25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.12,
                    }}
                    className="group relative overflow-hidden rounded-3xl border border-[#18352C] bg-[#0A1210] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/40"
                  >

                    {/* Hover Glow */}

                    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/7 blur-3xl transition-all duration-500 group-hover:bg-emerald-500/12" />


                    {/* Top Row */}

                    <div className="relative flex items-start justify-between gap-4">

                      <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-950/20">

                          <Icon className="h-5 w-5 text-emerald-400" />

                        </div>

                        <div>

                          <p className="text-xs font-medium uppercase tracking-widest text-emerald-400">
                            {achievement.category}
                          </p>

                          <p className="mt-1 text-xs text-white/35">
                            Achievement #{String(index + 1).padStart(2, "0")}
                          </p>

                        </div>

                      </div>


                      <span className="rounded-full border border-white/10 bg-white/3 px-3 py-1 text-xs font-medium text-white/50">
                        {achievement.year}
                      </span>

                    </div>


                    {/* Title */}

                    <div className="relative mt-7">

                      <h4 className="max-w-xl text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-emerald-400">
                        {achievement.title}
                      </h4>

                      <p className="mt-2 text-sm font-medium text-emerald-400/80">
                        {achievement.organization}
                      </p>

                      <p className="mt-4 text-sm leading-7 text-[#94A3A0]">
                        {achievement.description}
                      </p>

                    </div>


                    {/* Bottom */}

                    <div className="relative mt-6 flex items-center justify-between border-t border-white/5 pt-5">

                      <div className="flex items-center gap-2 text-xs text-white/35">

                        <Star className="h-3.5 w-3.5 text-emerald-500" />

                        Academic Recognition

                      </div>

                      <span className="text-lg text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-emerald-400">
                        →
                      </span>

                    </div>

                  </motion.div>

                );

              })}

            </div>

          </div>


          {/* ================================================= */}
          {/* ================= CERTIFICATIONS ================= */}
          {/* ================================================= */}

          <div>

            <div className="mb-7 flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-950/20">

                <BadgeCheck className="h-5 w-5 text-emerald-400" />

              </div>

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Professional Development
                </p>

                <h3 className="text-xl font-semibold text-white">
                  Certifications
                </h3>

              </div>

            </div>


            <div className="space-y-4">

              {portfolioData.certifications.map((certification, index) => (

                <motion.div
                  key={certification.id}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-[#18352C] bg-[#0A1210] p-5 transition-all duration-400 hover:-translate-y-1 hover:border-emerald-500/40"
                >

                  {/* Background Number */}

                  <span className="pointer-events-none absolute right-5 top-2 select-none text-6xl font-black text-white/2.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  <div className="relative flex gap-4">

                    {/* Certification Icon */}

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#050908] transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-950/20">

                      <BadgeCheck className="h-5 w-5 text-emerald-400" />

                    </div>


                    {/* Content */}

                    <div className="min-w-0 flex-1">

                      <div className="flex flex-wrap items-start justify-between gap-2">

                        <h4 className="pr-4 text-base font-semibold leading-6 text-white transition-colors group-hover:text-emerald-400">
                          {certification.title}
                        </h4>

                        <span className="shrink-0 text-xs text-white/35">
                          {certification.year}
                        </span>

                      </div>


                      <p className="mt-1 text-sm font-medium text-emerald-400/80">
                        {certification.issuer}
                      </p>


                      <p className="mt-2 text-sm leading-6 text-[#94A3A0]">
                        {certification.description}
                      </p>


                      {/* Credential Footer */}

                      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">

                        <span className="text-[11px] uppercase tracking-widest text-white/25">
                          Verified Credential
                        </span>


                        {certification.url ? (

                          <a
                            href={certification.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 transition-colors hover:text-emerald-400"
                          >
                            View
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>

                        ) : (

                          <span className="text-xs text-white/20">
                            Credential
                          </span>

                        )}

                      </div>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>


        {/* ===================================================== */}
        {/* ================= BOTTOM STAT ======================== */}
        {/* ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-16 overflow-hidden rounded-3xl border border-emerald-500/10 bg-linear-to-r from-emerald-950/20 via-[#0A1210] to-[#0A1210] p-6 md:p-8"
        >

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <div>

              <p className="text-sm font-medium text-emerald-400">
                CONTINUOUS LEARNING
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                Always learning. Always building.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#94A3A0]">
                Continuously expanding my knowledge across machine learning,
                IoT, embedded systems, and communication technology.
              </p>

            </div>


            <div className="flex shrink-0 items-center gap-3">

              <div className="rounded-2xl border border-white/10 bg-white/2 px-5 py-4 text-center">

                <p className="text-2xl font-bold text-white">
                  {portfolioData.certifications.length}
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/30">
                  Certifications
                </p>

              </div>


              <div className="rounded-2xl border border-white/10 bg-white/2 px-5 py-4 text-center">

                <p className="text-2xl font-bold text-white">
                  {portfolioData.achievements.length}
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/30">
                  Achievements
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}