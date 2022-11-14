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

## Surveillance
AY TWR is permitted to use Surveillance standards for separation. Surveillance coverage can be expected to be available at all levels in the AY CTR.  
For simulation purposes, visual separation is assumed to exist below the cloud base, and within 5nm. Visual separation can still be used to separate from aircraft on an instrument approach, below the cloud base.

## Lateral Separation
Placeholder for local lateral separation options, such as using visual features, useful VOR radials, etc.


## Coordination
### Departures
#### Taxi Call
A taxi call shall be made to BLA as an aircraft is given taxi clearance. BLA will respond by acknowledging the callsign.

!!! example
    **AY TWR** -> **BLA**: "Taxis QFA400 for YSSY via MUSOP"  
    **BLA** -> **AY TWR**: "QFA400"  

#### Next Call
A next call is made for all aircraft when they are next to depart and will be departing within two minutes. BLA will respond by either acknowledging the callsign.

!!! example
    **AY TWR** -> **BLA**: "Next QFA400"  
    **BLA** -> **AY TWR**: "QFA400"    

The Standard Assignable level from AY TWR to BLA is the lower of `A070` or the `RFL`, any other level must be prior coordinated.

#### Arrivals
As per [Standard coordination procedures](../../controller-skills/coordination/#class-d-twr-enrtcu), it is the responsibility of BLA to coordinate arrivals to AY TWR prior to **5 mins** from the airspace boundary.

!!! example
    **BLA** -> **AY TWR**: "RXA3421, estimating YMAY time 52, via ARRAN1 arrival”  
    **AY TWR** -> **BLA**: "RXA3421"  

The Standard Assignable level from BLA to AY TWR is `A080`, any other level must be prior coordinated.