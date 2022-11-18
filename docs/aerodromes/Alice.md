---
  title: Alice Springs (YBAS)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name | Callsign | Frequency | Login Identifier |
| ---- | -------- | --------- | ---------------- |
| Alice Springs ADC | Alice Tower | 118.300 | AS_TWR |
| Alice Springs ATIS | N/A | 123.000 | YBAS_ATIS |

## Airspace

<figure markdown>
![YBAS Airspace](img/ybas_airspace.jpg){ width="700" }
  <figcaption>YBAS Airspace</figcaption>
</figure>

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## Surveillance
AS TWR is permitted to use Surveillance standards for separation. Surveillance coverage can be expected to be available at all levels in the AS CTR.  
For simulation purposes, visual separation is assumed to exist below the cloud base, and within 5nm. Visual separation can still be used to separate from aircraft on an instrument approach, below the cloud base.
## Coordination
### Departures
A 'next' call is made for all aircraft when they are next to depart. AS TWR must inform ASP if the aircraft does not depart within **2 minutes** of the next call.

!!! example
    **AS TWR** -> **ASP**: "Next, QFA797"  
    **ASP** -> **AS TWR**: "QFA797"

The Standard Assignable level from AS TWR to ASP is the lower of `A060` or the `RFL`, any other level must be prior coordinated.

### Arrivals
ASP will coordinate the sequence to AS TWR

!!! example
    **ASP** -> **AS TWR**: "New Sequence of 2. Via SADEL, QFA1956, Number 1. Via HERMA, FD867, Number 2”  
    **AS TWR** -> **ASP**: "QFA1956, Number 1. FD867, Number 2"  

The Standard Assignable level from ASP to AS TWR is `A070`, any other level must be prior coordinated.