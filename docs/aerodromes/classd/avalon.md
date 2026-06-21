---
  title: Avalon (YMAV)
---

--8<-- "includes/abbreviations.md"

## Positions
| Name              | Callsign         | Frequency   | Login ID      |
| ----------------- | ---------------- | ----------- | ------------- |
| **Avalon ADC**    | **Avalon Tower** | **120.100** | **AV_TWR**    |
| **Avalon ATIS**   |                  | **118.200** | **YMAV_ATIS** |

## Airspace
AV ADC is not responsible for any airspace by default.
AV ADC may request a *release* of the **Class D** airspace in the AV CTR from ML TCU to facilitate circuit operations, if required.

## SID Selection
Aircraft planned via **ML** shall be assigned the **JUSTY** SID.

Aircraft **not** planned via **ML**, and tracking to the North East, shall be recleared via ML, and assigned the **JUSTY** SID.

All other IFR aircraft shall be assigned the **Radar SID**.

### Circuits
| Runway | Direction |
| ------ | ----------|
| 18     | Left  |
| 36     | Right |

## Coordination
### ML TCU
#### Departures
[Next](../../controller-skills/coordination.md#next) coordination is **not** required to ML TCU for aircraft that are:  

- Departing from a runway nominated on the ATIS; and  
- Assigned the standard assignable level; and  
- Assigned a **Procedural** SID

All other aircraft require a 'Next' call to ML TCU.

The standard assignable level from **AV ADC** to **ML TCU** is:

| Aircraft | Level |
| ----- | -------| 
| All | The lower of `A040` and `RFL` |

### Departures Controller
When a TCU controller is online, aircraft shall be issued with a departure frequency during their airways clearance in accordance with the table below. If no TCU controllers are online, the appropriate enroute frequency or advisory frequency shall be issued.

| Runway | Via  | Departure Frequency |
| ------ | ---- | ------------------- |
| All    | All  | 133.55 (MAV)        |

#### Runway Change
Any Runway change must be prior coordinated to the TCU controller responsible for **MAV**.
