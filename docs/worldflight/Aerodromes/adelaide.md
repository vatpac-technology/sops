---
  title: 2. Adelaide (YPAD)
---

--8<-- "includes/abbreviations.md"

## Positions
An additional Non-Standard position for AD SMC will be used

| Name               | Callsign       | Frequency        | Login ID                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| Adelaide SMC (West)    | Adelaide Ground  | 126.550          | **AD-W_GND**                                   |

## Runway Modes

| Priority | Mode |
| ---------- | --- |
|  1 | 23A30AD |
|  2  | 05A30AD |
|  3 | 05A12D |
|  4  | 23A12D |

Any other Runway Mode may **only** be used with approval from the Events Coordinator.

## Airways Clearance Delivery (ACD)
### Flight Plan Compliance
Ensure **all flight plans** are checked for compliance with the approved WF Route:

`DCT AD Q33 ESP Q158 PH DCT`

**OzStrips** will flag any *non-compliant* WF route.

If an aircraft has filed an *incorrect* route and you need to give an amended clearance, this amendment must be specified by **individual private message**, prior to the PDC.

!!! example
    **AD ACD:** *"AMENDED ROUTE CLEARANCE. CLEARED TO YPPH VIA GILES Q33 ESP Q158 PH DCT. READBACK AMENDED ROUTE IN FULL DURING PDC READBACK. STANDBY FOR PDC."*

### SMC Frequency
Upon readback of an airways clearance or PDC, instruct aircraft to contact Adelaide Ground on **121.700** when ready for pushback.

