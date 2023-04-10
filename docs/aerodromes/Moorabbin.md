---
  title: Moorabbin (YMMB)
---

--8<-- "includes/abbreviations.md"

## Positions
| Name               | Callsign       | Frequency        | Login Identifier                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| Moorabbin ADC  | Moorabbin Tower  | 118.100         | MB_TWR                        |
| Moorabbin SMC   | Moorabbin Ground   | 134.250          | MB_GND                       |
| Moorabbin ATIS        |                | 120.900          | YMMB_ATIS                               |

## Airspace
MB ADC is responsible for the Class D airspace in the MB CTR `SFC` to `A025`.

<figure markdown>
![MB ADC Airspace](img/mbairspace.png){ width="1000" }
  <figcaption>MB ADC Airspace</figcaption>
</figure>

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## Runway 04/22
Runway 04/22 is not to be used as an active runway. Used for emergencies only

## VFR Inbound Procedures

| VFR Approach Point | RWY 13  | RWY 17 | RWY 31  | RWY 35 |
| ----------------| --------- | ---------- | --------- | ---------- |
| BTO | Join final 13R | Join base 17R | Join downwind 31L | Join oblique downwind 35L |
| BAW  | Join base 13R | Join base 17R | Join oblique downwind 31L | Join base 35L |
| CARR | Join downwind 13R | Join downwind 17R | Join oblique base 31L | Join final 35L |
| GMH  | Join downwind 13L | Join base 17L | Join oblique base 31R | Join base 35R |
| ACE  | Join base 13L | Join oblique base 17L | Join base 31R | Join oblique downwind 35R |

## Circuits
Circuits are to be flown at `A010`.

| Runway | Day | Night |
| ------ | ------ | ----|
| 13L     | Left  | Left |
| 13R     | Right | - |
| 31L     | Left  | - |
| 31R     | Right  | Right |
| 17L     | Left  | Left |
| 17R     | Right | - |
| 35L     | Left  | - |
| 35R     | Right  | Right |

## Coordination
### Departures
Departures in to ML TCU Class C airspace require a "Next" call, where ML TCU will provide the cleared level. There is no standard assignable level.

!!! example
    <span class="hotline">**MB ADC** -> **MDS**</span>: "Next, SGE"  
    <span class="hotline">**MDS** -> **MB ADC**</span>: "SGE, A060"  
    <span class="hotline">**MB ADC** -> **MDS**</span>: "A060, SGE"

Departing aircraft will be **cleared to leave and re-enter controlled airspace** on climb to their assigned level, due to the structure of the Class C airspace around YMMB.

!!! example
    **MB ADC**: "SGE, Cleared to leave and re-enter controlled airspace climbing to A060, no reported IFR traffic. Contact Melbourne Departures on 129.4"  
    **SGE**: "Cleared to leave and re-enter controlled airspace climbing to A060, Departures 129.4, SGE"

### Arrivals/Overfliers
ML TCU will heads-up coordinate arrivals/overfliers from Class C to MB ADC.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to MB ADC, unless MB ADC nominates a restriction.  
VFR aircraft will not be coordinated, and will need to receive their airways clearance from MB ADC.

!!! example
    <span class="hotline">**MDS** -> **MB ADC**</span>: "To the west, PLE, for the NDB-A"  
    <span class="hotline">**MB ADC** -> **MDS**</span>: "PLE, NDB-A"

!!! tip
    Remember that IFR aircraft are only separated from other IFR or SVFR aircraft in class D. Use other separation methods, such as holding a departure on the ground, if separation is required with these aircraft.