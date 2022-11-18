---
  title: Albury (YMAY)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name | Callsign | Frequency | Login Identifier |
| ---- | -------- | --------- | ---------------- |
| Albury ADC | Albury Tower | 123.250 | AY_TWR |
| Albury SMC | Albury Ground | 121.800 | AY_GND |
| Albury ATIS | N/A | 133.850 | YMAY_ATIS |

## Airspace

<figure markdown>
![YMAY Airspace](img/ymay_airspace.jpg){ width="700" }
  <figcaption>YMAY Airspace</figcaption>
</figure>

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## Surveillance
AY TWR is permitted to use Surveillance standards for separation. Surveillance coverage can be expected to be available at all levels in the AY CTR.  
For simulation purposes, visual separation is assumed to exist below the cloud base, and within 5nm. Visual separation can still be used to separate from aircraft on an instrument approach, below the cloud base.

## Coordination
### Departures
A 'next' call is made for all aircraft when they are next to depart. AY TWR must inform ELW(BLA) if the aircraft does not depart within **2 minutes** of the next call.

!!! example
    **AY TWR** -> **BLA**: "Next, AM324"  
    **BLA** -> **AY TWR**: "AM324"

The Standard Assignable level from AY TWR to ELW(BLA) is the lower of `A070` or the `RFL`, any other level must be prior coordinated.
### Arrivals
ELW(BLA) will coordinate the sequence to AY TWR

!!! example
    **BLA** -> **AY TWR**: "New Sequence of 2. Via ARRAN1 Arrival, RXA2207, Number 1. Via VEGRU1 Arrival, QLK46, Number 2”  
    **AY TWR** -> **BLA**: "RXA2207, Number 1. QLK46, Number 2"  

The Standard Assignable level from ELW(BLA) to AY TWR is `A080`, any other level must be prior coordinated.