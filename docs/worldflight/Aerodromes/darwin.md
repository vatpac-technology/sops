---
  title: 4. Darwin (YPDN)
---

--8<-- "includes/abbreviations.md"

## Airways Clearance Delivery (ACD)
### Flight Plan Compliance
Ensure **all flight plans** are checked for compliance with the approved WF Route:

`DCT DN Y25 RUPEG DCT IGOPO B598 ESKIM DCT GUMBU DCT PY DCT`

### WorldFlight Teams
[WorldFlight Teams](../../#official-team-callsigns) shall have `STS/STATE` added to their remarks, and `WF TEAM` added to their Global Ops Field, to ensure they receive priority.

### SID Selection
All aircraft shall be issued the **RUPEG2** SID.  

### PDCs
PDCs will be in use by default, to avoid frequency congestion. ACD shall send a PDC to each aircraft as they connect. Upon successful readback of the PDC, ACD shall direct the pilot to contact SMC when ready for pushback or taxi.

## Surface Movement Control (SMC)

### Pushback Delays
SMC will be responsible for delaying aircraft's pushback requests, in order to avoid overloading the taxiways.

If there are more than **5** aircraft in the queue at the Holding Point for *any runway*, do not approve any more pushback requests.

#### OzStrips
All aerodrome controllers must be familiar with the VATPAC [recommended workflow](../../client/towerstrips.md#recommended-workflow) for OzStrips.

Ensure the Queue function is used to actively to keep track of the order of requests.

### Grass Taxiing
Due to limitations in the taxiway layout at YPDN, aircraft taxiing outbound from the civil (northern) aprons for runway 29 will need to be taxied via Grass Routes, as shown below.

<figure markdown>
![YPDN Grass Taxi Routes](../img/ypdnsmcbase.png){ width="700" }
  <figcaption>YPDN Grass Taxi Routes</figcaption>
</figure>

### Taxi Routes
#### TODO

Options:

- 11D18A/11D36A (simultaneous crossing ops)
- 18D29A/36D29A (LAHSO)

## Tower Control (ADC)
### Departure Spacing
Ensure that a minimum of **90 second** spacing is applied between subsequent departures from the same runway.

### Wake Turbulence Separation
Due to the tight sequence, there are times that [Wake Turbulence Separation](../../../separation-standards/waketurb/#runways) cannot practically be applied.

When a following aircraft is of a *lighter* [Wake Turbulence Category](../../../separation-standards/waketurb/#categories) than the preceding aircraft, a traffic statement and wake turbulence **caution** shall be issued.

!!! example
    **DN ADC:** "QFA887, A330 has just departed on the crossing runway. Caution Wake Turbulence. Runway 29, Cleared for Takeoff"  
    **QFA887:** "Cleared for Takeoff Runway 29, QFA887"

### Runway Vacating Instructions
#### TODO

## ATIS
The ATIS OPR INFO shall include:  
`EXP CLR VIA PDC`

During 11D18A and 11D36A, the ATIS OPR INFO shall include:  
`SIMUL INDEP CROSSING RWY OPS IN PROG`

During 36D29A, the ATIS OPR INFO shall include:  
`LAHSO IN PROG. RWY 36 LANDING DISTANCE AVBL XXXX METRES`

## Coordination
### AD TCU
#### Auto Release
Standard as per [YPAD Local Instructions](../../../aerodromes/classc/Adelaide/#auto-release), with the exception of auto-release being available for **12/30 Departures** assigned the following *Standard Assignable Departure Headings*:

| Runway Mode | Runway 12/30 Assigned Heading |
| ---------- | --- |
| 23A30D      | Runway Heading |
| 05A30D      | H230 |
| 05A12D      | H060 |
| 23A12D      | H180 |