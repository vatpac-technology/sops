---
  title: 6. Brisbane (YBBN)
---

--8<-- "includes/abbreviations.md"

## Runway Modes

| Priority | Mode |
| ---------- | --- |
|  1 | 01 PROPS |
|  2  | 19 PROPS |

*Single Runway* Operations and *SODPROPS* shall not be used.

## Airways Clearance Delivery (ACD)
### Flight Plan Compliance
Ensure **all flight plans** are checked for compliance with the approved WF Route:

`DCT BN H91 IGDAM H652 TESAT DCT`

### WorldFlight Teams
[WorldFlight Teams](../../#official-team-callsigns) shall have `STS/STATE` added to their remarks, and `WF TEAM` added to their Global Ops Field, to ensure they receive priority.

### Strip Setup
By default, vatSys strips will be set to show in *Alphabetical* Order.  
This must be changed to be ordered by **Time**, as shown below.

<figure markdown>
![Strips Menu](../img/strip1.png){ width="500" }
    <figcaption>Strips Menu</figcaption>
</figure>

<figure markdown>
![Change to Time](../img/strip2.png){ width="500" }
    <figcaption>Change to Time</figcaption>
</figure>

### Runway Selection
Runway **01R/19R** will be the primary runway for departures.

**Heavy** and **Super** aircraft **must** be assigned Runway **01R/19R**.

**Medium** and **Light** aircraft *may* be assigned Runway **01L/19L** at the discretion of the ACD controller to balance departing traffic.

!!! note
    Be mindful that 01L/19L Departures will incur additional delays, due to it being the primary arrival runway.

### SID Selection

| Runway | SID |
| ---------- | --- |
| 01L  | BN4 |
| 01R  | SANEG1 |
| 19L  | BN4 |
| 19R  | BN4 |

### PDCs
PDCs will be in use by default, to avoid frequency congestion. ACD shall send a PDC to each aircraft as they connect. Upon successful readback of the PDC, ACD shall direct the pilot to contact SMC when ready for pushback or taxi.

## Surface Movement Control (SMC)
### Pushback Delays
SMC Domestic and South will be responsible for delaying aircraft's pushback requests, in order to avoid overloading the taxiways.

If there are more than **5** aircraft in the queue at the Holding Point for *any runway*, do not approve any more pushback requests.

#### OzStrips
All aerodrome controllers must be familiar with the VATPAC [recommended workflow](../../client/towerstrips.md#recommended-workflow) for OzStrips.

Ensure the Queue function is used to actively to keep track of the order of requests.

## Tower Control (ADC)
### Departure Spacing
Ensure that a minimum of **90 second** spacing is applied between subsequent departures from the same runway.

### BN4 Assigned Heading
Runway 01L, 19L and 19R Departures will be assigned the **BN4** RADAR SID, with the following Assigned Heading:

| Runway | Assigned Heading |
| ---------- | --- |
| 01L      | H340 |
| 19L      | H160 |
| 19R      | H210 |

## ATIS
### Approach Expectation
#### 01 PROPS

| Cloud Base             | Visibility     | Approach                             |
| -----------------------| -------------- | -------------------------------------|
| >3000FT                | >5000M         | `EXP INDEP VISUAL APCH. DO NOT PASS THRU ASSIGNED RWY CL` |
| Between 2000FT & 3000FT| >5000M         | `EXP INSTR APCH THEN INDEP VISUAL APCH WHEN VISUAL`|
| Below 2000FT **or**    | <5000M         | `EXP INSTR APCH`                |

#### 19 PROPS

| Cloud Base / Visibility             | Approach                             |
| -----------------------| -------------------------------------|
| >1700FT **and** >5000m  | `EXP INDEP VISUAL APCH. DO NOT PASS THRU ASSIGNED RWY CL` |
| <1700FT **or** <5000m    | `EXP INSTR APCH`                |

### OPR INFO
The ATIS OPR INFO shall include:  
`EXP CLR VIA PDC. INDEPENDENT PARL APPROACHES AND DEPS IN PROGRESS`

## Coordination
### BDN/BDS
#### Auto Release
Avilable for aircraft assigned:

| Runway | SID | Assigned Heading |
| ---------- | --- | --- |
| 01L  | BN4 | H340 |
| 01R  | SANEG1 | - |
| 19L  | BN4 | H160 |
| 19R  | BN4 | H210 |

#### Departures Controller
Departures from Runway 01L and 19L shall be handed off to BDN.  
Departures from Runway 01R and 19R shall be handed off to BDS.