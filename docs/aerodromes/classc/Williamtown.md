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

## Airspace
WLM ADC owns the airspace within the WLM MIL CTR A (`SFC`-`A050`). This may be amended/released as required between WLM ADC and WLM TCU.

<figure markdown>
![WLM ADC Airspace](img/wlmadc.png){ width="700" }
  <figcaption>WLM ADC Airspace</figcaption>
</figure>

## Local Procedures
### Initial and Pitch Procedures 
The Intial Points for RWY 12 is the SW tip of Grahamstown Dam, and RWY 30 is the coastline.

### Fast-Jet SIDs
#### Coded Clearances
High performance military jet aircraft with planned operations in SUAs,, shall be assigned a Coded Clearance departure. These Coded Clearances provide a standardised corridor avoiding civilian traffic in the adjacent airspace. 

!!! tip
    Descriptions of the coded clearances are available in the [FIHA AD2 Supps](https://ais-af.airforce.gov.au/australian-aip){target=new}.

##### Departures
| Departure | Initial Constraint | Route |
| --------- | ----------| --------- |
| Pepper 1 | RWY12: None, RWY30: `F130` by OLVEP or<br> `A080` by ERVEV| RWY12: UDIXA, RWY30: OLVEP or<br>ERVEV|
| Classic 1 | RWY12: None, RWY30: `A090` by UKDIP or<br> `F130` by OLVEP | RWY12:: None, RWY30: OLVEP or<br>ERVEV|
| Storm 1 | `F140` by THUDA | THNDA TG3 TG4 |

##### Arrivals
| Arrivals | Initial Constraint | Route
| Storm 2 | `F130` by STORM | TG5 TG4 STORM |

!!! phraseology
    *BARN21 plans to enter M550 via the gate 4 for military training.*  
    **WLM ADC**: "BARN21, cleared to YWLM via ERVEV, thence Pepper 1, Gate 4 transition, flight planned route. Runway 30, visual departure, climb to `A080`, squawk 6002, departure frequency 135.7"   

!!! phraseology
    *MAPL21 plans to enter R570 via THNDA for military training.*  
    **WLM ADC**: "BARN21, cleared to YWLM via THNDA, thence Storm 1, flight planned route, Storm 2 Arrvial, Runway 30, visual departure, climb to `FL140`, squawk 6003, departure frequency 135.7" 

!!! Note
  WLM ADC can issue both outbound and inbound clearances into R560 and R570 during initial airways clearance

### SUA Gates

<figure markdown>
![WLM SUA Gates](img/WLMGates.png){ width="700" }
  <figcaption>WLM SUA Gates</figcaption>
</figure>

#### Eastern Airspace
There are 8 gates to facilitate departures and arrivals into the eastern training airspace, based on the WLM TACAN. 

| Gate Name | Ident | Bearing (°M) | Distance (nm) | Restricted Area |
| ----- | ---------| --------------- | -------- | ---------------- |
| Gate 1 | G1 | 029 | 25 | R586 |
| Gate 2 | G2 | 050 | 25 | R586 | 
| Gate 3 | G3 | 065 | 25 | M550 |
| Lighting Corridor | LG | 068 | 25 | M550|
| Gate 4 | G4 | 088 | 25 | M550 |
| Gate 5 | G5 | 105 | 25 | M550 |
| Gate 6 | G6 | 125 | 25 | M550 |
| Gate 7 | G7 | 135 | 25 | M550 |
| Gate 9 | G9 | 007 | 25 | R585 |
| Gate 10 | G10 | 345 | 25 | R585 |
| Gate 11 | G11 | 320 | 25 | R585 |

Aircraft planning to enter certain areas of the Eastern GFTA are required to be assigned certain gates.

| Gate Name | Ident | Bearing (°M) | Distance (nm) | Restricted Area |
| ----- | ---------| --------------- | -------- | ---------------- |
| Gate 1 | G1 | 029 | 25 | R586 |
| GFTA | Gate/Lane |
| A1 | Gate 7 |
| A/B | Gate 6 |
| B1  | Gate 4 |
| C-G | Lighting Corridor |
| H | Gates 1 to 3 |
| W | Gate 1 |
| X, Y, Z | Gates 9 to 11 |

!!! phraseology
    *DPOT45 is departing Williamtown via Gate 4 for Echo Delta *  
    **WLM SMC**: "DPOT45 cleared Gate 4, FL120, Visual Departure squawk 6001, departure frequency 135.700"
    **DPOT45**: "Cleared Gate 4, Climb FL120, Visual Departure squawk 6001, departures on 135.700"

#### Western Gates
There are 2 gates to facilitate departures and arrivals into the western training airspace, based on the WLM TACAN. 

| Gate Name | Ident | Bearing (°M) | Distance (nm) | Restricted Area |
| ----- | ---------| --------------- | -------- | ---------------- |
| THNDA | THNDA | 311 | 25 | R560 and R570  |
| STORM | STORM | 289 | 25 | R560 and R570 | 

### Initial and Pitch Procedures 
The Intial Points for RWY 12 is the SW tip of Grahamstown Dam, and RWY 30 is the coastline.

## SID Selection
Aircraft planned via **KEXAR**, **LIMLO**, **MONDO**, and **UBSON** shall be assigned the **Procedural SID** that terminates at the appropriate SID terminus. Jet Aircraft **not** planned via any of these waypoints shall receive amended routing via the most appropriate SID terminus, unless the pilot indicates they are unable to accept a Procedural SID.

Aircraft unable to accept a procedural SID, and **non-RNAV** aircraft shall be assigned either the RADAR SID or a visual departure.

!!! note 
    ^ When the R596 area is active, aircraft planned via **UBSON** and departing Runway 12 shall be assigned the **UBSON BRAVO** SID.

#### CLASSIC SID
The **CLASSIC SID** provides multiple tracking paths which pilots will take based on their departure instructions. During Next coordination with ADC, **WLM TCU** shall nominate a turn direction which will be relayed to the pilot with their takeoff clearance.

| Aircraft | Level |
| ------- | ----- |
| All | The lower of `F120` and `RFL` |

## Coordination
### Auto Release
[Next](../../controller-skills/coordination.md#next) coordination is **not** required from WLM ADC to WLM TCU for aircraft that are:  

- Departing from a runway nominated in the ATIS; and  
- Assigned the standard assignable level; and 
- Assigned a **Procedural** SID

The Standard Assignable level from WLM ADC to WLM TCU is:

| Aircraft | Level |
| ------- | ----- |
| All | The lower of `F120` and `RFL` |

#### Departures Controller
Where a single TCU controller is operating the WLM TMA, the departures controller shall be **WLM_APP** (frequency 133.300).

Where the non-standard **WLM-L_APP** sector is online, they shall be the departures controller (frequency 135.700).

### Arrivals/Overfliers
Voiceless coordination is in place from WLM TCU to WLM ADC for arrivals cleared for an approach on to a runway nominated on the ATIS. All other aircraft and all overfliers must be heads-up coordinated as soon as practical.

!!! phraseology
    <span class="hotline">**WAL** -> **WLM ADC**</span>: "via WLM, ZULU, Close formation of 5, do you have any restrictions or requirements?”  
    <span class="hotline">**WLM ADC** -> **WAL**</span>: "ZULU, no restrictions or requirements, `A040`"  

## Charts
!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}

