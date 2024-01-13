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
RK ADC is responsible for the Class D airspace in the RK CTR `SFC` to `A010`.

<figure markdown>
![RK ADC Airspace](img/RKTWR.png){ width="700" }
</figure>

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## Coordination
### Departures
A 'next' call is made for all aircraft when they are next to depart. RK ADC must inform rka if the aircraft does not depart within **2 minutes** of the next call.

!!! example
    <span class="hotline">**RK ADC** -> **RKA**</span>: "Next, VJE"  
    <span class="hotline">**RKA** -> **RK ADC**</span>: "VJE, Unrestricted"  
    <span class="hotline">**RK ADC** -> **RKA**</span>: "VJE"

The Standard Assignable level from RK ADC to RKA is the lower of `A060` or the `RFL`, any other level must be prior coordinated.

### Arrivals/Overfliers
RKA will heads-up coordinate arrivals/overfliers from Class C to RK ADC.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to RK ADC, unless RK ADC nominates a restriction.  
VFR aircraft require a level readback.

!!! example
    <span class="hotline">**RKA** -> **RK ADC**</span>: "Via SARUS for the visual approach, VJN”  
    <span class="hotline">**RK ADC** -> **RKA**</span>: "VJN, visual approach"  