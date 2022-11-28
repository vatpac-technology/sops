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
![YBAS Airspace](img/YBAS_airspace.png){ width="1000" }
  <figcaption>YBAS Airspace</figcaption>
</figure>

AS ADC is responsible for the Class D airspace `SFC` to `A045`, as well as the Class C airspace `A045` to `A065`, within the AS CTR.

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## Surveillance
AS TWR is permitted to use Surveillance standards for separation. Surveillance coverage can be expected to be available at all levels in the AS CTR.  
For simulation purposes, visual separation is assumed to exist below the cloud base, and within 5nm. Visual separation can still be used to separate from aircraft on an instrument approach, below the cloud base.
## Coordination
### Departures
Departures from YBAS in to ASP Class C will be coordinated when ready for departure.

!!! example
    **AS ADC** -> **ASP**: "Next, QFA797"  
    **ASP** -> **AS ADC**: "QFA797"

The Standard Assignable level from AS ADC to ASP is the lower of `A070` or the `RFL`, any other level must be prior coordinated.

### Arrivals
ASP will coordinate the sequence to AS ADC

!!! example
    **ASP** -> **AS ADC**: "New Sequence of 2. Via SADEL, QFA1956, Number 1. Via HERMA, FD867, Number 2”  
    **AS ADC** -> **ASP**: "QFA1956, Number 1. FD867, Number 2"  

The Standard Assignable level from ASP to AS ADC is `A080`, any other level must be prior coordinated.