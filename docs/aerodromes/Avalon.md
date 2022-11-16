---
  title: Avalon (YMAV)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login Identifier                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| Avalon ADC      | Avalon Tower   | 120.100          | AV_TWR                                   |
| Avalon ATIS     |                | 118.200         | YMAV_ATIS                                |

## Airspace

<figure markdown>
![AV Tower Airspace](img/AVTWR.png){ width="500" }
</figure>

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## SID Selection

Aircraft planned via **JUSTY**, or **ML**, shall be assigned the **Procedural SID** that terminates at the appropriate waypoint.

Aircraft **not** planned via **JUSTY**, or **ML**, shall be assigned an appropriate **Procedural SID** or a visual departure.


## Arrivals
IFR arrivals from the following fixes may be cleared via STAR as indicated:

| Arrival Fix | STAR |
| ------ | ----------|
| **Northwest / North / Northeast** KEPPA / CANTY   | JAYBI / APPLE or CANTY transition |
| **Northeast / East / Southeast** ML    | JAYBI / ML transition |

!!! Note
    All jet aircraft shall be cleared via TEMPL, DCT AV or the RNAV IAF.
    
Unless otherwise coordinated and subject to Class E traffic requirements, aircraft shall be transferred to AV TWR no later than:

| Procedure | Transfer point |
| ------ | ----------|
| Visual Approach | On base or final, no later than 5 NM |
| ILS, LOC, VOR or RNAV  | As soon as practical, no later than 10 NM to run |
| DME/GPS Arrival  | At 10 NM established inbound |

## Sequencing

AV TWR is responsible for sequencing any aircraft operating in airspace released to the tower, with respect to aircraft arriving from ML TCU. 

## Separation

Within 5 NM of AV, AV TWR must provide separation between:
    a) Departures from all runways and HLS at Avalon; and
    b) All traffic operating in airspace released to AV TWR.

## VFR Operations

### Circuit Direction

| Runway | Direction |
| ------ | ----------|
| 18     | Left  |
| 36     | Right |

## Coordination
### AV ADC / ML TCU
#### Auto Release

Auto Release shall be used for aircraft that are:    
a) Departing from a runway nominated on the ATIS; and  
b) Issued a Procedural SID; and   
c) Assigned `A040`;

Any aircraft that don't meet these criteria must be coordinated to ML TCU with a "Next" Call

!!! example
    **AV ADC** -> **ML TCU**: "Next, ABC"  
    **ML TCU** -> **AV ADC**: "ABC, Track Extended Centreline"  
    **AV ADC** -> **ML TCU**: "Track Extended Centreline, ABC" 
    `AIP GEN 3.4`

### ML TCU / AV ADC

ML TCU shall notify AV ADC of the arrival sequence by coordinating the arrival direction and current position.

### Runway Change
Any Runway change must be prior coordinated to **MAE**

## Standard Assignable Departure Levels

All Aircraft: `A040` or `RFL` if lower