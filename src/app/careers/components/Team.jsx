"use client";

import Link from "next/link";

import Image from "next/image";

import { Plus } from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

import { useEffect, useState } from "react";

import { fetchPublicCareers } from "@/lib/careerService";

import { fetchPublicEmployerGroups } from "@/lib/employeeService";



const GROUP_META = {

  TECHNICAL: { title: "Technical Team", direction: "left" },

  CREATIVE_OPERATIONS: { title: "Creative & Operations Team", direction: "right" },

};

/*
 * ARCHIVED — hardcoded careers data (replaced by API: fetchPublicCareers + fetchPublicEmployerGroups).
 * Kept for reference. See also docs/dummyblogs/ and npm run seed:website-content in @server.
 *
 * const STATIC_CAREER_OPENINGS = [
 *   { title: "React Native Developer", location: "Kochi", slug: "react-native-developer" },
 *   { title: "Backend Developer", location: "Kochi", slug: "backend-developer" },
 *   { title: "UI/UX Designer", location: "Kochi", slug: "ui-ux-designer" },
 * ];
 *
 * const technicalTeam = [
 *   { name: "Mohammed Azharudheen", role: "Application Developer", image: "/images/employers/Azar.jpg" },
 *   { name: "Hijas Ahamed", role: "Application Developer", image: "/images/employers/Hijas.jpg" },
 *   { name: "Jyothis G Tency", role: "Backend Developer", image: "/images/employers/Jyothis.jpg" },
 *   { name: "Athul Krishna", role: "Backend Developer", image: "/images/employers/Athul.jpg" },
 *   { name: "Ashik T K", role: "Full Stack Developer", image: "/images/employers/Ashik.jpg" },
 *   { name: "Aswin E S", role: "DevOps Engineer", image: "/images/employers/Aswin.jpg" },
 *   { name: "Aiswarya", role: "Software Tester", image: "/images/employers/Aiswarya.jpg" },
 *   { name: "Anand T Devadas", role: "UI/UX Designer", image: "/images/employers/Anand.jpg" },
 * ];
 *
 * const creativeAndOpsTeam = [
 *   { name: "Adhith C P", role: "Creative Head", image: "/images/employers/Adhi.jpg" },
 *   { name: "Jisma N M", role: "HR Manager", image: "/images/employers/Jisma.jpg" },
 *   { name: "Athulya V S", role: "HR Executive", image: "/images/employers/Athulya.jpg" },
 *   { name: "Arya Sudhakaran", role: "Process Associate", image: "/images/employers/Arya.jpg" },
 *   { name: "Siyana Yasmin", role: "Subject Expert", image: "/images/employers/Siyana.jpg" },
 * ];
 */



function isExternalImage(src) {

  return typeof src === "string" && /^https?:\/\//i.test(src);

}



