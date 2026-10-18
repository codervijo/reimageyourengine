/**
 * Site content placeholders. Every bracketed value must be replaced with real
 * material from the firm — nothing here is a real project or credential.
 */

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
    category: "Engineering analysis",
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
    name: "Mechanical Engineering",
    summary: "Rotating and reciprocating machinery, from first-principles design to field rebuild.",
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
    name: "Electrical Engineering",
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
    name: "Systems Engineering",
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
    name: "Process Safety & Compliance",
    summary: "Practical support for process-safety recommendations and equipment integrity.",
    items: [
      "RAGAGEP gap assessments with prioritized closure plans",
      "Implementation of Process Hazard Analysis (PHA) recommendations",
      "Codes and standards: [LIST APPLICABLE — e.g. NFPA, API, ASME]",
      "Mechanical-integrity review and inspection records structured for audit",
    ],
  },
] as const;
