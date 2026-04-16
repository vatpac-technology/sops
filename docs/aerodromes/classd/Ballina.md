---
  title: Ballina (YBNA)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name                      | Callsign               | Frequency   | Login ID      |
| ------------------------- | ---------------------- | ----------- | ------------- |
| **Ballina ADC**           | **Ballina Tower**      | **124.200** | **BA_TWR**    |
| **Ballina ATIS**          |                        | **128.650** | **YBNA_ATIS** |

## Airspace
BA ADC is responsible for the Class D airspace in the BA CTR from `SFC` to `A015`.

<figure markdown>
![BA ADC Airspace](img/baairspace.png){ width="1000" }
  <figcaption>BA ADC Airspace</figcaption>
</figure>

Refer to [Class D Tower Separation Standards](../../../separation-standards/classd) for more information.

## SID Selection
Non-Jet Aircraft planned via **BUVAM** shall be assigned the **Procedural SID** that terminates at the appropriate SID terminus, except when the M641 Evans Head [restricted area](../../../controller-skills/sua/#restricted-areas) is active.

All other aircraft shall be assigned either the **RADAR** SID, or a visual departure.

## Runway Modes
### Circuits

| Runway | Day   | Night |
| ------ | ----- | ----- |
| 06     | Left  | -     |
| 24     | Left  | Right |

Circuits to be flown at `A010`

## Coordination
### Auto Release
[Next](../../controller-skills/coordination/#next) coordination is **not** required to BAA for aircraft that are:   
  
  - Departing from a runway nominated on the ATIS; and  
  - Assigned the standard assignable level; and  
  - Assigned a **Procedural** SID

All other aircraft require a 'Next' call to BAA.

The Standard Assignable level from BA ADC to BAA is:  

| Aircraft | Level |
| -------- | ----- |
| All      | The lower of `A040` and `RFL` |

### Arrivals/Overfliers
BAA will heads-up coordinate arrivals/overfliers from Class C to BA ADC prior to **5 mins** from the boundary.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to BA ADC, unless BA ADC nominates a restriction.

VFR aircraft require a level readback.

!!! phraseology
    <span class="hotline">**BAA** -> **BA ADC**</span>: "via AVBAK for RNP-Y, QLK2035"  
    <span class="hotline">**BA ADC** -> **BAA**</span>: "QLK2035, RNP-Y"