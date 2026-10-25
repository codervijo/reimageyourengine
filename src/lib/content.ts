/**
 * Site content placeholders. Every bracketed value must be replaced with real
 * material from the firm — nothing here is a real project or credential.
 */

export const TAGLINE = "REBUILD. REUSE. REIMAGINE.";

/**
 * Derek Hoyt's homepage statement — client-authored. Do not paraphrase,
 * shorten, or "fix" punctuation; src/__tests__/homepage.test.js pins it.
 */
export const DEREK_STATEMENT = [
  "I’m not writing your certification/PHA, stamping your drawings, or performing your inspection. I’m solving your problems. The HOW is what I care about.",
  "I don’t assume you have to disassemble the entire engine in order to fix an oil consumption problem. I find the root cause and work from there.",
  "I don’t believe you can replace one pump in the system without affecting the rest of the hydraulic circuit. I reimagine the system with the new component.",
] as const;

export type Project = {
  id: string;
  category: string;
  title: string;
  media: string; // description of the photo / CAD / drawing to add
  challenge: string;
  approach: string;
  result: string;
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "p1",
    category: "Completed system",
    title: "[PROJECT TITLE — e.g. engine / compressor system]",
    media: "[PHOTO — finished system installed in service]",
    challenge: "[What was failing, missing, or required — operating conditions, constraints]",
    approach: "[Analysis performed, design decisions, alternatives rejected and why]",
    result: "[What was built or solved — measured outcome, hours in service, specs met]",
    tags: ["[DISCIPLINE]", "[EQUIPMENT TYPE]", "[STATUS / YEAR]"],
  },
  {
    id: "p2",
    category: "CAD & mechanical design",
    title: "[PROJECT TITLE — mechanical design]",
    media: "[CAD RENDER or SECTION VIEW — assembly, exploded view]",
    challenge: "[Design requirement: loads, envelope, materials, service environment]",
    approach: "[Design method — FEA, tolerance stack, material selection, DFM]",
    result: "[Final design, parts produced, validation result]",
    tags: ["[CAD TOOL]", "[MATERIAL]", "[YEAR]"],
  },
  {
    id: "p3",
    category: "Electrical / electronic systems",
    title: "[PROJECT TITLE — controls / electronics]",
    media: "[SCHEMATIC or PANEL PHOTO — wiring, PCB, control cabinet]",
    challenge: "[Control, power, or instrumentation problem to solve]",
    approach: "[Architecture — sensors, controller, logic, protection, standards applied]",
    result: "[System delivered, commissioning result, reliability data]",
    tags: ["[PLC / MCU]", "[VOLTAGE CLASS]", "[YEAR]"],
  },
  {
    id: "p4",
    category: "Prototype & test rig",
    title: "[PROJECT TITLE — prototype or test stand]",
    media: "[PHOTO — rig on the bench, instrumentation visible]",
    challenge: "[Hypothesis or performance claim that needed proving]",
    approach: "[Test plan — instrumentation, data acquisition, test matrix]",
    result: "[Data obtained, design changes made from findings]",
    tags: ["[DAQ]", "[TEST TYPE]", "[YEAR]"],
  },
  {
    id: "p5",
    category: "Root-cause analysis",
    title: "[PROJECT TITLE — failure / root-cause analysis]",
    media: "[PLOT or FAILED PART PHOTO — fracture face, vibration spectrum, thermal map]",
    challenge: "[Recurring failure or performance shortfall in the field]",
    approach: "[Root-cause method — teardown, metallurgy, vibration, oil analysis, calcs]",
    result: "[Root cause identified, corrective action, failures since]",
    tags: ["[METHOD]", "[EQUIPMENT]", "[YEAR]"],
  },
  {
    id: "p6",
    category: "Hardware rebuild",
    title: "[PROJECT TITLE — redesign & rebuild]",
    media: "[BEFORE / AFTER PHOTOS — original vs. rebuilt hardware]",
    challenge: "[Why the original design did not work]",
    approach: "[Weak point redesigned — what changed and why]",
    result: "[Rebuilt machine — performance vs. original]",
    tags: ["[MACHINE]", "[SCOPE]", "[YEAR]"],
  },
];

export const DISCIPLINES = [
  {
    code: "01",
    name: "Mechanical Systems",
    summary: "Rotating and reciprocating machinery — engines, pumps, compressors, blowers — from root cause to rebuild.",
    items: [
      "Reciprocating & lean-burn gas engines — combustion, valvetrain, lubrication",
      "Screw, reciprocating, and booster compressors",
      "Progressive-cavity and centrifugal pumps in abrasive / corrosive service",
      "CAD, tolerance analysis, material selection for H₂S-bearing service",
      "Failure analysis — wear, fatigue, fracture, corrosion",
      "Redesign and rebuild of under-performing equipment",
    ],
  },
  {
    code: "02",
    name: "Electrical & Controls",
    summary: "Power, controls, and instrumentation that keep machines protected and observable.",
    items: [
      "Engine and compressor control panels, interlocks, shutdown logic",
      "Instrumentation — pressure, temperature, vibration, gas analysis",
      "Ignition systems and generator-set electrical integration",
      "Hazardous-area considerations for gas-handling equipment",
      "Schematics, wiring documentation, and commissioning",
      "[ADDITIONAL ELECTRICAL CAPABILITY — confirm with principal]",
    ],
  },
  {
    code: "03",
    name: "Systems Integration",
    summary: "How the pieces interact — process, machine, controls, and the people running them.",
    items: [
      "Gas-handling trains: conditioning, H₂S and siloxane removal, compression",
      "Root-cause analysis across process, mechanical, and control boundaries",
      "Life-extension and remaining-life assessment",
      "Test rigs, validation plans, and data acquisition",
      "Equipment operability and downtime reduction",
      "Integration of new hardware into existing facilities",
    ],
  },
  {
    code: "04",
    name: "PHA Recommendation Follow-through",
    summary: "Practical help turning existing PHA recommendations into equipment and maintenance work.",
    items: [
      "Implementation of Process Hazard Analysis (PHA) recommendations",
      "Sequencing changes around operations, outages, and budget",
      "Hydraulic and fluid-system changes considered across the whole circuit",
    ],
  },
] as const;
