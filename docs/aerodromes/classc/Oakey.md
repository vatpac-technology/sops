---
  title: Oakey (YBOK)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name              | Callsign              | Frequency   | Login ID      |
| ----------------- | --------------------- | ----------- | ------------- |
| **Oakey ADC**     | **Oakey Tower**       | **120.100** | **OK_TWR**    |
| **Oakey SMC**     | **Oakey Ground**      | **121.900** | **OK_GND**    |
| **Oakey ACD**     | **Oakey Delivery**    | **133.350** | **OK_DEL**    |
| **Oakey ATIS**    |                       | **124.300** | **YBOK_ATIS** |

## Airspace
OK ADC owns the airspace within 5 DME of the OK VOR from `SFC` to `A030`. This airspace is designed to facilitate circuit traffic.

## Manoeuvring Area

### Manoeuvring Area Responsibility

<figure markdown>
![YBOK Manoeuvring Area Responsibility](img/YBOK-ManoeuvringAreaResponsibility.png){ width="600" }
  <figcaption>Manoeuvring Area Responsibility</figcaption>
</figure>

### Taxiway Bravo

Four helipads are available on Taxiway Bravo from east to west, they are named Pad 1, Pad 2, Pad 3 and Pad 4. Taxiway Bravo may be used for helicopter arrivals and departures in any direction as specified by ATC. These pads are inside the manoeuvring area and treated like a runway, requiring a takeoff and landing clearance from OK ADC.

<figure markdown>
![YBOK Taxiway Bravo](img/YBOK-TaxiwayBravo.png){ width="600" }
  <figcaption>Taxiway Bravo</figcaption>
</figure>

### Lanes

Three helicopter lanes are located immediately north of Runway 09/27, aligned in the 09/27 cardinal direction. Lanes 1 and 3 are sealed pavement, while Lane 2 is grass. Each lane may only be occupied by one aircraft at a time. These lanes are inside the manoeuvring area and treated like a runway, requiring a takeoff and landing clearance from OK ADC. 

Lanes may be used for circuits and low-level operations. Aircraft cleared to land or enter a lane may conduct operations within that lane. Lane operations permit hover and operations not above `A003` within the lane.

<figure markdown>
![YBOK Lanes](img/YBOK-Lanes.png){ width="600" }
  <figcaption>YBOK Lanes</figcaption>
</figure>

## Local Procedures

### Oakey Flying Training Area

#### Flying Training Areas

R654A, B, C and D are divided into the Western, North West and North East FTAs, these areas overlay the LFAs.

<figure markdown>
![YBOK FTAs](img/YBOK-FTAs.png){ width="600" }
  <figcaption>Flying Training Areas</figcaption>
</figure>

!!! phraseology
    **JUNO76:** "Oakey Delivery, helicopter JUNO76, for the northeast training area, request clearance"    
    **OK ACD:** "JUNO76, Oakey Delivery, cleared northeast training area, not above A030, squawk 7324"  
    **JUNO76:** "Cleared northeast training area, not above A030, squawk 7324, JUNO76"  

#### Low Flying Areas

There are eight LFAs within the OFTA, LFAs are the primary location for military helicopters conducting low level operations. LFAs are numbered 1-8 with the prefix L, verbally pronounced as, "LIMA (number)".

#### SAAFRs

SAAFRs provide efficient movement through the OFTA to specific LFAs during periods of high traffic. They are defined as 2nm wide, and are named "X-Ray", "Yankee" and "Zulu".

#### Transit Areas

Three transit areas, named "Whiskey" (western), "Charlie" (central) and "Echo" (eastern) are located between the Oakey CTR and inner boundaries of their respective LFAs. Transit Areas exist to provide flexibility in routing when leaving or enter Oakey CTR. Prolonged operations in Transit Areas should only be approved, subject to volume of aircraft in the Oakey CTR.

!!! tip
    Detailed images depicting LFAs, SAAFRs and Transit Areas are available on the [Oakey AD2 SUP](https://ais-af.airforce.gov.au/australian-aip)

## Departure and Arrival Procedures

### Departures

By default, transit to and from LFAs will not be achieved by use of SAAFRs nor Transit Areas.

!!! phraseology
    **xxx:** "xxx"  
    **xxx:** "xxx"  
    **xxx:** "xxx"

### Arrivals


## Runway Modes
### Circuits
#### Circuit Heights
a) Standard Circuit `A024`  
b) Low Level Circuit `A017`

#### Circuit Direction
The standard circuit direction is to the north of the field.

| Runway | Direction |
| ------ | ----------|
| 32     | Right  |
| 14     | Left |
| 23     | Right |
| 05     | Left |
| 09     | Left |
| 27     | Right |

## Coordination
### Auto Release
[Next](../../controller-skills/coordination.md#next) coordination is required from OK ADC to OK TCU for all aircraft.

The Standard Assignable level from **OK ADC** to **OK TCU** is:

| Aircraft | Level |
| -------- | ----- |
| Fixed-wing | The lower of `F120` and `RFL` |
| Rotary-wing | The lower of `A030` and `RFL` |

### Departures Controller
When a TCU controller is online, aircraft shall be issued with a departure frequency during their airways clearance in accordance with the table below. If no TCU controllers are online, the Advisory frequency shall be issued.

| Runway | Via | Departure Frequency |
| ------ | ---- | -------------------- |
| All | All | 125.4 (OKA) |

## Charts
!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}