---
  title: 3. Perth (YPPH)
---

--8<-- "includes/abbreviations.md"

## Runway Modes

| Priority | Mode | Operation |
| ---------- | --- | --- |
|  1 | 24A21D | [Simultaneous Independent Crossing Runway Operations](#24a21d) |
|  2  | 03A06D | [Land and Hold Short Operations](#03a06d) |

Any other Runway Mode may **only** be used with approval from the Events Coordinator.

## Workload Management
Due to the extreme workload expected for all positions, the use of the OzStrips plugin for managing aerodrome positions is **mandatory**. Controllers should familiarise themselves with the plugin and the VATPAC [recommended workflow](../../client/towerstrips.md#recommended-workflow).

### 24A21D
Simultaneous Independent Crossing Runway Operations will be in use, allowing aircraft to depart from Runway 21 without conflicting with Runway 24 arrivals.

Runway 21 TORA from Intersection **P** is **2000m**.  

Expect some arrivals to be landing on Runway 21 due to operational requirements.

### 03A06D
Land and Hold Short Operations (LAHSO) will be in use, allowing aircraft to land on Runway 03 without conflicting with Runway 06 departures.

Runway 03 LDA to Runway **06/24** Intersection is **2355m**.

!!! example
    **PH ADC:** "GTI1471, 737 departing on Crossing Runway. Hold Short Runway 06. Cleared to land Runway 03"  
    **GTI1471:** "Cleared to land Runway 03, GTI1471"  
    **PH ADC:** "QFA365, 747 landing on Crossing Runway will Hold Short. Runway 06, Cleared for takeoff"  
    **QFA365:** "Cleared for takeoff Runway 06, QFA365"  

Aircraft that are unable to Land and Hold Short of Runway 06 will have `XX` entered in their scratchpad by preceding controllers.

## Airways Clearance Delivery (ACD)
### Flight Plan Compliance
Ensure **all flight plans** are checked for compliance with the approved WF Route:

`DCT PH Y15 ESDEG Q587 IGLUT T58 SAPDA A585 IPKON IPKO2G`

**OzStrips** will flag any *non-compliant* WF route.

If an aircraft has filed an *incorrect* route and you need to give an amended clearance, this amendment must be specified by **individual private message**, prior to the PDC.

!!! example
    **PH ACD:** *"AMENDED ROUTE CLEARANCE. CLEARED TO WIII VIA AVNEX Y15 ESDEG Q587 IGLUT T58 SAPDA A585 IPKON IPKO2G. READBACK AMENDED ROUTE IN FULL DURING PDC READBACK. STANDBY FOR PDC."*

### WorldFlight Teams
[WorldFlight Teams](../../#official-team-callsigns) shall have `STS/STATE` added to their remarks, and `WF TEAM` added to their Global Ops Field, to ensure they receive priority.

!!! tip
    The [vatSys Events Plugin](https://github.com/badvectors/EventsPlugin){target=new} will also highlight WF Teams, as shown below. Click on the link to install it, or alternatively, use the [Plugin Manager](https://github.com/badvectors/PluginManager){target=new}

    <figure markdown>
    ![WF Team Highlight with Events Plugin](../img/wfteam.png){ width="400" }
    <figcaption>WF Team Highlight with Events Plugin</figcaption>
    </figure>

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

### 03A06D
All Medium and Light aircraft are *assumed* to be able to accept Runway 06 for Departure.

Heavy and Super aircraft must be **queried** if they are able to accept Runway 06 for Departure.

!!! note
    *Requests* for Runway 03 cannot be facilitated. The aircraft must **operationally require** longer than *2163m TORA* to receive it.

Aircraft that *operationally require* Runway 03 shall be assigned it.

### SID Selection
Departures from Runway 06 will be assigned the **PH7** SID.  
Departures from Runway 03 and 21 will be assigned the standard **AVNEX5** SID.

### PDCs
PDCs will be in use by default, to avoid frequency congestion. ACD shall send a PDC to each aircraft as they connect, prioritising those who connected first. Upon successful readback of the PDC, ACD shall direct the pilot to contact SMC when ready for pushback or taxi.

!!! tip
    OzStrips displays strips in the Preactive bay ordered by connection time. Aircraft who connected first are shown down the bottom of the bay.

Work through the OzStrips Preactive bay from *bottom to top* when sending PDCs.

## Surface Movement Control (SMC)
### Pushback Delays
SMC East and West will be responsible for delaying aircraft's pushback requests, in order to avoid overloading the taxiways.

If there are more than **5** aircraft in the queue at the Holding Point for *any runway*, do not approve any more pushback requests.

#### OzStrips
All aerodrome controllers must be familiar with the VATPAC [recommended workflow](../../client/towerstrips.md#recommended-workflow) for OzStrips.

Ensure the Queue function is used to actively to keep track of the order of requests.

A Custom `PDC SENT` bar should be created in the Preactive window, to keep track of who has and hasn't received a PDC.

### A388 Operations
#### Taxi Routes
[YPPH Aerodrome Ground Movement Chart](https://www.airservicesaustralia.com/aip/current/dap/PPHAG01-178_05SEP2024.pdf){target=new} specifies taxi routes for A388 aircraft. These must be **disregarded** for the event, and standard taxiways must be used for A388 aircraft to facilitate orderly flow of traffic.

#### Parking
There are only 3 stands suitable for A388 parking (refer to [YPPH Apron Chart](https://www.airservicesaustralia.com/aip/current/dap/PPHAP05-180_05SEP2024.pdf){target=new}). If these are all occupied, A388 aircraft must be instructed to park off-apron on grass.

### Runway 21 Departures
By default, all aircraft will be assigned Intersection **P** for departure. Verify with **Heavy** and **Super** aircraft when they request taxi if they can accept Intersection **P**.

!!! note
    *Requests* for the full length runway cannot be facilitated. The aircraft must **operationally require** longer than *2000m TORA* to receive it.

Aircraft that cannot accept Intersection **P** for departure will be assigned a **full length** departure.

#### Maneuvering Area Responsibility
Aircraft from the Western Apron shall be taxied via **D** and **N**.

As per the [YPPH Aerodrome SOPs](../../../aerodromes/classc/Perth/#maneuvering-area-responsibility), ADC is responsible for the taxiways between the thresholds of Runway 21 and 24.

Instead of SMC coordinating runway crossings with ADC, aircraft taxiing via **N** and **C** shall be instructed to **contact ADC** at Holding Point **D**, where ADC will give them taxi instructions on their frequency. No coordination is required between SMC and ADC for this.

!!! example
    **PH SMC:** "DAL209, Taxi Holding point D, Runway 21. Expect Holding Point P for departure."  
    **DAL209:** "Taxi Holding Point D, Runway 21, DAL209"  
    *(at Holding Point)*  
    **PH SMC:** "DAL209, Contact Tower 127.4 for further taxi"  
    **DAL209:** "127.4, DAL209"  
    **DAL209:** "Perth Tower, DAL209"  
    **PH ADC:** "DAL209, Perth Tower. Cross Runway 21, Taxi via N, C, Hold Short of Runway 24."  
    **DAL209:** "Cross Runway 21, Taxi via N, C, Hold Short of Runway 24. DAL209"  
    ...  
    **PH ADC:** "DAL209, Cross Runway 24. Hold Short of P."  
    **DAL209:** "Cross Runway 24. Hold Short of P. DAL209"  
    *(When clear of Runway 24)*  
    **PH ADC:** "DAL209, Contact Ground 122.2 for further taxi"  
    **DAL209:** "122.2, DAL209"  

### Runway 06 Departures
Ensure that all aircraft queue for Runway 06 to the South East, via **A** and **V**.

<figure markdown>
![Runway 06 Queue Paths](../img/06queue.png){ width="500" }
  <figcaption>Runway 06 Queue Paths</figcaption>
</figure>

This will avoid blocking up the Western Apron, and ensure aircraft have room to pushback.

### Runway 03 Arrivals
Aircraft for the Western Apron will be instructed to vacate **right**. These aircraft shall be taxied via **C**, **W** and **B** to remain clear of aircraft taxiing for departure.

Aircraft for the Western Apron shall be taxied via **C** and **N** as per the [process above](#maneuvering-area-responsibility).

## Tower Control (ADC)
### Runway 21 Departures
Full Length Departures have **equal priority** to aircraft that are compliant with Simultaneous Independent Crossing Runway Operations. However, Full Length departures may incur additional delays while being separated from Runway 24 Arrivals.

!!! tip
    Ensure the OzStrips queue bay is used actively to keep track of the queue.

#### Maneuvering Area Responsibility
Aircraft from the Western Apron shall be taxied via **D** and **N**.

As per the [YPPH Aerodrome SOPs](../../../aerodromes/classc/Perth/#maneuvering-area-responsibility), ADC is responsible for the taxiways between the thresholds of Runway 21 and 24.

Instead of SMC coordinating runway crossings with ADC, aircraft taxiing via **N** and **C** shall be instructed to **contact ADC** at Holding Point **D**, where ADC will give them taxi instructions on their frequency. No coordination is required between SMC and ADC for this.

!!! example
    **PH SMC:** "DAL209, Taxi Holding point D, Runway 21. Expect Holding Point P for departure."  
    **DAL209:** "Taxi Holding Point D, Runway 21, DAL209"  
    *(at Holding Point)*  
    **PH SMC:** "DAL209, Contact Tower 127.4 for further taxi"  
    **DAL209:** "127.4, DAL209"  
    **DAL209:** "Perth Tower, DAL209"  
    **PH ADC:** "DAL209, Perth Tower. Cross Runway 21, Taxi via N, C, Hold Short of Runway 24."  
    **DAL209:** "Cross Runway 21, Taxi via N, C, Hold Short of Runway 24. DAL209"  
    ...  
    **PH ADC:** "DAL209, Cross Runway 24. Hold Short of P."  
    **DAL209:** "Cross Runway 24. Hold Short of P. DAL209"  
    *(When clear of Runway 24)*  
    **PH ADC:** "DAL209, Contact Ground 122.2 for further taxi"  
    **DAL209:** "122.2, DAL209"  

When transferring aircraft southbound on Taxiway **C** to **SMC East**, instruct them to hold short of Taxiway **P**.

### Runway 06 Departures
Departures from Runway 06 will be assigned the **PH7** SID, with an Assigned Heading of **Runway Heading**.

### Runway 03 Arrivals
Instruct **all** Runway 03 Arrivals to vacate **right**, even if they are for the Western Apron.

Ensure that aircraft that are observed to be vacating via **N** or right on **W**, are told to remain on ADC frequency.

Aircraft for the Western Apron shall be taxied via **C** and **N** as per the [process above](#maneuvering-area-responsibility_1).

When transferring aircraft westbound on Taxiway **D** to **SMC West**, instruct them to hold short of Taxiway **A**.

### Departure Spacing
Ensure that a minimum of **90 second** spacing is applied between subsequent departures from the same runway.

### Wake Turbulence Separation
Due to the tight sequence, there are times that [Wake Turbulence Separation](../../../separation-standards/waketurb/#runways) cannot practically be applied.

When a following aircraft is of a *lighter* [Wake Turbulence Category](../../../separation-standards/waketurb/#categories) than the preceding aircraft, a traffic statement and wake turbulence **caution** shall be issued.

!!! example
    **PH ADC:** "EVY30, 777 has just departed from the crossing runway. Caution Wake Turbulence. Runway 24, Cleared to Land"  
    **EVY30:** "Cleared to Land Runway 24, EVY30"

## ATIS
The ATIS OPR INFO shall include:  
`EXP CLR VIA PDC`

During 24A21D, the ATIS OPR INFO shall include:  
`SIMUL INDEP CROSSING RWY OPS IN PROG`

During 03A06D, the ATIS OPR INFO shall include:  
`LAHSO IN PROG. RWY 03 LDA 2355 METRES`

## Coordination
### PH TCU
#### Auto Release
Standard as per [PH TCU Local Instructions](../../../terminal/perth/#ph-adc), with the exception of auto-release being available for **06 Departures** assigned **Runway Heading** during the the [03A06D Runway Mode](#03a06d)