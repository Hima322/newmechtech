import { useState, useEffect } from "react";

const slideshowImages = {

  plc: [
    "/assets/images/Electrical/plc/1.png",
    "/assets/images/Electrical/plc/2.png",
    "/assets/images/Electrical/plc/3.png",
    "/assets/images/Electrical/plc/4.png",
    "/assets/images/Electrical/plc/5.png",
  ],
  vfd: [
    "/assets/images/Electrical/vfd/1.png",
    "/assets/images/Electrical/vfd/2.png",
    "/assets/images/Electrical/vfd/3.png",
    "/assets/images/Electrical/vfd/4.png",
  ],
  smps: [
    "/assets/images/Electrical/smps/1.png",
    "/assets/images/Electrical/smps/2.png",
    "/assets/images/Electrical/smps/3.png",
  ],
  sensors: [
    "/assets/images/Electrical/sensors/1.png",
    "/assets/images/Electrical/sensors/2.png",
    "/assets/images/Electrical/sensors/3.png",
    "/assets/images/Electrical/sensors/4.png",
  ],
  safety: [
    "/assets/images/Electrical/safety/1.png",
    "/assets/images/Electrical/safety/2.png",
    "/assets/images/Electrical/safety/3.png",
  ],
  switchboard: [
    "/assets/images/Electrical/switchboard/1.png",
    "/assets/images/Electrical/switchboard/2.png",
    "/assets/images/Electrical/switchboard/3.png",
  ],
  extension: [
    "/assets/images/Electrical/extension/1.png",
    "/assets/images/Electrical/extension/2.png",
    "/assets/images/Electrical/extension/3.png",
  ],
  encoders: [
    "/assets/images/Electrical/encoders/1.png",
    "/assets/images/Electrical/encoders/2.png",
    "/assets/images/Electrical/encoders/3.png",
  ],
  mcc: [
    "/assets/images/Electrical/mcc/1.png",
    "/assets/images/Electrical/mcc/2.png",
    "/assets/images/Electrical/mcc/3.png",
  ],
  plc_panel: [
    "/assets/images/Electrical/plc_panel/1.png",
    "/assets/images/Electrical/plc_panel/2.png",
    "/assets/images/Electrical/plc_panel/3.png",
  ],
  vfd_panel: [
    "/assets/images/Electrical/vfd_panel/1.png",
    "/assets/images/Electrical/vfd_panel/2.png",
  ],
  apfc: [
    "/assets/images/Electrical/apfc/1.png",
    "/assets/images/Electrical/apfc/2.png",
    "/assets/images/Electrical/apfc/3.png",
  ],
  amf: [
    "/assets/images/Electrical/amf/1.png",
    "/assets/images/Electrical/amf/2.png",
    "/assets/images/Electrical/amf/3.png",
  ],
  cables: [
    "/assets/images/Machnical/cables/1.png",
    "/assets/images/Machnical/cables/2.png",
    "/assets/images/Machnical/cables/3.png",
  ],
  distribution: [
    "/assets/images/Electrical/distribution/1.png",
    "/assets/images/Electrical/distribution/2.png",
    "/assets/images/Electrical/distribution/3.png",
  ],
  siemens_hmi: [
    "/assets/images/Electrical/siemens_hmi/1.png",
    "/assets/images/Electrical/siemens_hmi/2.png",
    "/assets/images/Electrical/siemens_hmi/3.png",
  ],
  weintek_delta: [
    "/assets/images/Electrical/weintek_delta/1.png",
    "/assets/images/Electrical/weintek_delta/2.png",
    "/assets/images/Electrical/weintek_delta/3.png",
  ],
  "mitsubishi-hmi": [
    "/assets/images/Electrical/mitsubishi_hmi/1.png",
    "/assets/images/Electrical/mitsubishi_hmi/2.png",
    "/assets/images/Electrical/mitsubishi_hmi/3.png",
  ],

  // ── MECHANICAL subcategories ──
  motors: [
    "/assets/images/Machnical/motors/a.jpeg",
    "/assets/images/Machnical/motors/b.jpeg",
    "/assets/images/Machnical/motors/c.jpeg",
    "/assets/images/Machnical/motors/d.jpeg",
  ],
  gearboxes: [
    "/assets/images/Machnical/gearboxes/1.png",
    "/assets/images/Machnical/gearboxes/2.png",
    "/assets/images/Machnical/gearboxes/3.png",
    "/assets/images/Machnical/gearboxes/4.png",
  ],
  carrier_chain: [
    "/assets/images/Machnical/carrier_chain/1.png",
    "/assets/images/Machnical/carrier_chain/2.png",
    "/assets/images/Machnical/carrier_chain/3.png",
  ],
  belts_pulleys: [
    "/assets/images/Machnical/belts_pulleys/1.png",
    "/assets/images/Machnical/belts_pulleys/2.png",
    "/assets/images/Machnical/belts_pulleys/3.png",
  ],
  couplings: [
    "/assets/images/Machnical/couplings/1.png",
    "/assets/images/Machnical/couplings/2.png",
    "/assets/images/Machnical/couplings/3.png",
  ],

  // ── HARDWARE subcategories ──
  fasteners: [
    "/assets/images/Machnical/fasteners/1.png",
    "/assets/images/Machnical/fasteners/2.png",
    "/assets/images/Machnical/fasteners/3.png",
  ],
  tools: [
    "/assets/images/Machnical/tools/1.png",
    "/assets/images/Machnical/tools/2.png",
    "/assets/images/Machnical/tools/3.png",
  ],
  enclosures: [
    "/assets/images/Machnical/enclosures/1.png",
    "/assets/images/Machnical/enclosures/2.png",
    "/assets/images/Machnical/enclosures/3.png",
  ],
  din_rail: [
    "/assets/images/Machnical/din_rail/1.png",
    "/assets/images/Machnical/din_rail/2.png",
    "/assets/images/Machnical/din_rail/3.png",
  ],

  // ── PNEUMATICS ──
  pneumatics: [
    "/assets/images/pnumatic/1.png",
    "/assets/images/pnumatic/2.png",
    "/assets/images/pnumatic/3.png",
    "/assets/images/pnumatic/4.png",
    "/assets/images/pnumatic/5.png",
  ],

  // ── HYDRAULICS subcategories ──
  hydraulic_cylinders: [
    "/assets/images/Hydraulics/cylinders/1.png",
    "/assets/images/Hydraulics/cylinders/2.png",
    "/assets/images/Hydraulics/cylinders/3.png",
  ],
  hydraulic_pumps: [
    "/assets/images/Hydraulics/pumps/1.png",
    "/assets/images/Hydraulics/pumps/2.png",
    "/assets/images/Hydraulics/pumps/3.png",
  ],
  hydraulic_valves: [
    "/assets/images/Hydraulics/valves/1.png",
    "/assets/images/Hydraulics/valves/2.png",
    "/assets/images/Hydraulics/valves/3.png",
  ],
  hydraulic_motors: [
    "/assets/images/Hydraulics/motors/1.png",
    "/assets/images/Hydraulics/motors/2.png",
    "/assets/images/Hydraulics/motors/3.png",
  ],
  hydraulic_seals: [
    "/assets/images/Hydraulics/seals/1.png",
    "/assets/images/Hydraulics/seals/2.png",
    "/assets/images/Hydraulics/seals/3.png",
  ],
  hydraulic_filters: [
    "/assets/images/Hydraulics/filters/1.png",
    "/assets/images/Hydraulics/filters/2.png",
    "/assets/images/Hydraulics/filters/3.png",
  ],
  hydraulic_hoses: [
    "/assets/images/Hydraulics/hoses/1.png",
    "/assets/images/Hydraulics/hoses/2.png",
    "/assets/images/Hydraulics/hoses/3.png",
  ],
  hydraulic_accumulators: [
    "/assets/images/Hydraulics/accumulators/1.png",
    "/assets/images/Hydraulics/accumulators/2.png",
    "/assets/images/Hydraulics/accumulators/3.png",
  ],
  hydraulic_manifolds: [
    "/assets/images/Hydraulics/manifolds/1.png",
    "/assets/images/Hydraulics/manifolds/2.png",
    "/assets/images/Hydraulics/manifolds/3.png",
  ],
  hydraulic_powerpack: [
    "/assets/images/Hydraulics/powerpack/1.png",
    "/assets/images/Hydraulics/powerpack/2.png",
    "/assets/images/Hydraulics/powerpack/3.png",
  ],

  // ── CATEGORY LEVEL (main cards) ──
  electrical_main: [
    "/assets/images/Electrical/plc/1.png",
    "/assets/images/Electrical/vfd/1.png",
    "/assets/images/Electrical/smps/1.png",
    "/assets/images/Electrical/sensors/1.png",
    "/assets/images/Electrical/mcc/1.png",
  ],
  mechanical_main: [
    "/assets/images/Machnical/motors/1.jpeg",
    "/assets/images/Machnical/belts_pulleys/1.png",
    "/assets/images/Machnical/couplings/1.png",
    "/assets/images/Machnical/fasteners/1.png",
  ],
  pneumatics_main: [
    "/assets/images/pnumatic/1.png",
    "/assets/images/pnumatic/2.png",
    "/assets/images/pnumatic/3.png",
    "/assets/images/pnumatic/4.png",
  ],
  hydraulics_main: [
    "/assets/images/Hydraulics/cylinders/1.png",
    "/assets/images/Hydraulics/pumps/1.png",
    "/assets/images/Hydraulics/valves/1.png",
    "/assets/images/Hydraulics/motors/1.png",
    "/assets/images/Hydraulics/powerpack/1.png",
  ],

  // ── CUTTER & BLADES ──
  cutter_blades_main: [
    "/assets/images/Cutter_Blades/blades/1.png",
    "/assets/images/Cutter_Blades/blades/2.png",
    "/assets/images/Cutter_Blades/blades/3.png",
   "/assets/images/Cutter_Blades/blades/4.png",
    "/assets/images/Cutter_Blades/blades/5.png",
  ],
 
  circular_blades: [
    "/assets/images/Cutter_Blades/circular_blades/1.png",
    "/assets/images/Cutter_Blades/circular_blades/2.png",
    "/assets/images/Cutter_Blades/circular_blades/3.png",
    
  ],
  bandsaw_blades: [
    "/assets/images/Cutter_Blades/bandsaw_blades/1.png",
    "/assets/images/Cutter_Blades/bandsaw_blades/2.png",
    "/assets/images/Cutter_Blades/bandsaw_blades/3.png",
  ],
  cutter_tools: [
    "/assets/images/Cutter_Blades/cutter_tools/1.png",
    "/assets/images/Cutter_Blades/cutter_tools/2.png",
    "/assets/images/Cutter_Blades/cutter_tools/3.png",
  ],
};


const fallbackImg = "/assets/images/logo.png";

