---
  title: Pearce TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name                          | ID      | Callsign                | Frequency   | Login ID      |
| ----------------------------- | ------- | ----------------------- | ----------- | ------------- |
| **Pearce Approach**           | **PEA** |  **Pearce Approach**    | **130.200** | **PE_APP**    |

## Airspace
The vertical limits of the Pearce TCU is `SFC` to `F160`. 

<figure markdown>
![PE TCU Structure](img/pe_tcu.png){ width="700" }
  <figcaption>PE TCU Structure</figcaption>
</figure>

### Airspace Division
PEA is responsible for the restricted airspace within R155A and R155B. This airspace is reclassified to **Class C** when PEA is online.

<figure markdown>
![PE TCU Restricted Areas](img/pe_restricted_areas.png){ width="500" }
  <figcaption>PE TCU Restricted Areas</figcaption>
</figure>

PE ADC owns the airspace within the Pearce CIRA (**5nm** Radius of YPEA ARP, located entirely within **R155A**) from `SFC` to `A035.

### Airspace Division
Additional airspace may be released by NOTAM, or coordinated between PEA, PH TCU, and LEA/PIY to facilitate military operations.

!!! phraseology
    <span class="hotline">**PEA** -> **PH TCU**</span>: "Request release of M166, SFC to F160, for Military Operations. My onwards with LEA"   
    <span class="hotline">**PH TCU** -> **PEA**</span>: "M166, SFC to F160, released to you. Your onwards with LEA"  

    <span class="hotline">**PEA** -> **LEA**</span>: "Request release of M166, SFC to F160, for Military Operations. My onwards with PH TCU"   
    <span class="hotline">**LEA** -> **PEA**</span>: "M166, SFC to F160, released to you. Your onwards with PH TCU"  

## Local Procedures
### Lanes and Gates
There are four Departure/Arrival Lanes established in the PE TCU to facilitate military aircraft movements between adjacent SUAs.

<!--- Diagram here when RAAFv diagrams integrated into AIRAC --->

#### Alkimos Lane
The **Alkimos Lane** is centred on the PEA 304 radial, `A050`-`F120`. The lane facilitates transit to/from the M147 restricted areas.

#### Mullaloo Lane
The **Mullalloo Lane** is between the 248 and 233 radials, `A050`-`F120`. The lane facilitates transit to/from the R163 restricted area. 

#### Wannamal Lane
The **Wannamal Lane** is centered on the PEA 356 radial, `A050`-`F120`. The lane facilitates transit to/from SUAs to the north.

#### Quokka Lane
The **Quokka Lane** is defined as the AZZAR-FENDA track in the south-west of the TCU, `A090`-`F140`. It facilitates transit to/from restricted areas on the southern side of the PH TCU.

Aircraft utilising the Quokka Lane should be instructed to reach `A090` before reaching the PEA 250 radial.

!!! important
    Aircraft transiting on the Quokka Lane must be [**heads-up** coordinated](#ph-tcu) to PH TCU prior to the boundary.

## Coordination
### Enroute
#### Departures
All aircraft from PE TCU to HYD require [Heads-up](../controller-skills/coordination.md#heads-up) coordination prior to the boundary, however, as soon as practical (when is the aircraft becomes airborne) is preferred. 

#### Arrivals/Overfliers
All aircraft transiting from HYD to **PE TCU** must be [Heads-up](../controller-skills/coordination.md#heads-up) coordinated prior to **20nm** from the boundary. There are no standard assignable levels; HYD and **PEA** controller must agree on a suitable level during coordination.

!!! phraseology
    <span class="hotline">**LEA** -> **PEA**</span>: "via AVNEX, EGLE9, will be assigned A090"  
    <span class="hotline">**PEA** -> **LEA**</span>: "EGLE9, A090"

### PE ADC
[Next](../controller-skills/coordination.md#next) coordination is required from PE ADC to PE TCU for all aircraft.

The Standard Assignable Level from **PE ADC** to **PE TCU** is:

| Departure Procedure | Level |
| ------------------- | ----- |
| **GUNOK** SID | `A030` |
| A **Procedural** SID | `F130` |
| All others | The lower of `F130` and `RFL` |

### GIG ADC
[Next](../controller-skills/coordination.md#next) coordination is required from GIG ADC to PE TCU for all aircraft.

The Standard Assignable Level from **GIG ADC** to **PE TCU** is:

| Aircraft | Level |
| -------- | ----- |
| All | The lower of `A050` and `RFL` |

### PH TCU
**All aircraft** transiting between PE TCU and PH TCU must be heads-up coordinated prior to the boundary.

!!! phraseology
    <span class="hotline">**PEA** -> **PH TCU**</span>: "Airborne YPEA, PHNX11"   
    <span class="hotline">**PH TCU** -> **PEA**</span>: "PHNX11, F180"  


## Charts
!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}