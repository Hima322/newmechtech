import { useState } from 'react'

// ─────────────────────────────────────────────────────────────
//  IMAGES — place in src/assets/ and import below
//  (Add more images as you get them)
// ─────────────────────────────────────────────────────────────
import imgProximity   from '../assets/ProximitySensor.jpeg'
import imgLimitSwitch from '../assets/LimitSwitch.jpeg'
import imgDCDrives    from '../assets/dcdrives.jpeg'
import imgPLC         from '../assets/plc.jpeg'

// ─────────────────────────────────────────────────────────────
//  CATEGORIES
// ─────────────────────────────────────────────────────────────
const categories = [
  { id: 'All',         icon: '🏭', label: 'All Products' },
  { id: 'PLC',         icon: '🖥️', label: 'PLC Systems' },
  { id: 'AC Drives',   icon: '⚡', label: 'AC Drives (VFD)' },
  { id: 'DC Drives',   icon: '🔋', label: 'DC Drives' },
  { id: 'Sensors',     icon: '📡', label: 'Sensors' },
  { id: 'Pneumatics',  icon: '💨', label: 'Pneumatics' },
  { id: 'Hydraulics',  icon: '💧', label: 'Hydraulics' },
  { id: 'Mechanical',  icon: '⚙️', label: 'Mechanical' },
  { id: 'Panels',      icon: '🗄️', label: 'Control Panels' },
  { id: 'HMI',         icon: '📱', label: 'HMI & SCADA' },
]