### WorldFlight Teams
[WorldFlight Teams](../../#official-team-callsigns) shall have `STS/STATE` added to their remarks, and `WF TEAM` added to their Global Ops Field, to ensure they receive priority.

### Strip Setup
By default, vatSys strips will be set to show in *Alphabetical* Order.  
This must be changed to be ordered by **Time**, as shown below.

<figure markdown>
![Strips Menu](../img/strip1.png){ width="500" }
    <figcaption>Strips Menu</figcaption>
</figure>

<figure markdown>
![Change to Time](../img/strip2.png){ width="500" }
    <figcaption>Change to Time</figcaption>
</figure>

### Runway Selection
Aircraft that are unable to accept Runway 12/30 due to operational requirements shall be assigned Runway 05/23 (as appropriate based on Runway Mode).

### SID Selection
Runway 05/23 Departures will be assigned the standard **GILES5** SID.

Runway 12/30 Departures will be assigned the **AD4** RADAR SID.

### Departure Frequency
Departures from Runway 05, 23, and 30 shall be given the AAW frequency (124.2).  
Departures from Runway 12 shall be given the AAE frequency (118.2).

### PDCs
PDCs will be in use by default, to avoid frequency congestion. ACD shall send a PDC to each aircraft as they connect. Upon successful readback of the PDC, ACD shall direct the pilot to contact SMC when ready for pushback or taxi.

## Surface Movement Control (SMC)
### Areas of Responsibility
<figure markdown>
![YPAD SMC Areas of Responsibility](../img/ypadsmcown.png){ width="700" }
  <figcaption>YPAD SMC Areas of Responsibility</figcaption>
</figure>

**Do not** give taxi instructions **beyond** your area of responsibility. Instruct aircraft to hold short of taxiways where responsibility changes to the next controller.

!!! example
    **AD SMC:** "QFA7448, Taxi via F2, A, Hold Short of K"  
    **QFA7448:** "Taxi via F2, A, Hold Short of K, QFA7448"   
    When QFA7448 is approaching K:  
    **AD SMC:** "QFA7448, Contact Ground 121.7"  

### Pushback Delays
SMC will be responsible for delaying aircraft's pushback requests, in order to avoid overloading the taxiways.

If there are more than **5** aircraft in the queue at the Holding Point for *any runway*, do not approve any more pushback requests.

#### OzStrips
All aerodrome controllers must be familiar with the VATPAC [recommended workflow](../../client/towerstrips.md#recommended-workflow) for OzStrips.

Ensure the Queue function is used to actively to keep track of the order of requests.

### A388 Parking
YPAD does not have any gates suitable for A388 parking. A388s must be instructed to park off-apron on the grass, to ensure they do not block any parking spots or taxiways.

### Eastern Terminal Taxi Routes
During **all** Runway Modes, aircraft shall be instructed to taxi in the following area in a **counter-clockwise** pattern. Aircraft shall be instructed to **pushback** facing **South-West** (Tail Right).

<figure markdown>
![Eastern Terminal Taxi Routes](../img/smcntaxi.png){ width="700" }
  <figcaption>Eastern Terminal Taxi Routes</figcaption>
</figure>

### Grass Taxiing
Due to limitations in the taxiway layout at YPAD, some aircraft will need to be taxied via Grass Routes, as shown below.

<figure markdown>
![YPAD Grass Taxi Routes](../img/ypadsmcbase.png){ width="700" }
  <figcaption>YPAD Grass Taxi Routes</figcaption>
</figure>

### Taxi Routes

#### 23A30AD
Aircraft shall taxi around the aerodrome in a **Clockwise** pattern.  
Runway 23 Arrivals will vacate **right**, and taxi via **F**, **A**, **B1** to the apron.  
Runway 30 Departures will taxi via *Eastern Grass*.  
Runway 23 Departures *(Operational Requirement)* will queue to the South West on **T**, then North East on **A**.

<figure markdown>
![23A30AD SMC Diagram](../img/23A30DSMC.png){ width="700" }
  <figcaption>23A30AD SMC Diagram</figcaption>
</figure>

#### 05A30AD
Aircraft shall taxi around the aerodrome in a **Clockwise** pattern.  
Runway 05 Arrivals will vacate **left**, and taxi via **A**, **B1** to the apron.  
Runway 30 Departures will taxi via *Eastern Grass*.  
Runway 05 Departures *(Operational Requirement)* will taxi via *Eastern Grass* and *Southern Grass*.

<figure markdown>
![05A30AD SMC Diagram](../img/05A30DSMC.png){ width="700" }
  <figcaption>05A30AD SMC Diagram</figcaption>
</figure>

#### 05A12D
Aircraft shall taxi around the aerodrome in a **Counter-Clockwise** pattern.  
Runway 05 Arrivals will vacate **right**, and taxi via *Southern Grass* and *Eastern Grass* to join **T** at **T1**.  
Runway 12 Departures will taxi via **A** and **G1**.  
Runway 05 Departures *(Operational Requirement)* from the Eastern Terminal will taxi via **A** and **F**.  
Runway 05 Departures *(Operational Requirement)* from the Western Terminal will taxi via *Western Grass* and **F**.  

<figure markdown>
![05A12D SMC Diagram](../img/05A12DSMC.png){ width="700" }
  <figcaption>05A12D SMC Diagram</figcaption>
</figure>

#### 23A12D
Aircraft shall taxi around the aerodrome in a **Counter-Clockwise** pattern.  
Runway 23 Arrivals will vacate **left**, and taxi via *Southern Grass* and *Eastern Grass* to join **T** at **T1**.  
Runway 12 Departures will taxi via **A** and **G1**.  
Runway 23 Departures *(Operational Requirement)* will queue to the South West on **T**, then North East on **A**.  
Runway 23 Departures *(Operational Requirement)* from the Western Terminal will taxi via *Western Grass* and **F3**, **F4**, Cross 23, *Southern Grass*, *Eastern Grass*, to join queue at **B2**.  

<figure markdown>
![23A12D SMC Diagram](../img/23A12DSMC.png){ width="700" }
  <figcaption>23A12D SMC Diagram</figcaption>
</figure>

## Tower Control (ADC)
### Departure Spacing
Ensure that a minimum of **90 second** spacing is applied between subsequent departures from the same runway.

### AD4 Assigned Heading
Runway 12/30 Departures will be assigned the **AD4** RADAR SID, with the following Assigned Heading:

| Runway Mode | Runway 12/30 Assigned Heading |
| ---------- | --- |
| 23A30AD      | Runway Heading |
| 05A30AD      | H230 |
| 05A12D      | H060 |
| 23A12D      | H180 |

### Wake Turbulence Separation
Due to the tight sequence, there are times that [Wake Turbulence Separation](../../../separation-standards/waketurb/#runways) cannot practically be applied.

When a following aircraft is of a *lighter* [Wake Turbulence Category](../../../separation-standards/waketurb/#categories) than the preceding aircraft, a traffic statement and wake turbulence **caution** shall be issued.

!!! example
    **AD ADC:** "QFA887, A330 has just departed on the crossing runway. Caution Wake Turbulence. Runway 30, Cleared for Takeoff"  
    **QFA887:** "Cleared for Takeoff Runway 30, QFA887"

### Managing Runway 30 Arrivals
When Runway 30 and 05/23 is in use for arrivals at YPAD, ADC must manage the speeds of aircraft on final to ensure they will not conflict on landing.

Use two BRLs anchored on the runway intersection point to monitor distances and speeds. Leave the BRLs there and change them from aircraft to aircraft as the sequence continues.

Aim for a minimum of **2nm** separation at the instersection.

<figure markdown>
![Dual BRL at Intersection](../img/ypaddualbrl.png){ width="500" }
  <figcaption>Dual BRL at Intersection</figcaption>
</figure>

### Runway Vacating Instructions
#### 23A30AD
Landing aircraft will be instructed to vacate **right** (any exit).

!!! note
    Instruct aircraft that are observed vacating at **D2** to *remain this frequency*, as ADC owns the taxiway.

#### 05A30AD
Runway 05 Arrivals will be instructed to vacate **left** (any exit).  
Runway 30 Arrivals will be instructed to vacate **right** (any exit).

!!! note
    Instruct aircraft that are observed vacating at **D2** to *remain this frequency*, as ADC owns the taxiway.

#### 05A12D
Landing aircraft will be instructed to vacate **right** via *Southern Grass* or **D2**.

#### 23A12D
Landing aircraft will be instructed to vacate **left** via *Southern Grass*.

## ATIS
When 05 is in use for Arrivals, The ATIS OPR INFO shall include:  
`EXP CLR VIA PDC. ADVISE ON FIRST CONTACT WITH DELIVERY IF YOU REQUIRE RUNWAY 05`

When 23 is in use for Arrivals, The ATIS OPR INFO shall include:  
`EXP CLR VIA PDC. ADVISE ON FIRST CONTACT WITH DELIVERY IF YOU REQUIRE RUNWAY 23`

## Coordination
### AD TCU
#### Auto Release
Standard as per [YPAD Local Instructions](../../../aerodromes/classc/Adelaide/#auto-release), with the exception of auto-release being available for **12/30 Departures** assigned the following *Standard Assignable Departure Headings*:

| Runway Mode | Runway 12/30 Assigned Heading |
| ---------- | --- |
| 23A30AD      | Runway Heading |
| 05A30AD      | H230 |
| 05A12D      | H060 |
| 23A12D      | H180 |

#### Departures Controller
Departures from Runway 05, 23, and 30 shall be handed off to AAW.  
Departures from Runway 12 shall be handed off to AAE.