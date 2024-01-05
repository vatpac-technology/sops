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
![SU TWR Airspace](img/YBSU_airspace.png){ width="700" }
  <figcaption>SU TWR Airspace</figcaption>
</figure>

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## Surveillance
SU ADC is permitted to use Surveillance standards for separation. Surveillance coverage can be expected to be not available below `A012` in the SU CTR.  
For simulation purposes, visual separation is assumed to exist below the cloud base, and within the `SFC` to `A045` Class D step (7nm from RWY thresholds). Visual separation can still be used to separate from aircraft on an instrument approach, below the cloud base.

SU ADC must establish a [Procedural Standard](../../controller-skills/classdtwr/#standards) prior to losing surveillance identification of an aircraft.

!!! caution
    A procedural and/or visual standard **must** be put in place for all aircraft below `A012`.

## Instrument Approaches
Only one aircraft is permitted to conduct an instrument approach at any time, due to limited surveillance coverage. SU ADC must ensure that all aircraft are procedurally separated from any portion of an instrument approach and missed approach that is conducted below `A012`.  

If required, SU ADC can pass amended tracking/level instructions to an aircraft for a missed approach for separation purposes, as long as the aircraft can be issued **uninterrupted climb** to the LSALT/MSA once identified.
## Runway Configuration
Pilots with old simulators/scenery may not have the newer Runway 13/31 config (replacing the old 18/36 config). If a pilot reports this to be the case, try to facilitate their flight as best as possible, whilst giving them lower priority to other traffic. Coordinate as you deem necessary with adjacent units.
## SID Selection
Jet Aircraft planned via **MOOLO** or **TAPET**, shall be assigned the **Procedural SID** that terminates at the appropriate waypoint, unless the pilot indicates they are unable to accept a Procedural SID.

All other aircraft may be assigned a visual departure, or a standard IFR departure.

## Coordination
### Departures
A 'next' call is made for all aircraft when they are next to depart. SU ADC must inform INL(NSA/BUR) if the aircraft does not depart within **2 minutes** of the next call.

!!! example
    <span class="hotline">**SU ADC** -> **NSA**</span>: "Next, BNZ133"  
    <span class="hotline">**NSA** -> **SU ADC**</span>: "BNZ133, Unrestricted"  
    <span class="hotline">**SU ADC** -> **NSA**</span>: "BNZ133"

The Standard Assignable level from SU ADC to INL(NSA/BUR) is the lower of `A050` or the `RFL`, any other level must be prior coordinated.

### Arrivals/Overfliers
NSA will heads-up coordinate arrivals/overfliers from Class C to SU ADC. Aircraft will be cleared for the coordinated approach prior to handoff to SU ADC, unless SU ADC nominates a restriction.

!!! example
    <span class="coldline">**NSA** -> **SU ADC**</span>: "Via ITIDE2W Arrival, QJE1756”  
    <span class="coldline">**SU ADC** -> **NSA**</span>: "QJE1756"  

The Standard Assignable level from INL(NSA/BUR) to SU ADC is `A060`, any other level must be prior coordinated.
### BN TCU
BN TCU Class G shares a tiny border with SU ADC, however there are no SIDs, STARs, or airways through this gap. The only possible way for an aircraft to directly enter BN TCU's airspace from SU ADC's jurisdiction, is in to Class G, and as such, no coordination is required to BN TCU.

<figure markdown>
![BN TCU / SU ADC Border](../terminal/img/subntcu.png){ width="700" }
  <figcaption>BN TCU / SU ADC Border</figcaption>
</figure>
