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

<figure markdown>
![YBOK ADC Airspace](img/YBOK-CTR.png){ width="600" }
  <figcaption>YBOK ADC Airspace</figcaption>
</figure>

## Manoeuvring Area

### Manoeuvring Area Responsibility

<figure markdown>
![YBOK Manoeuvring Area Responsibility](img/YBOK-ManoeuvringAreaResponsibility.png){ width="600" }
  <figcaption>Manoeuvring Area Responsibility</figcaption>
</figure>

### Taxiway Bravo
Taxiway Bravo may be used for helicopter arrivals and departures in any direction as specified by ATC. Four helipads are available on the taxiway for these manoeuvres: **Pad 1**, **Pad 2**, **Pad 3** and **Pad 4**. These pads are inside the manoeuvring area, and helicopters using these pads require an explicit a takeoff/landing clearance from OK ADC.

Aircraft taxiing outbound from the RSAF and Military Aprons shall be instructed to hold short of the most appropriate taxiway, when necessary, to provide separation with helicopters operating on Taxiway Bravo. 

<figure markdown>
![YBOK Taxiway Bravo](img/YBOK-TaxiwayBravo.png){ width="600" }
  <figcaption>Pads 1 to 4 on Taxiway Bravo</figcaption>
</figure>

### Lanes

There are three helicopter lanes in the centre of the aerodrome, parallel to Runway 09/27. Lanes 1 and 3 are sealed pavement, while Lane 2 is grass. 

<figure markdown>
![YBOK Lanes](img/YBOK-Lanes.png){ width="600" }
  <figcaption>YBOK Lanes</figcaption>
</figure>

Lanes may be used for circuits and low-level operations. Aircraft cleared to land or enter a lane may conduct operations within that lane not above `A003`. Each lane may only be occupied by one aircraft at a time.

These lanes are inside the manoeuvring area and treated like a runway. Helicopters using these pads require an explicit takeoff/landing clearance from OK ADC. 

!!! phraseology
    **FRTL22:** "Oakey Tower, helicopter FRTL22, ready Lane 2"    
    **OK ADC:** "FRTL22, Lane 2, cleared for takeoff."    
    **FRTL22:** "Cleared for takeoff Lane 2, FRTL22"  

## Local Procedures

### Oakey Flying Training Area

#### Flying Training Areas

R654A, B, C and D are divided into the Western, North West and North East FTAs. These areas are the primary location for military helicopters conducting operations.

<figure markdown>
![YBOK FTAs](img/YBOK-FTAs.png){ width="600" }
  <figcaption>Flying Training Areas</figcaption>
</figure>

## Departure and Arrival Procedures

### Departures
By default, aircraft will be cleared to transit to their requested FTAs by tracking direct.

!!! phraseology
    **CYCP90:** "Oakey Delivery, helicopter CYCP90, for the northeast training area, request clearance"    
    **OK ACD:** "CYCP90, Oakey Delivery, cleared northeast training area direct, not above A030, squawk 7324"  
    **CYCP90:** "Cleared northeast training area direct, not above A030, squawk 7324, CYCP90"  

Aircraft will depart the CIRA visually and track direct to their FTAs.

!!! phraseology
    **OK ADC:** "FRTL21, make right turn, cleared for takeoff"    
    **FRTL21:** "Make right turn, cleared for takeoff, FRTL21"  

### Arrivals

OK TCU will clear inbound aircraft to YBOK direct, not above `A030`. OK TCU will transfer the aircraft to ADC approaching the CTR boundary. Instruct the aircraft to join the circuit for the applicable duty runway or lane and clear them for a visual approach (traffic permitting).

!!! phraseology
    **KNGT31:** "Oakey Tower, helicopter KNGT31, A030, request Lane 3"    
    **OK ADC:** "KNGT31, Oakey Tower, join base Lane 3, cleared visual approach"    
    **KNGT31:** "Join base Lane 3, cleared visual approach, KNGT31"    


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