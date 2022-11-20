---
  title: Mackay (YBMK)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name | Callsign | Frequency | Login Identifier |
| ---- | -------- | --------- | ---------------- |
| Mackay ADC | Mackay Tower | 124.500 | MK_TWR |
| Mackay SMC | Mackay Ground | 121.700 | MK_GND |
| Mackay ATIS |    | 128.000 | YBMK_ATIS |

## Airspace

The MK CTR is from `SFC` to `A010`

<figure markdown>
![YBMK Airspace](img/MKTWR.png){ width="700" }
</figure>

<figure markdown>
![YBMK Airspace](img/MKairspace.png){ width="700" }
</figure>

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## Surveillance
MK ADC is permitted to use Surveillance standards for separation. Surveillance coverage can be expected to be available at all levels in the MK CTR.  
For simulation purposes, visual separation is assumed to exist below the cloud base, and within 5nm. Visual separation can still be used to separate from aircraft on an instrument approach, below the cloud base.
## Coordination
### Departures
A 'next' call is made for all aircraft when they are next to depart. MK ADC must inform KEN(SWY) if the aircraft does not depart within **2 minutes** of the next call.

!!! example
    **MK ADC** -> **COR**: "Next, TFX113"  
    **COR** -> **MK ADC**: "TFX113"

The Standard Assignable level from MK ADC to COR TCU is the lower of `A060` or the `RFL`, any other level must be prior coordinated.

### Arrivals
COR TCU will coordinate the sequence to MK ADC

!!! example
    **COR** -> **MK ADC**: "New Sequence of 2. Via LEDUS, VOZ1164, Number 1. JST453, Number 2”  
    **MK ADC** -> **COR**: "VOZ1164, Number 1. JST453, Number 2"  