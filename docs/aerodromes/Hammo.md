---
  title: Hamilton Island (YBHM)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name | Callsign | Frequency | Login Identifier |
| ---- | -------- | --------- | ---------------- |
| Hamilton Island ADC | Hamilton Tower | 118.700 | HM_TWR |
| Hamilton Island ATIS | N/A | 128.350 | YBHM_ATIS |

## Airspace

<figure markdown>
![YBHM Airspace](img/ybhm_airspace.png){ width="700" }
  <figcaption>YBHM Airspace</figcaption>
</figure>

HM TWR is responsible for the Class D airspace in the HM CTR, SFC-A045.

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## Surveillance
HM TWR is permitted to use Surveillance standards for separation. Surveillance coverage can be expected to be not available below **3100 feet** in the HM CTR.  
For simulation purposes, visual separation is assumed to exist below the cloud base, and within 5nm. Visual separation can still be used to separate from aircraft on an instrument approach, below the cloud base.

HM TWR must establish a [Procedural Standard](../../controller-skills/classdtwr/#standards) prior to losing surveillance identification of an aircraft.

!!! caution
    An aircraft becoming identified, or maintaining identification, *below* 3100 feet, cannot be assumed to be able to maintain identification at that level. A procedural and/or visual standard **must** be put in place for all aircraft below 3100 feet.
## Instrument Approaches
Only one aircraft is permitted to conduct an instrument approach at any time, due to limited surveillance coverage. HM TWR must ensure that all aircraft are procedurally separated from any portion of an instrument approach and missed approach that is conducted below **3100 feet**.  

If required, HM TWR can pass amended tracking/level instructions to an aircraft for a missed approach for separation purposes, as long as the aircraft can be issued **uninterrupted climb** to the LSALT/MSA once identified.

## Coordination
### Departures
A 'next' call is made for all aircraft when they are next to depart. HM TWR must inform KEN(SWY) if the aircraft does not depart within **2 minutes** of the next call.

!!! example
    **HM TWR** -> **SWY**: "Next, QFA797"  
    **SWY** -> **HM TWR**: "QFA797"  

The Standard Assignable level from HM TWR to KEN(SWY) is the lower of `A050` or the `RFL`, any other level must be prior coordinated.
### Arrivals
KEN(SWY) will coordinate the sequence to HM TWR.

!!! example
    **SWY** -> **HM TWR**: "New Sequence of 2. Via OPOSI for RNP U RWY 32, JST848, Number 1. Via SWIFT, UTY551, Number 2”  
    **HM TWR** -> **SWY**: "JST848, Number 1. UTY551, Number 2"  

The Standard Assignable level from KEN(SWY) to HM TWR is `A060`, any other level must be prior coordinated.