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
MB ADC owns a 3nm radius around YMMB, `SFC` to `A025`.

<figure markdown>
![Moorabbin Tower Airspace](img/mbairspace.png){ width="1000" }
  <figcaption>Moorabbin Tower Airspace</figcaption>
</figure>

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## Runway 04/22
Runway 04/22 is not to be used as an active runway. Used for emergencies only

## VFR Inbound Procedures

| VFR Approach Point | RWY 13  | RWY 17 | RWY 31  | RWY 35 |
| ----------------| --------- | ---------- | --------- | ---------- |
| Brighton (BTO) | Join final 13R | Join base 17R | Join downwind 31L | Join oblique downwind 35L |
| Baywest (BAW)  | Join base 13R | Join base 17R | Join oblique downwind 31L | Join base 35L |
| Carrum (CARR) | Join downwind 13R | Join downwind 17R | Join oblique base 31L | Join final 35L |
| GMH (GMH)  | Join downwind 13L | Join base 17L | Join oblique base 31R | Join base 35R |
| Academy (ACE)  | Join base 13L | Join oblique base 17L | Join base 31R | Join oblique downwind 35R |

## Circuits
Circuits are to be flown at `A010`.

| Runway | Day | Night |
| ------ | ------ | ----|
| 04     | Right  | - |
| 22    | Left | - |
| 13L     | Left  | Left |
| 13R     | Right | - |
| 31L     | Left  | - |
| 31R     | Right  | Right |
| 17L     | Left  | Left |
| 17R     | Right | - |
| 35L     | Left  | - |
| 35R     | Right  | Right |

## Coordination
### MB ADC / ML TCU
#### Departures

Aircraft departing YMMB in to ML TCU Class C will be coordinated to the relevant ML TCU controller at Taxi.

!!! example
    **MB ADC** -> **ML TCU**: "Taxi, SGE for YBLT via ML"  
    **ML TCU** -> **MB ADC**: "SGE for YBLT via ML, Squawk 3601"  
    **MB ADC** -> **ML TCU**: "3601, SGE"

All IFR departures in to ML TCU airspace (Class C and G), require a "Next" call to ML TCU, where ML TCU will provide the cleared level.

!!! example
    **MB ADC** -> **ML TCU**: "Next, SGE"  
    **ML TCU** -> **MB ADC**: "SGE, A060"  
    **MB ADC** -> **ML TCU**: "A060, SGE"

!!! note
    ML TCU will not receive a taxi call on aircraft departing in to Class G airspace, including aircraft that have planned to leave and re-enter controlled airspace (for example, aircraft planned at or above `A050` on the MB-AV track). In this instance, ML TCU is only required to readback the callsign at the "Next" call. ML TCU will then give airways clearance to the aircraft on first contact if required.
#### Arrivals
ML TCU will coordinate the sequence information to **MB ADC** prior to transfer of jurisdiction.

!!! example
    **ML TCU** -> **MB ADC**: "OXA, via MMBSA, Number 1"  
    **MB ADC** -> **ML TCU**: "OXA, Number 1"  