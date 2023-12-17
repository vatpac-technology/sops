---
  title: Amberley (YBAF)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login Identifier              |
| ------------------ | -------------- | ---------------- | --------------------------------------|
| Amberley ADC    | Amberley Tower  | 118.300         | AM_TWR        |
| Amberley SMC    | Amberley Ground  | 129.350      | AM_GND        |
| Amberley ACD    | Amberley Delivery  | 134.600         | AM_DEL       |
| Amberley ATIS    |   | 123.300         | YAMB_ATIS       |



## Airspace

AM ADC owns the Class C airspace **in the AM CTR** within 10nm of the YAMB ARP from `SFC` to `A015`. This airspace is primarily used for military circuits and initial and pitch approaches.


## YAMB Aerodrome

### SID Selection
Aircraft planned via **BN**, **JEDDA**, **MESED**, **BOBOP**, **TATEN**, shall be assigned the **Procedural SID** that terminates at the appropriate waypoint.
Aircraft who are not planned via those points or who are negative RNAV may be assigned a RADAR SID or a visual departure. 

#### Coded Departures (Fast Jets)
Visual Departures are commonly requested which are often in the form of a coded departure (e.g. BYRON7 departure), which can be found in the AD2 Sups Page for YAMB. These coded departures provide a corridor with altitude constraints to join the Military Training Areas east of Brisbane avoiding civilian traffic inbound to Brisbane. 

Aircraft will make a visual departure in the circuit direction and fly overhead YAMB to begin tracking for their initial waypoint.

!!! example
    CRNG21 plans to enter R637 via the gate Mossi for Military Training.
    **AM ADC**: "CRNG21, Cleared to YAMB via MOSSI, Flight Planned Route. Runway 15, Northern 1 Departure. Climb to `F190`. Squawk 3601, Departure Frequency 126.20"  

!!! example
    WOLF03 was assiged the BYRON7 departure with their initial clearance. 
    **AM ADC**: "WOLF03, make left turn, reach `F190` by COWIE, cleared for takeoff"  
    **WOLF03**: "Make left turn, reach `F190` by COWIE, cleared for takeoff, WOLF03"  

| Departure | Initial Constraint | Route |
| --------- | ----------| --------- |
| Northern 1 | `F190` at BINUP | BINUP MURJO BOBED LESKO MOSSI/ADNUK (Transition) |
| Central 1 | `F190` at BINUP | BINUP MURJO BOBED VIRGE |
| Byron 7 | `F190` at BINUP | COWIE KIWEE ZANET LOTMA SEMAJ |

!!! note
    Charts for the Coded Departures may be in YAMB AD2 Supplements 6.2.25.11 available here: [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}

!!! note
    Since the Coded Departures are not SIDs, AM ACD needs to write the name of the coded departure in the Global Ops Field of the strip.


### Runway Operations
Runways 15/33 are the primary runways at YAMB. 

## Charts
!!! note
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}

## Miscellaneous
### Circuit Operations
The Circuit Area Airspace is allocated to be within 5nm of the YAMB ARP from `SFC` to `A015`. Aircraft can be instructed to extend outside of this airspace by ATC for traffic management.

### Circuit Direction
| Runway | Direction |
| ------ | ----------|
| 15     | Right  |
| 33     | Left |
| 04     | Left |
| 22     | Left |

## Coordination
### AMB TCU

'Next' coordination is required from AM ADC to AM TCU for all aircraft.

!!! example
    <span class="hotline">**AM ADC** -> **AM TCU**</span>: "Next, ASY01, runway 33"  
    <span class="hotline">**AM TCU** -> **AM ADC**</span>: "ASY01, Assigned Heading Right 030, unrestricted"  
    <span class="hotline">**AM ADC** -> **AM TCU**</span>: "Assigned Heading Heading Right 030, ASY01"  

### Level Assignment
The Standard Assignable Level from  **AM ADC** to **AM TCU** is:  
a) The Lower of `F180` or `RFL` for Aircraft assigned via Procedural or RNAV SID.  
b) `F190` for Aircraft assigned a Coded Departure.
