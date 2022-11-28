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
![YBHM Airspace](img/YBHM_airspace.png){ width="700" }
  <figcaption>YBHM Airspace</figcaption>
</figure>

HM ADC is responsible for the Class D airspace in the HM CTR, `SFC` to `A045`.

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## Surveillance
HM ADC is permitted to use Surveillance standards for separation. Surveillance coverage can be expected to be not available below `A031` in the HM CTR.  
For simulation purposes, visual separation is assumed to exist below the cloud base, and within 5nm. Visual separation can still be used to separate from aircraft on an instrument approach, below the cloud base.

HM ADC must establish a [Procedural Standard](../../controller-skills/classdtwr/#standards) prior to losing surveillance identification of an aircraft.

!!! caution
    An aircraft becoming identified, or maintaining identification, *below* `A031` , cannot be assumed to be able to maintain identification at that level. A procedural and/or visual standard **must** be put in place for all aircraft below `A031` .
## Instrument Approaches
Only one aircraft is permitted to conduct an instrument approach at any time, due to limited surveillance coverage. HM ADC must ensure that all aircraft are procedurally separated from any portion of an instrument approach and missed approach that is conducted below `A031`.  

If required, HM ADC can pass amended tracking/level instructions to an aircraft for a missed approach for separation purposes, as long as the aircraft can be issued **uninterrupted climb** to the LSALT/MSA once identified.

## Coordination
### Departures
A 'next' call is made for all aircraft when they are next to depart. HM ADC must inform KEN(SWY) if the aircraft does not depart within **2 minutes** of the next call.

!!! example
    **HM ADC** -> **SWY**: "Next, QFA797"  
    **SWY** -> **HM ADC**: "QFA797"  

The Standard Assignable level from HM ADC to KEN(SWY) is the lower of `A050` or the `RFL`, any other level must be prior coordinated.
### Arrivals
KEN(SWY) will coordinate the sequence to HM ADC.

!!! example
    **SWY** -> **HM ADC**: "New Sequence of 2. Via OPOSI for RNP U RWY 32, JST848, Number 1. Via SWIFT, UTY551, Number 2”  
    **HM ADC** -> **SWY**: "JST848, Number 1. UTY551, Number 2"  

The Standard Assignable level from KEN(SWY) to HM ADC is `A060`, any other level must be prior coordinated.