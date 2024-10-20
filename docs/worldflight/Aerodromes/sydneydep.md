---
  title: 1. Sydney (YSSY) Departures
---

--8<-- "includes/abbreviations.md"

## Runway Modes
**16 PROPS** and **34 PROPS** are the *preferred* Runway Modes, with equal preference.

If winds dictate that 07/25 Single Runway operations are required, this is acceptable (but not preferred), as a single runway is in use for arrivals at YPAD.

## Airways Clearance Delivery (ACD)
### Flight Plan Compliance
Ensure **all flight plans** are checked for compliance with the approved WF Route:

`DCT TESAT A576 KADOM H44 BORLI W451 MIA H309 AD DCT`

### WF Teams
[WF Teams](../../#official-team-callsigns) shall have `STS/STATE` added to their remarks, and `WF TEAM` added to their Global Ops Field, to ensure they receive priority.

### Runway Selection
By default, assign aircraft the departure runway that corresponds to their departure apron (ie, **16L/34R** on *East* Apron, **16R/34L** on *West* Apron).

### SID Selection
Non-Standard SIDs are in use for Runway 16L and 34R.

| Runway | SID | Assigned Heading |
| ---------- | --- | --- |
|  16R  | GROOK1KADOM | - |
|  34L  | KADOM1 | - |
|  16L/34R  | SY3 | H120 |

### PDCs
PDCs will be in use by default, to avoid frequency congestion. ACD shall send a PDC to each aircraft as they connect. Upon successful readback of the PDC, ACD shall direct the pilot to contact Coordinator when ready for pushback or taxi.

## Coordinator
Coordinator operations shall be conducted in accordance with the Sydney Aerodrome [Coordinator](../../aerodromes/classc/Sydney.md#sydney-coordinator) procedures, using the OzStrips plugin.

!!! important
    Official WorldFlight teams should be afforded priority when requesting pushback or taxi (if no pushback required), and placed ahead of other non-official aircraft.

### OzStrips
All aerodrome controllers must be familiar with the VATPAC [recommended workflow](../../client/towerstrips.md#recommended-workflow) for OzStrips.

Coordinator must place a `MONITOR GROUND EAST` & `MONITOR GROUND EAST` bar in the **Cleared Bay Queue** and queue any aircraft who request pushback or taxi (if no pushback required) in the Cleared Bay.

<figure markdown>
![Coordinator Bars](../img/coordinatorbars.png){ width="500" }
</figure>

When less than **three** strips are present below a particular `MONITOR GROUND` bar, Coordinator may instruct the bottom most aircraft in the queue to monitor that SMC frequency.

<figure markdown>
![Coordinator Strips](../img/coordinatorstrips.png){ width="500" }
</figure>

If three strips are already present below a respective bar, any successive aircraft who request pushback must be instructed to remain on the Coordinator frequency, and an estimated delay given if known.

!!! example
    **QFA452**: "Sydney Coordinator, Qantas 452, bay 5, request pushback"  
    **SY COORD**: "Qantas 452, Sydney Coordinator, monitor ground 121.7"  
    ...  
    **VOZ318**: "Sydney Coordinator, Velocity 318, bay 39, request pushback"  
    **SY COORD**: "Velocity 318, Coordinator, remain this frequency, approximate 5 minute delay due traffic congestion"

## Surface Movement Control (SMC)
### Separation Assurance
- hold short of L (western)
- hold short of B10 (eastern)
- careful of G

## Tower Control (ADC)

### Departure Spacing
While PROPS are in use, subsequent departures from the same runway must be spaced by **3 minutes**, to assist with arrival flow in to YPAD.

## ATIS
The ATIS OPR INFO shall include:  
`EXP CLR VIA PDC, ALL ACFT EXP INTERSECTION DEPARTURE`

## Coordination
### SY ADC
#### Auto Release
Standard as per [YSSY Local Instructions](../../../aerodromes/classc/Sydney/#auto-release), with the exception of auto-release being available for the following:

- 16L/34R Departure SID: **SY3** RADAR
- 16L/34R Standard Assignable Departure Heading: **H120**