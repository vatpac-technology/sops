---
  title: Williamtown (YWLM)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name                 | Callsign              | Frequency   | Login ID      |
| -------------------- | --------------------- | ----------- | ------------- |
| **Williamtown ADC**  | **Willy Tower**       | **118.300** | **WLM_TWR**   |
| **Williamtown SMC**  | **Willy Ground**      | **121.800** | **WLM_GND**   |
| **Williamtown ACD**  | **Willy Delivery**    | **130.350** | **WLM_DEL**   |
| **Williamtown ATIS** |                       | **134.450** | **YWLM_ATIS** |

!!! note
    YWLM is a [joint military/civil aerodrome](../../../controller-skills/military/#military-aerodromes) and procedures can differ significantly to those at a civil aerodrome. Ensure you are familiar with the [military controller skills](../../../controller-skills/military) necessary to provide a quality service.

## Airspace
WLM ADC owns the airspace within the WLM MIL CTR A (`SFC`-`A015`).

<figure markdown>
![WLM ADC Airspace](img/wlmadc.png){ width="700" }
  <figcaption>WLM ADC Airspace</figcaption>
</figure>

### Restricted Area Activations
There are no [restricted areas or MOAs](../../controller-skills/sua) activated by default when WLM ADC is online.

## Local Procedures
### Initial and Pitch
The [intial points](../../controller-skills/military/#initial-and-pitch) are aligned with Taxiway A at the following locations.

| RWY  | Initial Point | Altitude |
| ---- | ------------- | --------------------------- |
| 12   | South-western tip of Grahamstown Dam | `A025`<br>(`A020` for PC21) |
| 30   | Intersection of the coast and extended Taxiway A centreline | `A025`<br>(`A020` for PC21) |

### Coded Clearances
Aircraft departing to the western training areas should be cleared the **STORM 1** coded clearance, in addition to the [appropriate SID](#sid-selection). The **STORM 1** coded clearance gives aircraft permission to transit via the **[Thunder Corridor](../../terminal/williamtown/#thunder-corridor)**, a [military corridor](../../controller-skills/military/#military-corridors) that connects the WLM TCU to the R560 amd R570 restricted areas.

[Coordination](#acd-to-wlm-tcu) may be required with WLM TCU prior to issuing clearance to an aircraft intending to operate in an SUA.

!!! phraseology
    *BARN21 plans to enter R570 via THNDA for military training.*  
    **WLM ACD**: "BARN21, Cleared Storm 1. Runway 12, CLASSIC departure. Climb via SID to `FL110`, squawk 6003, departure frequency 135.7"

!!! note
    ACD shall write the coded clearance in the **global ops field** prior to issuing clearance, for the awareness of other controllers.

#### Military Gates
There are numerous [military gates](../../controller-skills/military/#military-gates) established throughout the WLM TCU to facilitate entry and exit to adjoining SUA.

<figure markdown>
![WLM SUA Gates](../../terminal/img/wlm_mil_gates.png){ width="700" }
  <figcaption>WLM SUA Gates</figcaption>
</figure>

Pilots should include the desired departure gate when requesting clearance.

!!! phraseology
    *RPLC15 plans to enter the M581 MOA via Gate 7 for military training and airwork.*  
    **RPLC15**: "Willy Delivery, RPLC15 for Gate 7, `F120` for M581, request clearance."  
    **WLM ACD**: "RPLC15, Willy Delivery. Cleared Gate 7, CLASSIC departure. Climb via SID to `F120`, squawk 6001, departure frequency 135.7."   

If the pilot **does not** nominate a gate, or nominates a gate that does not provide access to their intended SUA, WLM ACD should clear the aircraft to depart via the **appropriate gate**.

| Intended SUA    | TCU Exit Gate       |
| --------------- | ------------------- |
| M581            | Gates 4-7           |
| M582            | Gate 6              |
| M583            | Lightning Gate (LG) |
| M584            | Lightning Gate (LG) |
| R585A           | Gate 1              |
| R585B           | Gate 9              |
| R585C           | Gate 10             |
| R585D           | Gate 11             |
| R586            | Gates 1-3           |

!!! tip
    [Coordination requirements](#acd-to-wlm-tcu) exist between ACD and TCU when aircraft are requesting clearance to operate in an SUA that has not been activated. Controllers performing the role of ACD should ensure they coordinate with TCU before providing clearance

### Special Use Airspace
#### Salt Ash SUA
The Salt Ash Air Weapons Range is located within the WLM MIL CTR, and is used for air-surface gunnery and bombing practice. It is entirely contained within the R596 [restricted area](../../controller-skills/sua/#restricted-areas).

<figure markdown>
![The Salt Ash Weapons Range](../../terminal/img/wlm_salt_ash.png){ width="700" }
  <figcaption>The Salt Ash Air Weapons Range</figcaption>
</figure>

The restricted area can be activated in two configurations according to the requirements of the operation. Only VFR aircraft are permitted.

| Configuration Name | Vertical Limits  | Notes  | 
| ------------------ | ---------------- | ------ |
| R596 High          | `SFC` - `A130`   | Aircraft will remain on local QNH above `A100` |
| R596 Low           | `SFC` - `A050`   |        |

When the R596 restricted area is active all airspace within the SUA is managed by **WAL**, and the [ATIS should be updated](#sua-activations) to reflect the activation.

Aircraft departing YWLM for the Salt Ash Air Weapons Range should be cleared the **SALT ASH** departure, in lieu of a SID. On this departure, aircraft will maintain runway heading until turning between 2 TAC and 7.5 TAC WLM to enter the restricted area.

!!! phraseology
    *RPLC15 plans to enter the M581 MOA via Gate 7 for military training and airwork.*  
    **PTHR21**: "Willy Delivery, PTHR21 for Salt Ash High, `A100`, transit not above `A050`, request clearance."  
    **WLM ACD**: "PTHR21, Willy Delivery. Standby."  
    *WLM ACD [coordinates the SUA activation request](#acd-to-wlm-tcu) with WAL*  
    **WLM ACD**: "PTHR21, clearance available."  
    **PTHR21**: "PTHR21"  
    **WLM ACD**: "PTHR21, cleared Salt Ash runway 12 departure, transit `A050` for operations in Salt Ash High, not above `A100`, squawk 6001."

## SID Selection
### Civil Aircraft
Civil aircraft planned via **KEXAR**, **LIMLO**, **MONDO**, and **[UBSON](#ubson-departures)** shall be assigned the **Procedural SID** that terminates at the appropriate SID terminus. Civil jet Aircraft **not** planned via any of these waypoints shall receive amended routing via the most appropriate SID terminus, unless the pilot indicates they are unable to accept a Procedural SID.

Civil aircraft unable to accept a procedural SID and **non-RNAV** aircraft shall be assigned either the RADAR SID or a visual departure.

#### UBSON Departures
When the R596 restricted area is active, aircraft planned via **UBSON** and departing Runway 12 shall be assigned the **UBSON BRAVO** SID.

### Military Aircraft
Military aircraft planned for **Gate 1 and Gate 2** shall be assigned the **PEPPER** SID.

Military aircraft planned for **Gates 3-7**, or for the western training areas, shall be assigned the **CLASSIC** SID. Aircraft planned for the western training areas will additionally be cleared via the **STORM** [coded clearance](#coded-clearances)

Military Aircraft planned for the **[Salt Ash Air Weapons Range](#salt-ash-sua)** shall be assigned a **SALT ASH** departure.

All other military aircraft, including military aircraft that are unable to fly a SID, shall be assigned either the RADAR SID or a visual departure.

## ATIS
### Approach Types
During high levels of military traffic, **WAL** may nominate [stereo approaches](../../military/#stereo-approaches) as the preferred approach type.

| Condition         | ATIS APCH field |
| ----------------- | --------------- |
| Stereo Approaches | `MIL ACFT EXP STEREO APCH` |

### Operational Info
#### SUA Activations
The Operational Information field should be updated when either of the [Salt Ash Weapons Range](#salt-ash-sua) restricted areas are active.

| Activated SUA | OPR INFO Field |
| ------------- | -------------- |
| R596 High     | `R 5 9 6 HIGH ACTIVE` |
| R596 Low      | `R 5 9 6 LOW ACTIVE`  |

## Coordination
### Auto Release
[Next](../../controller-skills/coordination/#next) coordination is **not** required from WLM ADC to WLM TCU for aircraft that are:  

- Departing from a runway nominated in the ATIS; and  
- Assigned the standard assignable level; and 
- Assigned a **Procedural** SID

The Standard Assignable level from WLM ADC to WLM TCU is:

| Aircraft | Level |
| -------- | ----- |
| All | The lower of `F120` and `RFL` |
    
### ACD to WLM TCU
The controller assuming responsibility of **ACD** shall give [heads-up](../../controller-skills/coordination/#airways-clearance) coordination to WAL (or the enroute controller responsible for the WLM TCU) prior to the issue of a clearance to an aircraft intending to operate in an SUA that **has not** been activated. 

!!! phraseology
    <span class="hotline">**WLM ACD** -> **WAL**</span>: "PTHR11 requests clearance to R570 via Thunder corridor.”  
    <span class="hotline">**WAL** -> **WLM ACD**</span>: "PTHR11, clearance approved."

### Departures Controller
When a TCU controller is online, aircraft shall be issued with a departure frequency during their airways clearance in accordance with the table below. If no TCU controllers are online, the advisory frequency shall be issued.

| Runway | Via  | Departure Frequency |
| ------ | ---- | ------------------- |
| All    | All  | 135.7 (WAL)         |
    
## Charts
!!! abstract "Reference"
    In addition to the civilian `ERSA` and `AIP` publications, [the RAAF AIP website](https://ais-af.airforce.gov.au/australian-aip){target=new} contains the necessary charts (available in the TERMA) and description of procedures (in each airports' FIHA).

