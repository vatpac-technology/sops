---
  title: Sunshine Coast (YBSU)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name | Callsign | Frequency | Login Identifier |
| ---- | -------- | --------- | ---------------- |
| Sunshine Coast ADC | Sunshine Coast Tower | 124.400 | SU_TWR |
| Sunshine Coast SMC | Sunshine Coast Ground | 121.100 | SU_GND |
| Sunshine Coast ATIS | N/A | 119.800 | YBSU_ATIS |

## Airspace

<figure markdown>
![SU TWR Airspace](img/SUCTR.png){ width="700" }
  <figcaption>SU TWR Airspace</figcaption>
</figure>

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## Surveillance
SU TWR is permitted to use Surveillance standards for separation. Surveillance coverage can be expected to be not available below **1200 feet** in the SU CTR.  
For simulation purposes, visual separation is assumed to exist below the cloud base, and within the SFC-A045 Class D step (7nm from RWY thresholds). Visual separation can still be used to separate from aircraft on an instrument approach, below the cloud base.

SU TWR must establish a [Procedural Standard](../../controller-skills/classdtwr/#standards) prior to losing surveillance identification of an aircraft, when the cloud base is below **1200 feet**.

!!! caution
    An aircraft becoming identified, or maintaining identification, *below* 1200 feet, cannot be assumed to be able to maintain identification at that level. A procedural and/or visual standard **must** be put in place for all aircraft below 1200 feet.

## Instrument Approaches
Only one aircraft is permitted to conduct an instrument approach at any time, due to limited surveillance coverage. SU TWR must ensure that all aircraft are procedurally separated from any portion of an instrument approach and missed approach that is conducted below **1200 feet**.  

If required, SU TWR can pass amended tracking/level instructions to an aircraft for a missed approach for separation purposes, as long as the aircraft can be issued **uninterrupted climb** to the LSALT/MSA once identified.
## Runway Configuration
Pilots with old simulators/scenery may not have the newer Runway 13/31 config (replacing the old 18/36 config). If a pilot reports this to be the case, try to facilitate their flight as best as possible, whilst giving them lower priority to other traffic. Coordinate as you deem necessary with adjacent units.
## SID Selection

Jet Aircraft planned via **MOOLO** or **TAPET**, shall be assigned the **Procedural SID** that terminates at the appropriate waypoint, unless the pilot indicates they are unable to accept a Procedural SID.

All other aircraft may be assigned a visual departure, or a standard IFR departure.

## Coordination
#### Departures
A 'next' call is made for all aircraft when they are next to depart. SU TWR must inform INL(NSA/BUR) if the aircraft does not depart within **2 minutes** of the next call.

!!! example
    **SU TWR** -> **NSA**: "Next, BNZ133"  
   **NSA** -> **SU TWR**: "BNZ133"    

The Standard Assignable level from SU TWR to INL(NSA/BUR) is the lower of `A050` or the `RFL`, any other level must be prior coordinated.

### Arrivals
INL(NSA/BUR) will coordinate the sequence to SU TWR.

!!! example
    **NSA** -> **SU TWR**: "New Sequence of 2. Via ITIDE2W Arrival, QJE1756, Number 1. Via REBEG2X Arrival, FD425, Number 2”  
    **SU TWR** -> **NSA**: "QJE1756, Number 1. FD425, Number 2"  

The Standard Assignable level from INL(NSA/BUR) to SU TWR is `A060`, any other level must be prior coordinated.
### BN TCU / SU TWR

As you may have noticed, BN TCU Class G shares a tiny border with SU TWR, however there are no SIDs, STARs, or airways through this gap. The only possible way for an aircraft to directly enter BN TCU's airspace from SU TWR's jurisdiction, is in to Class G, and as such, no coordination is required to BN TCU.

<figure markdown>
![BN TCU / SU TWR Border](../terminal/img/subntcu.png){ width="700" }
  <figcaption>BN TCU / SU TWR Border</figcaption>
</figure>
