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
AV ADC is responsible for the Class D Airspace within the AV CTR (`SFC`-`A025`). This airspace may be released to ML TCU with the concurrence of both controllers.  
ML TCU is responsible for the Class E Airspace to the North, South, and Above the AV CTR.  
ML TCU is repsonsible for the Class G Airspace to the East of the AV CTR, and to the West of the AV CTR within 30 DME ML.  
YWE is responsible for the Class G Airspace to the West of the AV CTR outside 30 DME ML.  
YWE(WON) is responsible for the Class G Airspace to the South East of the AV CTR outside 30 DME ML.

<figure markdown>
![AV Tower Airspace](img/avctr.png){ width="500" }
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

## Sequencing
AV ADC is responsible for sequencing any aircraft operating in airspace released to the tower, with respect to aircraft arriving from ML TCU. 

## Separation
Within 5 NM of AV, AV ADC must provide separation between:  
    a) Departures from all runways and HLS at Avalon; and  
    b) All traffic operating in airspace released to AV TWR.  

### Circuit Direction

| Runway | Direction |
| ------ | ----------|
| 18     | Left  |
| 36     | Right |

## Coordination
### AV ADC / ML TCU
#### Departures
Auto Release shall be used for aircraft that are:    
a) Departing from a runway nominated on the ATIS; and  
b) Issued a Procedural SID; and   
c) Assigned `A040`;

Any aircraft that don't meet these criteria must be coordinated to ML TCU with a "Next" Call

!!! example
    <span class="coldline">**AV ADC** -> **MDS**</span>: "Next, UJI, Runway 18"  
    <span class="coldline">**MDS** -> **AV ADC**</span>: "UJI, left 030, unrestricted"  
    <span class="coldline">**AV ADC** -> **MDS**</span>: "Left 030 unrestricted, UJI"

#### Arrivals
ML TCU will coordinate the sequence to AV ADC. ML TCU will clear aircraft for the approach prior to transfer to AV ADC.

!!! example
    <span class="coldline">**MDS** -> **AV ADC**</span>: "New Sequence of 2. Via JAYBI5 Arrival, JST631, Number 1. Via AV for a practice VOR approach, OXG, Number 2”  
    <span class="coldline">**AV ADC** -> **MDS**</span>: "JST631, Number 1. OXG, Number 2"  

#### Runway Change
Any Runway change must be prior coordinated to **MAE**

#### TCU Controller
Refer to [Melbourne TCU Airspace Division](../../terminal/melbourne/#airspace-division) for information on airspace divisions when **MDN** and/or **MDS** are online.

### AV ADC / YWE/WON
AV ADC only borders YWE/WON Class G airspace, and as such, no coordination is required between AV ADC and YWE/WON.