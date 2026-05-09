import { useState } from "react";

// ─── DATA ─────────────────────────────────────────────────────
const productsData = {
  electrical: {
    label: "Electrical",
    icon: "⚡",
    color: "#0047AB",
    bg: "linear-gradient(135deg, #0047AB 0%, #1a6fd4 100%)",
    desc: "All electrical automation components for industrial machinery",
    subcategories: [
      {
        id: "plc",
        name: "PLC Systems",
        icon: "🖥️",
        desc: "Programmable Logic Controllers – CPU, I/O Modules, Power Supply, Communication Modules",
        brands: ["Siemens", "Mitsubishi", "Allen Bradley", "Delta", "Schneider", "Omron"],
        items: [
          "Siemens S7-1200 CPU 1214C",
          "Siemens S7-1500 CPU 1511-1 PN",
          "Siemens S7-300 CPU 315-2 DP",
          "Mitsubishi FX3U-32MT/ES",
          "Mitsubishi FX5U-32MT/ES",
          "Allen Bradley MicroLogix 1100",
          "Allen Bradley CompactLogix 5380",
          "Delta DVP32ES200T",
          "Schneider M221-24IO",
          "Omron CP1H-X40DT-D",
          "Siemens S7-1200 DI 16x24VDC",
          "Siemens SM 1223 Digital I/O Module",
          "Siemens SM 1231 Analog Input Module",
          "Siemens SM 1232 Analog Output Module",
          "Mitsubishi FX3U-4AD Analog Input",
          "Siemens PROFIBUS DP Module",
          "Siemens PROFINET Module CP 1243-1",
          "Siemens S7-1200 Power Supply PM 1207",
          "Siemens LOGO! 8 12/24RC",
          "Delta DVP-SX2 Slim PLC",
        ],
      },
      {
        id: "vfd",
        name: "AC Drives (VFD)",
        icon: "🔄",
        desc: "Variable Frequency Drives for motor speed control – 0.4kW to 400kW",
        brands: ["ABB", "Siemens", "Mitsubishi", "Danfoss", "Delta", "Schneider"],
        items: [
          "ABB ACS510-01-025A-4 (11kW)",
          "ABB ACS880-01-026A-3 (15kW)",
          "Siemens SINAMICS G120 6.5A",
          "Siemens MICROMASTER 420 0.55kW",
          "Siemens SINAMICS V20 0.37kW",
          "Mitsubishi FR-E740-0.75K",
          "Mitsubishi FR-A840-00083 (3.7kW)",
          "Danfoss FC302 5.5kW",
          "Delta VFD007E21A (0.75kW)",
          "Delta VFD055C43A (5.5kW)",
          "Schneider ATV312H075M2 (0.75kW)",
          "Schneider ATV630D11M3 (11kW)",
          "ABB ACS150-03E-07A5-4 (3kW)",
          "Yaskawa V1000 2.2kW",
          "Lenze i550 7.5kW",
          "Bosch Rexroth EFC 3610 1.5kW",
          "WEG CFW700 4.0kW",
          "Emotron FDU 5.5kW",
          "Parker AC10 1.1kW",
          "KEB COMBIVERT F5 2.2kW",
        ],
      },
      {
        id: "smps",
        name: "SMPS / Power Supply",
        icon: "🔋",
        desc: "Switched Mode Power Supplies – 24VDC, 48VDC, 5VDC – 2A to 40A",
        brands: ["Phoenix", "Siemens", "Meanwell", "Omron", "Schneider", "ABB"],
        items: [
          "Phoenix Contact QUINT-PS 24VDC/10A",
          "Phoenix Contact TRIO-PS 24VDC/5A",
          "Siemens SITOP PSU100S 24V/5A",
          "Siemens SITOP PSU200M 24V/10A",
          "Meanwell MDR-60-24 60W 24V",
          "Meanwell HDR-100-24 100W 24V",
          "Meanwell DRT-960-24 960W 3-Phase",
          "Omron S8VS-06024 60W 24V",
          "Schneider Phaseo ABL8 24V/5A",
          "ABB CP-S 24/5.0 120W SMPS",
          "Murrelektronik Mico 24VDC/4A",
          "Wago 787-612 24V/2A",
          "Phoenix Contact STEP-PS 24V/2.5A",
          "Siemens SITOP PSU300S 24V/20A",
          "Meanwell LRS-350-24 350W 24V",
          "Omron S8VK-C06024 60W",
          "Finder 78.12.1.230.2400 SMPS",
          "Idec PS5R-VC24 60W DIN Rail",
          "Phoenix Contact UNO-PS 24V/3.3A",
          "Puls PIANO10.241 10A 24V",
        ],
      },
      {
        id: "sensors",
        name: "Sensors",
        icon: "📡",
        desc: "Proximity, Photoelectric, Temperature, Pressure, Level Sensors",
        brands: ["Sick", "Ifm", "Omron", "Balluff", "Pepperl+Fuchs", "Turck"],
        items: [
          "Sick IME08-1B5NSZT0S Inductive 8mm",
          "Sick WT18-3P430 Photoelectric Sensor",
          "Ifm IFB3003BBPKG/M Inductive 8mm",
          "Ifm O6H200 Photoelectric 200mm",
          "Omron E2B-M12KS04-M1-B1 Proximity",
          "Omron E3FA-TP11 Photoelectric",
          "Balluff BES M12MI-PSC80B-S04G",
          "Pepperl+Fuchs NJ4-12GK-N Inductive",
          "Turck Bi2-EG08-AP6X-H1141",
          "Sick DT35-B15251 Distance Sensor",
          "Autonics PRD30-15DP Proximity 30mm",
          "Honeywell 14CE1-1 Microswitch",
          "Keyence EX-422V Digital Amplifier",
          "Baumer IFFM 08P1701/L Inductive",
          "Leuze HTB 8/4-200-S12 Through Beam",
          "Wenglor P1NC001PO3 Capacitive",
          "IFM PK6521 Pressure Sensor",
          "Endress+Hauser FTL33 Level Switch",
          "Pt100 RTD Temperature Sensor 6mm",
          "K-Type Thermocouple 0-1200°C",
        ],
      },
      {
        id: "safety",
        name: "Safety Devices",
        icon: "🛡️",
        desc: "Safety Relays, Emergency Stop, Light Curtains, Safety PLCs",
        brands: ["Pilz", "Sick", "Schmersal", "Omron", "Siemens", "Banner"],
        items: [
          "Pilz PNOZ X3 Safety Relay 24VDC",
          "Pilz PNOZmulti 2 PNOZ m B0",
          "Siemens 3SK1112-1AW20 Safety Relay",
          "Sick i10-M0213 Safety Interlock",
          "Sick S3000 Safety Laser Scanner",
          "Omron F3SJ-A0825P14 Light Curtain",
          "Schmersal AZM200-B1-2P Safety Switch",
          "Banner EZ-SCREEN 14mm Safety Curtain",
          "Fortress interlocks mGaurd",
          "Telemecanique XY2CZ902H7 E-Stop",
          "ABB Jokab Safety Tina 6A",
          "Pilz PIT m3 Safety Mat",
          "Sick UE410-MU3T3 Safety Controller",
          "Rockwell 440G-MT47138 Safety Interlock",
          "Schmersal BNS 303-11Z Safety Switch",
          "Pilz PSEN me4 Magnetic Safety Switch",
          "Reer Muting Sensor MR4",
          "Siemens 3SE5 Position Switch",
          "Banner EZ-SCREEN LS Safety Laser",
          "Sick deTec4 Core Safety Light Curtain",
        ],
      },
      {
        id: "switchboard",
        name: "Switchboard Components",
        icon: "🔌",
        desc: "MCB, MCCB, Contactors, Overload Relays, Isolators, Busbars",
        brands: ["Siemens", "ABB", "Schneider", "L&T", "Legrand", "Havells"],
        items: [
          "Siemens 5SY6316-7 MCB C16A 3P",
          "Siemens 3RV2011-1KA10 Motor Starter",
          "Siemens 3RT2016-1AP01 Contactor 9A",
          "Siemens 3RT2023-1AP00 Contactor 25A",
          "ABB S203-C16 MCB 16A 3P",
          "ABB AF09-30-10 Contactor 9A",
          "ABB EL3 1 Shunt Release 230V",
          "Schneider EasyPact TVS 100A MCCB",
          "Schneider LC1D09M7 Contactor 9A",
          "Schneider LRD14 Overload Relay 7-10A",
          "L&T DN100 100A MCCB",
          "L&T MN 9 Contactor 9A 415V",
          "Legrand 04172 MCB C32 2P",
          "Havells SPN DB 6 Way",
          "Siemens 3NJ4115-2HB10 Isolator 160A",
          "ABB OT125FT3 Rotary Isolator 125A",
          "Phoenix Contact UK 4 Terminal Block",
          "Weidmuller WDU 4 DIN Rail Terminal",
          "Copper Busbar 50x6mm per meter",
          "Siemens 3LD2114-0TK53 Load Switch",
        ],
      },
      {
        id: "extension",
        name: "Extension / Communication Cards",
        icon: "📟",
        desc: "PROFIBUS, PROFINET, Modbus, CANopen, Ethernet IO Cards",
        brands: ["Siemens", "Mitsubishi", "Moxa", "Anybus", "Hilscher", "HMS"],
        items: [
          "Siemens CP 343-1 Ethernet Module",
          "Siemens CP 5614 PROFIBUS Card",
          "Siemens CP 1243-1 PROFINET Module",
          "Mitsubishi QJ71E71-100 Ethernet",
          "Mitsubishi QJ71PB92D PROFIBUS",
          "Moxa NPort 5150A Serial to Ethernet",
          "Anybus X-gateway PROFIBUS to Modbus",
          "HMS Anybus Communicator CANopen",
          "Hilscher netTAP Gateway NT 100",
          "Siemens MM4 Fieldbus Module PROFIBUS",
          "ABB FPBA-01 PROFIBUS Adapter",
          "Danfoss FC302 PROFIBUS Option B",
          "Delta AS01DNET-A DeviceNet Card",
          "Beckhoff EK1100 EtherCAT Coupler",
          "Beckhoff KL3062 Analog Input 0-10V",
          "Wago 750-352 PROFIBUS DP Coupler",
          "Phoenix IL ETH BK DI8 DO4 2TX-PAC",
          "Turck BL20-GW-EN Gateway Modbus",
          "Moxa ioLogik E1210 Remote I/O",
          "Siemens ET 200SP IM 155-6 PN ST",
        ],
      },
    ],
  },

  mechanical: {
    label: "Mechanical",
    icon: "⚙️",
    color: "#0f766e",
    bg: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
    desc: "Complete mechanical components for industrial machinery and automation",
    subcategories: [
      {
        id: "pneumatics",
        name: "Pneumatics / Cylinders",
        icon: "💨",
        desc: "Pneumatic Cylinders, Valves, FRL Units, Fittings, Air Preparation",
        brands: ["SMC", "Festo", "Parker", "Norgren", "Camozzi", "Airtec"],
        items: [
          "SMC CDU20-20D Compact Cylinder Ø20",
          "SMC CQ2B40-50DM Compact Cylinder Ø40",
          "SMC CDJ2B16-50Z Round Body Cylinder",
          "SMC MGPM20-50Z Guided Cylinder",
          "Festo DSNU-20-60-PPV-A Cylinder",
          "Festo ADVU-32-80-APA Double Acting",
          "Festo DFM-20-80-PA-GF Guided Cylinder",
          "SMC VQ1101N-5 Solenoid Valve 5/2 Way",
          "SMC SY3120-5LOU-C6-F1 Solenoid Valve",
          "Festo VUVG-L10-M52-MT-M7-1P3 Valve",
          "SMC AF40-04B-A Filter Regulator",
          "SMC AC40-04G-A FRL Combination Unit",
          "Norgren B07-200-A1KG Filter Regulator",
          "SMC ZH05DS-06-06-06 Vacuum Ejector",
          "SMC MXQ12-30AS Slide Table",
          "Parker P1F-S020MS0300 Cylinder Ø20",
          "Camozzi 31M2A020A0100 Cylinder",
          "SMC VHK2-04F-04F Speed Controller",
          "SMC KFH04 Fittings Set 4mm",
          "Festo GRLA-M5-QS-4-D Flow Control",
        ],
      },
      {
        id: "hydraulics",
        name: "Hydraulics",
        icon: "🛢️",
        desc: "Hydraulic Cylinders, Pumps, Valves, Manifolds, Seals & Fittings",
        brands: ["Bosch Rexroth", "Parker", "Eaton", "Vickers", "Yuken", "Hydraforce"],
        items: [
          "Bosch Rexroth CDT3 Hydraulic Cylinder Ø63",
          "Bosch Rexroth CDL1 Cylinder Ø80-200mm",
          "Parker TIE-ROD Cylinder 50Ø x 200mm",
          "Eaton Vickers V10 Vane Pump 2.3 GPM",
          "Bosch Rexroth A10VO45 Piston Pump",
          "Yuken PV2R1-8-F1 Vane Pump",
          "Parker PVP41 Piston Pump",
          "Bosch Rexroth 4WE6 Directional Valve",
          "Vickers DG4V-3S-2N Solenoid Valve",
          "Eaton DG4S4-012N-B Solenoid Valve",
          "Hydraforce SV10-20 Cartridge Valve",
          "Bosch Rexroth RVP10 Pressure Relief",
          "Parker RVDA Relief Valve 350 Bar",
          "Bosch Rexroth MSE-6 Hydraulic Motor",
          "Parker TB0310 Manifold Block",
          "NBR Hydraulic Cylinder Seal Kit 63mm",
          "Parker Hannifin 30-piece Fitting Kit",
          "Hydac BF3HC/HC-330 Return Filter",
          "Parker 932 Series 10L Accumulator",
          "Pressure Gauge 0-250 Bar Glycerin",
        ],
      },
      {
        id: "motors",
        name: "Motors & Gearboxes",
        icon: "🔩",
        desc: "3-Phase Induction Motors, Servo Motors, Gear Reducers, Worm Gearboxes",
        brands: ["ABB", "Siemens", "SEW", "Lenze", "Bonfiglioli", "Flender"],
        items: [
          "ABB M2BAX 4kW 4P IE3 Motor",
          "ABB M3BP 7.5kW 4P B3 Flange",
          "Siemens 1LE1001-1AA42 0.75kW",
          "Siemens 1LA7 5.5kW IE2 3-Phase",
          "SEW-Eurodrive R17 DRS71M4 0.55kW",
          "SEW RF37 Gearmotor 1.5kW i=25",
          "Lenze GST04-2MVAK 0.37kW Gearmotor",
          "Bonfiglioli MVF 044 3kW Worm Gear",
          "Flender 2SL3 Helical Bevel Gearbox",
          "Siemens SIMOGEAR Bevel Gear i=10",
          "Nord SK 1SI40 Gearbox i=20",
          "Motovario NMRV 040 50:1 Worm",
          "ABB IRB 120 Servo Axis Motor",
          "Siemens 1FK7 Servo Motor 1.5Nm",
          "Panasonic MHMD042G1U Servo Motor",
          "Yaskawa SGM7A-04A7A61 Servo Motor",
          "Bosch Rexroth MSK030 Servo Motor",
          "ABB BSDR Brake Motor 2.2kW",
          "Siemens FLENDER Standard Coupling",
          "Dodge Tigear-2 Worm Reducer 10:1",
        ],
      },
      {
        id: "encoders",
        name: "Encoders",
        icon: "🎯",
        desc: "Incremental & Absolute Rotary Encoders, Linear Encoders, Resolver",
        brands: ["Heidenhain", "Sick", "Baumer", "Pepperl+Fuchs", "Lika", "Kübler"],
        items: [
          "Heidenhain ERN 1381 Incremental Encoder",
          "Heidenhain ECN 1313 Absolute Encoder",
          "Sick DFS60B-S4EK01024 1024 PPR",
          "Sick ATM90-A2A13X13 Absolute Encoder",
          "Baumer BMMH 58S3600-G3Y-W10 2500PPR",
          "Baumer EAM581 Absolute 18-bit SSI",
          "Pepperl+Fuchs ENI58IL-1024-3-T10",
          "Kübler 8.5858 Absolute SSI Encoder",
          "Lika C58-H-5000BZ0.5L2G3 Industrial",
          "Renishaw ATOM DX Linear Encoder",
          "TR Electronic CE65M Absolute 4096",
          "Autonics E40S8-5000-3-T-24 Encoder",
          "BEI Sensors HS35 1000 PPR",
          "Eltra ER58A1000Z5/28P12X6MR Encoder",
          "Broadcom HEDS-5540 Optical Encoder",
          "Dynapar H20 Hollow Shaft 5000PPR",
          "Wachendorff WDGI58B-1024-ABN-24",
          "IFM RM3005 Magnetic Encoder",
          "Posital Fraba OCD-S101G-0016-S060",
          "SICK BTF08-S1AK01500 Stainless Encoder",
        ],
      },
      {
        id: "cables",
        name: "Cables & Connectors",
        icon: "🔗",
        desc: "Servo Cables, Encoder Cables, Power Cables, M12 Connectors, Drag Chain",
        brands: ["Lapp", "Igus", "Helukabel", "Nexans", "Phoenix", "Harting"],
        items: [
          "Lapp ÖLFLEX 191 CY 4G1.5mm² Shielded",
          "Lapp UNITRONIC 100 4x0.25mm² Data",
          "Igus CF130.02.04 Chainflex Servo Cable",
          "Igus CF10-07-04 Motor Power 4G1.5mm²",
          "Helukabel JZ-600 5G1.5mm² Flexible",
          "Nexans NeXans VFD Drive Cable 4G4mm²",
          "Phoenix SAC-3P-M12MS/3.0-PVC M12 Cable",
          "Harting M12-X Circular Connector",
          "Lapp Epic H-B 6-Pin Connector",
          "Turck PKG 4M-2/S90 M12 4-Pin 2M",
          "Igus E2.38.075.0 Energy Chain 38mm",
          "Igus E4.56.250.0 Energy Chain 56mm",
          "Igus E4.80.400.0 Heavy Duty E-Chain",
          "Igus E14 Micro Energy Chain",
          "Lapp ÖLFLEX FD 855 P Drag Chain Cable",
          "Igus CF9 Encoder Feedback Cable 5P",
          "Lapp UNITRONIC FD CY 2x2x0.5 Data",
          "RJ45 Industrial Cat6 Shielded Cable 5M",
          "M12 D-Coded Ethernet Patch Cable 3M",
          "HAN 6E Harting Connector Set Male",
        ],
      },
      {
        id: "carrier_chain",
        name: "Cable Carrier & Chain",
        icon: "⛓️",
        desc: "Cable Drag Chains, Energy Chains, Carrier Systems, Separators",
        brands: ["Igus", "Brevetti", "Kabelschlepp", "Murrplastik", "Hennlich"],
        items: [
          "Igus E2 Micro Series 15x15mm",
          "Igus E2.38 Series 38x25mm",
          "Igus E4 Heavy Duty 56x50mm",
          "Igus TRL 35 Triflex 3D Energy Chain",
          "Igus E6 Cleanroom Energy Chain",
          "Igus RX Roller Energy Chain 50mm",
          "Brevetti Stendalto Series 50 Chain",
          "Kabelschlepp T Series 60x35mm",
          "Murrplastik Systemkette SK5 Series",
          "Hennlich Energy Chain 0430 Series",
          "Igus Separator RS12 for E4 Series",
          "Igus Crossbar Clip TKA for E2",
          "Igus End Connector EK.10.38",
          "Igus Mounting Bracket HGWM 38",
          "Igus Pivoting Bracket STBU 56",
          "Igus Noise Dampening Pad for E4",
          "Igus Cable Clamp HZB 38-B",
          "Murrplastik Cable Tie Inserts",
          "Igus Sliding Layer SK 135.03",
          "Kabelschlepp Shelf Divider Set",
        ],
      },
      {
        id: "belts_pulleys",
        name: "Belts, Pulleys & Bearings",
        icon: "🔘",
        desc: "Timing Belts, V-Belts, Pulleys, Idler, Ball Bearings, Pillow Blocks",
        brands: ["Gates", "Optibelt", "SKF", "FAG", "NSK", "Fenner"],
        items: [
          "Gates PowerGrip GT3 HTD 5M Belt",
          "Gates 8MGT Timing Belt 1440mm",
          "Optibelt ALPHA Power AT10 Belt",
          "Fenner HTD 3M-150 Rubber Timing Belt",
          "Gates V-Belt A Section A50",
          "Gates V-Belt B Section B65",
          "SKF HTD 5M Pulleys Ø20-Ø150mm",
          "Gates Poly Chain Sprocket 8MGT-21S",
          "Optibelt Pilot Bore Pulley SPA 100",
          "SKF 6205-2RS1 Deep Groove Ball Bearing",
          "SKF 6208-2Z/C3 Ball Bearing 40mm",
          "FAG 1205-K-TVH-C3 Self Aligning",
          "FAG 32210-A Taper Roller Bearing",
          "NSK 6006-DDU Ball Bearing 30mm",
          "SKF UCP206 Pillow Block Bearing",
          "SKF SYK 30 WF Plummer Block",
          "FAG UCFL207 Flange Bearing 35mm",
          "SKF PHDA 50 Adapter Sleeve",
          "Gates Flex-Wedge Drive Belt 3V",
          "Rexnord TableTop Chain 821K325T10",
        ],
      },
      {
        id: "couplings",
        name: "Couplings & Shafts",
        icon: "🔧",
        desc: "Rigid, Flexible, Jaw, Oldham, Bellows Couplings, Keyway Shafts",
        brands: ["Rexnord", "R+W", "Huco", "KTR", "Miki Pulley", "Mayr"],
        items: [
          "KTR ROTEX GR 14 Jaw Coupling D=14mm",
          "KTR BOWEX M-18 Curved Tooth Coupling",
          "Huco Oldham Coupling 16mm Bore",
          "R+W BK1/500/AA Bellows Coupling",
          "Mayr ROBA-DS Disc Coupling Ø65mm",
          "Miki Pulley SFC-040-MZR Flex Coupling",
          "Rexnord Thomas 52 Disc Coupling",
          "KTR MONOLASTIC Rubber Coupling",
          "Huco Rigid Coupling 16mm Ø30mm",
          "Lenze Elastomer Coupling GFL-A 30",
          "SKF Oldham Coupling 25mm Bore",
          "Lovejoy Type L070 Jaw Coupling",
          "Rexnord Zero-Max Steel Laminar",
          "Igus igumid Backlash-Free Coupling",
          "R+W EKM/50 Miniature Bellows 8mm",
          "Mayr ROBA-brake-checker Module",
          "Keyway Shaft 25mm H6 CK45 1M",
          "Linear Shaft 20mm h6 Hardened 1M",
          "Splined Shaft DIN 5481 22x28mm",
          "Thomson Precision Shaft 25mm Case",
        ],
      },
    ],
  },

  panels: {
    label: "Control Panels",
    icon: "🗄️",
    color: "#7c3aed",
    bg: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
    desc: "Custom manufactured industrial control panels for every application",
    subcategories: [
      {
        id: "mcc",
        name: "MCC Panel",
        icon: "⚡",
        desc: "Motor Control Center Panels – Fixed, Withdrawable, Intelligent MCC",
        brands: ["Siemens", "ABB", "Schneider", "L&T", "GE", "Eaton"],
        items: [
          "Fixed Type MCC Panel Up to 630A",
          "Draw-out Type MCC 3-Phase 415V",
          "Intelligent MCC with Profibus DP",
          "Star-Delta Starter MCC Up to 110kW",
          "DOL Starter MCC Up to 30kW",
          "Soft Starter MCC Panel 45-200kW",
          "Auto-transformer Starter MCC",
          "Reversing Starter MCC with Interlock",
          "Slip Ring Motor Starter Panel",
          "PMCC (Power & Motor Control Center)",
          "Emergency MCC Backup Panel",
          "MCC with VFD for Multiple Motors",
          "Feeder Pillar Box IP55 Up to 200A",
          "Control Desk with MCC Integration",
          "Busduct Coupled MCC Panel",
          "Floor Standing MCC IP54 RAL 7035",
          "Compact MCC 600x600x2000mm",
          "Weather Proof MCC IP65 Outdoor",
          "Mining Grade MCC ATEX Certified",
          "Retrofit & Upgrades for Old MCC",
        ],
      },
      {
        id: "plc_panel",
        name: "PLC Panel",
        icon: "🖥️",
        desc: "Custom PLC Automation Panels with Siemens, Mitsubishi, Delta – Any Size",
        brands: ["Siemens", "Mitsubishi", "Allen Bradley", "Delta", "Schneider", "Beckhoff"],
        items: [
          "Siemens S7-1200 PLC Panel Wall Mount",
          "Siemens S7-1500 PLC Panel Freestanding",
          "Mitsubishi iQ-R PLC Control Panel",
          "Allen Bradley CompactLogix PLC Panel",
          "Delta DVP PLC Automation Panel",
          "Beckhoff IPC Automation Panel",
          "Multi-Axis Servo Control Panel",
          "PLC Panel with HMI Integration",
          "PLC Panel with SCADA Gateway",
          "Redundant PLC Panel Hot Standby",
          "PLC Panel with UPS Backup System",
          "Remote I/O Distributed Control Panel",
          "PLC Panel IP66 Stainless Food Grade",
          "PLC Panel with Camera Vision System",
          "Conveyor PLC Automation Panel",
          "Welding Line PLC Panel",
          "Press Machine PLC Control Panel",
          "Injection Moulding PLC Panel",
          "Packaging Machine PLC Panel",
          "PLC Panel with IoT Edge Gateway",
        ],
      },
      {
        id: "vfd_panel",
        name: "VFD Panel",
        icon: "🔄",
        desc: "Variable Frequency Drive Panels – Single & Multi-Drive – 0.75kW to 800kW",
        brands: ["ABB", "Siemens", "Danfoss", "Mitsubishi", "Delta", "Schneider"],
        items: [
          "Single VFD Panel 0.75kW-22kW",
          "Multi-Drive VFD Panel 4 Drives",
          "ABB ACS880 Multi-Drive Panel 400kW",
          "Siemens SINAMICS G120 Panel",
          "VFD Panel with PLC Control",
          "Pump VFD Panel with Flow Control",
          "Fan VFD Panel Energy Saving",
          "Compressor VFD Control Panel",
          "VFD Panel with Bypass Circuit",
          "VFD Panel with Harmonic Filter",
          "Common DC Bus VFD Panel",
          "VFD Panel with Brake Resistor",
          "Crane Hoist VFD Control Panel",
          "HVAC VFD Control Panel BMS",
          "Water Treatment VFD Panel",
          "VFD Retrofit Panel for Old Motor",
          "Multi-Pump VFD Panel Duplex",
          "VFD Panel with Remote Monitoring",
          "VFD Panel IP55 Outdoor Mount",
          "Marine Grade VFD Panel Corrosion",
        ],
      },
      {
        id: "apfc",
        name: "APFC Panel",
        icon: "📊",
        desc: "Automatic Power Factor Correction Panels – Up to 1000 KVAR",
        brands: ["Schneider", "ABB", "Siemens", "Circutor", "Frako", "Ducati"],
        items: [
          "APFC Panel 50 KVAR 415V",
          "APFC Panel 100 KVAR 3-Phase",
          "APFC Panel 200 KVAR Detuned",
          "APFC Panel 300 KVAR Capacitor Bank",
          "APFC Panel 500 KVAR Heavy Duty",
          "Detuned APFC Panel 7% Reactor",
          "APFC Panel with Thyristor Switching",
          "Harmonic Filtered APFC Panel",
          "APFC Panel with Siemens BR6000",
          "APFC Panel Schneider Varlogic NR12",
          "APFC Panel with ABB RVT Controller",
          "APFC Panel Indoor IP42 LT Side",
          "APFC Panel Outdoor Weatherproof",
          "Capacitor Bank 25 KVAR 440V PP",
          "Detuning Reactor 7% 50KVAR",
          "APFC with Energy Meter RS485",
          "APFC Panel Hybrid Active Filter",
          "Thyristor Bank Fast Switching",
          "APFC Panel with Transient Suppressor",
          "APFC Panel Retrofit Existing Board",
        ],
      },
      {
        id: "amf",
        name: "AMF / DG Sync Panel",
        icon: "🔋",
        desc: "Auto Mains Failure Panels, DG Synchronizing Panels, Load Transfer",
        brands: ["Deepsea", "ComAp", "Woodward", "Lovato", "ABB", "Siemens"],
        items: [
          "AMF Panel Deepsea DSE7320 Single DG",
          "AMF Panel ComAp InteliLite 4 MRS",
          "AMF Panel Woodward 8440-2020",
          "AMF with Auto Load Transfer Switch",
          "DG Sync Panel Paralleling 2 DG Sets",
          "DG Sync Panel ComAp InteliGen NT",
          "DG Sync Panel 3 DG Paralleling",
          "AMF with MPCB Changeover 100A",
          "AMF Panel for Hospital Critical Load",
          "AMF with Battery Charger 24VDC",
          "Sync Panel Load Sharing Controller",
          "AMF with Remote Monitoring GPRS",
          "DG Sync with Mains Paralleling",
          "AMF for Pump House Diesel Generator",
          "Soft Load Transfer AMF 630A",
          "AMF with AVR Control Integration",
          "DG Panel with Annunciator",
          "AMF Panel for UPS Backup System",
          "DG Sync Panel 415V 1MVA",
          "AMF Panel Automatic Battery Testing",
        ],
      },
      {
        id: "distribution",
        name: "Distribution Board / DB",
        icon: "🔌",
        desc: "LT Distribution Panels, SDB, MLDB, Junction Boxes – All Sizes",
        brands: ["Siemens", "ABB", "Schneider", "L&T", "Havells", "Legrand"],
        items: [
          "Main LT Panel MLDB 1000A 415V",
          "Sub Distribution Board SDB 400A",
          "Final Distribution Board FDB 100A",
          "Incomer ACB Panel 1600A",
          "Bus Coupler Panel Tie Switch",
          "Power Distribution Panel 250A",
          "Lighting Distribution Board 63A",
          "HVAC Distribution Panel 200A",
          "Power Factor Meter Panel Board",
          "MCB Distribution Box 12 Way",
          "MCB Distribution Box 24 Way TPN",
          "Isolator Panel HRC Fuse 400A",
          "Junction Box IP65 300x400mm",
          "GRP Enclosure IP66 600x600mm",
          "Floor Standing DB Powder Coated",
          "Flush Mounted DB Panel Recessed",
          "Outdoor Metering Panel IP54",
          "Apartment Distribution Board 24Way",
          "Factory Distribution Board SFU",
          "Bus Bar Trunking TAP Off Box 160A",
        ],
      },
    ],
  },

  hmi: {
    label: "HMI & SCADA",
    icon: "📱",
    color: "#b45309",
    bg: "linear-gradient(135deg, #b45309 0%, #f59e0b 100%)",
    desc: "Human Machine Interfaces and SCADA systems for industrial visualization",
    subcategories: [
      {
        id: "siemens_hmi",
        name: "Siemens HMI Panels",
        icon: "🖥️",
        desc: "Siemens KTP, TP, MP Series HMI Panels – 4″ to 22″",
        brands: ["Siemens"],
        items: [
          "Siemens KTP400 Basic 4.3\" 6AV2123",
          "Siemens KTP700 Basic 7\" 6AV2123",
          "Siemens KTP900 Basic 9\" 6AV2123",
          "Siemens KTP1200 Basic 12\" 6AV2123",
          "Siemens TP700 Comfort 7\" 6AV2124",
          "Siemens TP900 Comfort 9\" 6AV2124",
          "Siemens TP1200 Comfort 12\" 6AV2124",
          "Siemens TP1500 Comfort 15\" 6AV2124",
          "Siemens MP377 Multi Panel 15\" Touch",
          "Siemens IPC277E Panel PC 15\" Win10",
          "Siemens SIMATIC IPC477E 19\"",
          "Siemens Mobile Panel 2nd Gen 7\"",
          "Siemens IFP1900 Industrial Monitor",
          "Siemens IFP2200 Monitor 22\" Full HD",
          "Siemens TP1500 Comfort PRO IP65",
          "Siemens KP300 Key Panel Monochrome",
          "Siemens OP73 Operator Panel Text",
          "Siemens HMI TP270 6\" (Legacy)",
          "Siemens KTP1900 Basic Widescreen",
          "Siemens WinCC RT Advanced License",
        ],
      },
      {
        id: "weintek_delta",
        name: "Weintek & Delta HMI",
        icon: "📺",
        desc: "Weintek cMT, MT Series and Delta DOP-B, DOP-W Series Touch Panels",
        brands: ["Weintek", "Delta"],
        items: [
          "Weintek MT8071iE 7\" 800x480",
          "Weintek MT8102iE 10.1\" Multi-Touch",
          "Weintek MT8151XE 15\" TFT Color",
          "Weintek cMT3072 7\" Cloud HMI",
          "Weintek cMT3092 9.7\" Ethernet",
          "Weintek cMT3151 15\" High Res",
          "Weintek cMT-SVR Server Only",
          "Weintek MT6070iH 7\" Economical",
          "Delta DOP-B07E415 7\" WVGA",
          "Delta DOP-B10E615 10\" Touch Panel",
          "Delta DOP-B15E515W 15\" Widescreen",
          "Delta DOP-107WV 7\" 800x480 Slim",
          "Delta DOP-110IS 10.1\" Smart HMI",
          "Delta DOP-W157B 15\" Wide HMI",
          "Delta DOP-B Series Modbus RTU",
          "Weintek MT8121XE 12.1\" Bright",
          "Weintek MT6103iP 10.1\" Budget",
          "Weintek EasyAccess 2.0 Remote",
          "Weintek MT6070iH 7\" USB Port",
          "Delta DOP-B10E515 PROFIBUS",
        ],
      },
      {
        id: "scada",
        name: "SCADA Software",
        icon: "📡",
        desc: "Industrial SCADA, MES, DCS, Historian Software Licenses",
        brands: ["Siemens WinCC", "Ignition", "Wonderware", "InTouch", "iFix", "Citect"],
        items: [
          "Siemens WinCC V7.5 Basic License",
          "Siemens WinCC OA V3.18 Client",
          "Siemens TIA Portal WinCC Advanced",
          "Inductive Automation Ignition 8.1",
          "Ignition Edge IIoT Gateway",
          "AVEVA InTouch 2020 R2 License",
          "AVEVA System Platform License",
          "GE iFix SCADA Server License",
          "Citect SCADA 2018 R2 License",
          "Rockwell FactoryTalk View SE",
          "Kepware KEPServerEX OPC Server",
          "Matrikon OPC Explorer Client",
          "OSIsoft PI Historian License",
          "Canary Historian Software",
          "COPA-DATA zenon 10 SCADA",
          "mySCADA myDESIGNER License",
          "ProSoft Technology OPC Server",
          "Cimplicity 11.5 GE SCADA",
          "Wonderware Historian Server 2020",
          "IIoT Edge to Cloud Gateway License",
        ],
      },
    ],
  },
};

