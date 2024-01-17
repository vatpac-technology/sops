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
MK ADC is responsible for the Class D airspace in the MK CTR `SFC` to `A010`.

<figure markdown>
![MK ADC Airspace](img/MKTWR.png){ width="700" }
</figure>

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## Coordination
### Departures
A 'next' call is made for all aircraft when they are next to depart. MK ADC must inform KEN(SWY) if the aircraft does not depart within **2 minutes** of the next call.

!!! example
    <span class="hotline">**MK ADC** -> **MKA**</span>: "Next, TFX113"  
    <span class="hotline">**MKA** -> **MK ADC**</span>: "TFX113, Unrestricted"  
    <span class="hotline">**MK ADC** -> **MKA**</span>: "TFX113"

The Standard Assignable level from MK ADC to MKA is the lower of `A060` or the `RFL`, any other level must be prior coordinated.

### Arrivals/Overfliers
MKA will heads-up coordinate arrivals/overfliers from Class C to MK ADC.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to MK ADC, unless MK ADC nominates a restriction.  
VFR aircraft require a level readback.

!!! example
    <span class="hotline">**MKA** -> **MK ADC**</span>: "Via BAVAM for the RNP RWY 32, VOZ1164”  
    <span class="hotline">**MK ADC** -> **MKA**</span>: "VOZ1164, RNP RWY 32"  