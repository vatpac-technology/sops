---
  title: Operations
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login Identifier                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| Bankstown TWR  | Bankstown Tower  | 132.800          | BK_TWR                                 |
| Bankstown SMC   | Bankstown Ground   | 119.900          | BK_GND                                 |
| Bankstown ATIS        |                | 120.900          | YSBK_ATIS                                |

 
In the absence of an SMC controller, TWR shall assume the SMC responsibilities.
### Maneuvering Area Responsibility
<figure markdown>
![YSBK Maneuvering Area](img/ysbk_maneuvring_area.png){ width="500" }
  <figcaption>Maneuvering Area</figcaption>
</figure>

## Airspace
Tower airspace is defined as between SFC to 1500 FT.

<figure markdown>
![Bankstown Tower Airspace](img/BKTWR.png){ width="700" }
  <figcaption>Bankstown Tower Airspace</figcaption>
</figure>

## Circuit Direction
The circuit direction changes depending on time of day and runway being used.

| Runway | Day  | Night |
| ----------------| --------- | ---------- |
| 11L    | Left       | Right        |
| 11C   | Left | Right  |
| 11R    | Right | -  |
| 29L     | Left        | -  |
| 29C    | Right | Left         |
| 29R    | Right        | Left  |

*Circuits to be flown at A010

## Parallel Runway Operations

#### Go-arounds / Missed Approaches
When operating under PROPS, go around headings shall diverge from the extended centreline by at least 30° away from the parallel runway. Aircraft on the ILS may follow the Published Missed Approach in order to meet this requirement.  
Go Arounds / Missed Approaches shall be coordinated to the SY TCU as per the standard procedure.

#### Runway Selection
Unless operationally required, aircraft shall be assigned the following runways for departure when PROPS are in progress:

| Aircraft tracking | Runway  |
| ----------------| --------- |
| via KADOM   | 16R/34L      |
| via WOL | 16R/34L |
| via RIC| 16R/34L |
| via ENTRA | 16L/34R |
| Other aircraft: |
| To the NORTH and EAST | 16L/34R |
| To the SOUTH and WEST | 16R/34L |

#### SID Selection

Jet Aircraft planned via **KADOM**, **WOL**, **RIC**, or **ENTRA**, shall be assigned the **Procedural SID** that terminates at the appropriate waypoint.

!!! example
    Jet Aircraft planned via ENTRA, assigned runway 16L, shall be given KEVIN6 departure, ENTRA transition.

Jet Aircraft **not** planned via **KADOM**, **WOL**, **RIC**, or **ENTRA**, and **not** using Runway 25, shall be assigned the **Procedural SID** appropriate to their runway, with the **RADAR** transition.

!!! example
    Jet Aircraft planned via EVONN, assigned runway 34R, shall be given MARUB6 departure, RADAR transition.

!!! note
    Heavier aircraft on long-haul flights may not be able to achieve the Climb Gradient required of the Procedural SIDs. In this instance, they shall be assigned the **Radar SID**, as it has a shallower minimum Climb Gradient. If in doubt, ask the pilot.

All other aircraft (Non-Jet aircraft, Aircraft with shallow Climb Gradient, and Aircraft using Runway 25), shall be assigned the **Radar SID**.

!!! example
    Non-Jet Aircraft planned via CORDO, assigned runway 16R, shall be given the SYDNEY2 departure.

!!! tip
    A Radar SID (eg, SYDNEY 2 departure) is distinct from a SID with a RADAR transition (eg, RICHMOND 5 departure, RADAR transition) SIDs with a RADAR Transition are still considered Procedural SIDs. A Radar SID can be identified in the DAPs (link) as having a "(RADAR)" at the end of the name.
## ATIS
#### Operational Info

When parallel runways are used (excluding SODPROPS), the ATIS OPR INFO shall include:  
`PARALLEL RUNWAY OPERATIONS IN PROGRESS`  
When parallel runways are used for departures, the ATIS OPR INFO shall include:  
`INDEPENDENT DEPARTURES IN PROGRESS`  
When SODPROPS are in operation, the ATIS OPR INFO shall include:  
`SIMULTANEOUS OPPOSITE DIRECTION PARALLEL RUNWAY OPERATIONS IN PROGRESS`
#### Approach Types

| Cloud Base             | Visibility     | Approach                             |
| -----------------------| -------------- | -------------------------------------|
| >3000FT                | >5000M         | `EXPECT INDEPENDENT VISUAL APPROACH` |
| Between 2000FT & 3000FT| >5000M         | `EXPECT ILS APPROACH THEN INDEPENDENT VISUAL APPROACH WHEN VISUAL`|
| Below 2000FT **or**    | <5000M         | `EXPECT ILS APPROACH`                |