// ─────────────────────────────────────────────────────────────
//  PRODUCTS DATA
// ─────────────────────────────────────────────────────────────
const products = [

  // ── PLC SYSTEMS ──────────────────────────────────────────
  {
    id: 1, cat: 'PLC', brand: 'Siemens', badge: 'All Series Available',
    name: 'Siemens SIMATIC S7 Series PLC',
    image: imgPLC,
    available: ['S7-200', 'S7-300', 'S7-400', 'S7-1200', 'S7-1500', 'S5-100U', 'LOGO!', 'S7 Safety PLC'],
    specs: [
      'S7-1200: Compact, 14 DI/10 DO, PROFINET, 75KB Memory',
      'S7-1500: High-end, up to 4MB, Motion Control',
      'S7-300: Mid-range modular, extensive I/O expansion',
      'S7-400: Large-scale process automation',
      'LOGO!: Small logic module for basic automation',
      'S7 Safety: TÜV certified safety functions (SIL 2/3)',
    ],
    desc: 'Authorized distributor for complete Siemens SIMATIC S7 PLC range. All models available — from compact LOGO! modules to high-performance S7-1500 systems. Original & genuine products with GST invoice.',
    tags: ['PROFINET', 'TIA Portal', 'SCADA Ready', 'Modbus RTU'],
  },
  {
    id: 2, cat: 'PLC', brand: 'Mitsubishi', badge: 'Full Range',
    name: 'Mitsubishi MELSEC PLC Series',
    image: imgPLC,
    available: ['FX1S', 'FX1N', 'FX2N', 'FX3U', 'FX3G', 'FX5U', 'iQ-F Series', 'iQ-R Series', 'L Series', 'Q Series'],
    specs: [
      'FX5U: 32–256 I/O, Built-in Ethernet, SD Card, USB',
      'iQ-R: High-speed, multi-CPU, safety functions',
      'FX3U: Up to 256 I/O, 3-axis pulse output',
      'Q Series: Large-scale, redundant CPU support',
      'L Series: Mid-range with motion control',
      'FX1S/FX1N: Compact, cost-effective for small machines',
    ],
    desc: 'Complete Mitsubishi MELSEC PLC range available. Ideal for machine automation, conveyor systems, textile, and packaging industries. GX Works programming software support.',
    tags: ['GX Works', 'CC-Link', 'GOT HMI', 'Motion Control'],
  },
  {
    id: 3, cat: 'PLC', brand: 'Allen Bradley', badge: 'Available',
    name: 'Allen Bradley / Rockwell PLC',
    image: imgPLC,
    available: ['MicroLogix 1000', 'MicroLogix 1100', 'MicroLogix 1400', 'CompactLogix', 'ControlLogix', 'Micro820', 'Micro850'],
    specs: [
      'MicroLogix 1400: 32 I/O, Ethernet, RS232/485',
      'CompactLogix: Scalable, EtherNet/IP, motion',
      'ControlLogix: Enterprise-level, redundancy support',
      'Micro820/850: IEC 61131-3, web server built-in',
      'All models support RSLogix / Studio 5000',
      'Full I/O expansion modules available',
    ],
    desc: 'Allen Bradley PLC systems for food & beverage, automotive, oil & gas industries. Supply of CPUs, I/O modules, communication cards and accessories.',
    tags: ['EtherNet/IP', 'RSLogix 5000', 'DeviceNet', 'ControlNet'],
  },
  {
    id: 4, cat: 'PLC', brand: 'Omron', badge: 'Available',
    name: 'Omron SYSMAC PLC Series',
    image: imgPLC,
    available: ['CP1E', 'CP1L', 'CP1H', 'CJ2M', 'CJ2H', 'NJ Series', 'NX Series', 'CS1 Series'],
    specs: [
      'CP1E: Economy type, 10–60 I/O, RS232C',
      'CP1H: High-speed, 4-axis pulse, USB',
      'CJ2M: Modular, EtherNet/IP, 2560 I/O',
      'NJ/NX: Machine automation, EtherCAT motion',
      'CS1: Large-scale process, redundant CPU',
      'Sysmac Studio programming environment',
    ],
    desc: 'Omron PLC series for precision control in electronics manufacturing, robotics, and packaging lines.',
    tags: ['EtherCAT', 'Sysmac Studio', 'EtherNet/IP', 'DeviceNet'],
  },

  // ── AC DRIVES ────────────────────────────────────────────
  {
    id: 5, cat: 'AC Drives', brand: 'ABB', badge: 'All KW Available',
    name: 'ABB AC Variable Frequency Drives',
    image: imgDCDrives,
    available: ['ACS310', 'ACS355', 'ACS510', 'ACS550', 'ACS800', 'ACS880', 'ACH580'],
    specs: [
      'Range: 0.37 kW to 5600 kW',
      '380–480V / 525–690V 3-Phase',
      'Built-in EMC filter available',
      'HVAC optimized (ACH series)',
      'Fieldbus: Modbus, PROFIBUS, EtherNet/IP',
      'IP21 / IP54 / IP55 enclosures',
    ],
    desc: 'Complete ABB drive range for pumps, fans, compressors, conveyors, hoists and process applications. Energy optimization and motor protection features.',
    tags: ['Modbus RTU', 'PROFIBUS', 'Energy Saving', 'IP54'],
  },
  {
    id: 6, cat: 'AC Drives', brand: 'Siemens', badge: 'Full Range',
    name: 'Siemens SINAMICS AC Drives',
    image: imgDCDrives,
    available: ['G110', 'G120', 'G120C', 'G130', 'G150', 'V20', 'V90'],
    specs: [
      'G120: Modular, power 0.37–250 kW',
      'G120C: Compact, integrated safety (STO)',
      'V20: Basic, 0.12–30 kW, simple setup',
      'G150: Cabinet drive up to 2700 kW',
      'PROFINET / PROFIBUS communication',
      'Safe Torque Off (STO) standard',
    ],
    desc: 'Siemens SINAMICS drive family for all industrial applications. From basic V20 to high-performance G150 cabinet drives.',
    tags: ['PROFINET', 'TIA Portal', 'STO Safety', 'Vector Control'],
  },
  {
    id: 7, cat: 'AC Drives', brand: 'Schneider', badge: 'Available',
    name: 'Schneider Altivar AC Drives',
    image: imgDCDrives,
    available: ['ATV12', 'ATV320', 'ATV340', 'ATV610', 'ATV630', 'ATV650', 'ATV930'],
    specs: [
      'ATV320: 0.18–15 kW, machine drives',
      'ATV610/630: HVAC & pump optimized',
      'ATV930: Process drives, 0.75–800 kW',
      'EcoStruxure compatible',
      'CANopen, Modbus, EtherNet/IP',
      'Safe Torque Off (STO) certified',
    ],
    desc: 'Schneider Altivar drives for machine builders, HVAC, water treatment and process industries.',
    tags: ['EcoStruxure', 'Modbus', 'CANopen', 'IP55'],
  },
  {
    id: 8, cat: 'AC Drives', brand: 'Delta', badge: 'Value Range',
    name: 'Delta VFD AC Drive Series',
    image: imgDCDrives,
    available: ['VFD-M', 'VFD-B', 'VFD-E', 'VFD-EL', 'VFD-C2000', 'VFD-CP2000', 'MS300'],
    specs: [
      'Range: 0.2 kW to 315 kW',
      'V/f and Sensorless Vector Control',
      'Built-in PID controller',
      'RS485 Modbus RTU standard',
      'PG card option for closed-loop',
      'EMI filter & braking resistor options',
    ],
    desc: 'Delta VFD series — cost-effective general purpose drives for pumps, fans, compressors, textile and packaging machinery.',
    tags: ['Modbus RTU', 'PID Control', 'Vector Control', 'Compact'],
  },

  // ── DC DRIVES ────────────────────────────────────────────
  {
    id: 9, cat: 'DC Drives', brand: 'Siemens', badge: 'Premium',
    name: 'Siemens SINAMICS DCM DC Drives',
    image: imgDCDrives,
    available: ['6RA7018', '6RA7025', '6RA7031', '6RA7075', '6RA7085', '6RA8013', '6RA8085'],
    specs: [
      'Current range: 15 A to 3000 A',
      '400V / 480V 3-Phase AC input',
      'Armature + Field controller',
      'PROFIBUS DP / PROFINET interface',
      'Regenerative 4-quadrant operation',
      'Common DC bus configuration',
    ],
    desc: 'Siemens SINAMICS DCM for winders, extruders, paper mills, hoists, rolling mills and test bench applications.',
    tags: ['PROFIBUS', 'Regenerative', '4-Quadrant', 'Field Control'],
  },
  {
    id: 10, cat: 'DC Drives', brand: 'ABB', badge: 'Industrial',
    name: 'ABB DCS880 DC Drive',
    image: imgDCDrives,
    available: ['DCS880-S01-0050', 'DCS880-S01-0100', 'DCS880-S01-0200', 'DCS880-S01-0500', 'DCS880-S01-1000'],
    specs: [
      '25 A to 5200 A output',
      '230–525V AC input',
      'Armature & field control',
      'DriveAP programming tool',
      'Universal I/O, fieldbus options',
      'Safe Torque Off (STO) included',
    ],
    desc: 'ABB DCS880 next-gen DC drives with universal hardware platform. For all DC motor retrofits and new installations.',
    tags: ['DriveAP', 'STO Safety', 'EtherNet/IP', 'Universal I/O'],
  },

  // ── SENSORS ──────────────────────────────────────────────
  {
    id: 11, cat: 'Sensors', brand: 'Multi-Brand', badge: 'All Types Available',
    name: 'Proximity Sensors — Inductive & Capacitive',
    image: imgProximity,
    available: ['M8', 'M12', 'M18', 'M30', 'Flat Type', 'Ring Type', 'Rectangular'],
    specs: [
      'Sensing distance: 2mm to 40mm',
      'NPN / PNP / 2-wire output',
      'Normally Open / Normally Closed',
      'Operating voltage: 10–30V DC',
      'IP67 / IP68 waterproof rating',
      'LED indicator, short-circuit protection',
    ],
    desc: 'Inductive proximity sensors for metal detection, capacitive sensors for non-metallic objects. Brands: Omron, Autonics, Pepperl+Fuchs, Sick, Balluff available.',
    tags: ['IP67', 'NPN/PNP', 'M12/M18/M30', 'Autonics', 'Omron'],
  },
  {
    id: 12, cat: 'Sensors', brand: 'Multi-Brand', badge: 'Full Range',
    name: 'Photoelectric Sensors',
    image: imgProximity,
    available: ['Through-Beam', 'Retroreflective', 'Diffuse Reflective', 'Background Suppression', 'Laser Type', 'Fiber Optic'],
    specs: [
      'Sensing range: 10mm to 50m',
      'Through-beam: Longest range, highest reliability',
      'Retroreflective: 0.1m–10m with reflector',
      'Diffuse: 10mm–3m, no separate receiver',
      'PNP/NPN/Relay output options',
      'IP65/IP67 protection, -25°C to +70°C',
    ],
    desc: 'Photoelectric sensors for object detection, counting, positioning on conveyor lines. Brands: Sick, Omron, Autonics, Keyence, Banner available.',
    tags: ['Sick', 'Keyence', 'Omron', 'Laser', 'Long Range'],
  },
  {
    id: 13, cat: 'Sensors', brand: 'Multi-Brand', badge: 'Available',
    name: 'Limit Switches — All Types',
    image: imgLimitSwitch,
    available: ['Plunger Type', 'Roller Lever', 'Adjustable Roller', 'Wire Pull', 'Whisker Type', 'Safety Limit Switch'],
    specs: [
      'Contact: 1NO+1NC standard',
      'Operating force: 0.5N to 50N',
      'Voltage: 250V AC / 24V DC',
      'Current: up to 10A',
      'IP65 / IP67 enclosure rating',
      'Brands: Eaton, Schneider, Omron, Honeywell',
    ],
    desc: 'Heavy-duty limit switches for machine position detection, end-of-travel sensing, door interlocks and safety applications in all industries.',
    tags: ['Eaton', 'Schneider', 'IP67', '1NO+1NC', 'Safety'],
  },
  {
    id: 14, cat: 'Sensors', brand: 'Multi-Brand', badge: 'Process',
    name: 'Pressure & Temperature Transmitters',
    image: imgProximity,
    available: ['0-1 Bar', '0-10 Bar', '0-100 Bar', '0-400 Bar', 'PT100 RTD', 'PT1000', 'Thermocouple K/J/T'],
    specs: [
      '4-20mA / 0-10V / HART output',
      'Accuracy: ±0.1% to ±0.5% FS',
      'SS316L wetted parts',
      'IP67/IP68 housing',
      'Temperature range: -50°C to +200°C',
      'G1/4" to G1" process connections',
    ],
    desc: 'Pressure transmitters and temperature sensors for process industries, HVAC, water treatment, compressors and hydraulic systems.',
    tags: ['4-20mA', 'HART', 'IP67', 'SS316', 'Honeywell'],
  },

  // ── PNEUMATICS ───────────────────────────────────────────
  {
    id: 15, cat: 'Pneumatics', brand: 'SMC / Janatics / Festo', badge: 'Wide Range',
    name: 'Pneumatic Cylinders',
    image: imgProximity,
    available: ['Standard Double Acting', 'Single Acting', 'Compact Cylinder', 'Slide Cylinder', 'Rotary Actuator', 'Guided Cylinder', 'Rodless Cylinder'],
    specs: [
      'Bore sizes: 12mm to 320mm',
      'Stroke: 5mm to 1000mm (custom available)',
      'Operating pressure: 0.1–1.0 MPa',
      'Temperature range: -10°C to +80°C',
      'Magnetic piston for reed switch sensing',
      'Cushion adjustment both ends',
    ],
    desc: 'Complete range of pneumatic cylinders for pick & place, clamping, pressing, lifting and actuating applications. SMC, Janatics, Festo, Aventics available.',
    tags: ['SMC', 'Janatics', 'Festo', 'ISO Standard', 'Compact'],
  },
  {
    id: 16, cat: 'Pneumatics', brand: 'SMC / Janatics', badge: 'Full Range',
    name: 'Solenoid Valves & Directional Control',
    image: imgProximity,
    available: ['3/2 Way', '5/2 Way', '5/3 Way', 'Manifold Blocks', 'Pilot Operated', 'Direct Acting', 'Inline Valve'],
    specs: [
      'Port sizes: 1/8" to 1"',
      'Voltage: 24V DC / 110V / 230V AC',
      'Pressure: 0–1 MPa operating',
      'Cv flow: 0.3 to 10+',
      'IP65 coil protection',
      'Response time: 5–30ms',
    ],
    desc: 'Directional control solenoid valves for pneumatic circuit control. Single/double solenoid, spring return, detented options available.',
    tags: ['SMC', '5/2 Way', '24V DC', 'Manifold', 'IP65'],
  },
  {
    id: 17, cat: 'Pneumatics', brand: 'SMC / Janatics', badge: 'Available',
    name: 'FRL Units — Filter Regulator Lubricator',
    image: imgProximity,
    available: ['Filter (AF)', 'Regulator (AR)', 'Lubricator (AL)', 'F+R Combo', 'F+R+L Combo', 'Mist Separator', 'Micro Mist'],
    specs: [
      'Port sizes: 1/8" to 1"',
      'Filtration: 5μm to 40μm',
      'Pressure range: 0.05–1.0 MPa',
      'Bowl: Polycarbonate / Metal guard',
      'Auto drain option available',
      'Modular / non-modular design',
    ],
    desc: 'Air preparation equipment for compressed air conditioning. Clean, dry and lubricated air for longer pneumatic component life.',
    tags: ['SMC', 'Janatics', 'Air Prep', 'Auto Drain', 'Modular'],
  },
  {
    id: 18, cat: 'Pneumatics', brand: 'SMC / Janatics', badge: 'Available',
    name: 'One-Touch Fittings & Pneumatic Tubing',
    image: imgProximity,
    available: ['Straight Union', 'Elbow', 'Tee', 'Reducer', 'Bulkhead', 'Male Connector', 'Push-in Fittings'],
    specs: [
      'Tube OD: 4mm to 16mm',
      'Material: Nylon, PU, Polyurethane tubing',
      'Pressure: up to 1.5 MPa',
      'Push-to-connect, easy installation',
      'Tube colors: Blue, Black, Clear, Red',
      'Temperature: -5°C to +60°C',
    ],
    desc: 'Complete range of one-touch push-in fittings and pneumatic tubing for quick, leak-free pneumatic circuit assembly.',
    tags: ['Push-In', 'PU Tubing', 'SMC', '4-16mm', 'Quick Connect'],
  },

  // ── HYDRAULICS ───────────────────────────────────────────
  {
    id: 19, cat: 'Hydraulics', brand: 'Multi-Brand', badge: 'Available',
    name: 'Hydraulic Pumps',
    image: imgProximity,
    available: ['Gear Pump', 'Vane Pump', 'Piston Pump (Axial/Radial)', 'Bent Axis Piston', 'Tandem Pump', 'Hydraulic Power Pack'],
    specs: [
      'Pressure range: up to 350 bar',
      'Flow: 1 cc/rev to 500 cc/rev',
      'Speed: 1000–3000 RPM',
      'Fluid: Mineral oil / HLP 46',
      'Port: SAE / BSP / NPT',
      'Brands: Bosch Rexroth, Parker, Yuken',
    ],
    desc: 'Hydraulic pumps for press machines, injection moulding, construction equipment, material handling and industrial power packs.',
    tags: ['Bosch Rexroth', 'Parker', 'Yuken', '350 Bar', 'Gear Pump'],
  },
  {
    id: 20, cat: 'Hydraulics', brand: 'Multi-Brand', badge: 'Full Range',
    name: 'Hydraulic Valves & Control',
    image: imgProximity,
    available: ['Directional Control Valve', 'Relief Valve', 'Check Valve', 'Flow Control Valve', 'Pressure Reducing Valve', 'Proportional Valve', 'Solenoid Operated DCVs'],
    specs: [
      'Pressure rating: up to 350 bar',
      'Flow: 5 LPM to 500 LPM',
      'Cetop 3 / Cetop 5 / Cetop 7 mounting',
      'Voltage: 12V DC / 24V DC / 110V / 230V',
      'Seal material: NBR / Viton',
      'ISO 4401 standard porting',
    ],
    desc: 'Complete hydraulic valve solutions for direction, pressure and flow control in hydraulic circuits. Bosch Rexroth, Parker, Yuken, Vickers available.',
    tags: ['Cetop 3/5', 'Bosch Rexroth', 'Parker', 'ISO 4401'],
  },
  {
    id: 21, cat: 'Hydraulics', brand: 'Multi-Brand', badge: 'Available',
    name: 'Hydraulic Cylinders & Seals',
    image: imgProximity,
    available: ['Tie-Rod Cylinder', 'Welded Cylinder', 'Telescopic Cylinder', 'Mill Type', 'Hydraulic Seal Kits', 'Rod Wiper Seals'],
    specs: [
      'Bore: 32mm to 500mm',
      'Stroke: 50mm to 3000mm',
      'Pressure: up to 250 bar',
      'Seal: NBR / Polyurethane / Viton',
      'Mounting: Foot, Flange, Clevis, Trunnion',
      'Custom cylinders on order',
    ],
    desc: 'Hydraulic cylinders for press machines, cutting machines, injection moulding, crane and construction applications. Seal kits for all makes.',
    tags: ['Custom Build', 'NBR Seals', '250 Bar', 'All Mounts'],
  },

  // ── MECHANICAL ───────────────────────────────────────────
  {
    id: 22, cat: 'Mechanical', brand: 'Multi-Brand', badge: 'Available',
    name: 'Gearboxes & Speed Reducers',
    image: imgProximity,
    available: ['Helical Gearbox', 'Worm Gearbox', 'Bevel Helical', 'Planetary Gearbox', 'Inline Gearbox', 'Right Angle', 'Coaxial Helical'],
    specs: [
      'Reduction ratio: 1:5 to 1:3000',
      'Output torque: up to 50,000 Nm',
      'Input speed: up to 3000 RPM',
      'Mounting: Foot / Flange / Shaft',
      'Gear material: Case hardened alloy steel',
      'Brands: Flender, SEW, Nord, Bonfiglioli',
    ],
    desc: 'Industrial gearboxes for conveyors, mixers, agitators, elevators, fans and all power transmission applications.',
    tags: ['Flender', 'SEW', 'Nord', 'Bonfiglioli', 'Helical'],
  },
  {
    id: 23, cat: 'Mechanical', brand: 'Multi-Brand', badge: 'Available',
    name: 'Bearings — All Types',
    image: imgProximity,
    available: ['Deep Groove Ball Bearing', 'Angular Contact', 'Cylindrical Roller', 'Tapered Roller', 'Spherical Roller', 'Thrust Bearing', 'Pillow Block'],
    specs: [
      'Bore: 5mm to 1000mm+',
      'Brands: SKF, FAG, NSK, NTN, Timken',
      'ABEC 1 to ABEC 7 precision grades',
      'Lubrication: Grease / Oil',
      'Temperature: -40°C to +200°C',
      'Sealed / Open / Shielded variants',
    ],
    desc: 'All types of bearings for motors, gearboxes, pumps, fans and rotating machinery. SKF, FAG, NSK, NTN, Timken — all makes available.',
    tags: ['SKF', 'FAG', 'NSK', 'NTN', 'Timken'],
  },
  {
    id: 24, cat: 'Mechanical', brand: 'Multi-Brand', badge: 'Available',
    name: 'Couplings & Power Transmission',
    image: imgProximity,
    available: ['Jaw / Spider Coupling', 'Rigid Coupling', 'Disc Coupling', 'Chain Coupling', 'Gear Coupling', 'Fluid Coupling', 'V-Belt & Timing Belt'],
    specs: [
      'Shaft diameter: 5mm to 200mm',
      'Spider material: NBR / Polyurethane / Hytrel',
      'Max torque: up to 50,000 Nm',
      'Misalignment: angular ±1°, parallel 0.1mm',
      'V-belts: A, B, C, D section, SPZ/SPA/SPB/SPC',
      'Timing belts: T5, T10, AT5, AT10, HTD 3M/5M/8M',
    ],
    desc: 'Flexible and rigid couplings, V-belts, timing belts and pulleys for motor-to-gearbox and motor-to-pump connections.',
    tags: ['Jaw Coupling', 'V-Belt', 'Timing Belt', 'Flexible'],
  },
  {
    id: 25, cat: 'Mechanical', brand: 'Multi-Brand', badge: 'Available',
    name: 'Fasteners & Industrial Hardware',
    image: imgProximity,
    available: ['Hex Bolts & Nuts', 'Allen (Socket Head) Bolts', 'Studs & Washers', 'Anchor Bolts', 'Spring Pins', 'Circlips', 'Retaining Rings'],
    specs: [
      'Grade: 4.6, 8.8, 10.9, 12.9 (ISO standards)',
      'Material: MS, SS304, SS316, Brass',
      'Size: M3 to M64',
      'Finish: Plain, Zinc, Hot-dip galvanised',
      'DIN / ISO / IS standard',
      'Bulk supply available',
    ],
    desc: 'All types of industrial fasteners — structural bolts, machine bolts, foundation bolts, SS hardware for panel building and machine assembly.',
    tags: ['Grade 8.8', 'SS304', 'DIN Standard', 'M3–M64'],
  },

  // ── CONTROL PANELS ───────────────────────────────────────
  {
    id: 26, cat: 'Panels', brand: 'Custom Build', badge: 'Made to Order',
    name: 'MCC — Motor Control Centre Panel',
    image: imgDCDrives,
    available: ['Incoming ACB Panel', 'MCC with DOL Starters', 'MCC with VFD', 'Power Factor Panel', 'Distribution Board', 'LT Panel 415V'],
    specs: [
      'Voltage: 415V, 3-Phase, 4-Wire',
      'Current: 100A to 6300A',
      'Enclosure: IP42 / IP54 MS powder coated',
      'Busbar: Copper / Aluminium, silver plated joints',
      'Protection: MCB, MCCB, ACB, relay',
      'Testing: As per IS 8623 / IEC 61439',
    ],
    desc: 'Custom-designed and manufactured MCC panels for factories, pumping stations, commercial buildings. Complete wiring, testing and commissioning.',
    tags: ['IS 8623', 'IP54', 'Custom', 'Copper Busbar', 'Tested'],
  },
  {
    id: 27, cat: 'Panels', brand: 'Custom Build', badge: 'Made to Order',
    name: 'PLC Automation Control Panel',
    image: imgPLC,
    available: ['PLC Panel with Siemens S7', 'PLC Panel with Mitsubishi FX', 'HMI + PLC Panel', 'VFD Panel', 'Remote I/O Panel', 'Control Desk'],
    specs: [
      'DIN rail mounted components',
      '24V SMPS power supply',
      'Siemens / Phoenix terminal blocks',
      'Weidmuller / Phoenix I/O modules',
      'Cable tray, ferruling, labelling',
      'FAT (Factory Acceptance Testing) included',
    ],
    desc: 'Turnkey PLC control panels designed, built, programmed and tested as per customer P&ID and wiring requirements.',
    tags: ['Turnkey', 'FAT Tested', 'DIN Rail', 'SMPS', 'Custom'],
  },

  // ── HMI & SCADA ──────────────────────────────────────────
  {
    id: 28, cat: 'HMI', brand: 'Siemens', badge: 'All Models',
    name: 'Siemens SIMATIC HMI Panels',
    image: imgPLC,
    available: ['KTP400 Basic 4"', 'KTP700 Basic 7"', 'KTP900 Basic 9"', 'KTP1200 Basic 12"', 'TP700 Comfort 7"', 'TP1200 Comfort 12"', 'MP377 15"'],
    specs: [
      '4" to 22" TFT color displays',
      'Touch + Function key models',
      'PROFINET / MPI / DP interface',
      'USB Host / Device port',
      'Configured with TIA Portal WinCC',
      'IP65 front panel protection',
    ],
    desc: 'Complete Siemens KTP Basic and Comfort HMI panel range for machine visualization, operator control and process monitoring.',
    tags: ['TIA Portal', 'WinCC', 'PROFINET', 'IP65', 'Touch'],
  },
  {
    id: 29, cat: 'HMI', brand: 'Weintek / Delta', badge: 'Value Range',
    name: 'Weintek & Delta HMI Panels',
    image: imgPLC,
    available: ['Weintek MT8071iE 7"', 'Weintek MT8102iE 10"', 'Delta DOP-107BV 7"', 'Delta DOP-110IS 10"', 'Kinco MT4414 7"'],
    specs: [
      '7" to 15" WVGA / HD display',
      'Supports 300+ PLC protocols',
      'Ethernet / COM1 / COM2 / USB',
      'EasyBuilder Pro software (free)',
      'Multi-touch, gesture support',
      'Recipe, data logging, alarm',
    ],
    desc: 'Cost-effective HMI alternatives for small-to-mid machines. Compatible with Siemens, Mitsubishi, Omron, Allen Bradley PLCs out of the box.',
    tags: ['Weintek', 'Delta', '300+ Protocols', 'Free Software'],
  },
]

