---
  title: Mackay (YBMK)
---

--8<-- "includes/abbreviations.md"

## Positions
| Name              | Callsign              | Frequency   | Login ID      |
| ----------------- | --------------------- | ----------- | ------------- |
| **Mackay ADC**    | **Mackay Tower**      | **124.500** | **MK_TWR**    |
| **Mackay SMC**    | **Mackay Ground**     | **121.700** | **MK_GND**    |
| **Mackay ATIS**   |                       | **128.000** | **YBMK_ATIS** |

## Airspace
MK ADC is responsible for the Class D airspace in the MK CTR `SFC` to `A010`.

<figure markdown>
![MK ADC Airspace](img/MKTWR.png){ width="700" }
</figure>

Refer to [Class D Tower Separation Standards](../../../separation-standards/classd) for more information.

## SID Selection
Aircraft planned via **CLIFT** and **MUNAR** shall be assigned the **Procedural SID** that terminates at the appropriate SID terminus. Aircraft tracking to the north or south and **not** planned via any of these waypoints shall receive amended routing via the most appropriate SID terminus, unless the pilot indicates they are unable to accept a Procedural SID.

Aircraft that are unable to accept a Procedural SID shall be assigned the **Radar SID**.

## Coordination
### Departures
#### Auto Release
[Next](../../controller-skills/coordination.md#next) coordination is **not** required to MKA for aircraft that are:   

- Departing from a runway nominated on the ATIS; and  
- Assigned the standard assignable level; and  
- Assigned a **Procedural** SID; or  
- Not entering MKA CTA

The Standard Assignable level from **MK ADC** to **MKA** is:

| Aircraft | Level |
| ------ | ----- |
| All | The lower of `A060` and `RFL` |

#### SMC to TCU
The controller assuming responsibility of **SMC** shall give [heads-up](../../controller-skills/coordination.md#airways-clearance) coordination to **MKA** prior to the issue of the following clearances:  

- VFR departures entering MKA CTA
- Aircraft using a runway not on the ATIS

### Arrivals/Overfliers
MKA will heads-up coordinate arrivals/overfliers from Class C to MK ADC.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to MK ADC, unless MK ADC nominates a restriction.  
VFR aircraft require a level readback.

!!! phraseology
    <span class="hotline">**MKA** -> **MK ADC**</span>: "Via BAVAM for the RNP RWY 32, VOZ1164”  
    <span class="hotline">**MK ADC** -> **MKA**</span>: "VOZ1164, RNP RWY 32"  