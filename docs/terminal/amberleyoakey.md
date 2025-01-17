---
  title: Amberley / Oakey TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login ID              |
| ------------------ | -------------- | ---------------- | --------------------------------------|
| **Amberley TCU**   | **Amberley Approach**   | **126.200**        | **AMB_APP**                                   |
| **Oakey TCU**   | **Oakey Approach** | **125.400**        | **OK_APP**                                   |

AMB APP is expected to extend to OK APP (and vice versa) when they are offline. No frequency cross coupling is required. 

## Airspace
### AMB TCU
**AMB APP** owns the airspace contained within:

- R625A (`A015`-`A085`)  
- R625B (`A025`-`A085`)  
- R625C (`A045`-`A085`)  
- R625D (`A085`-`F210`)

<figure markdown>
![AMB TCU Airspace Diagram](img/amtcu.png){ width="952" }
  <figcaption>AMB TCU Airspace Diagram</figcaption>
</figure>

**AMB ADC** owns the Class C airspace in the AM CTR from `SFC` to `A015`. 

### OK TCU
**OK APP** owns the airspace contained within:

- R654A (`SFC`-`A065`)  
- R654B (`SFC`-`A065`)  
- R654C (`A065`-`F125`)  
- R654D (`A065`-`F125`)  

<figure markdown>
![OK TCU Airspace Diagram](img/oktcu.png){ width="1060" }
  <figcaption>OK TCU Airspace Diagram</figcaption>
</figure>

**OK ADC** owns the Class C airspace within 5 DME of the OK VOR from `SFC` to `A025`.

## Coded Clearances (Fast Jets)
High performance military jet aircraft with planned operations in offshore SUA, or intending to depart to the east, will be assigned a Coded Clearance departure. These aircraft may arrive back to YAMB via the same corridor. These Coded Clearances provide a standardised corridor avoiding civilian traffic in the adjacent airspace. 

### Departures
Aircraft will depart the circuit visually and track overhead YAMB to begin tracking for their initial waypoint. Aircraft cleared the BYRON1 must turn to the west on departure, and may set course for their inital waypoint within 10TAC AMB, remaining within the lateral limits of the AMB CTR in order to meet the inital constraint at `COWIE`.

AMB ACD will clear relevant departures via the appropriate coded clearance departure, update the FDR route field with the respective tracking points, and write the departure name in the Global Ops Field. 

The routes are shown below:

| Departure | Initial Constraint | Route |
| --------- | ----------| --------- |
| Northern 3 | `F190` by BINUP | BINUP MURJO BOBED LESKO MOSSI, or<br>BINUP MURJO BOBED LESKO ADNUK |
| Central 3 | `F190` by BINUP | BINUP MURJO BOBED VIRGE |
| Byron 1 | `F190` by COWIE | COWIE KIWEE ZANET LOTMA SEMAJ | 

!!! important
    Ensure that aircraft meet the `F190` requirement by the first waypoint to ensure separation assurance is maintained with civil aircraft in the adjacent airspace.