export default function Team() {

  const reduceMotion = useReducedMotion();

  const [openings, setOpenings] = useState([]);

  const [openingsLoading, setOpeningsLoading] = useState(true);

  const [teamGroups, setTeamGroups] = useState([]);

  const [teamsLoading, setTeamsLoading] = useState(true);



  useEffect(() => {

    let active = true;

    (async () => {

      try {

        const rows = await fetchPublicCareers();

        if (!active) return;

        setOpenings(Array.isArray(rows) ? rows : []);

      } catch {

        if (active) setOpenings([]);

      } finally {

        if (active) setOpeningsLoading(false);

      }

    })();

    return () => {

      active = false;

    };

  }, []);



  useEffect(() => {

    let active = true;

    (async () => {

      try {

        const groups = await fetchPublicEmployerGroups();

        if (!active) return;

        setTeamGroups(Array.isArray(groups) ? groups : []);

      } catch {

        if (active) setTeamGroups([]);

      } finally {

        if (active) setTeamsLoading(false);

      }

    })();

    return () => {

      active = false;

    };

  }, []);



  const renderTeamGroup = (group) => {
    const { team_group, title, members, direction } = group;
    const isMarquee = members.length > 4;
    return (
      <div key={team_group || title} className="w-full flex flex-col mb-0 overflow-hidden">

        <div className="container mx-auto px-4 md:px-8 max-w-7xl w-full">

          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground tracking-tight px-1">

            {title}

          </h3>

        </div>

        {isMarquee ? (

          <div className="flex w-full overflow-hidden relative group/marquee">

            <motion.div

              className="flex w-max"

              animate={{ x: direction === "left" ? ["0%", "-25%"] : ["-25%", "0%"] }}

              transition={{ repeat: Infinity, ease: "linear", duration: members.length * 4.5 }}

              style={{ willChange: "transform" }}

            >

              {[...Array(4)].map((_, i) => (

                <div key={i} className="flex gap-5 pr-5">

                  {members.map((member) => (
                    <div
                      key={`${member.employee_id || member.name}-${i}`}

                      className="relative overflow-hidden group bg-black/5 rounded-2xl w-[75vw] sm:w-[260px] lg:w-[280px] aspect-4/5 shrink-0"

                    >

                      {member.image ? (

                        isExternalImage(member.image) ? (

                          // eslint-disable-next-line @next/next/no-img-element

                          <img

                            src={member.image}

                            alt={member.name}

                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"

                          />

                        ) : (

                          <Image

                            src={member.image}

                            alt={member.name}

                            fill

                            className="object-cover transition-transform duration-500 group-hover:scale-105"

                            sizes="(max-width: 768px) 75vw, 300px"

                          />

                        )

                      ) : (

                        <div className="flex h-full w-full items-center justify-center bg-slate-100 text-sm text-slate-400">

                          No photo

                        </div>

                      )}

                      <div className="absolute bottom-3 left-3 right-3 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl text-center shadow-lg transition-all duration-300">

                        <h3 className="text-white font-semibold text-[15px] leading-tight">{member.name}</h3>

                        <p className="text-gray-200 text-[12px] font-medium">{member.role}</p>

                      </div>

                    </div>

                  ))}

                </div>

              ))}

            </motion.div>

          </div>

        ) : (

          <div className="container mx-auto px-4 md:px-8 max-w-7xl w-full">

            <div className="flex sm:grid flex-nowrap overflow-x-auto sm:overflow-x-visible pb-6 sm:pb-0 sm:grid-cols-2 lg:grid-cols-4 gap-5 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-1">

              {members.map((member) => (
                <div
                  key={member.employee_id || member.name}

                  className="relative overflow-hidden group bg-black/5 rounded-2xl aspect-4/5 min-w-[75vw] sm:min-w-0 shrink-0 snap-center"

                >

                  {member.image ? (

                    isExternalImage(member.image) ? (

                      // eslint-disable-next-line @next/next/no-img-element

                      <img

                        src={member.image}

                        alt={member.name}

                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"

                      />

                    ) : (

                      <Image

                        src={member.image}

                        alt={member.name}

                        fill

                        className="object-cover transition-transform duration-500 group-hover:scale-105"

                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"

                      />

                    )

                  ) : (

                    <div className="flex h-full w-full items-center justify-center bg-slate-100 text-sm text-slate-400">

                      No photo

                    </div>

                  )}

                  <div className="absolute bottom-3 left-3 right-3 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl text-center shadow-lg transition-all duration-300">

                    <h3 className="text-white font-semibold text-[15px] leading-tight">{member.name}</h3>

                    <p className="text-gray-200 text-[12px] font-medium">{member.role}</p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        )}

      </div>

    );

  };



  const openingsList = openings.map((job) => ({

    title: job.title,

    location: job.location,

    slug: job.slug,

  }));



  const normalizedGroups =

    teamGroups.length > 0

      ? teamGroups.map((group) => ({
          team_group: group.team_group,
          title: group.title || GROUP_META[group.team_group]?.title || group.team_group,
          direction: group.slide_direction || GROUP_META[group.team_group]?.direction || "left",
          members: (group.members || []).map((member) => ({
            employee_id: member.employee_id,
            name: member.name,
            role: member.role,
            image: member.image,
          })),
        }))

      : [];



  const sectionMotion = reduceMotion

    ? {}

    : {

      initial: { opacity: 0, y: 36 },

      whileInView: { opacity: 1, y: 0 },

      viewport: { once: true, amount: 0.2 },

      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },

    };



  const cardMotion = (index) =>

    reduceMotion

      ? {}

      : {

        initial: { opacity: 0, y: 40 },

        whileInView: { opacity: 1, y: 0 },

        viewport: { once: true, amount: 0.2 },

        transition: {

          duration: 0.65,

          delay: index * 0.08,

          ease: [0.22, 1, 0.36, 1],

        },

      };



  return (

    <section className="py-10 bg-background min-h-[calc(100vh-70px)] flex flex-col justify-center overflow-hidden">

      <div className="container mx-auto px-4 md:px-8 max-w-7xl w-full">

        <motion.div className="mt-12 mb-10 md:mt-20" {...sectionMotion}>

          <h2 className="text-2xl md:text-5xl font-medium mb-4 text-foreground">

            <span className="text-brand-primary">Meet</span> our <span className="text-brand-primary">Team</span>

          </h2>

          <p className="text-muted-foreground max-w-md text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-12">

            Be part of a culture that values creativity, collaboration, and innovation.

          </p>

        </motion.div>

      </div>



      <motion.div className="w-full flex flex-col gap-16 md:gap-24 mb-34" {...sectionMotion}>

        {teamsLoading ? (

          <div className="container mx-auto px-4 md:px-8 max-w-7xl w-full">

            <p className="text-sm text-muted-foreground">Loading team...</p>

          </div>

        ) : normalizedGroups.length === 0 ? null : (
          normalizedGroups.map((group) => renderTeamGroup(group))
        )}

      </motion.div>



      <div className="container mx-auto px-4 md:px-8 max-w-7xl w-full">

        <motion.div className="pb-10" {...sectionMotion}>

          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Our current openings</h2>

          {openingsLoading ? (

            <p className="text-sm text-muted-foreground">Loading openings...</p>

          ) : openingsList.length === 0 ? (

            <p className="text-sm text-muted-foreground">No open positions right now. Check back soon.</p>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

              {openingsList.map((job, index) => (

                <Link href={`/careers/${job.slug}`} key={`${job.slug}-${index}`}>

                  <motion.div

                    className="p-5 rounded-2xl border border-gray-100 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow cursor-pointer flex flex-col justify-between min-h-[140px]"

                    {...cardMotion(index + 1)}

                  >

                    <div className="flex justify-between items-start">

                      <h3 className="text-lg md:text-xl font-bold text-foreground">{job.title}</h3>

                      <Plus className="w-5 h-5 text-foreground shrink-0" strokeWidth={2} />

                    </div>

                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mt-6">{job.location}</p>

                  </motion.div>

                </Link>

              ))}

            </div>

          )}

        </motion.div>

      </div>

    </section>

  );

}