// ─── STYLES ───────────────────────────────────────────────────
const globalStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; }
  button { font-family: 'DM Sans', sans-serif; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #f1f5f9; }
  ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
`;

// ─── CATEGORY SCREEN ──────────────────────────────────────────
function CategoryScreen({ onSelect }) {
  const [hovered, setHovered] = useState(null);

  const cards = [
    {
      key: "electrical",
      icon: "⚡",
      label: "Electrical",
      color: "#0047AB",
      bg: "linear-gradient(135deg, #0047AB 0%, #1e6fd4 100%)",
      desc: "PLC • VFD • SMPS • Sensors • Safety Devices • Switchboard • Extension Cards",
      sub: `${productsData.electrical.subcategories.length} subcategories`,
    },
    {
      key: "mechanical",
      icon: "⚙️",
      label: "Mechanical",
      color: "#0f766e",
      bg: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
      desc: "Pneumatics • Hydraulics • Motors • Encoders • Cables • Chain • Belts & Bearings",
      sub: `${productsData.mechanical.subcategories.length} subcategories`,
    },
    {
      key: "panels",
      icon: "🗄️",
      label: "Control Panels",
      color: "#7c3aed",
      bg: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
      desc: "MCC • PLC Panel • VFD Panel • APFC • AMF/DG Sync • Distribution Board",
      sub: `${productsData.panels.subcategories.length} subcategories`,
    },
    {
      key: "hmi",
      icon: "📱",
      label: "HMI & SCADA",
      color: "#b45309",
      bg: "linear-gradient(135deg, #b45309 0%, #f59e0b 100%)",
      desc: "Siemens KTP/TP • Weintek cMT • Delta DOP • SCADA WinCC • Ignition • InTouch",
      sub: `${productsData.hmi.subcategories.length} subcategories`,
    },
  ];

  return (
    <section style={{ background: "#f0f4fb", padding: "72px 0", minHeight: "100vh" }}>
      <style>{globalStyle}</style>
      <div style={{ maxWidth: 1260, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{
            display: "inline-block", background: "#dbeafe", color: "#1e40af",
            padding: "5px 18px", borderRadius: 4, fontSize: 11,
            fontWeight: 800, letterSpacing: "0.15em", marginBottom: 16,
            fontFamily: "'Syne', sans-serif"
          }}>
            OUR PRODUCT RANGE
          </span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px,4vw,46px)",
            fontWeight: 800, color: "#0b1222", letterSpacing: "-0.03em", marginBottom: 14
          }}>
            Industrial Automation &amp; Engineering
          </h2>
          <p style={{ color: "#64748b", fontSize: 15, maxWidth: 540, margin: "0 auto", lineHeight: 1.8 }}>
            Authorized distributors for Siemens, ABB, Mitsubishi, Schneider, SMC, Delta &amp; more.
            Click a category to explore products.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 22 }}>
            {["✅ Genuine Products", "🧾 GST Invoice", "🚚 Pan-India Delivery", "📞 Technical Support"].map(b => (
              <span key={b} style={{
                background: "#fff", border: "1.5px solid #e2e8f0", color: "#334155",
                padding: "6px 16px", borderRadius: 8, fontSize: 12, fontWeight: 700,
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
              }}>{b}</span>
            ))}
          </div>
        </div>

        {/* 4 Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
          gap: 24, marginBottom: 56
        }}>
          {cards.map(card => (
            <div
              key={card.key}
              onClick={() => onSelect(card.key)}
              onMouseEnter={() => setHovered(card.key)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: card.bg,
                borderRadius: 20, padding: "36px 28px",
                cursor: "pointer", position: "relative", overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                transform: hovered === card.key ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
                boxShadow: hovered === card.key
                  ? `0 28px 64px ${card.color}45`
                  : "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{
                position: "absolute", right: -20, top: -20, fontSize: 130,
                opacity: 0.07, userSelect: "none",
                transform: hovered === card.key ? "rotate(15deg) scale(1.1)" : "rotate(0)",
                transition: "transform 0.4s",
              }}>{card.icon}</div>

              <div style={{ fontSize: 52, marginBottom: 18, lineHeight: 1 }}>{card.icon}</div>
              <h3 style={{
                color: "#fff", fontSize: 26, fontWeight: 800, marginBottom: 10,
                fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em"
              }}>{card.label}</h3>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 13, lineHeight: 1.75, marginBottom: 22 }}>
                {card.desc}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{
                  background: "rgba(255,255,255,0.18)", color: "#fff",
                  padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700
                }}>{card.sub}</span>
                <span style={{
                  color: "#fff", fontSize: 22,
                  transform: hovered === card.key ? "translateX(6px)" : "translateX(0)",
                  transition: "transform 0.2s", display: "inline-block"
                }}>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          background: "linear-gradient(135deg, #0b1222, #1e3a5f)",
          borderRadius: 18, padding: "42px 36px", textAlign: "center"
        }}>
          <h3 style={{
            color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 10,
            fontFamily: "'Syne', sans-serif"
          }}>Can't find what you're looking for?</h3>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, marginBottom: 26 }}>
            Share model number, datasheet or image — we'll source it for you.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "#0047AB", color: "#fff", border: "none",
                padding: "13px 28px", borderRadius: 9, fontWeight: 700, fontSize: 14, cursor: "pointer"
              }}>📩 Send Requirement</button>
            <a href="https://wa.me/917696939529" target="_blank" rel="noreferrer"
              style={{
                background: "#25D366", color: "#fff", padding: "13px 28px",
                borderRadius: 9, textDecoration: "none", fontWeight: 700, fontSize: 14
              }}>💬 WhatsApp Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SUBCATEGORY SCREEN ───────────────────────────────────────
function SubcategoryScreen({ categoryKey, onBack, onSelectSub }) {
  const cat = productsData[categoryKey];
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ background: "#f0f4fb", padding: "60px 0", minHeight: "100vh" }}>
      <style>{globalStyle}</style>
      <div style={{ maxWidth: 1260, margin: "0 auto", padding: "0 24px" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 30, fontSize: 13, color: "#64748b" }}>
          <span onClick={onBack} style={{ cursor: "pointer", color: cat.color, fontWeight: 800 }}>Products</span>
          <span style={{ color: "#94a3b8" }}>›</span>
          <span style={{ color: "#0b1222", fontWeight: 800 }}>{cat.label}</span>
        </div>

        {/* Hero */}
        <div style={{
          background: cat.bg, borderRadius: 18, padding: "30px 36px",
          marginBottom: 40, display: "flex", alignItems: "center", gap: 20,
          position: "relative", overflow: "hidden"
        }}>
          <div style={{ position: "absolute", right: -10, top: -10, fontSize: 150, opacity: 0.07 }}>{cat.icon}</div>
          <div style={{ fontSize: 54 }}>{cat.icon}</div>
          <div>
            <h2 style={{
              color: "#fff", fontSize: 30, fontWeight: 800, margin: 0,
              fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em"
            }}>{cat.label} Products</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", margin: "6px 0 0", fontSize: 14 }}>
              {cat.desc} — click a subcategory to view products
            </p>
          </div>
        </div>

        {/* Subcategory Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 20 }}>
          {cat.subcategories.map(sub => (
            <div
              key={sub.id}
              onClick={() => onSelectSub(sub.id)}
              onMouseEnter={() => setHovered(sub.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#fff", borderRadius: 18,
                border: `2px solid ${hovered === sub.id ? cat.color : "#e2e8f0"}`,
                padding: 24, cursor: "pointer",
                transition: "all 0.25s ease",
                transform: hovered === sub.id ? "translateY(-5px)" : "translateY(0)",
                boxShadow: hovered === sub.id ? `0 14px 36px ${cat.color}1e` : "0 2px 10px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{
                width: 54, height: 54, background: hovered === sub.id ? cat.bg : "#f1f5f9",
                borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26, marginBottom: 14, transition: "all 0.25s"
              }}>{sub.icon}</div>

              <h4 style={{
                fontSize: 17, fontWeight: 800, color: "#0b1222", marginBottom: 6,
                fontFamily: "'Syne', sans-serif"
              }}>{sub.name}</h4>
              <p style={{ fontSize: 13, color: "#64748b", marginBottom: 14, lineHeight: 1.65 }}>{sub.desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                {sub.brands.slice(0, 4).map(b => (
                  <span key={b} style={{
                    background: "#f8fafc", color: "#475569",
                    padding: "3px 9px", borderRadius: 5, fontSize: 11, fontWeight: 700,
                    border: "1px solid #e2e8f0"
                  }}>{b}</span>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{
                  background: hovered === sub.id ? cat.color : "#f1f5f9",
                  color: hovered === sub.id ? "#fff" : "#64748b",
                  padding: "4px 13px", borderRadius: 20, fontSize: 11, fontWeight: 800,
                  transition: "all 0.25s"
                }}>{sub.items.length} products</span>
                <span style={{
                  color: cat.color, fontSize: 20,
                  transform: hovered === sub.id ? "translateX(5px)" : "translateX(0)",
                  transition: "transform 0.2s", display: "inline-block"
                }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ITEMS SCREEN ─────────────────────────────────────────────
function ItemsScreen({ categoryKey, subcategoryId, onBack, onBackToCategory }) {
  const cat = productsData[categoryKey];
  const sub = cat.subcategories.find(s => s.id === subcategoryId);
  const [hovered, setHovered] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = sub.items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section style={{ background: "#f0f4fb", padding: "60px 0", minHeight: "100vh" }}>
      <style>{globalStyle}</style>
      <div style={{ maxWidth: 1260, margin: "0 auto", padding: "0 24px" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 30, fontSize: 13, color: "#64748b", flexWrap: "wrap" }}>
          <span onClick={onBack} style={{ cursor: "pointer", color: cat.color, fontWeight: 800 }}>Products</span>
          <span style={{ color: "#94a3b8" }}>›</span>
          <span onClick={onBackToCategory} style={{ cursor: "pointer", color: cat.color, fontWeight: 800 }}>{cat.label}</span>
          <span style={{ color: "#94a3b8" }}>›</span>
          <span style={{ color: "#0b1222", fontWeight: 800 }}>{sub.name}</span>
        </div>

        {/* Hero */}
        <div style={{
          background: cat.bg, borderRadius: 18, padding: "28px 32px",
          marginBottom: 32, display: "flex", alignItems: "center", gap: 18,
          position: "relative", overflow: "hidden", flexWrap: "wrap"
        }}>
          <div style={{ position: "absolute", right: -10, top: -10, fontSize: 130, opacity: 0.07 }}>{sub.icon}</div>
          <div style={{ fontSize: 46 }}>{sub.icon}</div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <h2 style={{
              color: "#fff", fontSize: 26, fontWeight: 800, margin: 0,
              fontFamily: "'Syne', sans-serif"
            }}>{sub.name}</h2>
            <p style={{ color: "rgba(255,255,255,0.82)", margin: "5px 0 0", fontSize: 13 }}>{sub.desc}</p>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {sub.brands.map(b => (
              <span key={b} style={{
                background: "rgba(255,255,255,0.18)", color: "#fff",
                padding: "4px 13px", borderRadius: 20, fontSize: 12, fontWeight: 700
              }}>{b}</span>
            ))}
          </div>
        </div>

        {/* Search */}
        <div style={{ position: "relative", marginBottom: 28, maxWidth: 500 }}>
          <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 16 }}>🔍</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={`Search in ${sub.name}...`}
            style={{
              width: "100%", padding: "12px 16px 12px 44px",
              borderRadius: 12, border: "2px solid #e2e8f0",
              fontSize: 14, outline: "none", background: "#fff",
              fontFamily: "'DM Sans', sans-serif", color: "#0b1222",
              transition: "border 0.2s",
            }}
            onFocus={e => (e.target.style.borderColor = cat.color)}
            onBlur={e => (e.target.style.borderColor = "#e2e8f0")}
          />
        </div>

        {/* Items Count */}
        <p style={{ fontSize: 13, color: "#64748b", marginBottom: 20, fontWeight: 600 }}>
          Showing <b style={{ color: cat.color }}>{filtered.length}</b> products
        </p>

        {/* Items Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 16, marginBottom: 40 }}>
          {filtered.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#fff", borderRadius: 16,
                border: `2px solid ${hovered === i ? cat.color : "#e2e8f0"}`,
                padding: "18px 20px", transition: "all 0.2s ease",
                transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hovered === i ? `0 12px 28px ${cat.color}18` : "0 2px 6px rgba(0,0,0,0.03)",
                display: "flex", flexDirection: "column", gap: 14
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{
                  width: 38, height: 38, flexShrink: 0,
                  background: hovered === i ? cat.bg : "#f1f5f9",
                  borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 17, transition: "all 0.2s"
                }}>{sub.icon}</div>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#0b1222", margin: 0, lineHeight: 1.45, fontFamily: "'Syne', sans-serif" }}>
                  {item}
                </p>
              </div>

              <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  style={{
                    flex: 1, background: hovered === i ? cat.bg : "#f8fafc",
                    color: hovered === i ? "#fff" : cat.color,
                    border: `1.5px solid ${hovered === i ? "transparent" : cat.color}`,
                    padding: "9px 0", borderRadius: 9, fontWeight: 700,
                    fontSize: 12, cursor: "pointer", transition: "all 0.2s", fontFamily: "'DM Sans', sans-serif"
                  }}
                >Get Quote</button>
                <a
                  href="https://wa.me/917696939529"
                  target="_blank" rel="noreferrer"
                  style={{
                    width: 38, height: 38, background: "#dcfce7", color: "#16a34a",
                    borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center",
                    textDecoration: "none", fontSize: 17, flexShrink: 0
                  }}
                  title="WhatsApp"
                >💬</a>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{
              gridColumn: "1/-1", textAlign: "center", padding: "60px 20px",
              color: "#94a3b8", fontSize: 15
            }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
              No products found for "<b>{search}</b>"
            </div>
          )}
        </div>

        {/* Back Button */}
        <button
          onClick={onBackToCategory}
          style={{
            background: "#fff", color: cat.color, border: `2px solid ${cat.color}`,
            padding: "12px 30px", borderRadius: 11, fontWeight: 800, fontSize: 14,
            cursor: "pointer", fontFamily: "'DM Sans', sans-serif"
          }}
        >← Back to {cat.label}</button>
      </div>
    </section>
  );
}

// ─── MAIN PRODUCTS COMPONENT ──────────────────────────────────
function Products() {
  const [view, setView] = useState("categories");
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const handleSelectCategory = (key) => {
    setActiveCategory(key);
    setView("subcategories");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectSub = (subId) => {
    setActiveSubcategory(subId);
    setView("items");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToCategories = () => {
    setView("categories");
    setActiveCategory(null);
    setActiveSubcategory(null);
    setTimeout(() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  const handleBackToSubcategories = () => {
    setView("subcategories");
    setActiveSubcategory(null);
    setTimeout(() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  if (view === "subcategories" && activeCategory) {
    return (
      <SubcategoryScreen
        categoryKey={activeCategory}
        onBack={handleBackToCategories}
        onSelectSub={handleSelectSub}
      />
    );
  }

  if (view === "items" && activeCategory && activeSubcategory) {
    return (
      <ItemsScreen
        categoryKey={activeCategory}
        subcategoryId={activeSubcategory}
        onBack={handleBackToCategories}
        onBackToCategory={handleBackToSubcategories}
      />
    );
  }

  return <CategoryScreen onSelect={handleSelectCategory} />;
}

export default Products;