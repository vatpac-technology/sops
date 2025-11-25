---
  title: Darwin (YPDN)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name              | Callsign              | Frequency   | Login ID      |
| ----------------- | --------------------- | ----------- | ------------- |
| **Darwin ADC**    | **Darwin Tower**      | **133.100** | **DN_TWR**    |
| **Darwin SMC**    | **Darwin Ground**     | **121.800** | **DN_GND**    |
| **Darwin ACD**    | **Darwin Delivery**   | **126.800** | **DN_DEL**    |
| **Darwin ATIS**   |                       | **128.250** | **YPDN_ATIS** |

## Airspace
ADC owns the airspace within the DN CTR (`SFC`–`A010`). This airspace is designed to facilitate the processing of helicopter scenic flights and low-level helicopter circuits.  
The CTR extends 7NM from the thresholds of runways 11 and 29 but does not including the Robertson Barracks transit zone.  

ADC may request DN TCU (`SFC`–`A020`) from DN TCU to facilitate fixed-wing circuit operations:  
a) Fixed-wing circuit operations are typically conducted at Delissaville (YDLV) due to high traffic density at Darwin  
b) ADC may deny requests for circuits if IFR traffic may be unduly delayed  

<figure markdown>
![DN ADC Airspace](img/dnadc.png){ width="700" }
  <figcaption>DN ADC Airspace</figcaption>
</figure>

## Maneuvering Area 
### Standard Taxi Routes
Aircraft transiting to or from the Southern and Northern GA should follow the following standardised taxi routes:  
a) Outbound via V1  
b) Inbound via Y1  

Traffic permitting, aircraft above 136,000kg MTOW shall be entered/exited for RWY 11/29 from taxiways B2, C3, D or E2 and backtracked as required.  

Taxiway V has a passing bay, located adjacent to the ARFF section. The passing bay is the preferred location for engine run-ups, no longer than 3 minutes  

## VFR Operations
VFR aircraft are required to track via one of the published VFR Routes (as shown on the Darwin VTC). VFR routes shall be assigned based on the destination radial from Darwin, as per below:  

|Outbound Radial |Assigned VFR Route|
|---|---|
|360 – 040 |VFR Route 1|
|041 – 084 |VFR Route 2|
|085 – 124 |VFR Route 3|
|125 – 180 |VFR Route 4|
|181 – 224 |VFR Route 5|
|225 – 359| Direct|

!!! tip
    If a VFR aircraft has not planned via a VFR route as above, use the phraseology: “*ABC, cleared amended route VFR route 1, climb to A020, squawk 4512*”


## Runway Modes
### Preferred Runway Modes
If winds are too great, single runway operations may be necessary (eg, Runway 11 for Arrivals and Departures). However, pending wind limitations (Crosswind <20kts, Tailwind <5kts), the following runway modes are to be used:

| Mode | Arrivals | Departures |
| ---- | -------- | ---------- |
| 29AD36A | 29 & 36 | 29 |
| 29AD18A | 29 & 18 | 29 |
| 11AD36A | 11 & 36 | 11 |
| 11AD18A | 11 & 18 | 11 |

### Special Runway Operations
#### LAHSO
!!! warning "Important"
    Due to its operational complexity, LAHSO **must be authorised by a senior VATPAC staff member or a nominated event coordinator**.

    Very little benefit is achieved by running LAHSO without a flow controller and it is almost exclusively reserved for our busiest events.

Detailed procedures exist to ensure that controllers are aware of their responsibilities when performing LAHSO. See [Controller Skills](../../controller-skills/runwaymanagement.md#lahso) for more information.

#### Weather Conditions
LAHSO may only be used where the weather conditions meet the following minimum requirements:

| Element | Criteria |
| ------- | -------- |
| Cloud Ceiling | `A030` or higher |
| Visibility | 8km or greater |
| Surface Condition | Dry |
| Windshear | None Reported |

Two simultaneous landings may be conducted by both day and night. A simultaneous takeoff and landing may only be conducted by day.

#### Runway Mode
The only approved LAHSO mode at YPDN is **29AD36A**. Runway 36 is considered the active runway, while runway 29 is considered the passive runway.

### Circuits
VFR aircraft that will operate only in ADCs airspace shall be assigned SSR code 0100  

Circuit altitude will depend on the type of aircraft. Assign circuit altitudes for the following aircraft types:  

| Aircraft | Altitude |
| ----- | ---- |
| Military Jet | `A020` |
| Other Jet | `A015` |
| Non-Jet | `A010` |
| Helicopter | `A010` | 

## SID Selection 
**Jet** Aircraft planned via **HELLI**, **JULIE**, **OCTOB** or **RUPEG** shall be assigned the **Procedural SID** that terminates at the appropriate waypoint. Jet Aircraft **not** planned via any of these waypoints shall receive amended routing via the most appropriate SID terminus, unless the pilot indicates they are unable to accept a Procedural SID.

**Non-Jet** Aircraft planned via **LAKUP**, **OLTAS**, **RUSKA** or **VANDI** shall be assigned the **Procedural SID** that terminates at the appropriate waypoint.

a) Aircraft using Runway 18/36; or  
b) Aircraft that cannot accept a Procedural SID  
Shall be assigned the **Radar SID**.

### Non-RNAV Departures
For non-RNAV approved IFR aircraft with a wake turbulence category of medium or greater, issue a Radar SID  
For non-RNAV approved IFR aircraft with a wake turbulence category of light, issue a visual departure or Radar SID  

## ATIS
### Operational Info
#### LAHSO
When [LAHSO](#lahso) is in use, the ATIS OPR INFO shall include:  
`LAND AND HOLD SHORT OPERATIONS IN PROGRESS`

## Coordination
### DN TCU
[Next](../../controller-skills/coordination.md#next) coordination is required from DN ADC to DN TCU for all aircraft.

The Standard Assignable Level from  **DN ADC** to **DN TCU** is:

| Aircraft | Level |
| -------- | ----- |
| IFR aircraft assigned a **Procedural** SID | The lower of `F180` and `RFL` |
| IFR aircraft **not** assigned a **Procedural** SID | The lower of `A030` and `RFL` |
| VFR aircraft | The lower of `A020` and `RFL` |

## Charts
!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}