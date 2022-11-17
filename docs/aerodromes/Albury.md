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

## Lateral Separation
Placeholder for local lateral separation options, such as using visual features, useful VOR radials, etc.

## Coordination
### Departures
A 'next' call is made for all aircraft when they are next to depart. AY TWR must inform ELW(BLA) if the aircraft does not depart within **2 minutes** of the next call.

!!! example
    **AY TWR** -> **BLA**: "Next, AM324"  
    **BLA** -> **AY TWR**: "AM324"

A next call is made for all aircraft when they are next to depart and will be departing within two minutes. BLA will respond by either acknowledging the callsign.

!!! example
    **AY TWR** -> **BLA**: "Next QFA400"  
    **BLA** -> **AY TWR**: "QFA400"    

### Arrivals
ELW(BLA) will coordinate the sequence to AY TWR

!!! example
    **BLA** -> **AY TWR**: "New Sequence of 2. Via ARRAN1 Arrival, RXA2207, Number 1. Via VEGRU1 Arrival, QLK46, Number 2”  
    **AY TWR** -> **BLA**: "RXA2207, Number 1. QLK46, Number 2"  

## Standard Assignable Levels

Aircraft departing from Albury shall be assigned `A070` or `RFL` if lower.

Aircraft arriving into Albury shall be assigned `A080` by BLA.
