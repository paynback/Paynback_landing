"use client";

import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { fetchPublicCareers } from "@/lib/careerService";
import { fetchPublicEmployerGroups } from "@/lib/employeeService";
import EdgeFade from "@/components/ui/EdgeFade";
import { ShimmerCardGrid } from "@/components/ui/shimmer";
import { usePreloadImages } from "@/hooks/usePreloadImages";

function mapMember(member) {
  return {
    employee_id: member.employee_id,
    name: member.name,
    role: member.role,
    image: member.image,
  };
}

/** Flatten all API groups into one member list (no technical / creative split). */
function flattenTeamMembers(groups) {
  if (!Array.isArray(groups) || groups.length === 0) return [];

  const order = ["TECHNICAL", "CREATIVE_OPERATIONS"];
  const byKey = Object.fromEntries(groups.map((g) => [g.team_group, g]));
  const ordered = [
    ...order.map((key) => byKey[key]).filter(Boolean),
    ...groups.filter((g) => !order.includes(g.team_group)),
  ];

  const seen = new Set();
  const members = [];

  for (const group of ordered) {
    for (const member of group.members || []) {
      const key = String(member.employee_id || member.name || "");
      if (!key || seen.has(key)) continue;
      seen.add(key);
      members.push(mapMember(member));
    }
  }

  return members;
}

/*
 * ARCHIVED — hardcoded careers data (replaced by API: fetchPublicCareers + fetchPublicEmployerGroups).
 * Kept for reference. See server/docs/blogs.json and npm run seed:website in @server.
 */

function isExternalImage(src) {
  return typeof src === "string" && /^https?:\/\//i.test(src);
}

function MemberCard({ member, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden group bg-black/5 rounded-2xl aspect-4/5 shrink-0 ${className}`}
    >
      {member.image ? (
        isExternalImage(member.image) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.image}
            alt={member.name}
            loading="eager"
            decoding="async"
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
  );
}

/**
 * Infinite marquee that pauses its rAF-driven animation while scrolled
 * off-screen, so it doesn't keep running alongside Lenis/other sections.
 */
function TeamMarquee({ members }) {
  const reduceMotion = useReducedMotion();
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    if (reduceMotion) return;
    const node = containerRef.current;
    if (!node) return;

    const duration = members.length * 4.5;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              x: ["0%", "-25%"],
              transition: { repeat: Infinity, ease: "linear", duration },
            });
          } else {
            controls.stop();
          }
        });
      },
      { threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [controls, members.length, reduceMotion]);

  return (
    <EdgeFade className="w-full rounded-xl" overlayWidth="w-6 sm:w-8 md:w-10">
      <motion.div
        ref={containerRef}
        className="flex w-max"
        animate={reduceMotion ? undefined : controls}
        style={{ willChange: reduceMotion ? undefined : "transform" }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-5 pr-5">
            {members.map((member) => (
              <MemberCard
                key={`${member.employee_id || member.name}-${i}`}
                member={member}
                className="w-[75vw] sm:w-[260px] lg:w-[280px]"
              />
            ))}
          </div>
        ))}
      </motion.div>
    </EdgeFade>
  );
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

  const renderTeam = (members) => {
    const isMarquee = members.length > 4;

    return (
      <div className="w-full flex flex-col mb-0">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-6 lg:px-20">
          {isMarquee ? (
            <TeamMarquee members={members} />
          ) : (
            <EdgeFade className="rounded-xl" mode="scroll-until-sm" overlayWidth="w-6 sm:w-8 md:w-10">
              <div className="flex snap-x snap-mandatory flex-nowrap gap-5 overflow-x-auto pb-6 sm:grid sm:grid-cols-2 sm:overflow-x-visible sm:pb-0 lg:grid-cols-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {members.map((member) => (
                  <MemberCard
                    key={member.employee_id || member.name}
                    member={member}
                    className="min-w-[75vw] snap-center sm:min-w-0"
                  />
                ))}
              </div>
            </EdgeFade>
          )}
        </div>
      </div>
    );
  };

  const openingsList = openings.map((job) => ({
    title: job.title,
    slug: job.slug,
    jobType: job.job_type === "INTERNSHIP" ? "Internship" : "Employment",
    aboutPreview: job.about_preview || "",
  }));

  // Single combined team list (API groups flattened; no technical/ops split heading)
  const teamMembers = flattenTeamMembers(teamGroups);
  const teamImageUrls = useMemo(
    () => teamMembers.map((m) => m.image).filter(Boolean),
    [teamMembers],
  );
  const teamImagesReady = usePreloadImages(
    teamImageUrls,
    !teamsLoading && teamMembers.length > 0,
  );
  const showTeamShimmer =
    teamsLoading || (teamMembers.length > 0 && !teamImagesReady);

  const renderTeamShimmer = (marquee = false) => (
    <div className="mx-auto w-full max-w-7xl px-6 sm:px-6 lg:px-20">
      {marquee ? (
        <div className="flex gap-5 overflow-hidden pb-2">
          <ShimmerCardGrid
            variant="team"
            count={4}
            className="flex gap-5"
            itemClassName="w-[75vw] sm:w-[260px] lg:w-[280px]"
          />
        </div>
      ) : (
        <ShimmerCardGrid
          variant="team"
          count={4}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        />
      )}
    </div>
  );

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
    <section className="flex min-h-[calc(100vh-70px)] flex-col justify-center overflow-x-hidden bg-background py-10">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-6 lg:px-20">
        <motion.div className="mb-10 mt-12 md:mt-20" {...sectionMotion}>
          <h2 className="mb-4 text-2xl font-medium text-foreground md:text-5xl">
            <span className="text-brand-primary">Meet</span> our{" "}
            <span className="text-brand-primary">Team</span>
          </h2>
          <p className="mb-12 max-w-md text-[15px] font-normal leading-[1.8] text-muted-foreground sm:text-[16px]">
            Be part of a culture that values creativity, collaboration, and innovation.
          </p>
        </motion.div>
      </div>

      <motion.div className="mb-34 flex w-full flex-col gap-16 md:gap-24" {...sectionMotion}>
        {showTeamShimmer ? (
          renderTeamShimmer(teamMembers.length > 4)
        ) : teamMembers.length === 0 ? null : (
          renderTeam(teamMembers)
        )}
      </motion.div>

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-6 lg:px-20">
        <motion.div className="pb-10" {...sectionMotion}>
          <h2 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">
            Our current openings
          </h2>

          {openingsLoading ? (
            <p className="text-sm text-muted-foreground">Loading openings...</p>
          ) : openingsList.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No open positions right now. Check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
              {openingsList.map((job, index) => (
                <Link href={`/careers/${job.slug}`} key={`${job.slug}-${index}`}>
                  <motion.div
                    className="flex min-h-[180px] cursor-pointer flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-lg"
                    {...cardMotion(index + 1)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-foreground md:text-xl">{job.title}</h3>
                      <Plus className="h-5 w-5 shrink-0 text-foreground" strokeWidth={2} />
                    </div>
                    {job.aboutPreview ? (
                      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
                        {job.aboutPreview}
                      </p>
                    ) : null}
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {job.jobType}
                    </p>
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
