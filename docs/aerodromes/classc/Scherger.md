---
  title: Scherger (YBSG)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign              | Frequency   | Login ID      |
| ------------------ | --------------------- | ----------- | ------------- |
| **Scherger ADC**   | **Scherger Tower**    | **118.300** | **SG_TWR**    |
| **Scherger SMC**   | **Scherger Ground**   | **126.200** | **SG_GND**    |
| **Scherger ATIS**  |                       | **134.800** | **YBSG_ATIS** |

## Airspace
SG ADC owns the Class C airspace within the SG CTR from `SFC` to `A015` with a **5nm radius** around YBSG.

## Runway Modes
### Circuits
| Runway | Direction |
| ------ | ----------|
| 30     | Right  |
| 12     | Left |

## Coordination
### Auto Release
[Next](../../controller-skills/coordination.md#next) coordination is required from SG ADC to SG TCU for all aircraft.

The Standard Assignable Level from **SG ADC** to **SG TCU** is:

| Aircraft | Level |
| ------- | ------- |
| All | The lower of `F240` and `RFL` |

SG TCU shall perform [Heads Up](../../controller-skills/coordination.md#heads-up) coordination for all aircraft inbound to YBWP.

### Departures Controller
When a TCU controller is online, aircraft shall be issued with a departure frequency during their airways clearance in accordance with the table below. If no TCU controllers are online, the Advisory frequency shall be issued.

| Runway | Via | Departure Frequency |
| ------ | ---- | -------------------- |
| All | All | 124.2 (SGA) |

### ISA(ARA)
When SG TCU is offline, coordination is not required between SG ADC and ISA(ARA). Aircraft entering ISA(ARA) airspace shall be handed off, and instructed to contact ISA(ARA) for onwards clearance.

## Charts
!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}