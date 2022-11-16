---
  title: Launceston (YMLT)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name              | Callsign       | Frequency        | Login Identifier                         |
| ----------------- | -------------- | ---------------- | ---------------------------------------- |
| **Launceston ADC**    | **Launceston Tower**   | **118.700**     | **LT_TWR**                          |
| Launceston ATIS       |                | 134.750          | YMLT_ATIS                                |

### Maneuvering Area Responsibility
<figure markdown>
![YMLT Maneuvering Area](img/ymlt_maneuvring_area.png){ width="500" }
</figure>

## Airspace

<figure markdown>
![Launceston Tower Airspace](img/LTTWR.png){ width="700" }
</figure>

<figure markdown>
![Launceston Tower Class D Airspace](img/lttwr_profile.png){ width="700" }
</figure>

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## SID Selection

Aircraft planned via **IRSOM**, **ONAGI**, **NUNPA**, **MOTRA**, **IRONS**, **MORGO**, **KAREN**, **TASUM**, or **NOLAN**, shall be assigned the appropriate **Procedural SID**.  Other aircraft shall be assigned a visual departure.

## VFR Operations

### Circuit Direction

| Runway | Direction |
| ------ | ----------|
| 14L     | Left  |
| 14R    | Right |
| 32L     | Left  |
| 32R     | Right |
| 18     | Left  |
| 36     | Left  |

## Coordination
### Departures
A next call is made for all aircraft when they are next to depart and will be departing within two minutes. LTA will respond by either acknowledging the callsign or offering a higher level. Any higher level issued will be passed along in the takeoff clearance. If the controller is in a high workload environment, a next call may be omitted, in favour of taxi and departure coordination.

!!! example
    **LT ADC** -> **LTA**: "Next QFA400"  
    **LTA** -> **LT ADC**: "QFA400, FL140"  
    **LT ADC** -> **LTA**: "FL140, QFA400"  

The Standard Assignable level from HB ADC to HBA is:  
For Jets: `A080`  
For Non-Jets: The lower of `A045` or the `RFL`.
### Arrivals
LTA will coordinate all arrivals into Launceston Prior to 5 mins from the boundary.

!!! example
    **LT TCU** -> **LT ADC**: "JST416, A320, estimates Launceston 52, RNAV-Z 14R via MLTNE, 5000ft, number 1”
    **LT ADC** -> **LT TCU**: "JST416"

## Standard Assignable Levels

Jets: `A080`  
Non-jets: `A045` or `RFL` if lower
