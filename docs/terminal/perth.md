---
  title: Perth TCU
---

--8<-- "includes/abbreviations.md"

| Name | ID | Callsign | Frequency | Login Identifier |
| -----| -- | -------- | --------- | ---------------- |
| **Perth Approach** |**PHA**| **Perth Approach**  | **123.600** | **PH_APP**| 
| Perth Departures†  |PHD| Perth Departures  | 118.700 | PH_DEP |
| Perth Flow† | PHF |   |    | PH-FLW_CTR  |

† *Non-standard positions* may only be used in accordance with [VATPAC Ratings and Controller Positions Policy](https://vatpac.org/publications/policies)

## Airspace
The Vertical limits of the PH TCU are `SFC` to `F245`.     
PH TCU is responsible for the Perth TCU, except:      
R155A & B when **PEA TCU** is online from `A020` to `F160`. When R155A is active to `F160`, PH TCU airspace above R155A shall be released to **PEA TCU**  

JT CTR reverts to Class G when **JT ADC** is offline, and is administered by the relevant PH TCU controller.      

## Arrival Procedures
### YPJT Arrivals
IFR RNAV equipped arrivals to Jandakot planned via a fix listed shall be cleared via STAR dependent on Perth active runway:

| Perth Active Runway | 03/06 | 21/24 |
| ------------------- | ----- | ----- |
| **North**<br>JULIM (Jet)<br>CONNI (Non-Jet) | <br>JT 2G / WOORA | <br>DCT JT |
| **East**<br>BEVLY (Jet)<br>GRENE (Non-Jet)<br>HAMTN (Non-Jet) | <br>JT 2G / BEVLY<br>JT 2G / GRENE<br>JT 2W / HAMTN | <br>JT 2R / BEVLY<br>JT 2R / GRENE<br>N/A 

### YPEA Arrivals

Reserved

## JT/PEA ADC Offline
Due to the low level of CTA at these aerodromes, it is best practice to give airways clearance to aircraft at the holding point, to ensure departing aircraft can have uninterrupted climb.

!!! example
    **AAC**: "Perth Approach, AAC, PC12, POB 8, IFR, Taxiing YPJT for YPKG, Runway 06L"  
    **PH TCU**: "AAC, Perth Approach, Squawk 3601, No Reported IFR Traffic, Report Ready at the Holding Point for Airways Clearance"  
    **AAC**: "Squawk 3601, Wilco, AAC"   

    **AAC**: "AAC, Ready Runway 06L, Request clearance"  
    **PH TCU**: "AAC, Cleared to YPKG via PH, Flight Planned Route. Make Visual Right turn DCT PH, Climb to A040"  
    **AAC**: "Cleared to YPKG via PH, Flight Planned Route. Make Visual Right turn DCT PH, Climb to A040, AAC"

## Airspace Division

The divisions of the airspace between **PHA**, and **PHD** change based on the Runway Mode.

!!! note
    The following diagrams do not include non PH TCU areas of responsibility such as JT CTR or PEA APP

### 03/06
<figure markdown>
![03/06 TCU Structure](img/PH0306annotated.png){ width="700" }
  <figcaption>03/06 TCU Structure</figcaption>
</figure>

### 21/24
<figure markdown>
![21/24 TCU Structure](img/PH2124annotated.png){ width="700" }
  <figcaption>21/24 TCU Structure</figcaption>
</figure>

## Coordination

### PH TCU / ENR
#### Departures
Voiceless coordination is in place from PH TCU to PIY (and subsectors) for aircraft assigned the lower of `F180` or the `RFL`, and tracking via a Procedural SID terminus.

Any aircraft not meeting the above criteria must be prior coordinated to ENR.

!!! example
    <span class="hotline">**PH TCU** -> **PIY**</span>: "PFY9916, with your concurrence, will be assigned F130, for my separation with JTE654"  
    <span class="hotline">**PIY** -> **PH TCU**</span>: "PFY9916, concur F130"  

#### Arrivals
The Standard assignable level from ENR to PH TCU is `A090`. All other levels must be prior coordinated

### PH ADC / PH TCU
#### Auto Release

"Next" Coordination is a procedure where the PH ADC controller gives a heads-up to the PH TCU controller about an impending departure. The PH TCU controller will respond by assigning a heading to the aircraft, for the PH ADC controller to pass on with their takeoff clearance.

!!! example
    <span class="hotline">**PH ADC** -> **PH TCU**</span>: "Next, ABC, runway 03"  
    <span class="hotline">**PH TCU** -> **PH ADC**</span>: "ABC, Heading 010, unrestricted"  
    <span class="hotline">**PH ADC** -> **PH TCU**</span>: "Heading 010, unrestricted, ABC"

"Next" Coordination to PH TCU is additionally required for:   
    a) Aircraft on a non-standard level.  
    b) Aircraft departing from a runway not nominated in the ATIS.  

The PH TCU controller can suspend/resume Auto Release at any time, with the concurrence of PH ADC.

"Next" Coordination to PH TCU is not required for aircraft assigned a **Procedural SID** and the Standard Assignable Level.

### PH TCU Internal

All aircraft transiting between internal PH TCU boundaries must be heads-up coordinated.

!!! example
    <span class="hotline">**PHA** -> **PHD**</span>: "via PH, FD123"  
    <span class="hotline">**PHD** -> **PHA**</span>: "FD123, A090"   

### PH TCU / JT ADC

### Clearance
It is the responsibility of **PH TCU** to provide clearance to IFR aircraft on the ground at Jandakot.
Clearance should contain squawk code, initial altitude (normally `A015`) and SID. It is **JT ADC** responsibility to assign runway.

### Next Call
When the aircraft is ready for departure, JT ADC will coordinate with the relevant PH TCU controller above them for permission to release the aircraft into their CTA.

!!! example
    <span class="hotline">**JT ADC** -> **PH TCU**</span>: "Next, FD420, runway 24R"  
    <span class="hotline">**PH TCU** -> **JT ADC**</span>: "FD420, Unrestricted"  
    <span class="hotline">**JT ADC** -> **PH TCU**</span>: "FD420"  

The Standard Assignable level from JT ADC to PH TCU is the lower of `A015` or the `RFL`, any other level must be prior coordinated.

### Arrivals/Overfliers
PH TCU will heads-up coordinate arrivals/overfliers from Class C to JT ADC prior to **5 mins** from the boundary.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to JT ADC, unless JT ADC nominates a restriction.  
VFR aircraft require a level readback.

!!! example
    <span class="hotline">**PH TCU** -> **JT ADC**</span>: "via RNAV-Z RWY 06L, FD416, circling to land RWY 24R"  
    <span class="hotline">**JT ADC** -> **PH TCU**</span>: "FD416, RNAV-Z RWY 06L with a circle to land RWY 24R"  

### PH TCU / PEA ADC
Reserved.

