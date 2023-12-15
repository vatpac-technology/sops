---
  title: Amberley (YBAF)
---

--8<-- "includes/abbreviations.md"

## YAMB Positions

| Name               | Callsign       | Frequency        | Login Identifier              |
| ------------------ | -------------- | ---------------- | --------------------------------------|
| Amberley ADC    | Amberley Tower  | 118.300         | AM_TWR        |
| Amberley SMC    | Amberley Ground  | 129.350      | AM_GND        |
| Amberley ACD    | Amberley Delivery  | 134.600         | AM_DEL       |
| Amberley ATIS    |   | 123.300         | YAMB_ATIS       |



## Airspace

AM ADC owns the Class C airspace in the AM CTR within 10nm of the YAMB ARP from `SFC` to `A015`. This airspace is primarily used for military circuits and initial and pitch approaches.


## YAMB Aerodrome

### SID Selection
Aircraft planned via **BN**, **JEDDA**, **MESED**, **BOBOP**, **TATEN**, shall be assigned the **Procedural SID** that terminates at the appropriate waypoint.
Aircraft who are not planned via those points or who are negative RNAV may be assigned a RADAR sid or a visual departure. 

#### Coded Departures
Visual Departures are commonly requested which are often in the form of a coded departure (e.g. BYRON7 departure), which can be found in the AD2 Sups Page for Amberley. These coded departures provide a corridor with altitude constraints to join the Military Training Areas east of Brisbane avoiding civilian traffic inbound to Brisbane. 

Aircraft will make a visual departure in the circuit direction and fly overhead Amberley to begin tracking for their initial waypoint.

!!! example
    WOLF03 was assiged the BYRON7 departure with their intial clearance. 
    **AM ADC**: "WOLF03, make left turn, reach `F190` by COWIE, cleared for takeoff"  
    **WOLF03**: "Make left turn, reach `F190` by COWIE, cleared for takeoff, WOLF03"  

| Departure | Waypoint | Constraint |
| --------- | ---------| ----------|
| Northern1 | BINUP  | `F190` |
| Central1 | BINUP | `F190` |
| Byron7 | COWIE | `F190` |

Typically pilots will request a specific departure when obtaining their airways clearance.

### Runway Operations
Runways 15/33 are the primary runways at Amberley. 

## Charts
!!! note
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}

## Miscellaneous
### Circuit Operations
The Circuit Area Airspace is allocated to be within 5nm of the Amberley ARP from `SFC` to `A015`. Aircraft can be instructed to extend outside of this airspace by ATC for traffic management.

### Circuit Direction
| Runway | Direction |
| ------ | ----------|
| 15     | Right  |
| 33     | Left |
| 04     | Left |
| 22     | Left |



## Coordination
### Auto Release  

'Next' coordination is required from AM ADC to AM TCU for aircraft due to the busy ad-hoc nature of the airspace.

!!! example
    <span class="hotline">**AM ADC** -> **AM TCU**</span>: "Next, ASY01, runway 33"  
    <span class="hotline">**AM TCU** -> **AM ADC**</span>: "ASY01, Assigned Heading Right 030, unrestricted"  
    <span class="hotline">**AM ADC** -> **AM TCU**</span>: "Assigned Heading Heading Right 030, ASY01"  

### Level Assignment
The Standard Assignable level is the lower of `F180` or `RFL` to aircraft departing on a RADAR or PROCEDURAL Sid. 

Aircraft flying via a visual coded departure shall be cleared directly to their transit altitude to the restricted airspace of `F260`.