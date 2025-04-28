---
  title: Adelaide TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | ID      | Callsign       | Frequency        | Login ID              |
| ------------------ | --------------| -------------- | ---------------- | --------------------------------------|
| **Adelaide Approach East**    |**AAE**| **Adelaide Approach**   | **118.200**         | **AD_APP**                                   |
| <span class="indented">Adelaide Approach West :material-information-outline:{ title="Non-standard position"}    |AAW| Adelaide Approach  | 124.200         | AD-W_APP          |
| <span class="indented">Adelaide Flow :material-information-outline:{ title="Non-standard position"}        |AFL|                |          | AD_FMP                              |

!!! abstract "Non-Standard Positions"
    :material-information-outline: Non-standard positions may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}.  
    Approval must be sought from the **bolded parent position** prior to opening a Non-Standard Position, unless [NOTAMs](https://vatpac.org/publications/notam){target=new} indicate otherwise (eg, for events).

## Airspace
The Vertical limits of the AD TCU are `SFC` to `F245`.

### Reclassifications
#### PF CTR
PF CTR reverts to Class G when **PF ADC** is offline, and is administered by the relevant AD TCU controller.

See also: [PF ADC Offline](#pf-adc-offline).

#### EDN CTR
EDN CTR reverts to Class G when **EDN ADC** is offline, and is administered by the relevant AD TCU controller.  

### Airspace Division
!!! note
    The following diagram does not include non AD TCU areas of responsibility such as PF CTR or EDN CTR

<figure markdown>
![AD TCU Structure](img/adtcu_annotated.png){ width="700" }
  <figcaption>AD TCU Structure</figcaption>
</figure>

## Scenic Coastal Flights
VFR aircraft may transit the control zone tracking coastal north or southbound, generally at `A005`. **AD TCU** is responsible for ensuring these aircraft remain separated from aircraft arriving/departing at YPAD and may delegate this responsibility to **AD ADC**.  

Coordinate the aircraft with ADC, including the use of the appropriate clearance limit in the table below, then issue airways clearance. Before the aircraft reaches the clearance limit, transfer them to ADC who will manage their transit of the extended runway centreline.  The clearance limits in the table below will ensure that coastal aircraft remain clear of the runway 05 approach path and runway 23 departure/missed approach path. 

| Direction of Travel | Clearance Limit |
| --- | --- |
| Northbound | BTJ |
| Southbound | HNLY |

<figure markdown>
![Clearance Limits](img/adclearancelimits.png){ width="500" }
  <figcaption>Clearance Limits (red) and Approach/Departure Path (green)</figcaption>
</figure>

!!! phraseology
    **CEY:** "Adelaide Approach, CEY, Cessna 172, 4nm south of PNL, 1,000ft, received charlie, request coastal northbound"  
    **AD TCU:** "CEY, Adelaide Approach, squawk 0542, remain clear of class C airspace"  
    **CEY:** "Squawk 0542, remain OCTA, CEY"  

    <span class="hotline">**TCU** -> **ADC**</span>: "South of PNL, CEY, for coastal northbound, 500ft, clearance limit BTJ"  
    <span class="hotline">**ADC** -> **TCU**</span>: "CEY"  

    **AD TCU:** "CEY, identified, cleared coastal offshore northbound, not above 500ft, clearance limit BTJ"  
    **CEY:** "Cleared coastal offshore northbound, not above 500ft, clearance limit BTJ, CEY"  

    *Before CEY reaches BTJ:*  
    **AD TCU:** "CEY, contact Adelaide Tower, 120.5"  
    **CEY:** "120.5, CEY"

Once the aircraft has transited the extended runway centreline and is clear of potential conflict with YPAD, ADC will transfer them back to the TCU.

## Offline Towers
### PF ADC Offline
Due to the low level of CTA at YPPF, it is best practice to give airways clearance to aircraft at the holding point, to ensure departing aircraft can have uninterrupted climb.

!!! phraseology
    **ABC**: "Adelaide Approach, ABC, PC12, POB 8, IFR, taxiing YPPF for YPAG, Runway 21R"   
    **AD TCU**: "ABC, Adelaide Approach, Squawk 3601, no reported IFR traffic, report ready at the holding point for airways clearance"  
    **ABC**: "Squawk 3601, wilco, ABC"  

    **ABC**: "ABC, ready Runway 21R, request clearance"  
    **AD TCU**: "ABC, cleared to YPAG via DOLVU, flight planned route, PARAFIELD1 departure, climb via SID to A040"   
    **ABC**: "Cleared to YPAG via DOLVU, flight planned route, PARAFIELD1 departure, climb via SID to A040, ABC"  
    **AD TCU**: "ABC, assigned heading right 360, report airborne"  
    **ABC**: "Assigned right 360, wilco, ABC"

## Flow
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**.

=== "Jets"
                       
    | Feeder Fix | 05Z | 05V/W/X | 23A/Z | 23V |
    | ---------- | --- | ------- | ----- | --- |
    | INTOG      | 14  | 13      | -     | -   |
    | DRINA      | -   | -       | 14    | 13  |
    | KAKLU      | 16  | 15      | 12^   | -   |
    | KLAVA      | 16  | 15      | 13    | 12  |
    | ERITH      | -   | -       | 13    | 12  |
    | MARGO      | 14  | 13      | 15    | 13  |
    | ATNAR      | 13  | 12^     | 17    | 15  |

=== "Non-Jets"

    For Non-Jets tracking via the *full Jet STARs*, refer to the **Jets** tab & applicable correction

    | Feeder Fix | 05  | 12  | 23  | 30  |
    | ---------- | --- | --- | --- | --- |
    | INTOG      | 12  | 14  | 12  | 11  |
    | DRINA      | 14  | 17  | 14  | 13  |
    | KAKLU      | 16  | 15  | 13  | 13  |
    | BEVSO      | 17  | 15  | 14  | 13  |
    | KLAVA      | 15  | 13  | 13  | 16  |
    | ERITH      | -   | -   | -   | -   |
    | MARGO      | 13  | 12  | 13  | 15  |
    | ATNAR      | 13  | 13  | 15  | 16  |
    | ELROX      | 11  | 11  | 14  | 13  |

### Corrections
| Situation | Correction |
| ----- | ----- |
| Assigned MX or CSR | -1 min |
| Assigned a reduced speed | +1 min, *except ^* | 
| DH8D aircraft on Non-Jet procedure | -1 min |
| Non-Jet aircraft (excluding DH8D) on Jet STAR | +2 min, *except ^, where +1 min correction applies* |

### Assumptions
- Nil wind
- Jet aircraft will be assigned the appropriate jet STAR
- Non-jet aircraft will be assigned the appropriate non-jet STAR, or if none is available, tracking via a 5nm final
- Time from VIRAT to threshold is 5 minutes for jet aircraft 
- Time from PADSI to threshold is 3.5 minutes for jet aircraft
- Time from a 5nm final to threshold is 2 minutes for non-jet aircraft

## Coordination
### Enroute
#### Departures
Voiceless for all aircraft:
 
- Tracking via a Procedural SID terminus; and  
- Assigned the lower of `F240` or the `RFL`

!!! note
    Aircraft are *not required* to be tracking via the **SID procedure**, simply tracking via any of the terminus waypoints (Regardless of *departure airport* or *assigned SID*) is sufficient to meet the criteria for **voiceless coordination**

All other aircraft going to TBD CTA must be **Heads-up** Coordinated by AD TCU prior to the boundary.

!!! phraseology
    <span class="hotline">**AD TCU** -> **TBD**</span>: "PFY1234, request DCT LOLLS"  
    <span class="hotline">**TBD** -> **AD TCU**</span>: "PFY1234, concur DCT LOLLS"  

#### Arrivals
Voiceless for all aircraft:

- With ADES **YPAD**; and  
- Assigned a STAR; and  
- Assigned `A090`

All other aircraft coming from TBD CTA will be **Heads-up** Coordinated to AD TCU.

### AD ADC
#### Auto Release
[Next](../controller-skills/coordination.md#next) coordination is **not** required to AD TCU for aircraft that are:   

  - Departing from a runway nominated on the ATIS; and  
  - Assigned the standard assignable level; and  
  - Assigned a **Procedural** SID

All other aircraft require a Next call to AD TCU.

The Standard Assignable level from AD ADC to AD TCU is:  

| Aircraft | Level |
| -------- | ----- |
| Jets | `A050` |
| Non-Jets | The lower of `A040` and `RFL` |

### AD TCU Internal
All aircraft transiting between internal AD TCU boundaries must be heads-up coordinated.

!!! phraseology
    <span class="hotline">**AAW** -> **AAE**</span>: "via AD, FD123"  
    <span class="hotline">**AAE** -> **AAW**</span>: "FD123, A090"   

Boundary coordination is not required between AAW and AAE for aircraft arriving or departing tracking via the 05/23 extended centreline.

### PF ADC
#### Airspace
PF ADC is responsible for the Class D airspace in the PF CTR `SFC` to `A015`.

Refer to [Reclassifications](#pf-ctr) for operations when PF ADC is offline.

#### Departures
[Next](../controller-skills/coordination.md#next) coordination is required from PF ADC to AD TCU for all aircraft **entering AD TCU CTA**.

The Standard Assignable level from **PF ADC** to **AD TCU** is:

| Aircraft | Level |
| ----- | ---- |
| All | The lower of `A030` and `RFL` |

#### Arrivals/Overfliers
AD TCU will heads-up coordinate arrivals/overfliers from Class C to PF ADC prior to **5 mins** from the boundary.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to PF ADC, unless PF ADC nominates a restriction.  
VFR aircraft require a level readback.

!!! phraseology
    <span class="hotline">**AAW** -> **PF ADC**</span>: "via PAL, YTS"  
    <span class="hotline">**PF ADC** -> **AAW**</span>: "YTS, A010"

### ED ADC
#### Departures
[Next](../controller-skills/coordination.md#next) coordination is required from ED ADC to AD TCU for all aircraft.

The Standard Assignable level from **ED ADC** to **AD TCU** is:

| Aircraft | Level |
| -------- | ----- |
| All | The lower of `A040` and `RFL` |

#### Arrivals/Overfliers
AD TCU must [Heads-up](../controller-skills/coordination.md#heads-up) coordinate all arrivals/overfliers to ED ADC.

!!! phraseology
    <span class="hotline">**AD TCU** -> **ED ADC**</span>: "To the west, PLE, for the ILS-Z"  
    <span class="hotline">**ED ADC** -> **AD TCU**</span>: "PLE, ILS-Z"

Inbound aircraft must be cleared for an instrument or visual approach prior to handoff to ED ADC, unless ADC nominates a restriction.