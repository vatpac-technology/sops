---
  title: Avalon (YMAV)
---

--8<-- "includes/abbreviations.md"

## Positions
| Name               | Callsign       | Frequency        | Login ID                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| **Avalon ADC**      | **Avalon Tower**   | **120.100**          | **AV_TWR**                                   |
| Avalon ATIS     |                | 118.200         | YMAV_ATIS                                |

## Airspace
AV ADC is not responsible for any airspace by default.  
AV ADC may request a *release* of the **Class D** airspace in the AV CTR from ML TCU to facilitate circuit operations, if required.

## SID Selection
Aircraft planned via **ML** shall be assigned the **JUSTY** SID.

Aircraft **not** planned via **ML**, and tracking to the North East, shall be recleared via ML, and assigned the **JUSTY** SID.

All other IFR aircraft shall be assigned the **Radar SID**.

### Circuit Direction
| Runway | Direction |
| ------ | ----------|
| 18     | Left  |
| 36     | Right |

## Coordination
### ML TCU
#### Departures
'Next' coordination is **not** required to ML TCU for aircraft that are:   
  a) Departing from a runway nominated on the ATIS; and  
  b) Assigned the standard assignable level; and  
  c) Assigned a **Procedural** SID

All other aircraft require a 'Next' call to ML TCU.

!!! phraseology
    <span class="hotline">**AV ADC** -> **MAV**</span>: "Next, UJI, Runway 18"  
    <span class="hotline">**MAV** -> **AV ADC**</span>: "UJI, heading 030, unrestricted"  
    <span class="hotline">**AV ADC** -> **MAV**</span>: "Heading 030, UJI"

The Standard Assignable level from AV ADC to ML TCU is the lower of `A040` or the `RFL`.

#### Runway Change
Any Runway change must be prior coordinated to the relevant [TCU Controller](#tcu-controller).

#### TCU Controller
When multiple ML TCU controllers are online, the relevant TCU controller is whoever is responsible for **MAV**.