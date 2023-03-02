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

## Surveillance
RK ADC is permitted to use Surveillance standards for separation. Surveillance coverage can be expected to be available at all levels in the RK CTR.  
For simulation purposes, visual separation is assumed to exist below the cloud base, and within 5nm. Visual separation can still be used to separate from aircraft on an instrument approach, below the cloud base.
## Coordination
### Departures
A 'next' call is made for all aircraft when they are next to depart. RK ADC must inform COR TCU if the aircraft does not depart within **2 minutes** of the next call.

!!! example
    <span class="hotline">**RK ADC** -> **RKA**</span>: "Next, VJE"  
    <span class="hotline">**RKA** -> **RK ADC**</span>: "VJE, Unrestricted"  
    <span class="hotline">**RK ADC** -> **RKA**</span>: "Unrestricted, VJE"

The Standard Assignable level from RK ADC to RKA is the lower of `A060` or the `RFL`, any other level must be prior coordinated.

### Arrivals
COR TCU will coordinate the sequence to RK ADC.

!!! example
    <span class="coldline">**RKA** -> **RK ADC**</span>: "New Sequence of 2. Via SARUS, VJN, Number 1. WFE, Number 2”  
    <span class="coldline">**RK ADC** -> **RKA**</span>: "VJN, Number 1. WFE, Number 2"  