---
  title: Brisbane (YBBN)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login Identifier                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| **Brisbane ADC**    | **Brisbane Tower**   | **120.500**          | **BN_TWR**                                   |
| Brisbane ADC West†   | Brisbane Tower   | 118.000          | BN-W_TWR                                 |
| **Brisbane SMC Domestic**    | **Brisbane Ground**  | **121.700**          | **BN_GND**                                   |
| Brisbane SMC South†   | Brisbane Ground  | 122.250          | BN-S_GND                                 |
| Brisbane SMC North†   | Brisbane Ground  | 124.050          | BN-N_GND                                 |
| **Brisbane ACD**         | **Brisbane Delivery**| **118.850**          | **BN_DEL**                                   |
| Brisbane ATIS        |                | 126.250          | YBBN_ATIS                                |

† *Non-standard positions* may only be used in accordance with [VATPAC Ratings and Controller Positions Policy](https://vatpac.org/publications/policies)

### Maneuvering Area Responsibility

<figure markdown>
![YBBN Maneuvering Area North](img/ybbn_maneuvring_area_north.png){ width="500" }
  <figcaption>YBBN Maneuvering Area North</figcaption>
</figure>

<figure markdown>
![YBBN Maneuvering Area South](img/ybbn_maneuvring_area_south.png){ width="500" }
  <figcaption>YBBN Maneuvering Area South</figcaption>
</figure>

## Runway Modes
Winds must always be considered for Runway modes (Crosswind <20kts, Tailwind <5kts), however the order of preference is as follows:

| Priority - Mode | Arrivals  | Departures |
| ----------------| --------- | ---------- |
| 1 - SODPROPS    | 19R       | 01R        |
| 2 - 19 PROPS    | 19L & 19R | 19L & 19R  |
| 3 - 01 PROPS    | 01L & 01R | 01L & 01R  |

!!! note
    The SODPROPS mode is most suitable for Noise Abatement. The PROPS modes are most suitable for higher capacity. Since for the most part, neither of these are a factor on VATSIM, it is up to you which runway mode you would like to operate, subject to winds. Consider favouring the higher capacity PROPS modes during busy times, such as events like Panic Stations.

When using the SODPROPS mode, pass traffic information to aircraft that are departing and landing at the same time

!!! example
    **BN ADC:** "ABC, Traffic is DEF, a 737, on short final for the opposite direction parallel runway. Runway 01R, Cleared for Takeoff"  
    **ABC:** "Cleared for Takeoff Runway 01R, ABC"  
    **BN ADC:** "DEF, Traffic is ABC, an A320, departing from the opposite direction parallel runway to the South-West. Runway 19R, Cleared to Land"  
    **DEF:** "Cleared to Land Runway 19R, DEF"  

## Parallel Runway Operations - Runway Selection
Aircraft shall be assigned the following runways for departure when PROPS are in progress:

| Aircraft tracking | Runway  |
| ----------------| --------- |
| via BIXAD   | 01L/19R     |
| via GUMKI | 01R/19L |
| via SCOTT | 01R/19L |
| via SANEG | 01R/19L |
| via WACKO | 01L/19R |
| Other aircraft: |
| To the NORTH and WEST | 01L/19R |
| To the SOUTH and EAST | 01R/19L |

!!! tip
    Runway 01L/19R opened in 2020. Some pilots on VATSIM may have old simulators/scenery, in which case they will only have Runway 01R/19L available. Endeavour to be accommodating of pilots' requests in this instance.

## SID Selection

Jet Aircraft planned via **BIXAD**, **GUMKI**, **SCOTT**, **SANEG**, or **WACKO**, shall be assigned the **Procedural SID** that terminates at the appropriate waypoint. Jet Aircraft **not** planned via any of these waypoints shall receive amended routing via the most appropriate SID terminus, unless the pilot indicates they are unable to accept a Procedural SID.

!!! example
    Jet Aircraft planned via SCOTT, assigned runway 19L, shall be given the SCOTT SID.

Non-Jet aircraft, and aircraft that cannot accept a Procedural SID, shall be assigned the **Radar SID**.

!!! example
    Non-Jet Aircraft planned via WACKO, assigned runway 01L, shall be given the BN (RADAR) SID.

## ATIS
#### Operational Info

When parallel runways are used for departures, the ATIS OPR INFO shall include:  
`INDEPENDENT PARALLEL DEPARTURES IN PROGRESS`  
When SODPROPS are in operation, the ATIS OPR INFO shall include:  
`SIMULTANEOUS OPPOSITE DIRECTION PARALLEL RUNWAY OPERATIONS IN PROGRESS`
#### Approach Types
The ATIS shall always have `EXP INST APCH` as the approach type. Visual Approaches are permitted on request, as long as a separation standard exists between the aircraft and any aircraft arriving on the parallel runway during PROPS, or departing from the parallel runway during SODPROPS.

## Coordination
### BN ADC / BN TCU
#### Auto Release

Auto Release is available for:  
a) PROPS or Single Runway Ops only (Not available for SODPROPS); and  
b) Jets assigned `A060` and a Procedural SID; and  
c) Aircraft departing from a runway nominated on the ATIS

Any aircraft / runway configuration that doesn't meet the above criteria, requires "Next" Coordination to BN TCU

!!! example
    <span class="hotline">**BN ADC** -> **BN TCU**</span>: "Next, QLK404D, Runway 19L"  
    <span class="hotline">**BN TCU** -> **BN ADC**</span>: "QLK404D, heading 160, unrestricted"  
    <span class="hotline">**BN ADC** -> **BN TCU**</span>: "Heading 160 unrestricted, QLK404D"   

    **BN ADC**: "QLK404D, Assigned heading Left 160, Runway 19L, Cleared for Takeoff"  
    **QLK404D**: "Left heading 160, Runway 19L, Cleared for Takeoff, QLK404D"


## Departures Controller

Refer to [Brisbane TCU Airspace Division](../../terminal/brisbane/#airspace-division) for information on airspace divisions when **BDN** and/or **BDS** are online.

## Standard Assignable Levels

Jets: `A060`  
Non-jets: `A040` or `RFL` if lower