// ─────────────────────────────────────────────────────────────
//  BADGE COLOR MAP
// ─────────────────────────────────────────────────────────────
const badgeStyle = (badge) => {
  const map = {
    'All Series Available': { bg: '#dcfce7', color: '#166534' },
    'Full Range':           { bg: '#dbeafe', color: '#1e40af' },
    'All Models':           { bg: '#dbeafe', color: '#1e40af' },
    'Available':            { bg: '#f0f9ff', color: '#0369a1' },
    'All KW Available':     { bg: '#dcfce7', color: '#166534' },
    'Wide Range':           { bg: '#fef9c3', color: '#854d0e' },
    'Value Range':          { bg: '#fce7f3', color: '#9d174d' },
    'Premium':              { bg: '#ede9fe', color: '#5b21b6' },
    'Industrial':           { bg: '#f1f5f9', color: '#334155' },
    'All Types Available':  { bg: '#dcfce7', color: '#166534' },
    'Process':              { bg: '#fff7ed', color: '#9a3412' },
    'Made to Order':        { bg: '#fef3c7', color: '#92400e' },
    'Full Range':           { bg: '#dbeafe', color: '#1e40af' },
  }
  return map[badge] || { bg: '#f1f5f9', color: '#334155' }
}

// ─────────────────────────────────────────────────────────────
//  PRODUCT DETAIL MODAL
// ─────────────────────────────────────────────────────────────
function ProductModal({ product, onClose, onEnquire }) {
  if (!product) return null
  const bc = badgeStyle(product.badge)

  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.65)',
        zIndex: 2000, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        padding: '16px', backdropFilter: 'blur(4px)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#fff', borderRadius: '16px',
          maxWidth: '700px', width: '100%',
          maxHeight: '92vh', overflowY: 'auto',
          boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal header */}
        <div style={{
          background: 'linear-gradient(135deg, #0047AB, #1a6fd4)',
          padding: '24px 28px', borderRadius: '16px 16px 0 0',
          position: 'relative',
        }}>
          <button onClick={onClose} style={{
            position: 'absolute', top: '14px', right: '14px',
            background: 'rgba(255,255,255,0.2)', border: 'none',
            color: '#fff', width: '32px', height: '32px', borderRadius: '50%',
            cursor: 'pointer', fontSize: '18px', lineHeight: '32px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>×</button>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <img
              src={product.image} alt={product.name}
              style={{ width: '80px', height: '80px', objectFit: 'contain', borderRadius: '10px', background: '#fff', padding: '6px', flexShrink: 0 }}
            />
            <div>
              <span style={{ background: bc.bg, color: bc.color, padding: '3px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '700', display: 'inline-block', marginBottom: '8px' }}>
                {product.badge}
              </span>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '12px', marginBottom: '4px', letterSpacing: '0.08em' }}>{product.brand}</div>
              <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: '800', margin: 0, lineHeight: 1.2 }}>{product.name}</h3>
            </div>
          </div>
        </div>

        {/* Modal body */}
        <div style={{ padding: '24px 28px' }}>

          {/* Description */}
          <p style={{ color: '#475569', lineHeight: '1.75', marginBottom: '24px', fontSize: '14px' }}>{product.desc}</p>

          {/* Available Models */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontWeight: '700', color: '#0f172a', marginBottom: '12px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ background: '#dcfce7', color: '#166534', padding: '2px 10px', borderRadius: '20px', fontSize: '12px' }}>✓ Available Models / Types</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {product.available.map((m, i) => (
                <span key={i} style={{
                  background: '#eff6ff', color: '#1e40af',
                  padding: '6px 14px', borderRadius: '6px',
                  fontSize: '13px', fontWeight: '600',
                  border: '1px solid #bfdbfe',
                }}>
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontWeight: '700', color: '#0f172a', marginBottom: '12px', fontSize: '14px' }}>📋 Technical Specifications</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {product.specs.map((spec, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '8px',
                  background: '#f8fafc', padding: '10px 14px',
                  borderRadius: '8px', fontSize: '13px', color: '#334155',
                  lineHeight: '1.5',
                }}>
                  <span style={{ color: '#0047AB', fontWeight: '800', flexShrink: 0, marginTop: '1px' }}>✓</span>
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
            {product.tags.map((t, i) => (
              <span key={i} style={{
                background: '#f1f5f9', color: '#64748b',
                padding: '4px 10px', borderRadius: '4px',
                fontSize: '11px', fontWeight: '600',
              }}>
                #{t}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onEnquire(product)}
              style={{
                flex: 1, minWidth: '140px',
                background: 'linear-gradient(135deg, #0047AB, #1a6fd4)',
                color: '#fff', border: 'none', padding: '14px',
                borderRadius: '8px', fontWeight: '700', fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              📩 Send Enquiry
            </button>
            <a href="tel:+917696939529" style={{
              flex: 1, minWidth: '140px',
              background: '#f0fdf4', color: '#166534',
              border: '2px solid #bbf7d0', padding: '14px',
              textDecoration: 'none', borderRadius: '8px',
              fontWeight: '700', fontSize: '14px',
              textAlign: 'center', display: 'flex',
              alignItems: 'center', justifyContent: 'center', gap: '8px',
            }}>
              📞 Call Now
            </a>
            <a
              href="https://wa.me/917696939529"
              target="_blank" rel="noreferrer"
              style={{
                flex: 1, minWidth: '140px',
                background: '#25D366', color: '#fff',
                padding: '14px', borderRadius: '8px',
                textDecoration: 'none', fontWeight: '700',
                fontSize: '14px', textAlign: 'center',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: '8px',
              }}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
//  MAIN PRODUCTS COMPONENT
// ─────────────────────────────────────────────────────────────
function Products() {
  const [activeCat, setActiveCat] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [search, setSearch] = useState('')

  const filtered = products.filter(p => {
    const matchCat = activeCat === 'All' || p.cat === activeCat
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase()) ||
      p.available.some(a => a.toLowerCase().includes(search.toLowerCase()))
    return matchCat && matchSearch
  })

  const handleEnquire = (product) => {
    setSelectedProduct(null)
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      <style>{`
        .products-cat-scroll {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .products-cat-scroll::-webkit-scrollbar { display: none; }
        .cat-btn {
          white-space: nowrap;
          padding: 9px 16px;
          border-radius: 8px;
          border: 2px solid #e2e8f0;
          background: #fff;
          color: #334155;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: inherit;
        }
        .cat-btn.active {
          border-color: #0047AB;
          background: #0047AB;
          color: #fff;
          box-shadow: 0 4px 14px rgba(0,71,171,0.3);
        }
        .cat-btn:hover:not(.active) {
          border-color: #0047AB;
          color: #0047AB;
          background: #eff6ff;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }

        .product-card {
          background: #fff;
          border-radius: 14px;
          border: 1.5px solid #e2e8f0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,71,171,0.12);
          border-color: #0047AB;
        }
        .product-card-img {
          height: 180px;
          overflow: hidden;
          background: #f0f6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .product-card-img img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 12px;
          transition: transform 0.4s ease;
        }
        .product-card:hover .product-card-img img {
          transform: scale(1.05);
        }

        .search-input {
          width: 100%;
          padding: 12px 16px 12px 44px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 14px;
          outline: none;
          background: #fff;
          font-family: inherit;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .search-input:focus {
          border-color: #0047AB;
          box-shadow: 0 0 0 3px rgba(0,71,171,0.1);
        }

        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 16px;
          }
          .modal-specs-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="products" style={{ background: '#f8fafc', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>

          {/* ── Section Header ── */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{
              display: 'inline-block', background: '#dbeafe', color: '#1e40af',
              padding: '6px 18px', borderRadius: '4px',
              fontSize: '11px', fontWeight: '700', letterSpacing: '0.12em',
              marginBottom: '16px',
            }}>
              OUR PRODUCT RANGE
            </div>
            <h2 style={{
              fontSize: 'clamp(26px, 4vw, 42px)',
              fontWeight: '800', color: '#0f172a',
              marginBottom: '14px', letterSpacing: '-0.02em', lineHeight: 1.15,
            }}>
              Industrial Automation & Engineering Products
            </h2>
            <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.75 }}>
              We are authorized distributors for leading brands — Siemens, Mitsubishi, ABB, Schneider, Delta, Omron, SMC and more.
              Send us an enquiry for availability and best pricing.
            </p>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
              {[
                '✅ Genuine Products Only',
                '🧾 GST Invoice',
                '🚚 Pan-India Delivery',
                '📞 Technical Support',
              ].map(b => (
                <span key={b} style={{
                  background: '#fff', border: '1.5px solid #e2e8f0',
                  color: '#334155', padding: '6px 14px',
                  borderRadius: '6px', fontSize: '12px', fontWeight: '600',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* ── Search ── */}
          <div style={{ position: 'relative', marginBottom: '24px', maxWidth: '500px' }}>
            <span style={{
              position: 'absolute', left: '14px', top: '50%',
              transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '16px',
              pointerEvents: 'none',
            }}>🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search products, brands, models... (e.g. S7-1200, ACS510)"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          {/* ── Category Tabs (horizontal scroll on mobile) ── */}
          <div className="products-cat-scroll" style={{ marginBottom: '36px' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`cat-btn${activeCat === cat.id ? ' active' : ''}`}
                onClick={() => setActiveCat(cat.id)}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Result count */}
          <div style={{ marginBottom: '20px', color: '#64748b', fontSize: '13px', fontWeight: '500' }}>
            Showing <strong style={{ color: '#0047AB' }}>{filtered.length}</strong> product categories
            {search && <> for "<strong>{search}</strong>"</>}
          </div>

          {/* ── Product Grid ── */}
          <div className="products-grid">
            {filtered.map(product => {
              const bc = badgeStyle(product.badge)
              return (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Image */}
                  <div className="product-card-img">
                    <span style={{
                      position: 'absolute', top: '10px', left: '10px',
                      background: bc.bg, color: bc.color,
                      padding: '4px 10px', borderRadius: '4px',
                      fontSize: '10px', fontWeight: '700',
                      zIndex: 1,
                    }}>
                      {product.badge}
                    </span>
                    <img src={product.image} alt={product.name} />
                  </div>

                  {/* Body */}
                  <div style={{ padding: '18px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>

                    {/* Brand */}
                    <div style={{ marginBottom: '8px' }}>
                      <span style={{
                        background: '#f1f5f9', color: '#475569',
                        padding: '3px 10px', borderRadius: '4px',
                        fontSize: '11px', fontWeight: '700',
                      }}>
                        {product.brand}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 style={{
                      fontWeight: '800', color: '#0f172a',
                      fontSize: '15px', marginBottom: '10px',
                      lineHeight: 1.35,
                    }}>
                      {product.name}
                    </h3>

                    {/* Available models preview */}
                    <div style={{ marginBottom: '14px', flex: 1 }}>
                      <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '600', marginBottom: '6px', letterSpacing: '0.05em' }}>
                        AVAILABLE:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {product.available.slice(0, 4).map((m, i) => (
                          <span key={i} style={{
                            background: '#eff6ff', color: '#1e40af',
                            padding: '3px 8px', borderRadius: '4px',
                            fontSize: '11px', fontWeight: '600',
                            border: '1px solid #dbeafe',
                          }}>
                            {m}
                          </span>
                        ))}
                        {product.available.length > 4 && (
                          <span style={{
                            background: '#f8fafc', color: '#64748b',
                            padding: '3px 8px', borderRadius: '4px',
                            fontSize: '11px', fontWeight: '600',
                          }}>
                            +{product.available.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Spec preview */}
                    <div style={{ marginBottom: '16px' }}>
                      {product.specs.slice(0, 2).map((s, i) => (
                        <div key={i} style={{
                          fontSize: '12px', color: '#64748b',
                          padding: '2px 0', display: 'flex',
                          alignItems: 'flex-start', gap: '6px', lineHeight: 1.5,
                        }}>
                          <span style={{ color: '#0047AB', fontWeight: '800', fontSize: '10px', marginTop: '3px', flexShrink: 0 }}>●</span>
                          {s}
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={e => { e.stopPropagation(); setSelectedProduct(product) }}
                        style={{
                          flex: 1, background: '#eff6ff', color: '#0047AB',
                          border: '2px solid #bfdbfe', padding: '10px',
                          borderRadius: '8px', fontWeight: '700',
                          fontSize: '13px', cursor: 'pointer',
                          transition: 'background 0.2s', fontFamily: 'inherit',
                        }}
                        onMouseOver={e => e.currentTarget.style.background = '#dbeafe'}
                        onMouseOut={e => e.currentTarget.style.background = '#eff6ff'}
                      >
                        View Details
                      </button>
                      <button
                        onClick={e => { e.stopPropagation(); handleEnquire(product) }}
                        style={{
                          flex: 1,
                          background: 'linear-gradient(135deg, #0047AB, #1a6fd4)',
                          color: '#fff', border: 'none', padding: '10px',
                          borderRadius: '8px', fontWeight: '700',
                          fontSize: '13px', cursor: 'pointer',
                          transition: 'opacity 0.2s', fontFamily: 'inherit',
                        }}
                        onMouseOver={e => e.currentTarget.style.opacity = '0.9'}
                        onMouseOut={e => e.currentTarget.style.opacity = '1'}
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* No results */}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 24px', color: '#94a3b8' }}>
              <div style={{ fontSize: '52px', marginBottom: '16px' }}>🔍</div>
              <p style={{ fontSize: '18px', fontWeight: '700', color: '#334155' }}>No products found for "{search}"</p>
              <p style={{ fontSize: '14px', marginTop: '8px' }}>Try searching: PLC, Siemens, Sensor, ABB, VFD, Hydraulic</p>
              <button
                onClick={() => { setSearch(''); setActiveCat('All') }}
                style={{
                  marginTop: '20px',
                  background: '#0047AB', color: '#fff', border: 'none',
                  padding: '12px 28px', borderRadius: '8px',
                  fontWeight: '700', fontSize: '14px', cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Bottom CTA */}
          <div style={{
            marginTop: '60px',
            background: 'linear-gradient(135deg, #0047AB, #1565c0)',
            borderRadius: '16px', padding: '40px 32px',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', right: '-30px', top: '-30px',
              fontSize: '160px', opacity: 0.06, userSelect: 'none', color: '#fff',
            }}>⚙</div>
            <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '800', marginBottom: '12px' }}>
              Can't find what you're looking for?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px' }}>
              We source any industrial automation component. Share your requirement — model number, datasheet or image — we'll arrange it for you.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: '#fff', color: '#0047AB',
                  border: 'none', padding: '13px 28px',
                  borderRadius: '8px', fontWeight: '800',
                  fontSize: '14px', cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                📩 Send Your Requirement
              </button>
              <a
                href="https://wa.me/917696939529"
                target="_blank" rel="noreferrer"
                style={{
                  background: '#25D366', color: '#fff',
                  padding: '13px 28px', borderRadius: '8px',
                  textDecoration: 'none', fontWeight: '800',
                  fontSize: '14px', display: 'inline-flex',
                  alignItems: 'center', gap: '8px',
                }}
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onEnquire={handleEnquire}
      />
    </>
  )
}

export default Products