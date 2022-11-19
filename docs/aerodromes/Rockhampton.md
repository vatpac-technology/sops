---
  title: Rockhampton (YBRK)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name | Callsign | Frequency | Login Identifier |
| ---- | -------- | --------- | ---------------- |
| Rockhampton ADC | Rocky Tower | 118.100 | RK_TWR |
| Rockhampton SMC | Rocky Ground | 121.800 | RK_GND |
| Rockhampton ATIS |    | 128.500 | YBRK_ATIS |

## Airspace

The RK CTR is from `SFC` to `A010`

<figure markdown>
![YBRK Airspace](img/RKTWR.png){ width="700" }
</figure>

<figure markdown>
![YBMK Airspace](img/RKairspace.png){ width="700" }
</figure>

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## Surveillance
RK TWR is permitted to use Surveillance standards for separation. Surveillance coverage can be expected to be available at all levels in the RK CTR.  
For simulation purposes, visual separation is assumed to exist below the cloud base, and within 5nm. Visual separation can still be used to separate from aircraft on an instrument approach, below the cloud base.
## Coordination
### Departures
A 'next' call is made for all aircraft when they are next to depart. RK TWR must inform COR TCU if the aircraft does not depart within **2 minutes** of the next call.

!!! example
    **RK TWR** -> **COR**: "Next, VJE"  
    **COR** -> **RK TWR**: "VJE"

The Standard Assignable level from RK TWR to COR TCU is the lower of `A060` or the `RFL`, any other level must be prior coordinated.

### Arrivals
COR TCU will coordinate the sequence to RK TWR

!!! example
    **COR** -> **RK TWR**: "New Sequence of 2. Via SARUS, VJN, Number 1. WFE, Number 2”  
    **RK TWR** -> **COR**: "VJN, Number 1. WFE, Number 2"  