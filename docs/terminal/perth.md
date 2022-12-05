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
The Perth TCU spans a 36nm Radius around PH from `SFC` to `F245`.   
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
    **ABC**: "Perth Approach, ABC, PC12, POB 8, IFR, Taxiing YPJT for YPKG, Runway 06L"  
    **PH TCU**: "ABC, Perth Approach, Squawk 3601, No Reported IFR Traffic, Report Ready at the Holding Point for Airways Clearance"  
    **ABC**: "Squawk 3601, Wilco, ABC"   

    **ABC**: "ABC, Ready Runway 06L, Request clearance"  
    **PH TCU**: "ABC, Cleared to YPKG via PH, Flight Planned Route. Make Visual Right turn DCT PH, Climb to A040"  
    **ABC**: "Cleared to YPKG via PH, Flight Planned Route. Make Visual Right turn DCT PH, Climb to A040, ABC"  
    `AIP GEN 3.4`  

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
Voiceless coordination is in place from AD TCU to PIY (and subsectors) for aircraft tracking via a SID and:  
Planned at or above `F180`: `Assigned F180`  
Planned below `F180`: `Assigned the RFL`  

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
    `AIP GEN 3.4`

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

### JT SMC / PH TCU

#### Taxi Call

For aircraft planned into the overlying class C airspace, an airways clearance must be coordinated with the TCU controller responsible for Perth Approach or Departures (dependant on runway configuation at PH).  This is achieved by performing 'Taxi' coordination and then relaying the clearance to the aircraft when they are ready in the run up bays.

!!! example
    <span class="coldline">**JT SMC** -> **PH TCU**</span>: "Taxis FD420, Kalbarri, runway 24R"  
    <span class="coldline">**PH TCU** -> **PH SMC**</span>: "FD420, cleared to Kalbarri via RECKS flight planned route, MANTL3 depature, climb via SID A030, squawk 3342"  
    <span class="coldline">**JT SMC** -> **PH TCU**</span>: "Cleared to Kalbarri via RECKS flight planned route, MANTL3 depature, climb via SID A030, squawk 3342, FD420" 


### JT ADC / PH TCU

#### Next Call

When the aircraft is ready for departure, Tower will coordinate with the relevant Class C sector above them for permission to release the aircraft into their CTA.

!!! example
    <span class="hotline">**JT ADC** -> **PH TCU**</span>: "Next, FD420, runway 24R"  
    <span class="hotline">**PH TCU** -> **JT ADC**</span>: "FD420, unrestricted"

### PH TCU / JT ADC

#### Arrival Coordination

PH TCU will coordinate with JT ADC for incoming IFR arrivals on either Visual Tracking, RNAV or NDB approaches.

##### Visual Tracking
!!! example
    <span class="coldline">**PH TCU** -> **JT ADC**</span>: "Estimate, UJN via CNB time 02."  
    <span class="coldline">**JT ADC** -> **PH TCU**</span>: "UJN"

##### IAP Tracking
!!! example
    <span class="coldline">**PH TCU** -> **JT ADC**</span>: "Estimated approach time, FD416 via RNP at time 59"  
    <span class="coldline">**JT ADC** -> **PH TCU**</span>: "Via RNP, FD416"

Given that the instrument approach procedure will terminate inside another controller's airspace, TCU controllers must obtain a clearance from JT ADC prior to issuing an approach clearance to an aircraft.  

!!! example 
    <span class="hotline">**PH TCU** -> **JT ADC**</span>: "Request clearance for final, FD416"  
    <span class="hotline">**JT ADC** -> **PH TCU**</span>: "FD416 cleared RNAV-Z 24R"  
    <span class="hotline">**PH TCU** -> **JT ADC**</span>: "Cleared RNAV-Z 24R, UJN" 

### PH TCU / PEA ADC
Reserved