// ─── SLIDESHOW COMPONENT ──────────────────────────────────────
function ImageSlideshow({ slideKey, height = 200 }) {
  const images = slideshowImages[slideKey] || [];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [src, setSrc] = useState(images[0] || fallbackImg);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex(prev => {
          const next = (prev + 1) % images.length;
          setSrc(images[next]);
          return next;
        });
        setFade(true);
      }, 300);
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div style={{
        width: "100%", height,
        background: "linear-gradient(135deg, #e2e8f0, #f1f5f9)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 40, color: "#94a3b8",
      }}>📦</div>
    );
  }

  return (
    <div style={{ width: "100%", height, overflow: "hidden", position: "relative", background: "#f1f5f9" }}>
      <img
        src={src}
        alt=""
        onError={() => setSrc(fallbackImg)}
        style={{
          width: "100%", height: "100%", objectFit: "cover", display: "block",
          opacity: fade ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      />
      {images.length > 1 && (
        <div style={{
          position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)",
          display: "flex", gap: 5,
        }}>
          {images.map((_, i) => (
            <div key={i} style={{
              width: i === index ? 16 : 6, height: 6, borderRadius: 3,
              background: i === index ? "#fff" : "rgba(255,255,255,0.4)",
              transition: "all 0.3s",
            }} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── DATA ─────────────────────────────────────────────────────
const productsData = {
  electrical: {
    label: "Electrical",
    icon: "⚡",
    color: "#0047AB",
    bg: "linear-gradient(135deg, #0047AB 0%, #1a6fd4 100%)",
    desc: "All electrical automation components for industrial machinery",
    slideKey: "electrical_main",
    subcategories: [
      { id: "plc", name: "PLC Systems", icon: "🖥️",
        desc: "Programmable Logic Controllers – CPU, I/O Modules, Power Supply, Communication Modules",
        brands: ["Siemens", "Mitsubishi", "Allen Bradley", "Delta", "Schneider", "Omron"],
        items: ["Siemens S7-1200 CPU 1214C","Siemens S7-1500 CPU 1511-1 PN","Siemens S7-300 CPU 315-2 DP","Mitsubishi FX3U-32MT/ES","Mitsubishi FX5U-32MT/ES","Allen Bradley MicroLogix 1100","Allen Bradley CompactLogix 5380","Delta DVP32ES200T","Schneider M221-24IO","Omron CP1H-X40DT-D","Siemens S7-1200 DI 16x24VDC","Siemens SM 1223 Digital I/O Module","Siemens SM 1231 Analog Input Module","Siemens SM 1232 Analog Output Module","Mitsubishi FX3U-4AD Analog Input","Siemens PROFIBUS DP Module","Siemens PROFINET Module CP 1243-1","Siemens S7-1200 Power Supply PM 1207","Siemens LOGO! 8 12/24RC","Delta DVP-SX2 Slim PLC"] },
      { id: "cables", name: "Cables & Connectors", icon: "🔗",
        desc: "Servo Cables, Encoder Cables, Power Cables, M12 Connectors, Drag Chain",
        brands: ["Lapp", "Igus", "Helukabel", "Nexans", "Phoenix", "Harting"],
        items: ["Lapp ÖLFLEX 191 CY 4G1.5mm² Shielded","Lapp UNITRONIC 100 4x0.25mm² Data","Igus CF130.02.04 Chainflex Servo Cable","Igus CF10-07-04 Motor Power 4G1.5mm²","Helukabel JZ-600 5G1.5mm² Flexible","Nexans NeXans VFD Drive Cable 4G4mm²","Phoenix SAC-3P-M12MS/3.0-PVC M12 Cable","Harting M12-X Circular Connector","Lapp Epic H-B 6-Pin Connector","Turck PKG 4M-2/S90 M12 4-Pin 2M","Igus E2.38.075.0 Energy Chain 38mm","Igus E4.56.250.0 Energy Chain 56mm","Igus E4.80.400.0 Heavy Duty E-Chain","Igus E14 Micro Energy Chain","Lapp ÖLFLEX FD 855 P Drag Chain Cable","Igus CF9 Encoder Feedback Cable 5P","Lapp UNITRONIC FD CY 2x2x0.5 Data","RJ45 Industrial Cat6 Shielded Cable 5M","M12 D-Coded Ethernet Patch Cable 3M","HAN 6E Harting Connector Set Male"] },
      { id: "vfd", name: "AC Drives (VFD)", icon: "🔄",
        desc: "Variable Frequency Drives for motor speed control – 0.4kW to 400kW",
        brands: ["ABB", "Siemens", "Mitsubishi", "Danfoss", "Delta", "Schneider"],
        items: ["ABB ACS510-01-025A-4 (11kW)","ABB ACS880-01-026A-3 (15kW)","Siemens SINAMICS G120 6.5A","Siemens MICROMASTER 420 0.55kW","Siemens SINAMICS V20 0.37kW","Mitsubishi FR-E740-0.75K","Mitsubishi FR-A840-00083 (3.7kW)","Danfoss FC302 5.5kW","Delta VFD007E21A (0.75kW)","Delta VFD055C43A (5.5kW)","Schneider ATV312H075M2 (0.75kW)","Schneider ATV630D11M3 (11kW)","ABB ACS150-03E-07A5-4 (3kW)","Yaskawa V1000 2.2kW","Lenze i550 7.5kW","Bosch Rexroth EFC 3610 1.5kW","WEG CFW700 4.0kW","Emotron FDU 5.5kW","Parker AC10 1.1kW","KEB COMBIVERT F5 2.2kW"] },
      { id: "smps", name: "SMPS / Power Supply", icon: "🔋",
        desc: "Switched Mode Power Supplies – 24VDC, 48VDC, 5VDC – 2A to 40A",
        brands: ["Phoenix", "Siemens", "Meanwell", "Omron", "Schneider", "ABB"],
        items: ["Phoenix Contact QUINT-PS 24VDC/10A","Phoenix Contact TRIO-PS 24VDC/5A","Siemens SITOP PSU100S 24V/5A","Siemens SITOP PSU200M 24V/10A","Meanwell MDR-60-24 60W 24V","Meanwell HDR-100-24 100W 24V","Meanwell DRT-960-24 960W 3-Phase","Omron S8VS-06024 60W 24V","Schneider Phaseo ABL8 24V/5A","ABB CP-S 24/5.0 120W SMPS","Murrelektronik Mico 24VDC/4A","Wago 787-612 24V/2A","Phoenix Contact STEP-PS 24V/2.5A","Siemens SITOP PSU300S 24V/20A","Meanwell LRS-350-24 350W 24V","Omron S8VK-C06024 60W","Finder 78.12.1.230.2400 SMPS","Idec PS5R-VC24 60W DIN Rail","Phoenix Contact UNO-PS 24V/3.3A","Puls PIANO10.241 10A 24V"] },
      { id: "sensors", name: "Sensors", icon: "📡",
        desc: "Proximity, Photoelectric, Temperature, Pressure, Level Sensors",
        brands: ["Sick", "Ifm", "Omron", "Balluff", "Pepperl+Fuchs", "Turck"],
        items: ["Sick IME08-1B5NSZT0S Inductive 8mm","Sick WT18-3P430 Photoelectric Sensor","Ifm IFB3003BBPKG/M Inductive 8mm","Ifm O6H200 Photoelectric 200mm","Omron E2B-M12KS04-M1-B1 Proximity","Omron E3FA-TP11 Photoelectric","Balluff BES M12MI-PSC80B-S04G","Pepperl+Fuchs NJ4-12GK-N Inductive","Turck Bi2-EG08-AP6X-H1141","Sick DT35-B15251 Distance Sensor","Autonics PRD30-15DP Proximity 30mm","Honeywell 14CE1-1 Microswitch","Keyence EX-422V Digital Amplifier","Baumer IFFM 08P1701/L Inductive","Leuze HTB 8/4-200-S12 Through Beam","Wenglor P1NC001PO3 Capacitive","IFM PK6521 Pressure Sensor","Endress+Hauser FTL33 Level Switch","Pt100 RTD Temperature Sensor 6mm","K-Type Thermocouple 0-1200°C"] },
      { id: "safety", name: "Safety Devices", icon: "🛡️",
        desc: "Safety Relays, Emergency Stop, Light Curtains, Safety PLCs",
        brands: ["Pilz", "Sick", "Schmersal", "Omron", "Siemens", "Banner"],
        items: ["Pilz PNOZ X3 Safety Relay 24VDC","Pilz PNOZmulti 2 PNOZ m B0","Siemens 3SK1112-1AW20 Safety Relay","Sick i10-M0213 Safety Interlock","Sick S3000 Safety Laser Scanner","Omron F3SJ-A0825P14 Light Curtain","Schmersal AZM200-B1-2P Safety Switch","Banner EZ-SCREEN 14mm Safety Curtain","Fortress interlocks mGaurd","Telemecanique XY2CZ902H7 E-Stop","ABB Jokab Safety Tina 6A","Pilz PIT m3 Safety Mat","Sick UE410-MU3T3 Safety Controller","Rockwell 440G-MT47138 Safety Interlock","Schmersal BNS 303-11Z Safety Switch","Pilz PSEN me4 Magnetic Safety Switch","Reer Muting Sensor MR4","Siemens 3SE5 Position Switch","Banner EZ-SCREEN LS Safety Laser","Sick deTec4 Core Safety Light Curtain"] },
      { id: "switchboard", name: "Switchboard Components", icon: "🔌",
        desc: "MCB, MCCB, Contactors, Overload Relays, Isolators, Busbars",
        brands: ["Siemens", "ABB", "Schneider", "L&T", "Legrand", "Havells"],
        items: ["Siemens 5SY6316-7 MCB C16A 3P","Siemens 3RV2011-1KA10 Motor Starter","Siemens 3RT2016-1AP01 Contactor 9A","Siemens 3RT2023-1AP00 Contactor 25A","ABB S203-C16 MCB 16A 3P","ABB AF09-30-10 Contactor 9A","ABB EL3 1 Shunt Release 230V","Schneider EasyPact TVS 100A MCCB","Schneider LC1D09M7 Contactor 9A","Schneider LRD14 Overload Relay 7-10A","L&T DN100 100A MCCB","L&T MN 9 Contactor 9A 415V","Legrand 04172 MCB C32 2P","Havells SPN DB 6 Way","Siemens 3NJ4115-2HB10 Isolator 160A","ABB OT125FT3 Rotary Isolator 125A","Phoenix Contact UK 4 Terminal Block","Weidmuller WDU 4 DIN Rail Terminal","Copper Busbar 50x6mm per meter","Siemens 3LD2114-0TK53 Load Switch"] },
      { id: "extension", name: "Extension / Communication Cards", icon: "📟",
        desc: "PROFIBUS, PROFINET, Modbus, CANopen, Ethernet IO Cards",
        brands: ["Siemens", "Mitsubishi", "Moxa", "Anybus", "Hilscher", "HMS"],
        items: ["Siemens CP 343-1 Ethernet Module","Siemens CP 5614 PROFIBUS Card","Siemens CP 1243-1 PROFINET Module","Mitsubishi QJ71E71-100 Ethernet","Mitsubishi QJ71PB92D PROFIBUS","Moxa NPort 5150A Serial to Ethernet","Anybus X-gateway PROFIBUS to Modbus","HMS Anybus Communicator CANopen","Hilscher netTAP Gateway NT 100","Siemens MM4 Fieldbus Module PROFIBUS","ABB FPBA-01 PROFIBUS Adapter","Danfoss FC302 PROFIBUS Option B","Delta AS01DNET-A DeviceNet Card","Beckhoff EK1100 EtherCAT Coupler","Beckhoff KL3062 Analog Input 0-10V","Wago 750-352 PROFIBUS DP Coupler","Phoenix IL ETH BK DI8 DO4 2TX-PAC","Turck BL20-GW-EN Gateway Modbus","Moxa ioLogik E1210 Remote I/O","Siemens ET 200SP IM 155-6 PN ST"] },
      { id: "encoders", name: "Encoders", icon: "🎯",
        desc: "Incremental & Absolute Rotary Encoders, Linear Encoders, Resolver",
        brands: ["Heidenhain", "Sick", "Baumer", "Pepperl+Fuchs", "Lika", "Kübler"],
        items: ["Heidenhain ERN 1381 Incremental Encoder","Heidenhain ECN 1313 Absolute Encoder","Sick DFS60B-S4EK01024 1024 PPR","Sick ATM90-A2A13X13 Absolute Encoder","Baumer BMMH 58S3600-G3Y-W10 2500PPR","Baumer EAM581 Absolute 18-bit SSI","Pepperl+Fuchs ENI58IL-1024-3-T10","Kübler 8.5858 Absolute SSI Encoder","Lika C58-H-5000BZ0.5L2G3 Industrial","Renishaw ATOM DX Linear Encoder","TR Electronic CE65M Absolute 4096","Autonics E40S8-5000-3-T-24 Encoder","BEI Sensors HS35 1000 PPR","Eltra ER58A1000Z5/28P12X6MR Encoder","Broadcom HEDS-5540 Optical Encoder","Dynapar H20 Hollow Shaft 5000PPR","Wachendorff WDGI58B-1024-ABN-24","IFM RM3005 Magnetic Encoder","Posital Fraba OCD-S101G-0016-S060","SICK BTF08-S1AK01500 Stainless Encoder"] },
      { id: "mcc", name: "MCC Panel", icon: "⚡",
        desc: "Motor Control Center Panels – Fixed, Withdrawable, Intelligent MCC",
        brands: ["Siemens", "ABB", "Schneider", "L&T", "GE", "Eaton"],
        items: ["Fixed Type MCC Panel Up to 630A","Draw-out Type MCC 3-Phase 415V","Intelligent MCC with Profibus DP","Star-Delta Starter MCC Up to 110kW","DOL Starter MCC Up to 30kW","Soft Starter MCC Panel 45-200kW","Auto-transformer Starter MCC","Reversing Starter MCC with Interlock","Slip Ring Motor Starter Panel","PMCC (Power & Motor Control Center)","Emergency MCC Backup Panel","MCC with VFD for Multiple Motors","Feeder Pillar Box IP55 Up to 200A","Control Desk with MCC Integration","Busduct Coupled MCC Panel","Floor Standing MCC IP54 RAL 7035","Compact MCC 600x600x2000mm","Weather Proof MCC IP65 Outdoor","Mining Grade MCC ATEX Certified","Retrofit & Upgrades for Old MCC"] },
      { id: "plc_panel", name: "PLC Panel", icon: "🗄️",
        desc: "Custom PLC Automation Panels with Siemens, Mitsubishi, Delta – Any Size",
        brands: ["Siemens", "Mitsubishi", "Allen Bradley", "Delta", "Schneider", "Beckhoff"],
        items: ["Siemens S7-1200 PLC Panel Wall Mount","Siemens S7-1500 PLC Panel Freestanding","Mitsubishi iQ-R PLC Control Panel","Allen Bradley CompactLogix PLC Panel","Delta DVP PLC Automation Panel","Beckhoff IPC Automation Panel","Multi-Axis Servo Control Panel","PLC Panel with HMI Integration","PLC Panel with SCADA Gateway","Redundant PLC Panel Hot Standby","PLC Panel with UPS Backup System","Remote I/O Distributed Control Panel","PLC Panel IP66 Stainless Food Grade","PLC Panel with Camera Vision System","Conveyor PLC Automation Panel","Welding Line PLC Panel","Press Machine PLC Control Panel","Injection Moulding PLC Panel","Packaging Machine PLC Panel","PLC Panel with IoT Edge Gateway"] },
      { id: "vfd_panel", name: "VFD Panel", icon: "🔄",
        desc: "Variable Frequency Drive Panels – Single & Multi-Drive – 0.75kW to 800kW",
        brands: ["ABB", "Siemens", "Danfoss", "Mitsubishi", "Delta", "Schneider"],
        items: ["Single VFD Panel 0.75kW-22kW","Multi-Drive VFD Panel 4 Drives","ABB ACS880 Multi-Drive Panel 400kW","Siemens SINAMICS G120 Panel","VFD Panel with PLC Control","Pump VFD Panel with Flow Control","Fan VFD Panel Energy Saving","Compressor VFD Control Panel","VFD Panel with Bypass Circuit","VFD Panel with Harmonic Filter","Common DC Bus VFD Panel","VFD Panel with Brake Resistor","Crane Hoist VFD Control Panel","HVAC VFD Control Panel BMS","Water Treatment VFD Panel","VFD Retrofit Panel for Old Motor","Multi-Pump VFD Panel Duplex","VFD Panel with Remote Monitoring","VFD Panel IP55 Outdoor Mount","Marine Grade VFD Panel Corrosion"] },
      { id: "apfc", name: "APFC Panel", icon: "📊",
        desc: "Automatic Power Factor Correction Panels – Up to 1000 KVAR",
        brands: ["Schneider", "ABB", "Siemens", "Circutor", "Frako", "Ducati"],
        items: ["APFC Panel 50 KVAR 415V","APFC Panel 100 KVAR 3-Phase","APFC Panel 200 KVAR Detuned","APFC Panel 300 KVAR Capacitor Bank","APFC Panel 500 KVAR Heavy Duty","Detuned APFC Panel 7% Reactor","APFC Panel with Thyristor Switching","Harmonic Filtered APFC Panel","APFC Panel with Siemens BR6000","APFC Panel Schneider Varlogic NR12","APFC Panel with ABB RVT Controller","APFC Panel Indoor IP42 LT Side","APFC Panel Outdoor Weatherproof","Capacitor Bank 25 KVAR 440V PP","Detuning Reactor 7% 50KVAR","APFC with Energy Meter RS485","APFC Panel Hybrid Active Filter","Thyristor Bank Fast Switching","APFC Panel with Transient Suppressor","APFC Panel Retrofit Existing Board"] },
      { id: "amf", name: "AMF / DG Sync Panel", icon: "🔋",
        desc: "Auto Mains Failure Panels, DG Synchronizing Panels, Load Transfer",
        brands: ["Deepsea", "ComAp", "Woodward", "Lovato", "ABB", "Siemens"],
        items: ["AMF Panel Deepsea DSE7320 Single DG","AMF Panel ComAp InteliLite 4 MRS","AMF Panel Woodward 8440-2020","AMF with Auto Load Transfer Switch","DG Sync Panel Paralleling 2 DG Sets","DG Sync Panel ComAp InteliGen NT","DG Sync Panel 3 DG Paralleling","AMF with MPCB Changeover 100A","AMF Panel for Hospital Critical Load","AMF with Battery Charger 24VDC","Sync Panel Load Sharing Controller","AMF with Remote Monitoring GPRS","DG Sync with Mains Paralleling","AMF for Pump House Diesel Generator","Soft Load Transfer AMF 630A","AMF with AVR Control Integration","DG Panel with Annunciator","AMF Panel for UPS Backup System","DG Sync Panel 415V 1MVA","AMF Panel Automatic Battery Testing"] },
      { id: "distribution", name: "Distribution Board / DB", icon: "🔌",
        desc: "LT Distribution Panels, SDB, MLDB, Junction Boxes – All Sizes",
        brands: ["Siemens", "ABB", "Schneider", "L&T", "Havells", "Legrand"],
        items: ["Main LT Panel MLDB 1000A 415V","Sub Distribution Board SDB 400A","Final Distribution Board FDB 100A","Incomer ACB Panel 1600A","Bus Coupler Panel Tie Switch","Power Distribution Panel 250A","Lighting Distribution Board 63A","HVAC Distribution Panel 200A","Power Factor Meter Panel Board","MCB Distribution Box 12 Way","MCB Distribution Box 24 Way TPN","Isolator Panel HRC Fuse 400A","Junction Box IP65 300x400mm","GRP Enclosure IP66 600x600mm","Floor Standing DB Powder Coated","Flush Mounted DB Panel Recessed","Outdoor Metering Panel IP54","Apartment Distribution Board 24Way","Factory Distribution Board SFU","Bus Bar Trunking TAP Off Box 160A"] },
      { id: "siemens_hmi", name: "Siemens HMI Panels", icon: "🖥️",
        desc: "Siemens KTP, TP, MP Series HMI Panels – 4″ to 22″",
        brands: ["Siemens"],
        items: ["Siemens KTP400 Basic 4.3\" 6AV2123","Siemens KTP700 Basic 7\" 6AV2123","Siemens KTP900 Basic 9\" 6AV2123","Siemens KTP1200 Basic 12\" 6AV2123","Siemens TP700 Comfort 7\" 6AV2124","Siemens TP900 Comfort 9\" 6AV2124","Siemens TP1200 Comfort 12\" 6AV2124","Siemens TP1500 Comfort 15\" 6AV2124","Siemens MP377 Multi Panel 15\" Touch","Siemens IPC277E Panel PC 15\" Win10","Siemens SIMATIC IPC477E 19\"","Siemens Mobile Panel 2nd Gen 7\"","Siemens IFP1900 Industrial Monitor","Siemens IFP2200 Monitor 22\" Full HD","Siemens TP1500 Comfort PRO IP65","Siemens KP300 Key Panel Monochrome","Siemens OP73 Operator Panel Text","Siemens HMI TP270 6\" (Legacy)","Siemens KTP1900 Basic Widescreen","Siemens WinCC RT Advanced License"] },
      { id: "weintek_delta", name: "Weintek & Delta HMI", icon: "📺",
        desc: "Weintek cMT, MT Series and Delta DOP-B, DOP-W Series Touch Panels",
        brands: ["Weintek", "Delta"],
        items: ["Weintek MT8071iE 7\" 800x480","Weintek MT8102iE 10.1\" Multi-Touch","Weintek MT8151XE 15\" TFT Color","Weintek cMT3072 7\" Cloud HMI","Weintek cMT3092 9.7\" Ethernet","Weintek cMT3151 15\" High Res","Weintek cMT-SVR Server Only","Weintek MT6070iH 7\" Economical","Delta DOP-B07E415 7\" WVGA","Delta DOP-B10E615 10\" Touch Panel","Delta DOP-B15E515W 15\" Widescreen","Delta DOP-107WV 7\" 800x480 Slim","Delta DOP-110IS 10.1\" Smart HMI","Delta DOP-W157B 15\" Wide HMI","Delta DOP-B Series Modbus RTU","Weintek MT8121XE 12.1\" Bright","Weintek MT6103iP 10.1\" Budget","Weintek EasyAccess 2.0 Remote","Weintek MT6070iH 7\" USB Port","Delta DOP-B10E515 PROFIBUS"] },
      { id: "mitsubishi-hmi", name: "Mitsubishi HMI (GOT2000)", icon: "📱",
        desc: "Mitsubishi Electric GOT2000 Series Graphic Operation Terminals",
        brands: ["Mitsubishi Electric"],
        items: ["Mitsubishi GT2715-XTBA GOT2000 15\" XGA HMI","Mitsubishi GT2712-STBA GOT2000 12.1\" SVGA HMI","Mitsubishi GT2705-VTBA GOT2000 5.7\" VGA HMI","Mitsubishi GT2512-STBA GOT2000 12.1\" SVGA HMI","Mitsubishi GT2510-VTBA GOT2000 10.4\" VGA HMI","Mitsubishi GT2508-VTBA GOT2000 8.4\" VGA HMI","Mitsubishi GT2505-VTBA GOT2000 5.7\" VGA HMI","Mitsubishi GT25 Rugged Model GOT2000 HMI","Mitsubishi GT25 Wide Model GOT2000 WVGA HMI","Mitsubishi GT2107-WTBD GOT2000 7\" WVGA HMI","Mitsubishi GT2104-RTBD GOT2000 4.3\" Compact HMI","Mitsubishi GT2103-PMBD GOT2000 3.4\" Monochrome","Mitsubishi GS2110-WTBD-N GOT Simple 10.1\"","Mitsubishi GS2107-WTBD GOT Simple 7\" WVGA","Mitsubishi GT25 Handy GOT Portable HMI","Mitsubishi GT SoftGOT2000 PC-Based Software","Mitsubishi MELSOFT GT Works3 Design Software","Mitsubishi GOT Mobile Function License","Mitsubishi VNC Server Function License","Mitsubishi MES I/F Function License"] },
    ],
  },

  mechanical: {
    label: "Mechanical",
    icon: "⚙️",
    color: "#0f766e",
    bg: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
    desc: "Complete mechanical & hardware components for industrial machinery and automation",
    slideKey: "mechanical_main",
    subcategories: [
      { id: "motors", name: "Motors & Electric Motors", icon: "🔩",
        desc: "3-Phase Induction Motors, Servo Motors, Gear Reducers, Worm Gearboxes",
        brands: ["ABB", "Siemens", "SEW", "Lenze", "Bonfiglioli", "Flender"],
        items: ["ABB M2BAX 4kW 4P IE3 Motor","ABB M3BP 7.5kW 4P B3 Flange","Siemens 1LE1001-1AA42 0.75kW","Siemens 1LA7 5.5kW IE2 3-Phase","SEW-Eurodrive R17 DRS71M4 0.55kW","SEW RF37 Gearmotor 1.5kW i=25","Lenze GST04-2MVAK 0.37kW Gearmotor","Bonfiglioli MVF 044 3kW Worm Gear","Flender 2SL3 Helical Bevel Gearbox","Siemens SIMOGEAR Bevel Gear i=10","Nord SK 1SI40 Gearbox i=20","Motovario NMRV 040 50:1 Worm","ABB IRB 120 Servo Axis Motor","Siemens 1FK7 Servo Motor 1.5Nm","Panasonic MHMD042G1U Servo Motor","Yaskawa SGM7A-04A7A61 Servo Motor","Bosch Rexroth MSK030 Servo Motor","ABB BSDR Brake Motor 2.2kW","Siemens FLENDER Standard Coupling","Dodge Tigear-2 Worm Reducer 10:1"] },
      { id: "gearboxes", name: "Gearboxes & Gear Reducers", icon: "⚙️",
        desc: "Worm Gearboxes, Helical Gear Reducers, Bevel Gearboxes, Planetary Gearboxes",
        brands: ["SEW", "Bonfiglioli", "Flender", "Nord", "Motovario", "Siemens"],
        items: ["SEW-Eurodrive R17 DRS71M4 0.55kW Gearmotor","SEW RF37 Gearmotor 1.5kW i=25","SEW FA77 Helical Bevel Gearbox i=40","Bonfiglioli MVF 044 3kW Worm Gear","Bonfiglioli VF 44 P2 Worm Reducer i=30","Flender 2SL3 Helical Bevel Gearbox","Siemens SIMOGEAR Bevel Gear i=10","Nord SK 1SI40 Gearbox i=20","Motovario NMRV 040 50:1 Worm Gearbox","Motovario NMRV 063 30:1 Worm Gearbox","Dodge Tigear-2 Worm Reducer 10:1","Lenze GST04-2MVAK 0.37kW Gearmotor","Lenze GST06 i=7.1 Helical Inline","Siemens FLENDER Standard Coupling","SEW P Series Planetary Gearbox i=16","Neugart PLE 060 Planetary 3 Stage","Alpha SP 140 Precision Gearbox i=10","Apex AE060 Planetary Reducer 10 Arc-min","Nord SK 300E Right Angle Helical i=25","Brevini ED2 Epicyclic Gearbox 3kW"] },
      { id: "carrier_chain", name: "Cable Carrier & Chain", icon: "⛓️",
        desc: "Cable Drag Chains, Energy Chains, Carrier Systems, Separators",
        brands: ["Igus", "Brevetti", "Kabelschlepp", "Murrplastik", "Hennlich"],
        items: ["Igus E2 Micro Series 15x15mm","Igus E2.38 Series 38x25mm","Igus E4 Heavy Duty 56x50mm","Igus TRL 35 Triflex 3D Energy Chain","Igus E6 Cleanroom Energy Chain","Igus RX Roller Energy Chain 50mm","Brevetti Stendalto Series 50 Chain","Kabelschlepp T Series 60x35mm","Murrplastik Systemkette SK5 Series","Hennlich Energy Chain 0430 Series","Igus Separator RS12 for E4 Series","Igus Crossbar Clip TKA for E2","Igus End Connector EK.10.38","Igus Mounting Bracket HGWM 38","Igus Pivoting Bracket STBU 56","Igus Noise Dampening Pad for E4","Igus Cable Clamp HZB 38-B","Murrplastik Cable Tie Inserts","Igus Sliding Layer SK 135.03","Kabelschlepp Shelf Divider Set"] },
      { id: "belts_pulleys", name: "Belts, Pulleys & Bearings", icon: "🔘",
        desc: "Timing Belts, V-Belts, Pulleys, Idler, Ball Bearings, Pillow Blocks",
        brands: ["Gates", "Optibelt", "SKF", "FAG", "NSK", "Fenner"],
        items: ["Gates PowerGrip GT3 HTD 5M Belt","Gates 8MGT Timing Belt 1440mm","Optibelt ALPHA Power AT10 Belt","Fenner HTD 3M-150 Rubber Timing Belt","Gates V-Belt A Section A50","Gates V-Belt B Section B65","SKF HTD 5M Pulleys Ø20-Ø150mm","Gates Poly Chain Sprocket 8MGT-21S","Optibelt Pilot Bore Pulley SPA 100","SKF 6205-2RS1 Deep Groove Ball Bearing","SKF 6208-2Z/C3 Ball Bearing 40mm","FAG 1205-K-TVH-C3 Self Aligning","FAG 32210-A Taper Roller Bearing","NSK 6006-DDU Ball Bearing 30mm","SKF UCP206 Pillow Block Bearing","SKF SYK 30 WF Plummer Block","FAG UCFL207 Flange Bearing 35mm","SKF PHDA 50 Adapter Sleeve","Gates Flex-Wedge Drive Belt 3V","Rexnord TableTop Chain 821K325T10"] },
      { id: "couplings", name: "Couplings & Shafts", icon: "🔧",
        desc: "Rigid, Flexible, Jaw, Oldham, Bellows Couplings, Keyway Shafts",
        brands: ["Rexnord", "R+W", "Huco", "KTR", "Miki Pulley", "Mayr"],
        items: ["KTR ROTEX GR 14 Jaw Coupling D=14mm","KTR BOWEX M-18 Curved Tooth Coupling","Huco Oldham Coupling 16mm Bore","R+W BK1/500/AA Bellows Coupling","Mayr ROBA-DS Disc Coupling Ø65mm","Miki Pulley SFC-040-MZR Flex Coupling","Rexnord Thomas 52 Disc Coupling","KTR MONOLASTIC Rubber Coupling","Huco Rigid Coupling 16mm Ø30mm","Lenze Elastomer Coupling GFL-A 30","SKF Oldham Coupling 25mm Bore","Lovejoy Type L070 Jaw Coupling","Rexnord Zero-Max Steel Laminar","Igus igumid Backlash-Free Coupling","R+W EKM/50 Miniature Bellows 8mm","Mayr ROBA-brake-checker Module","Keyway Shaft 25mm H6 CK45 1M","Linear Shaft 20mm h6 Hardened 1M","Splined Shaft DIN 5481 22x28mm","Thomson Precision Shaft 25mm Case"] },
      { id: "fasteners", name: "Fasteners & Fixings", icon: "🔩",
        desc: "Bolts, Nuts, Screws, Washers, Threaded Rods, Anchor Fasteners – All Grades",
        brands: ["Hilti", "Fischer", "Würth", "Bossard", "Hexagon", "Unbrako"],
        items: ["M6x20 Hex Head Bolt Grade 8.8 (Pack 100)","M8x25 Allen Cap Screw Grade 12.9","M10x30 Hex Bolt Stainless SS316","M12x50 Hex Bolt + Nut + Washer Set","M4x10 Pan Head Screw Zinc Plated","M5x16 Countersunk Screw A2 SS","M6 Hex Nut Grade 8 Zinc (Pack 100)","M8 Nyloc Self-Locking Nut SS304","M10 Flat Washer DIN 125 Grade 8","M6 Spring Washer DIN 127 Zinc","M8x100 Threaded Rod Grade 4.8","M10x200 Threaded Rod SS316","Hilti HSA M10 Anchor Bolt Expansion","Fischer FAZ II Plus M12 Anchor","M5 T-Nut for 40x40 Aluminium Profile","M8 T-Bolt 40 Series Slot Nut","Unbrako Socket Head Cap Screw M6x30","Self-Tapping Screw 3.5x16 ST Type","Rivet Nut M5 Steel Knurled Body","Cable Tie 200x4.8mm Natural (Pack 100)"] },
      { id: "tools", name: "Tools & Instruments", icon: "🔧",
        desc: "Screwdrivers, Crimping Tools, Wire Strippers, Multimeters, Torque Tools",
        brands: ["Wera", "Wiha", "Phoenix", "Fluke", "Knipex", "Bosch"],
        items: ["Wera Kraftform Kompakt 60 Screwdriver Set","Wiha Insulated VDE Screwdriver Set 7Pc","Phoenix Contact CRIMPFOX Crimping Tool","Phoenix Contact STRIPAX Wire Stripper","Knipex 97 51 12 Crimping Plier","Knipex 12 62 180 Insulation Stripper","Fluke 117 True RMS Multimeter","Fluke 376 FC Clamp Meter 1000A","Megger MIT430 Insulation Tester 1kV","Klein Tools ET310 Circuit Breaker Finder","Bosch GSR 12V-35 Cordless Screwdriver","Bosch GLM 50C Laser Distance Measure","Cable Lug Hydraulic Crimper 16-240mm²","Ratchet Crimper Tool SWS-6 0.08-6mm²","DIN Rail Cutter Tool Heavy Duty","Cable Duct Cutter Hand Tool","Label Maker Brady BMP21-PLUS","Torque Screwdriver 0.5-6Nm Set","Spirit Level 600mm Aluminium","Tape Measure 8M Stanley Classic"] },
      { id: "enclosures", name: "Enclosures & Cabinets", icon: "🗄️",
        desc: "Steel Enclosures, Polyester GRP Boxes, Stainless Cabinets – IP54 to IP69K",
        brands: ["Rittal", "Schneider", "ABB", "Fibox", "Hylec", "Ensto"],
        items: ["Rittal AE 1380 IP66 Compact Enclosure 380x300mm","Rittal AX 1060 Polycarbonate 1000x600mm","Rittal TS 8 Baying Enclosure 600x600x2000","Schneider NSYS3D4040 Stainless 304 Box","Schneider NSYPLM32 Polyester IP66 300x200","ABB 00840 General Purpose IP65 300x220","Fibox CAB PC 543013 Polycarbonate IP67","GRP Enclosure IP66 400x300x200mm","Stainless SS316 Panel Box 600x400x200","Junction Box IP65 100x100x75mm","Aluminium Die-Cast Box 120x80x55mm","Wall Mount Cabinet 800x1000x300 IP54","Modular Enclosure Din Rail 7.5\" Top Hat","Rittal CP Wall Arm for HMI Panel","Consolet Box Desk Mounted 500x400mm","Outdoor Weatherproof Box IP55 800x600","ATEX Zone 2 Enclosure 316SS 400x300","Gland Plate Drilled M20 Steel Zinc","Cable Gland M20 Nylon IP68 (Pack 10)","Blind Gland Plug M25 Brass Nickel"] },
      { id: "din_rail", name: "DIN Rail & Duct", icon: "📏",
        desc: "DIN Rails, Cable Ducts, Trunking, Wire Markers, Ferrules, Accessories",
        brands: ["Phoenix", "Wago", "Schneider", "HellermannTyton", "Panduit", "Legrand"],
        items: ["Top Hat DIN Rail 35x15mm 2M Steel Zinc","Top Hat DIN Rail 35x7.5mm 1M Punched","Omega Rail 32mm C-Section 2M","Schneider AM1DP200 Cable Duct 25x25mm","Schneider AM1DP800 Slotted Trunking 75x75","HellermannTyton ALPHA 35 Cable Duct 35x35","Panduit LD3X3WH2 Wire Duct 78x78mm","Wago 209-102 End Stop for DIN Rail","Phoenix ZB 4 End Bracket for UK Terminals","Vinyl Wire Marker Strip 0-9 Set 100Pc","Brady Clip Sleeve Wire Marker AWG 18-14","HellermannTyton TULT27 Cable Tie 270mm","Self-Adhesive Cable Tie Mount 25x25mm","End Plate for Phoenix UK4 Terminals","DIN Rail Ferrule 1.5mm² Red E1508 (100Pc)","DIN Rail Ferrule 2.5mm² Blue E2508","Insulated Ferrule Kit 0.5-6mm² Assorted","Spiral Cable Wrap 10mm x 5M Black","Split Loom Tubing 20mm Black x 10M","Velcro Cable Tie 200mm Reusable (10Pc)"] },
    ],
  },

  hydraulics: {
    label: "Hydraulics",
    icon: "🛢️",
    color: "#b91c1c",
    bg: "linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)",
    desc: "Complete hydraulic systems & components for heavy industrial machinery",
    slideKey: "hydraulics_main",
    subcategories: [
      { id: "hydraulic_cylinders", name: "Hydraulic Cylinders", icon: "🔴",
        desc: "Tie-Rod, Mill Type, Telescopic, Welded, Custom Hydraulic Cylinders – 10mm to 500mm Bore",
        brands: ["Bosch Rexroth", "Parker", "Eaton", "Hydraforce", "Yuken", "Wipro"],
        items: ["Bosch Rexroth CDT3 Tie-Rod Cylinder Ø40mm 200mm Stroke","Bosch Rexroth CDT3 Tie-Rod Cylinder Ø63mm 300mm Stroke","Bosch Rexroth CDT3 Tie-Rod Cylinder Ø80mm 500mm Stroke","Bosch Rexroth CDL1 Mill Type Cylinder Ø100mm 600mm Stroke","Parker TIE-ROD Cylinder Ø50mm x 200mm 250Bar","Parker TIE-ROD Cylinder Ø80mm x 400mm 250Bar","Parker 3L Series Mill Cylinder Ø125mm 700Bar","Eaton Vickers MF Series Mill Cylinder Ø100mm","Telescopic Cylinder 3-Stage Ø80-160mm 1500mm","Telescopic Cylinder 4-Stage Ø100-200mm 2000mm","Double Acting Cylinder Ø63mm 500mm Stroke 160Bar","Single Acting Spring Return Cylinder Ø40mm 150mm","Side Mount Cylinder Ø50mm 300mm Stroke MS2","Flange Mount Cylinder Ø80mm 400mm Stroke MF4","Trunnion Mount Cylinder Ø100mm 600mm MT4","Rotary Actuator Cylinder 180° Rack & Pinion","Compact Hydraulic Cylinder Ø32mm 50mm Stroke","Hollow Plunger Cylinder 20 Ton 150mm Stroke","Lock-Nut Cylinder 50 Ton for Press Machines","Custom Cylinder Non-Standard Bore to Drawing"] },
      { id: "hydraulic_pumps", name: "Hydraulic Pumps", icon: "💧",
        desc: "Gear Pumps, Vane Pumps, Piston Pumps, Radial Piston – 1 cc to 500 cc/rev",
        brands: ["Bosch Rexroth", "Parker", "Yuken", "Eaton Vickers", "Denison", "Casappa"],
        items: ["Bosch Rexroth A10VO18 Axial Piston Variable Pump 18cc","Bosch Rexroth A10VO45 Axial Piston Variable Pump 45cc","Bosch Rexroth A10VO71 Axial Piston Variable Pump 71cc","Bosch Rexroth A10VO100 Axial Piston Variable Pump 100cc","Parker PV016 Axial Piston Pump 16cc/rev","Parker PV063 Axial Piston Pump 63cc/rev","Parker PVP41 Variable Piston Pump","Eaton Vickers V10 Vane Pump 2.3 GPM","Eaton Vickers V20 Vane Pump 4.6 GPM","Eaton Vickers 45V Vane Pump High Pressure","Yuken PV2R1-8-F1 Double Vane Pump","Yuken PV2R2-26-F1 Vane Pump 26cc/rev","Yuken AR16 Variable Piston Pump","Casappa KP 20 Gear Pump 20cc/rev","Casappa PLP20 Gear Pump Aluminium 20cc","Bosch Rexroth AZPF Gear Pump 11cc Fixed","Parker PGP505 Gear Pump 8cc/rev Cast Iron","Denison P7P Piston Pump 100cc Variable","Radial Piston Pump High Pressure 700Bar","Hydraulic Hand Pump Double Acting 700Bar"] },
      { id: "hydraulic_valves", name: "Hydraulic Valves", icon: "🔵",
        desc: "Directional, Pressure Relief, Check, Flow Control, Proportional, Servo Valves",
        brands: ["Bosch Rexroth", "Parker", "Vickers", "Sun Hydraulics", "Hydraforce", "Cetop"],
        items: ["Bosch Rexroth 4WE6D Directional Solenoid Valve D03","Bosch Rexroth 4WE10D Directional Solenoid Valve D05","Bosch Rexroth 4WEH22 High Flow Directional Valve","Parker D1VW004 Directional Valve D03 24VDC","Parker D3W004 Directional Valve D05 24VDC","Vickers DG4V-3S-2N Solenoid Valve 24VDC","Bosch Rexroth DBD Pressure Relief Valve D03","Bosch Rexroth DBDS Pressure Relief Valve 50-315Bar","Parker RV10-20 Relief Valve 3/8 BSP 350Bar","Sun Hydraulics CBCA Counterbalance Valve","Bosch Rexroth Z2S Check Valve Pilot Operated","Parker C12-A-2 Check Valve 1/2 BSP","Bosch Rexroth 2FRM Flow Control Valve","Bosch Rexroth MK Flow Control with Check Valve","Parker FCG Needle Valve Flow Control 3/8 BSP","Bosch Rexroth 4WRPH Proportional Directional Valve","Moog D661 Series Servo Valve 2-Stage","Hydraforce SV10-20 Cartridge Solenoid Valve","Cetop 3 D03 Hydraulic Manifold Block 4 Station","Cetop 5 D05 Hydraulic Manifold Block 6 Station"] },
      { id: "hydraulic_motors", name: "Hydraulic Motors", icon: "⚙️",
        desc: "Gear Motors, Vane Motors, Radial Piston Motors, High Torque Low Speed",
        brands: ["Bosch Rexroth", "Parker", "Eaton", "White Drive", "Danfoss", "Calzoni"],
        items: ["Bosch Rexroth A2FM28 Axial Piston Motor 28cc","Bosch Rexroth A2FM56 Axial Piston Motor 56cc","Bosch Rexroth A2FM107 Axial Piston Motor 107cc","Bosch Rexroth MCR Radial Piston Motor 03","Bosch Rexroth MCR Radial Piston Motor 05 High Torque","Parker F12-030 Piston Motor 30cc/rev","Parker F12-060 Piston Motor 60cc/rev","Eaton 74318 Orbit Motor Charlynn 200cc","Eaton 74400 Orbit Motor Charlynn 400cc","White Drive WD OMP 160cc Orbital Motor","Danfoss OMS 160cc Orbital Motor SAE","Danfoss OMP 80cc Orbital Sauer Motor","Bosch Rexroth MGE Gear Motor 18cc/rev","Parker TG Series Gear Motor 32cc/rev","Staffa HMB 125 Radial Piston Motor High Torque","Calzoni MR Radial Motor 250cc Low Speed","Poclain MS 18 Cam Lobe Motor 18cc","Poclain MS 50 Cam Lobe Motor 50cc","Hydraulic Winch Motor 2-Speed 250Bar","Bent Axis Motor 32cc Variable Displacement"] },
      { id: "hydraulic_seals", name: "Seals & Seal Kits", icon: "🔶",
        desc: "Hydraulic Cylinder Seals, Pump Seals, Valve Seals – NBR, PU, PTFE, Viton",
        brands: ["Hallite", "Parker", "NOK", "Trelleborg", "Freudenberg", "SKF"],
        items: ["Hallite 605 U-Cup Seal Ø40mm NBR Piston Seal","Hallite 605 U-Cup Seal Ø63mm NBR Piston Seal","Hallite 605 U-Cup Seal Ø80mm NBR Piston Seal","Hallite 605 U-Cup Seal Ø100mm Polyurethane","Parker HX Step Seal Piston 50mm Teflon","Parker Z-Ring Sealing System 63mm","Trelleborg Turcon Roto Glyd Ring Rod Seal","Trelleborg Stepseal 2K Piston Seal 63mm","NOK UC Rod Seal 40mm NBR Hydraulic","NOK DH Dust Wiper Seal 50mm Single Lip","Freudenberg Simrit Rod Seal 40x56x10mm","SKF Speedi-Sleeve Shaft Repair Sleeve 40mm","O-Ring NBR 70 Shore Ø50x3mm (Pack 10)","O-Ring Viton FKM 80 Shore Ø63x3.5mm","Backup Ring PTFE Ø50mm DIN 3761","Cylinder Repair Seal Kit Ø63mm Complete","Cylinder Repair Seal Kit Ø80mm Complete","Cylinder Repair Seal Kit Ø100mm Complete","Pump Seal Kit Bosch Rexroth A10VO45","Valve Seal Kit Rexroth 4WE6 O-Ring Set"] },
      { id: "hydraulic_filters", name: "Hydraulic Filters", icon: "🟡",
        desc: "Return Line Filters, Pressure Filters, Suction Strainers, Filter Elements",
        brands: ["Hydac", "Parker", "Mahle", "Internormen", "Stauff", "Pall"],
        items: ["Hydac BF3HC/HC-025 Return Filter 25 Micron","Hydac BF3HC/HC-010 Return Filter 10 Micron","Hydac BF3HC/HC-003 Return Filter 3 Micron","Hydac RFM BN/HC High Pressure Filter 100Bar","Parker LPF0204-010WV Low Pressure Filter 10µ","Parker HF3L5-10-WV High Pressure Filter 350Bar","Mahle PI 180 Return Filter Element 10 Micron","Mahle KF100D10W Pressure Filter 250Bar","Internormen 01.E 150.10VG Return Filter","Pall HC6400 Hydraulic Filter Element 10µ","Stauff RFBN Return Filter with Bypass Indicator","Suction Strainer 100 Mesh 1 BSP Tank Mount","Suction Strainer 200 Micron 1.5 BSP","Off-Line Kidney Loop Filter Unit 10 LPM","Duplex Filter Changeover Valve 350Bar 10µ","Air Breather Filter 3 Micron Tank Mounted","Filler Breather Cap 74 Micron for Hydraulic Tank","Hydac EDS Clog Indicator Differential Pressure","Filter Element Hydac 0060 D 010 BN3HC","Filter Element Parker 932754Q 10 Micron"] },
      { id: "hydraulic_hoses", name: "Hoses, Fittings & Pipes", icon: "🔩",
        desc: "Hydraulic Hoses, JIC Fittings, BSP Fittings, Adapters, Stainless Tubes",
        brands: ["Parker", "Gates", "Eaton Weatherhead", "Manuli", "Alfagomma", "Stauff"],
        items: ["Parker 451TC Hose SAE 100R1AT 1/4\" 225Bar","Parker 451TC Hose SAE 100R1AT 1/2\" 165Bar","Parker 451TC Hose SAE 100R1AT 3/4\" 125Bar","Parker 381 Hose SAE 100R2AT 1/2\" 400Bar","Parker 422 PTFE Lined Hose 1/4\" 350Bar","Gates MXT Hydraulic Hose 1/2\" 275Bar","Eaton Synflex 3130 Thermoplastic Hose 1/4\"","High Pressure Hose SAE 100R15 1/2\" 420Bar","Spiral Hose 4-Wire SAE 100R12 3/4\" 420Bar","BSP Female Swivel 90° Elbow 1/2\" x 1/2\" BSP","JIC 37° Male Fitting 9/16-18 UNF Straight","ORFS O-Ring Face Seal Fitting 9/16-18 UNF","BSP Male Connector 1/2\" Hose Tail Fitting","BSP Tee Piece 1/2\" Equal Tee Connector","Reducer BSP 3/4\" Male to 1/2\" Female","Quick Release Coupler 1/2\" BSP Aeroquip Style","Stauff Clamp Single RS 20 Tube Clamp 22mm","Stauff Double Clamp RSS 12 for 12mm Tube","Hydraulic Tube Seamless 25mm OD 4mm Wall","Hydraulic Tube Seamless 38mm OD 4mm Wall DIN 2391"] },
      { id: "hydraulic_accumulators", name: "Accumulators", icon: "🟠",
        desc: "Bladder, Diaphragm, Piston Accumulators – Energy Storage, Pulsation Damping",
        brands: ["Hydac", "Parker", "Bosch Rexroth", "Olaer", "Epoll", "NOK"],
        items: ["Hydac SB330 Bladder Accumulator 0.5L 330Bar","Hydac SB330 Bladder Accumulator 1L 330Bar","Hydac SB330 Bladder Accumulator 4L 330Bar","Hydac SB330 Bladder Accumulator 10L 330Bar","Hydac SB330 Bladder Accumulator 20L 330Bar","Parker A2 Bladder Accumulator 1L 350Bar","Parker A2 Bladder Accumulator 4L 350Bar","Bosch Rexroth HAB Bladder Accumulator 4L","Hydac SBO Diaphragm Accumulator 0.075L","Hydac SBO Diaphragm Accumulator 0.35L 350Bar","Olaer ELM Diaphragm Accumulator 0.5L","Piston Accumulator 10L 350Bar Carbon Steel","Piston Accumulator 25L 400Bar High Pressure","Piston Accumulator 50L 250Bar Low Pressure","Hydac Bladder Element NBR Replacement 4L","Hydac Bladder Element Viton 4L High Temp","Accumulator Safety Block SAF-18-250","Accumulator Charging Kit Gas Valve Fill Rig","Nitrogen Gas Valve Schrader Type M28x1.5","Pulsation Damper Inline 0.3L 250Bar BSP"] },
      { id: "hydraulic_manifolds", name: "Manifolds & Power Units", icon: "🟤",
        desc: "Custom Manifold Blocks, Cetop Manifolds, Sub-Plates, Sandwich Valves",
        brands: ["Bosch Rexroth", "Parker", "Hydrocontrol", "Walvoil", "Bucher", "Sun Hydraulics"],
        items: ["Cetop 3 D03 Manifold 2-Station Aluminium","Cetop 3 D03 Manifold 4-Station Aluminium","Cetop 3 D03 Manifold 6-Station Aluminium","Cetop 5 D05 Manifold 2-Station Cast Iron","Cetop 5 D05 Manifold 4-Station Cast Iron","Cetop 7 D07 Manifold 2-Station","Custom Manifold Block Aluminium To Drawing","Custom Manifold Block Steel High Pressure 500Bar","Sandwich Valve Pressure Reducing D03","Sandwich Valve Check Valve D03 Pilot Operated","Integrated Valve Block Drilling Machine 6 Functions","Walvoil DPX Multi-Way Load Sensing Valve","Bucher HDS 16/20 Directional Control Valve","Sun Hydraulics Cavity Drilled Manifold","Solenoid Valve Coil 24VDC DIN43650 for D03","Solenoid Valve Coil 230VAC for D05 Valve","Manual Override Button for Solenoid Valve","Pressure Gauge Port Block 1/4 BSP Inline","Test Point Minimess 1/4 BSP Schrader","Drain Manifold Block for Pump Return Lines"] },
      { id: "hydraulic_powerpack", name: "Hydraulic Power Packs", icon: "🏭",
        desc: "Complete Hydraulic Power Units – Standard & Custom – 0.5kW to 75kW",
        brands: ["Bosch Rexroth", "Parker", "Custom Build", "Enerpac", "SPX", "Hawe"],
        items: ["Hydraulic Power Pack 0.75kW 3LPM 100Bar","Hydraulic Power Pack 1.5kW 6LPM 150Bar","Hydraulic Power Pack 2.2kW 10LPM 200Bar","Hydraulic Power Pack 3.7kW 18LPM 200Bar","Hydraulic Power Pack 5.5kW 25LPM 250Bar","Hydraulic Power Pack 7.5kW 35LPM 250Bar","Hydraulic Power Pack 11kW 50LPM 300Bar","Hydraulic Power Pack 15kW 70LPM 300Bar","Hydraulic Power Pack 22kW 100LPM 250Bar","Hydraulic Power Pack 37kW 150LPM 300Bar","Hydraulic Power Pack 55kW 250LPM 300Bar","Hydraulic Power Pack 75kW 350LPM 300Bar","Mini Power Pack 12VDC 2LPM Single Acting","Mini Power Pack 24VDC 3LPM Double Acting","Compact Power Pack AC Motor Top Mounted","Power Pack with Load Sensing Control","Power Pack with PLC Control Panel","Power Pack Water Cooled High Duty Cycle","Power Pack Stainless Steel Food Grade IP65","Power Pack with Remote Monitoring IoT"] },
    ],
  },

  pneumatics: {
    label: "Pneumatics",
    icon: "💨",
    color: "#6d28d9",
    bg: "linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)",
    desc: "Complete pneumatic systems – cylinders, valves, FRL units and air preparation",
    slideKey: "pneumatics_main",
    subcategories: [
      { id: "pneumatics", name: "Pneumatic Cylinders & Valves", icon: "💨",
        desc: "Pneumatic Cylinders, Solenoid Valves, FRL Units, Fittings, Air Preparation",
        brands: ["SMC", "Festo", "Parker", "Norgren", "Camozzi", "Airtec"],
        items: ["SMC CDU20-20D Compact Cylinder Ø20","SMC CQ2B40-50DM Compact Cylinder Ø40","SMC CDJ2B16-50Z Round Body Cylinder","SMC MGPM20-50Z Guided Cylinder","Festo DSNU-20-60-PPV-A Cylinder","Festo ADVU-32-80-APA Double Acting","Festo DFM-20-80-PA-GF Guided Cylinder","SMC VQ1101N-5 Solenoid Valve 5/2 Way","SMC SY3120-5LOU-C6-F1 Solenoid Valve","Festo VUVG-L10-M52-MT-M7-1P3 Valve","SMC AF40-04B-A Filter Regulator","SMC AC40-04G-A FRL Combination Unit","Norgren B07-200-A1KG Filter Regulator","SMC ZH05DS-06-06-06 Vacuum Ejector","SMC MXQ12-30AS Slide Table","Parker P1F-S020MS0300 Cylinder Ø20","Camozzi 31M2A020A0100 Cylinder","SMC VHK2-04F-04F Speed Controller","SMC KFH04 Fittings Set 4mm","Festo GRLA-M5-QS-4-D Flow Control"] },
    ],
  },

  // ── CUTTER & BLADES ── (new, fully independent category)
  Cutter_Blades: {
    label: "Cutters & Blades",
    icon: "",
    color: "#b45309",
    bg: "linear-gradient(135deg, #b45309 0%, #d97706 100%)",
    desc: "Industrial cutting blades, circular saw blades, bandsaw blades and precision cutter tools",
    slideKey: "cutter_blades_main",
    subcategories: [
      {
        id: "circular_blades",
        name: "Circular Saw Blades",
        icon: "⭕",
        desc: "TCT circular saw blades for metal, wood, plastic cutting – Ø100mm to Ø700mm",
        brands: ["Kinkelder", "Kanefusa", "Leuco", "Freud", "Bosch", "Karnasch"],
        items: [
          "Kinkelder TCT Circular Saw Blade Ø350mm 80T Cold Saw",
          "Kinkelder HSS Circular Saw Blade Ø275mm 220T",
          "Kanefusa TCT Blade Ø300mm 60T Aluminium",
          "Kanefusa TCT Blade Ø450mm 120T Steel Tube",
          "Freud LU2A Circular Blade Ø250mm 48T Wood",
          "Leuco TCT Blade Ø400mm 96T Solid Wood",
          "Bosch Expert Steel Blade Ø180mm 40T Metal",
          "Karnasch TCT Blade Ø200mm 64T Stainless Steel",
          "TCT Blade Ø500mm 120T Aluminium Profile",
          "TCT Blade Ø600mm 180T Heavy Section Steel",
          "HSS Blade Ø140mm 100T Fine Cut Ferrous",
          "Cermet Tipped Blade Ø315mm 80T Dry Cutting",
          "Diamond Tipped Blade Ø350mm Ceramic Tile",
          "CBN Grinding Blade Ø250mm Hardened Steel",
          "Carbide Tipped Blade Ø250mm 60T Plastics",
          "TCT Blade Ø230mm 48T Composite Panels",
          "Scoring Blade Ø120mm 12T Pre-Scorer",
          "Cold Saw Blade Ø285mm 140T HSS-E Cobalt",
          "Friction Saw Blade Ø700mm 168T Structural Steel",
          "Custom TCT Blade Ground To Profile Drawing",
        ],
      },
      {
        id: "bandsaw_blades",
        name: "Bandsaw Blades",
        icon: "📏",
        desc: "Bi-metal, carbide and HSS bandsaw blades for metal cutting – all widths and lengths",
        brands: ["Lenox", "Starrett", "Bahco", "Amada", "Wikus", "Simonds"],
        items: [
          "Lenox RX+ Bi-Metal Bandsaw Blade 27x0.9mm 4/6TPI",
          "Lenox RX+ Bi-Metal Blade 34x1.1mm 3/4TPI",
          "Starrett Intenss Pro-Die 27mm 6/10TPI Bi-Metal",
          "Starrett Versatix MP 34mm 5/8TPI All-Purpose",
          "Bahco 3851 Bi-Metal Blade 27x0.9mm 6/10TPI",
          "Amada Bi-Metal Blade 34x1.1mm 4/6TPI",
          "Wikus Marathon M42 27mm 4/6TPI Bi-Metal",
          "Simonds Duratooth Bandsaw Blade 41x1.3mm",
          "Carbide Tipped Bandsaw Blade 34mm 2/3TPI",
          "Carbide Tipped Blade 54mm 1.5/2TPI Large Section",
          "HSS M42 Bandsaw Blade 27mm 10/14TPI",
          "Wood Bandsaw Blade 13mm 6TPI Skip Tooth",
          "Meat Cutting Bandsaw Blade 16mm SS 3TPI",
          "Portable Bandsaw Blade 14x0.65mm 14TPI",
          "Bi-Metal Blade 13x0.65mm 14/18TPI Small Machine",
          "Stainless Steel Cutting Blade 27mm 8/12TPI",
          "Titanium Alloy Blade 34mm 3/4TPI Exotic Metals",
          "Dry Cutting Bandsaw Blade 27mm Cermet Tip",
          "Custom Length Blade Welded to Requirement",
          "Bandsaw Blade Welder Butt Joint for 13-41mm",
        ],
      },
      {
        id: "cutter_tools",
        name: "Cutter Tools & Accessories",
        icon: "🔧",
        desc: "Rotary cutters, knife holders, blade clamps, sharpening tools and cutter spare parts",
        brands: ["Dienes", "Tidland", "Atlas Converting", "Maxcess", "Kampf", "Bernal"],
        items: [
          "Dienes Rotary Knife Holder Upper 50mm",
          "Dienes Razor Blade Holder Pneumatic",
          "Tidland E-Knife Holder Pneumatic Ø76mm",
          "Maxcess Tidland Rewind Shaft 76mm 3\"",
          "Atlas Converting Slitter Knife Holder",
          "Kampf Slitter Knife Holder Upper Lower Pair",
          "Bernal Steel Rule Die Ejection Foam",
          "Razor Blade Industrial 61mm Single Edge (100Pc)",
          "Slitter Spacer Ring 50x3mm Tungsten Carbide",
          "Slitter Spacer Ring 50x5mm Hardened Steel",
          "Blade Sharpening Stone 400 Grit Alumina",
          "Blade Sharpening Machine Bench Top 400mm",
          "Knife Holder Clamping Bolt M8 Hex Set",
          "Cutter Bar Assembly 1000mm With Slots",
          "Perforation Blade 300mm 8 Holes Per Inch",
          "Micro Perforation Blade 450mm 18 HPI",
          "Crush Cut Blade Ø150mm Rubber Edge",
          "Score Cut Blade Ø120mm Sharp Edge",
          "Blade Alignment Gauge 0.01mm Resolution",
          "Blade Lubricant Oil NSF H1 Food Grade 1L",
        ],
      },
    ],
  },
};

// ─── STYLES ───────────────────────────────────────────────────
const globalStyle = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', Arial, sans-serif; }
  button { font-family: inherit; }
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
      bg: "linear-gradient(135deg,#0047AB,#1e6fd4)",
      desc: "PLC • VFD • SMPS • Sensors • Safety • Switchboard • Encoders • Control Panels • HMI",
      sub: `${productsData.electrical.subcategories.length} subcategories`,
    },
    {
      key: "mechanical",
      icon: "⚙️",
      label: "Mechanical",
      color: "#0f766e",
      bg: "linear-gradient(135deg,#0f766e,#14b8a6)",
      desc: "Motors & Gearboxes • Cables • Cable Carrier • Belts & Bearings • Couplings • Fasteners • Tools • Enclosures • DIN Rail",
      sub: `${productsData.mechanical.subcategories.length} subcategories`,
    },
    {
      key: "pneumatics",
      icon: "💨",
      label: "Pneumatics",
      color: "#6d28d9",
      bg: "linear-gradient(135deg,#6d28d9,#8b5cf6)",
      desc: "Cylinders • Solenoid Valves • FRL Units • Vacuum Ejectors • Slide Tables • Fittings",
      sub: `${productsData.pneumatics.subcategories.length} subcategory`,
    },
    {
      key: "hydraulics",
      icon: "🛢️",
      label: "Hydraulics",
      color: "#b91c1c",
      bg: "linear-gradient(135deg,#b91c1c,#ef4444)",
      desc: "Cylinders • Pumps • Valves • Motors • Seals • Filters • Hoses • Accumulators • Power Packs",
      sub: `${productsData.hydraulics.subcategories.length} subcategories`,
    },
    {
      key: "Cutter_Blades",
      icon: "✂️",
      label: "Cutters & Blades",
      color: "#b45309",
      bg: "linear-gradient(135deg,#b45309,#d97706)",
      desc: "Industrial Blades • Circular Saw Blades • Bandsaw Blades • Slitter Knives • Cutter Tools & Accessories",
      sub: `${productsData.Cutter_Blades.subcategories.length} subcategories`,
    },
  ];

  return (
    <section style={{ background: "#f0f4fb", padding: "72px 0", minHeight: "100vh" }}>
      <style>{globalStyle}</style>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{ display: "inline-block", background: "#dbeafe", color: "#1e40af", padding: "5px 18px", borderRadius: 4, fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", marginBottom: 16 }}>
            OUR PRODUCT RANGE
          </span>
          <h2 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 800, color: "#0b1222", letterSpacing: "-0.03em", marginBottom: 14 }}>
            Industrial Automation &amp; Engineering
          </h2>
          <p style={{ color: "#64748b", fontSize: 15, maxWidth: 540, margin: "0 auto", lineHeight: 1.8 }}>
            Authorized distributors for Siemens, ABB, Mitsubishi, Schneider, SMC, Festo, Delta &amp; more.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 22 }}>
            {["✅ Genuine Products", "🧾 GST Invoice", "🚚 Pan-India Delivery", "📞 Technical Support"].map(b => (
              <span key={b} style={{ background: "#fff", border: "1.5px solid #e2e8f0", color: "#334155", padding: "6px 16px", borderRadius: 8, fontSize: 12, fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>{b}</span>
            ))}
          </div>
        </div>

        {/* 5 Category Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, marginBottom: 56 }}>
          {cards.map(card => (
            <div
              key={card.key}
              onClick={() => onSelect(card.key)}
              onMouseEnter={() => setHovered(card.key)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#fff", borderRadius: 20, overflow: "hidden", cursor: "pointer",
                border: `2.5px solid ${hovered === card.key ? card.color : "transparent"}`,
                transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                transform: hovered === card.key ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
                boxShadow: hovered === card.key ? `0 28px 64px ${card.color}35` : "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              {/* Slideshow */}
              <div style={{ position: "relative", height: 200 }}>
                <ImageSlideshow slideKey={productsData[card.key].slideKey} height={200} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, transparent 35%, ${card.color}cc 100%)`, pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: 14, left: 18, display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 34 }}>{card.icon}</span>
                  <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 800, margin: 0, textShadow: "0 2px 6px rgba(0,0,0,0.35)" }}>{card.label}</h3>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "18px 22px 20px" }}>
                <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.75, marginBottom: 16 }}>{card.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ background: hovered === card.key ? card.color : "#f1f5f9", color: hovered === card.key ? "#fff" : "#64748b", padding: "5px 14px", borderRadius: 20, fontSize: 11, fontWeight: 800, transition: "all 0.25s" }}>{card.sub}</span>
                  <span style={{ color: card.color, fontSize: 22, fontWeight: 900, transform: hovered === card.key ? "translateX(5px)" : "translateX(0)", transition: "transform 0.2s", display: "inline-block" }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#0b1222,#1e3a5f)", borderRadius: 18, padding: "42px 36px", textAlign: "center" }}>
          <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 10 }}>Can't find what you're looking for?</h3>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, marginBottom: 26 }}>Share model number, datasheet or image — we'll source it for you.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{ background: "#0047AB", color: "#fff", border: "none", padding: "13px 28px", borderRadius: 9, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>📩 Send Requirement</button>
            <a href="https://wa.me/917696939529" target="_blank" rel="noreferrer"
              style={{ background: "#25D366", color: "#fff", padding: "13px 28px", borderRadius: 9, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>💬 WhatsApp Us</a>
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

        {/* Hero banner with slideshow */}
        <div style={{ borderRadius: 18, overflow: "hidden", marginBottom: 40, position: "relative", height: 180 }}>
          <ImageSlideshow slideKey={cat.slideKey} height={180} />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(90deg,${cat.color}ee 0%,${cat.color}88 45%,transparent 100%)`, pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, padding: "0 36px", display: "flex", alignItems: "center", gap: 18 }}>
            <span style={{ fontSize: 52 }}>{cat.icon}</span>
            <div>
              <h2 style={{ color: "#fff", fontSize: 28, fontWeight: 800, margin: 0 }}>{cat.label} Products</h2>
              <p style={{ color: "rgba(255,255,255,0.82)", margin: "5px 0 0", fontSize: 13 }}>{cat.desc}</p>
            </div>
          </div>
        </div>

        {/* Subcategory Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))", gap: 20 }}>
          {cat.subcategories.map(sub => (
            <div
              key={sub.id}
              onClick={() => onSelectSub(sub.id)}
              onMouseEnter={() => setHovered(sub.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#fff", borderRadius: 18,
                border: `2px solid ${hovered === sub.id ? cat.color : "#e2e8f0"}`,
                overflow: "hidden", cursor: "pointer",
                transition: "all 0.25s ease",
                transform: hovered === sub.id ? "translateY(-5px)" : "translateY(0)",
                boxShadow: hovered === sub.id ? `0 14px 36px ${cat.color}1e` : "0 2px 10px rgba(0,0,0,0.04)",
              }}
            >
              {/* Slideshow thumbnail */}
              <div style={{ height: 140, overflow: "hidden", position: "relative" }}>
                <ImageSlideshow slideKey={sub.id} height={140} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.45),transparent)", pointerEvents: "none" }} />
                <span style={{ position: "absolute", bottom: 9, left: 12, fontSize: 26 }}>{sub.icon}</span>
              </div>

              <div style={{ padding: "16px 20px" }}>
                <h4 style={{ fontSize: 17, fontWeight: 800, color: "#0b1222", marginBottom: 6 }}>{sub.name}</h4>
                <p style={{ fontSize: 13, color: "#64748b", marginBottom: 12, lineHeight: 1.65 }}>{sub.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
                  {sub.brands.slice(0, 4).map(b => (
                    <span key={b} style={{ background: "#f8fafc", color: "#475569", padding: "3px 8px", borderRadius: 5, fontSize: 11, fontWeight: 700, border: "1px solid #e2e8f0" }}>{b}</span>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ background: hovered === sub.id ? cat.color : "#f1f5f9", color: hovered === sub.id ? "#fff" : "#64748b", padding: "4px 13px", borderRadius: 20, fontSize: 11, fontWeight: 800, transition: "all 0.25s" }}>{sub.items.length} products</span>
                  <span style={{ color: cat.color, fontSize: 20, transform: hovered === sub.id ? "translateX(5px)" : "translateX(0)", transition: "transform 0.2s", display: "inline-block" }}>→</span>
                </div>
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
  const [search, setSearch] = useState("");
  const [view, setView] = useState("list");

  const filtered = sub.items.filter(item => item.toLowerCase().includes(search.toLowerCase()));

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

        {/* Slideshow Hero Banner */}
        <div style={{ borderRadius: 18, overflow: "hidden", marginBottom: 28, position: "relative", height: 220 }}>
          <ImageSlideshow slideKey={sub.id} height={220} />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(90deg,${cat.color}ee 0%,${cat.color}99 40%,transparent 100%)`, pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, padding: "28px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: 42, marginBottom: 8 }}>{sub.icon}</div>
            <h2 style={{ color: "#fff", fontSize: 26, fontWeight: 800, margin: 0, textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>{sub.name}</h2>
            <p style={{ color: "rgba(255,255,255,0.88)", margin: "6px 0 0", fontSize: 13 }}>{sub.desc}</p>
            <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginTop: 12 }}>
              {sub.brands.map(b => (
                <span key={b} style={{ background: "rgba(255,255,255,0.2)", color: "#fff", padding: "4px 13px", borderRadius: 20, fontSize: 12, fontWeight: 700, backdropFilter: "blur(4px)" }}>{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ position: "relative", flex: 1, minWidth: 220 }}>
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 16 }}>🔍</span>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder={`Search in ${sub.name}...`}
              style={{ width: "100%", padding: "12px 16px 12px 44px", borderRadius: 12, border: "2px solid #e2e8f0", fontSize: 14, outline: "none", background: "#fff", color: "#0b1222" }}
              onFocus={e => (e.target.style.borderColor = cat.color)}
              onBlur={e => (e.target.style.borderColor = "#e2e8f0")} />
          </div>
          <div style={{ display: "flex", background: "#fff", borderRadius: 10, border: "1.5px solid #e2e8f0", overflow: "hidden" }}>
            {["grid", "list"].map(v => (
              <button key={v} onClick={() => setView(v)}
                style={{ padding: "10px 16px", background: view === v ? cat.color : "transparent", color: view === v ? "#fff" : "#64748b", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 12, transition: "all 0.2s" }}>
                {v === "grid" ? "⊞ Grid" : "☰ List"}
              </button>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}><b style={{ color: cat.color }}>{filtered.length}</b> products</p>
        </div>

        {/* Products */}
        {view === "grid" ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14, marginBottom: 40 }}>
            {filtered.map((item, i) => (
              <GridProductCard key={i} item={item} color={cat.color} bg={cat.bg} icon={sub.icon} />
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 40 }}>
            {filtered.map((item, i) => (
              <ListProductCard key={i} item={item} color={cat.color} bg={cat.bg} icon={sub.icon} index={i} />
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "#94a3b8", fontSize: 15 }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
            No products found for "<b>{search}</b>"
          </div>
        )}

        <button onClick={onBackToCategory}
          style={{ background: "#fff", color: cat.color, border: `2px solid ${cat.color}`, padding: "12px 30px", borderRadius: 11, fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
          ← Back to {cat.label}
        </button>
      </div>
    </section>
  );
}

// ─── GRID PRODUCT CARD ────────────────────────────
function GridProductCard({ item, color, bg, icon }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff", borderRadius: 14,
        border: `2px solid ${hovered ? color : "#e2e8f0"}`,
        padding: "18px 16px",
        transition: "all 0.22s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? `0 12px 32px ${color}18` : "0 2px 8px rgba(0,0,0,0.04)",
        display: "flex", flexDirection: "column", gap: 14,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 18 }}>{icon}</span>
        <span style={{ background: "#f0fdf4", color: "#16a34a", fontSize: 10, fontWeight: 800, padding: "3px 8px", borderRadius: 6 }}>✅ In Stock</span>
      </div>
      <p style={{ fontSize: 13.5, fontWeight: 700, color: "#0b1222", lineHeight: 1.5, flex: 1 }}>{item}</p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          style={{ flex: 1, background: hovered ? bg : "#f8fafc", color: hovered ? "#fff" : color, border: `1.5px solid ${hovered ? "transparent" : color}`, padding: "9px 0", borderRadius: 8, fontWeight: 700, fontSize: 12, cursor: "pointer", transition: "all 0.2s" }}>
          💬 Get Quote
        </button>
        <a href="https://wa.me/917696939529" target="_blank" rel="noreferrer"
          style={{ width: 36, height: 36, background: "#dcfce7", color: "#16a34a", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: 16, flexShrink: 0 }}>📲</a>
      </div>
    </div>
  );
}

// ─── LIST PRODUCT CARD ────────────────────────────
function ListProductCard({ item, color, bg, icon, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff", borderRadius: 12,
        border: `2px solid ${hovered ? color : "#e2e8f0"}`,
        padding: "14px 18px",
        display: "flex", alignItems: "center", gap: 14,
        transition: "all 0.2s ease",
        boxShadow: hovered ? `0 6px 20px ${color}15` : "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      <div style={{
        width: 36, height: 36, borderRadius: 10, flexShrink: 0,
        background: hovered ? bg : "#f1f5f9",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 13, fontWeight: 800, color: hovered ? "#fff" : "#94a3b8",
        transition: "all 0.2s",
      }}>
        {index + 1}
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 14, fontWeight: 700, color: "#0b1222", margin: 0 }}>{item}</p>
        <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 3 }}>{icon} Available • Request Quote</p>
      </div>
      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          style={{ background: hovered ? bg : "#f8fafc", color: hovered ? "#fff" : color, border: `1.5px solid ${hovered ? "transparent" : color}`, padding: "8px 18px", borderRadius: 8, fontWeight: 700, fontSize: 12, cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap" }}>
          Get Quote
        </button>
        <a href="https://wa.me/917696939529" target="_blank" rel="noreferrer"
          style={{ width: 36, height: 36, background: "#dcfce7", color: "#16a34a", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: 16 }}>📲</a>
      </div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────
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

  if (view === "subcategories" && activeCategory)
    return <SubcategoryScreen categoryKey={activeCategory} onBack={handleBackToCategories} onSelectSub={handleSelectSub} />;

  if (view === "items" && activeCategory && activeSubcategory)
    return <ItemsScreen categoryKey={activeCategory} subcategoryId={activeSubcategory} onBack={handleBackToCategories} onBackToCategory={handleBackToSubcategories} />;

  return <CategoryScreen onSelect={handleSelectCategory} />;
}

export default Products;