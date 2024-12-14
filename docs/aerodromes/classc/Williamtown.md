---
  title: Williamtown (YWLM)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login ID              |
| ------------------ | -------------- | ---------------- | --------------------------------------|
| **Williamtown ADC**    | **Willy Tower**  | **118.300**         | **WLM_TWR**        |
| **Williamtown SMC**    | **Willy Ground**  | **121.800**         | **WLM_GND**        |
| **Williamtown ACD**    | **Willy Delivery**  | **130.350**         | **WLM_DEL**       |
| Williamtown ATIS    |   | 134.450         | YWLM_ATIS       |

## Airspace
WLM ADC owns the airspace within the WLM MIL CTR A (`SFC`-`A050`). This may be amended/released as required between WLM ADC and WLM TCU.

<figure markdown>
![WLM ADC Airspace](img/wlmadc.png){ width="700" }
  <figcaption>WLM ADC Airspace</figcaption>
</figure>

### SID Selection
Aircraft planned via **KEXAR**, **LIMLO**, **MONDO**, **UBSON**, shall be assigned the **Procedural SID** that terminates at the appropriate waypoint.
Aircraft who are not planned via those points or who are negative RNAV may be assigned a RADAR SID or a visual departure. 

#### Coded Departures (Fast Jets)
Visual Departures are commonly requested by high performance military jets and often processed in the form of a coded departure (e.g. CLASSIC1 departure), which can be found in the AD2 Sups Page for YWLM. These coded departures provide a corridor with altitude constraints to join the Military Training Areas east and west of Williamtown, avoiding civilian traffic inbound to Sydney. 

| Tracking Gate | Departure | Initial Constraint | Route |
| ----- | ---------| --------------- | ------------------------ |
| G1-G2 | PEPPER 1 | `A080` at ERVEV | ERVEV G1/G2 (Transition) 
| G3-G7 | CLASSIC 1| `F125` at G3-G7 |
| G9    | RADAR    | 'F125' at G9    |
| UKDIP | CLASSIC 1| 'A090' at UKDIP |
| OLVEP | CLASSIC 1| 'F130' at OLVEP |

!!! note
    ACFT Departing RWY 12 for G3-7 are required to avoid SAWR on the Classic 1.
    ACFT Departing on Classic 1 will be issued a direction of turn during take off clearance, preferablly to the south in order not to impede on the SAWR boundries on the departure.

!!! example
    WGTL21 plans to enter M550 via Gate 4 for Military Training.
    **WLM ADC**: "WGTL21, cleared to YWLM via Gate 4, flight planned route. Runway 12, Classic 1 Departure. Climb to `F125`. Squawk 5001, Departure Frequency 133.300"  

!!! example
    MAPL03 was assiged the CLASSIC 1 departure with their initial clearance. 
    **WLM ADC**: "WOLF03, make left turn, reach `F125` by Gate 3 , cleared for takeoff"  
    **MAPL03**: "Make left turn, reach `F125` by Gate 3, cleared for takeoff, MAPL03"  

!!! note
    Since the Coded Departures are not SIDs, WLM ACD needs to write the name of the coded departure in the Global Ops Field of the FDR and amend the flight plan route to include all relevant tracking points.

### Gates for the SUA
There are 8 gates to facilitate departures and arrivals into these Training Airspace, based on the WLM Tacan. 
WLM Eastern Airspace
G1 029/25
G2 050/25
G3 068/25 (Lighting Corrider Entry)
G4 088/25
G5 105/25
G6 125/25
G7 135/25
G9 007/25
WLM Western Airspace
UKDIP 311/25 (Thunder Corridor Entry)
SAWR (Salt Ash Weapons Range)
OLVEP 033/10

### Initial and Pitch Procedures 
The Intial Points for RWY 12 is the SW tip of Grahamstown Dam, and RWY 30 is the coastline.

## Charts
!!! note
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}

## Coordination
### Departures
'Next' coordination is **not** required from WLM ADC to WLM TCU for aircraft that are:  
a) Departing from a runway nominated in the ATIS; and  
b) Assigned the standard assignable level;  
c) Assigned a **Procedural** SID  

!!! example
    <span class="hotline">**WLM ADC** -> **WLM TCU**</span>: "Next, MVP"  
    <span class="hotline">**WLM TCU** -> **WLM ADC**</span>: "MVP, Left Heading 010, Unrestricted"  
    <span class="hotline">**WLM ADC** -> **WLM TCU**</span>: "Left Heading 010, MVP"  

The Standard Assignable level from WLM ADC to WLM TCU is the lower of `F120` or the `RFL`.

### Arrivals/Overfliers
Voiceless coordination is in place from WLM TCU to WLM ADC for arrivals cleared for an approach on to a runway nominated on the ATIS. All other aircraft and all overfliers must be heads-up coordinated as soon as practical.

!!! example
    <span class="hotline">**WLM TCU** -> **WLM ADC**</span>: "via WLM, ZULU, Close formation of 5, do you have any restrictions or requirements?”  
    <span class="hotline">**WLM ADC** -> **WLM TCU**</span>: "ZULU, no restrictions or requirements, A040"  