---
  title: Broome (YBRM)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name | Callsign | Frequency | Login Identifier |
| ---- | -------- | --------- | ---------------- |
| Broome ADC | Broome Tower | 123.250 | BRM_TWR |
| Broome SMC | Broome Ground | 121.800 | BRM_GND |
| Broome ATIS | N/A | 133.850 | YBRM_ATIS |

## Airspace

<figure markdown>
![YBRM Airspace](img/ybrm_airspace.png){ width="700" }
  <figcaption>YBRM Airspace</figcaption>
</figure>

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## Surveillance
BRM TWR is permitted to use Surveillance standards for separation. Surveillance coverage can be expected to be available at all levels in the BRM CTR.  
For simulation purposes, visual separation is assumed to exist below the cloud base, and within 5nm. Visual separation can still be used to separate from aircraft on an instrument approach, below the cloud base.
## Coordination
### Departures
A 'next' call is made for all aircraft when they are next to depart. BRM TWR must inform TRT(KIY) if the aircraft does not depart within **2 minutes** of the next call.

!!! example
    **BRM TWR** -> **KIY**: "Next, NWK1653"  
    **KIY** -> **BRM TWR**: "NWK1653"

The Standard Assignable level from BRM TWR to TRT(KIY) is the lower of `A050` or the `RFL`, any other level must be prior coordinated.

### Arrivals
TRT(KIY) will coordinate the sequence to BRM TWR

!!! example
    **KIY** -> **BRM TWR**: "New Sequence of 2. Via CIN, ANO332, Number 1. Via MASIM, VOZ1481, Number 2”  
    **BRM TWR** -> **KIY**: "ANO332, Number 1. VOZ1481, Number 2"  

The Standard Assignable level from TRT(KIY) to BRM TWR is `A060`, any other level must be prior coordinated.
