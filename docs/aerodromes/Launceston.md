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

## SID Selection

Aircraft planned via **IRSOM**, **ONAGI**, **NUNPA**, **MOTRA**, **IRONS**, **MORGO**, **KAREN**, **TASUM**, or **NOLAN**, shall be assigned the **Procedural SID** that terminates at the appropriate waypoint.

Aircraft planned via **IRSOM**, **ONAGI**, **NUNPA**, **MOTRA**, **IRONS**, **MORGO**, **KAREN**, **TASUM**, or **NOLAN**, shall be assigned an appropriate **Procedural SID** or a visual departure.

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
### LT ADC / LT TCU

#### Taxi Call
A taxi call shall be made between LT ADC and LT TCU as an aircraft is given taxi clearance. Center will respond by acknowledging the callsign and activating FDR.

!!! example
    **LT ADC** -> **LT TCU**: "Taxis QFA400 for YSSY via NOLAN"  
    **LT TCU** -> **LT ADC**: "QFA400"  

#### Next Call
A next call is made for all aircraft when they are next to depart and will be departing within two minutes. LT TCU will respond by either acknowledging the callsign or offering a higher level. Any higher level issued will be passed along in the takeoff clearance. If the controller is in a high workload environment, a next call may be omitted, in favour of taxi and departure coordination.

!!! example
    **LT ADC** -> **LT TCU**: "Next QFA400"  
    **LT TCU** -> **LT ADC**: "QFA400, FL140"  
    **LT ADC** -> **LT TCU**: "FL320, QFA400"  

#### Departure Call
A departure call should be made as the aircraft becomes airborne. If not already issued, TCU will issue a higher level. The aircraft should be transferred to TCU as they climb through the upper level of the LT class D airspace.

!!! example
    **LT ADC** -> **LT TCU**: "Departure QFA400 at 06"  
    **LT TCU** -> **LT ADC**: "QFA400"

#### Arrival Coordination
LT TCU will coordinate all arrivals into Launceston Prior to handing over to tower in the following format:

- Callsign & Aircraft Type
- Estimate
- Inbound Radial/Procedure
- Assigned Level
- Sequence Number (if applicable)

!!! example
    **LT TCU** -> **LT ADC**: "JST416, A320, estimates Launceston 52, RNAV-Z 14R via MLTNE, 5000ft, number 1”
    **LT ADC** -> **LT TCU**: "JST416"

## Standard Assignable Levels

Jets: `A080`
Non-jets: `A045` or `RFL` if lower