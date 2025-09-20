---
  title: Darwin TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | ID      | Callsign       | Frequency        | Login ID              |
| ------------------ | --------------| -------------- | ---------------- | --------------------------------------|
| **Darwin Approach East**    |**DAE**| **Darwin Approach**  | **125.200**         | **DN_APP**          |
| <span class="indented">Darwin Approach West :material-information-outline:{ title="Non-standard position"}   |DAW| Darwin Approach   | 134.100         | DN-W_APP                                  |

!!! abstract "Non-Standard Positions"
    :material-information-outline: Non-standard positions may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}.  
    Approval must be sought from the **bolded parent position** prior to opening a Non-Standard Position, unless [NOTAMs](https://vatpac.org/publications/notam){target=new} indicate otherwise (eg, for events).

## Airspace
### TCU
DN TCU owns the airspace within a 40NM radius of the DN DME from `SFC`-`FL180`.

### Airspace Division
When both DN TCU positions are opened, DN TCU is split east and west along the runway 18/36 extended centreline. DAW owns the airspace to the west of the line and DAE owns the airspace to the east of the line  

<figure markdown>
![Default DN TCU Upper Limits](img/dntcu.png){ width="700" }
  <figcaption>DN TCU Airspace</figcaption>
</figure>

### ADC
ADC owns the airspace within the DN CTR (`SFC`-`A010`). This airspace is designed to facilitate the processing of helicopter scenic flights and low-level helicopter circuits.  
The CTR extends 7NM from the thresholds of runways 11 and 29 but does not including the Robertson Barracks transit zone.  

ADC may request DN TCU (`SFC`-`A020`) from DN TCU to facilitate fixed-wing circuit operations. Fixed-wing circuit operations are typically conducted at Delissaville (YDLV) due to high traffic density at Darwin.

<figure markdown>
![DN ADC Airspace](img/dnadc.png){ width="700" }
  <figcaption>DN ADC Airspace</figcaption>
</figure>

## Local Procedures
### IFR Training Area
IFR aircraft requiring an area for training shall be cleared to operate in the North Eastern Training Area (NETA)  
The NETA is defined as the area between DN 360R-060R from 15NM-30NM DN DME.  
Aircraft are to be cleared to the NETA via the 030R outbound. Vertical limits are to be specified by DAW prior to issuing airways clearance  

### Designated Fuel Dumping Area
Other than in an emergency, the designated fuel jettison area is:

- Over water in the Beagle Gulf  
- Between the 320 and 020 TACAN radials  
- `A060` or above  

### Robertson Barracks
Darwin TCU is not responsible for traffic or separation services within the A005 step to the east of Darwin. This step is designed for low-level VFR MIL helos to transit in/out of Robertson Barracks without the need for communication with Darwin TCU.

### YPDN VFR Departures
VFR aircraft generally track via designated VFR routes, as shown on the Darwin VTC.

## Runway Modes
### LASHO
!!! warning "Important"
    Due to its operational complexity, LAHSO **must be authorised by a senior VATPAC staff member or a nominated event coordinator**.

Detailed procedures exist to ensure that controllers are aware of their responsibilities when performing LAHSO. See [Controller Skills](../controller-skills/runwaymanagement.md#lahso) for more information.

## Flow
### Local Knowledge
- Aircraft may be assigned the Whiskey STAR to reduce track miles
- Non-jet aircraft may be assigned runway 18/36 (when suitable) to increase arrival rate
- LAHSO runway mode will increase arrival rate when aircraft of different categories are inbound (see [activation prerequisites](#lahso) for specific LAHSO approvals required)

### Flow Tables
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**.

=== "Jets & DH8D"
    | STAR       | RWY 11 | RWY 29 |
    | ---------- | :------: | :------: |
    | **ANUPA A/X**<br>*Feeder Fix: SUDAG*  | <br>12^    | <br>18     |
    | **GATOR A/X**  | 17     | 13     |
    | **VEGPU A/X**  | 13     | 8^     |
    | **VEGPU W**    | 11^    | -      |
    | **WANGI A/X**  | 15     | 17     |
    | **WANGI W**    | 14     | 15     |

=== "Non-Jets"
    | STAR       | RWY 11 | RWY 29 |
    | ---------- | :------: | :------: |
    | **ANUPA A/X**<br>*Feeder Fix: SUDAG*  | <br>13^    | <br>21     |
    | **GATOR A/X**  | 19     | 14     |
    | **VEGPU A/X**  | 15     | 9^     |
    | **VEGPU W**    | 13^    | -      |
    | **WANGI A/X**  | 17     | 19     |
    | **WANGI W**    | 16     | 17     |

#### Corrections

| Situation | Correction |
| ----- | ----- |
| Assigned a reduced speed | +1 min, *except ^* | 
| Over 40kt of head/tailwind component | +1 min for headwind<br>-1 min for tailwind |

#### Assumptions
- Nil wind
- The feeder fix for all STARs is the waypoint coinciding with the title of the STAR, except:
    - The feeder fix for the ANUPA STAR is **SUDAG**

### Calculator
<script type="module" src="../../javascripts/flowCalculatorLogic.js" defer onerror="alert('Flow Calculator failed to load. Please refresh the page or submit a Helpdesk ticket.')"></script>
The following calculator will generate a landing time from a feeder fix ETA, or the reverse.

=== "Landing Time"
    <div class="flowCalculatorLandingTime" data-aerodrome="YPDN"></div>

=== "Feeder Fix Time"
    <div class="flowCalculatorFeederFixTime" data-aerodrome="YPDN"></div>

## Coordination
### Enroute
#### Departures
Voiceless for all aircraft:

- Tracking via a Procedural SID terminus; and  
- Assigned the lower of `F180` or the `RFL`

!!! note
    Aircraft are *not required* to be tracking via the **SID procedure**, simply tracking via any of the terminus waypoints (Regardless of *departure airport* or *assigned SID*) is sufficient to meet the criteria for **voiceless coordination**

All other aircraft going to TRT CTA must be **Heads-up** Coordinated by DN TCU prior to the boundary.

!!! phraseology
    <span class="hotline">**DN TCU** -> **TRT**</span>: "PFY1234, with your concurrence, will be assigned F160, for my separation with JTE654"  
    <span class="hotline">**TRT** -> **DN TCU**</span>: "PFY1234, concur F160"  

#### Arrivals
Voiceless for all aircraft:

- With ADES **YPDN**; and  
- Assigned a STAR; and  
- Assigned `A100`

All other aircraft coming from TRT CTA will be **Heads-up** Coordinated to DN TCU.

### ADC
#### Auto Release
[Next](../controller-skills/coordination.md#next) coordination is required from DN ADC to DN TCU for all aircraft.

The Standard Assignable Level from  **DN ADC** to **DN TCU** is:

| Aircraft | Level |
| -------- | ----- |
| IFR aircraft assigned a **Procedural** SID | The lower of `F180` and `RFL` |
| IFR aircraft **not** assigned a **Procedural** SID | The lower of `A030` and `RFL` |
| VFR aircraft | The lower of `A020` and `RFL` |
 
### DN TCU Internal
Heads-up coordination is not required between DAW and DAE for:

- Departures on a Procedural SID and assigned `F180`  
- Arrivals on a STAR assigned `A060`  

All other aircraft must be heads-up coordinated prior to the airspace boundary  

!!! phraseology
    <span class="hotline">**DAW** -> **DAE**</span>: "via DN, CFH23"  
    <span class="hotline">**DAE** -> **DAW**</span>: "CFH23, A090"   

## Charts
!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}