### Arrivals
Aircraft will be cleared for the coded clearance by **INL**/**NSA**, with the procedure terminating at the AM TMA airspace boundary.

## Civil Training Area
Civil operators (including Australian Air Force Cadets) conduct flying operations within the South Western Training Area (SWTA), located between the 10DME and 20DME arcs to the southwest of the AMB CTR. The SWTA is divided in half by the Rosewood-Mt Walker-Aratula Road into SWTA Alpha (north) and SWTA Bravo (south). The training area is classified Class G airspace but some pilots may request to climb into CTA to facilitate flight training (such as stall practice).

!!! tip
    Consider restricting an aircraft operating in the CTA above the SWTA to either SWTA Alpha or Bravo where doing so would provide lateral segregation from other traffic operating in the AMB CTA.

### Outbound Aircraft
Aircraft outbound from YAMB for the SWTA will exit the CTR at `A025` via the following waypoints:

| **Duty Runway** | **Routing** |
|-----------------|-----------|
| 15              | MTWK      |
| 33              | CLVT      |
| 04 or 22        | As required |

### Inbound Aircraft
Inbound aircraft will contact AMB TCU when ready to return to YAMB. They shall be cleared via the following waypoints, at either `A015` or `A025` (as desired):

| **Duty Runway** | **Routing** |
|-----------------|-----------|
| 15              | CLVT      |
| 33              | MTWK      |
| 04 or 22        | As required |

Transfer these aircraft to ADC approaching the boundary.   

!!! phraseology  
    **ASTR203**: "Amberley Approach, ASTR203, 13nm southwest, A015, inbound, received Golf, request clearance"     
    **AMB TCU**: "ASTR203, Amberley Aproach, cleared to YAMB via MTWK, maintain A015"  
    **ASTR203**: "Cleared to YAMB via MTWK, maintain A015, ASTR203"  
       
    **AMB TCU**: "ASTR203, contact Amberley Tower, 118.3"  
    **ASTR203**: "118.3, ASTR203"  

## Coordination
### AMB/OK ADC
#### Airspace
AMB ADC owns the Class C airspace **in the AMB CTR** within 10nm of the YAMB ARP from `SFC` to `A015`.

OK ADC owns the airspace within 5 DME of the OK VOR from `SFC` to `A025`.

#### Departures
'Next' coordination is required from AMB ADC to AMB TCU for all aircraft.

The Standard Assignable Level from  **AMB ADC** to **AMB TCU** is:  
a) The Lower of `F180` or `RFL` for Aircraft assigned via Procedural or RNAV SID.  
b) `F190` for Aircraft assigned a Coded Departure.

!!! phraseology
    <span class="hotline">**AMB ADC** -> **AMB TCU**</span>: "Next, STAL56, runway 33"  
    <span class="hotline">**AMB TCU** -> **AMB ADC**</span>: "STAL56, unrestricted"  
    <span class="hotline">**AMB ADC** -> **AMB TCU**</span>: "STAL56"   

### INL / BN TCU
#### Departures
All aircraft from AMB/OK TCU to INL(All) and BN TCU require Heads-up coordination prior to the boundary, however, as soon as practical (when is the aircraft becomes airborne) is prefered.

The Standard Assignable Level from  **AMB ADC** to **AMB TCU** is:  
a) The Lower of `F180` or `RFL` for Aircraft assigned via Procedural or RNAV SID.  
b) `F190` for Aircraft assigned a Coded Departure.

The Standard Assignable from **OK ADC** to **OK TCU** is the lower of `F120` or `RFL`.

!!! phraseology
    <span class="hotline">**AMB TCU** -> **BN TCU**</span>: "via BN, DRGN02"  
    <span class="hotline">**BN TCU** -> **AMB TCU**</span>: "DRGN02, `F180`"  

!!! phraseology
    BUCK03 is assigned the BYRON 1 coded departure.  
    <span class="hotline">**AMB TCU** -> **NSA**</span>: "via COWIE, BUCK3."  
    <span class="hotline">**NSA** -> **AMB TCU**</span>: "BUCK03, `F190`"   

#### Arrivals/Overfliers
All aircraft transiting from GOL/DOS/BUR to **AMB TCU** and **OK TCU** must be heads-up coordinated prior to **20nm** from the boundary and aircraft from **BN TCU** to **AMB TCU** only prior to the boundary. Operations within **AMB TCU** are fairly ad-hoc, so there are no standard assignable levels. GOL/DOS/BUR and **AMB TCU**/**OK TCU** controller must agree on a suitable level during coordination.

!!! phraseology
    <span class="hotline">**GOL** -> **AMB TCU**</span>: "via HUUGO, PUMA11, will be assigned A090"  
    <span class="hotline">**AMB TCU** -> **GOL**</span>: "PUMA11, A090"  

## Charts
!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}
