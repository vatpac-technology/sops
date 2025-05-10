---
  title: Perth TCU
---

--8<-- "includes/abbreviations.md"

| Name | ID | Callsign | Frequency | Login ID |
| -----| -- | -------- | --------- | ---------------- |
| **Perth Approach** |**PHA**| **Perth Approach**  | **123.600** | **PH_APP**| 
| <span class="indented">Perth Departures :material-information-outline:{ title="Non-standard position"}  |PHD| Perth Departures  | 118.700 | PH_DEP |
| <span class="indented">Perth Flow :material-information-outline:{ title="Non-standard position"} | PFL |   |    | PH_FMP  |

!!! abstract "Non-Standard Positions"
    :material-information-outline: Non-standard positions may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}.  
    Approval must be sought from the **bolded parent position** prior to opening a Non-Standard Position, unless [NOTAMs](https://vatpac.org/publications/notam){target=new} indicate otherwise (eg, for events).

## Airspace
The PH TCU is responsible for the airspace within 36 DME of the PH VOR, `SFC` to `F245`.  

!!! note
    A significant portion of the TMA airspace south of the PH VOR (roughly 20 DME onwards) is classified Class E with a lower limit of `F125`. RPT aircraft frequently enter/exit the TMA via this airspace, see [Departure Procedures](#departure-procedures) for more info.

When **PEA TCU** is online R155A & B is released to them from `A020` to `F160`. When R155A is active to `F160`, PH TCU airspace above R155A shall be released to **PEA TCU**.

### Reclassifications
#### JT CTR
JT CTR reverts to Class G when **JT ADC** is offline, and is administered by the relevant PH TCU controller.

See also: [JT ADC Offline](#jtpea-adc-offline).

### Airspace Division
The divisions of the airspace between **PHA**, and **PHD** change based on the Runway Mode.

!!! note
    The following diagrams do not include non PH TCU areas of responsibility such as JT CTR or PEA APP

#### 03/06
<figure markdown>
![03/06 TCU Structure](img/PH0306annotated.png){ width="700" }
  <figcaption>03/06 TCU Structure</figcaption>
</figure>

#### 21/24
<figure markdown>
![21/24 TCU Structure](img/PH2124annotated.png){ width="700" }
  <figcaption>21/24 TCU Structure</figcaption>
</figure>

## Runway Modes
Generally, YPPH operates on either the Southwest or Northeast runway plan, as below. Where strong winds dictate the use of only a single runway, this will be nominated in the ATIS.

### Southwest Plan
With the Southwest Plan active, all departures shall be assigned runway 21 by **PH ACD**. Arrivals shall be processed to either runway 21 or 24 based on their feeder fix, as per the table below:

| Feeder Fix | Assigned Runway |
| --- | --- |
| JULIM | 21 |
| SAPKO | 21 |
| IPMOR | 21 |
| KABLI | 24 |
| LAVEX | 24 |
| SOLUS | 24 |

!!! note
    Where an aircraft operationally requires runway 21, they shall be assigned that runway regardless of feeder fix.

### Northeast Plan
With the Northeast Plan active, departures via `AVNEX`, `OTLED`, `OLMAM`, `SOLUS`, and `OPEGA` shall be assigned runway 03 by **PH ACD**. All other departures shall be assigned runway 06. All arrivals shall be processed to runway 03.

## Scenic Flights
VFR aircraft may plan to conduct scenic flights within CTA in the PH TMA. A number of VFR routes exist to facilitate this, including:

| Name | Route | Preferred Altitude |
| --- | --- | --- |
| Victor 65 | `CTE-PCTY-HKE` | At or below `A015` |
| Victor 66 | `TLMI-HRR-CDM` | At or below `A035` |

Other levels are available at the discretion of the TCU controller but coordination may be required if adjacent TMA sectors are online. See [TCU Internal](#ph-tcu-internal) for coordination requirements.

Aircraft wishing to conduct a scenic flight over the Perth CBD should be cleared via the Victor 65 route. **No lateral separation standard exists between Victor 65 and the extended centreline of runway 06/24**, so controllers must ensure that an alternative form of separation assurance exists.

!!! phraseology
    **VH-CYF:** "Perth Approach, CYF, Cessna 172, overhead FREM, A015, received Bravo, request Victor 65"  
    **PHA:** "CYF, squawk 0542, remain clear of class C airspace"  
    **VH-CYF:** "Squawk 0542, remain OCTA, CYF"  

    *When clearance (reference traffic into/out of YPPH) is available:*  
    **PHA:** "CYF, cleared Victor 65, maintain A015, QNH 1012"  
    **VH-CYF:** "Cleared Victor 65, maintain A015, QNH 1012, CYF"

Aircraft departing YPPH and intending to conduct the Victor 65 route will be coordinated by **PH ACD**. See [Airways Clearances](#airways-clearances).

## Offline Towers
### JT/PEA ADC Offline
Due to the low level of CTA at these aerodromes, it is best practice to give airways clearance to aircraft at the holding point, to ensure departing aircraft can have uninterrupted climb.

!!! phraseology
    **AAC**: "Perth Approach, AAC, PC12, POB 8, IFR, Taxiing YPJT for YPKG, Runway 06L"  
    **PHA**: "AAC, Perth Approach, Squawk 3601, No Reported IFR Traffic, Report Ready at the Holding Point for Airways Clearance"  
    **AAC**: "Squawk 3601, Wilco, AAC"   

    **AAC**: "AAC, Ready Runway 06L, Request clearance"  
    **PHA**: "AAC, Cleared to YPKG via PH, Flight Planned Route. Make Visual Right turn DCT PH, Climb to A040"  
    **AAC**: "Cleared to YPKG via PH, Flight Planned Route. Make Visual Right turn DCT PH, Climb to A040, AAC"

### Departure Procedures
Aircraft departing the TMA to the south planned at `F130` or above will likely leave and re-enter CTA on climb. These aircraft should be instructed to leave and re-enter on climb to the standard assignable level (or other level as appropriate).

!!! phraseology
    **PHD**: "RXA2125, leave and re-enter controlled airspace on climb to F180, no reported IFR traffic"  
    **RXA2125**: "Leave and re-enter controlled airspace on climb to F180, RXA2125"

## Flow
### Local Knowledge
- Aircraft can be assigned the Xray or Victor STAR to reduce track miles
- Aircraft for RWY 21 can be radar vectored to the opposite side arc IAF to increase track miles in the TMA

### Flow Tables
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**.

=== "Jets"

    | STAR       | RWY 03 | RWY 06 | RWY 21 | RWY 24 |
    | ---------- | :-----: | :-----: | :-----: | :-----: |
    | **IPMOR A**    | 17     | 14     | 15     | 17     |
    | **JULIM A**    | 17     | 19     | 10^    | 10^    |
    | **JULIM V**    | 15     | 16     | -      | -      |
    | **JULIM X**    | 15     | -      | -      | -      |
    | **KABLI A**    | 15     | 16     | 15     | 15     |
    | **KABLI V**    | 13     | 14     | -      | -      |
    | **KABLI X**    | 13     | -      | -      | -      |
    | **SOLUS A**    | 11^    | 12     | 14     | 12^    |
    | **SOLUS V**    | 10^    | 11^    | -      | -      |
    | **SOLUS X**    | 10^    | -      | -      | -      |

=== "DH8D"

    | STAR       | RWY 03 | RWY 06 | RWY 21 | RWY 24 |
    | ---------- | :-----: | :-----: | :-----: | :-----: |
    | **DAYLR A**    | 12^    | 13     | -      | -      |
    | **DAYLR V**    | 10^    | 11^    | -      | -      |
    | **DAYLR X**    | 10^    | -      | -      | -      |
    | **IPMOR A**<br>*Feeder Fix: KAGMI*    | <br>17     | <br>14     | <br>15     | <br>17     |
    | **LAVEX A**    | 16     | 17     | 14     | 13     |
    | **LAVEX V**    | 14     | 14     | -      | -      |
    | **LAVEX X**    | 13     | -      | -      | -      |
    | **SAPKO A**    | 18     | 19     | 10^    | 10^    |
    | **SAPKO V**    | 15     | 16     | -      | -      |
    | **SAPKO X**    | 15     | -      | -      | -      |
    | **SOLUS A**    | 11^    | 12     | 14     | 12^    |
    | **SOLUS V**    | 10^    | 11^    | -      | -      |
    | **SOLUS X**    | 10^    | -      | -      | -      |

=== "Non-Jets"

    | STAR       | RWY 03 | RWY 06 | RWY 21 | RWY 24 |
    | ---------- | :-----: | :-----: | :-----: | :-----: |
    | **DAYLR A**    | 13^    | 15     | -      | -      |
    | **DAYLR V**    | 12^    | 13^    | -      | -      |
    | **DAYLR X**    | 11^    | -      | -      | -      |
    | **IPMOR A**<br>*Feeder Fix: KAGMI*    | <br>19     | <br>16     | <br>17     | <br>20     |
    | **LAVEX A**    | 18     | 20     | 16     | 15     |
    | **LAVEX V**    | 15     | 16     | -      | -      |
    | **LAVEX X**    | 15     | -      | -      | -      |
    | **SAPKO A**    | 20     | 22     | 11^    | 11^    |
    | **SAPKO V**    | 17     | 18     | -      | -      |
    | **SAPKO X**    | 17     | -      | -      | -      |
    | **SOLUS A**    | 12^    | 14     | 16     | 14^    |
    | **SOLUS V**    | 12^    | 13^    | -      | -      |
    | **SOLUS X**    | 11^    | -      | -      | -      |

#### Corrections

| Situation | Correction |
| ----- | ----- |
| Assigned a reduced speed | +1 min, *except ^* | 
| Over 40kt of head/tailwind component | +1 min for headwind<br>-1 min for tailwind |

#### Assumptions
- Nil wind
- The feeder fix for all STARs is the waypoint coinciding with the title of the STAR, except:
    - The feeder fix for the IPMOR STAR is **KAGMI**
- Aircraft on the SOLUS STAR to RWY 21/24 will be vectored from MOCUR to the IAF for ILS
- Aircraft on the IPMOR STAR to RWY 24 will be vectored from WOOFY to the IAF for the ILS

### Calculator
<script type="module" src="../../javascripts/flowCalculatorLogic.js" defer onerror="alert('Flow Calculator failed to load. Please refresh the page or submit a Helpdesk ticket.')"></script>
The following calculator will generate a landing time from a feeder fix ETA, or the reverse.

=== "Landing Time"
    <div class="flowCalculatorLandingTime" data-aerodrome="YPPH"></div>

=== "Feeder Fix Time"
    <div class="flowCalculatorFeederFixTime" data-aerodrome="YPPH"></div>

## Coordination
### Enroute
#### Departures
Voiceless for all aircraft:
 
- Tracking via a Procedural SID terminus; and  
- Assigned the lower of `F180` or the `RFL`

!!! note
    Aircraft are *not required* to be tracking via the **SID procedure**, simply tracking via any of the terminus waypoints (Regardless of *departure airport* or *assigned SID*) is sufficient to meet the criteria for **voiceless coordination**

All other aircraft going to HYD(PIY) CTA must be **Heads-up** Coordinated by PH TCU prior to the boundary.

!!! phraseology
    <span class="hotline">**PH TCU** -> **HYD(PIY)**</span>: "PFY9916, with your concurrence, will be assigned F130, for my separation with JTE654"  
    <span class="hotline">**HYD(PIY)** -> **PH TCU**</span>: "PFY9916, concur F130"  

#### Arrivals
Voiceless for all aircraft:

- With ADES **YPPH**; and  
- Assigned a STAR; and  
- Assigned `A090`

All other aircraft coming from HYD(PIY) CTA will be **Heads-up** Coordinated to PH TCU.

### PH ADC
#### Auto Release
[Next](../controller-skills/coordination.md#next) coordination is **not** required for aircraft that are:   

- Departing from a runway nominated on the ATIS; and  
- Assigned the standard assignable level; and  
- Assigned a **Procedural SID**

All other aircraft require a 'Next' call to PH TCU.

The Standard Assignable level from PH ADC to PH TCU is:

| Aircraft | Level |
| -------- | ----- |
| All | The lower of `A050` and `RFL` |

#### Airways Clearances
The controller assuming responsibility of ACD shall give [heads-up](../controller-skills/coordination.md#airways-clearance) coordination to the relevant PH TCU controller prior to the issue of the following clearances:  

- VFR departures into PH TCU CTA
- Aircraft using a runway not on the ATIS 

### PH TCU Internal
Voiceless coordination is in place for all aircraft processed by the Victor 65 and 66 routes in accordance with the table below.

| Route | Non-Coordination Levels | Label Data |
| --- | --- | --- |
| Victor 65 | At or below `A015` | `V65` |
| Victor 66 | At or below `A035` | `V66` |

Other levels are available at the discretion of the TCU controller but coordination may be required if adjacent TMA sectors are online.

All other aircraft transiting between internal PH TCU boundaries must be heads-up coordinated.

!!! phraseology
    <span class="hotline">**PHA** -> **PHD**</span>: "via PH, FD123"  
    <span class="hotline">**PHD** -> **PHA**</span>: "FD123, A090"    

### JT ADC
#### Airspace
JT ADC is responsible for the Class D airspace in the JT CTR `SFC` to `A015`.

Refer to [Reclassifications](#jt-ctr) for operations when JT ADC is offline.

#### Departures
When the aircraft is ready for departure, JT ADC will coordinate with the relevant PH TCU controller above them for permission to release the aircraft into their CTA.

!!! phraseology
    <span class="hotline">**JT ADC** -> **PH TCU**</span>: "Next, FD420, runway 24R"  
    <span class="hotline">**PH TCU** -> **JT ADC**</span>: "FD420, Unrestricted"  
    <span class="hotline">**JT ADC** -> **PH TCU**</span>: "FD420"  

The Standard Assignable level from JT ADC to PH TCU is the lower of `A030` or the `RFL`, any other level must be prior coordinated.

#### Arrivals/Overfliers
PH TCU will heads-up coordinate arrivals/overfliers from Class C to JT ADC prior to **5 mins** from the boundary.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to JT ADC, unless JT ADC nominates a restriction.  
VFR aircraft require a level readback.

!!! phraseology
    <span class="hotline">**PH TCU** -> **JT ADC**</span>: "via RNAV-Z RWY 06L, FD416, circling to land RWY 24R"  
    <span class="hotline">**JT ADC** -> **PH TCU**</span>: "FD416, RNAV-Z RWY 06L with a circle to land RWY 24R"  

### PE TCU
**All aircraft** transiting between PE TCU and PH TCU must be heads-up coordinated prior to the boundary.

!!! phraseology
    <span class="hotline">**PH TCU** -> **PE TCU**</span>: "via PH, VIPR22, Requesting DCT PEA for ILS-Z 18L"   
    <span class="hotline">**PE TCU** -> **PH TCU**</span>: "VIPR22, DCT PEA, A035"  
    <span class="hotline">**PH TCU** -> **PE TCU**</span>: "A035, VIPR22"   