---
  title: Tindal (YPTN)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login ID              |
| ------------------ | -------------- | ---------------- | --------------------------------------|
| **Tindal ADC**    | **Tindal Tower**  | **119.700**         | **TN_TWR**        |
| **Tindal SMC**    | **Tindal Ground**  | **135.850**        | **TN_GND**        |
| **Tindal ACD**    | **Tindal Delivery**  | **128.100**      | **TN_DEL**       |
| **Tindal ATIS**    |   |  **124.000**        | **YPTN_ATIS**       |

## Airspace
TN ADC is not responsible for any airspace by default.  
In order to facilitate circuit operations, TN ADC may request a release of airspace within the TN MIL CTR from TN TCU, or take ownership of airspace within the TN MIL CTR if TN TCU is offline.

### SID Selection
Aircraft planned via **DN**, **LAREB**, **GREGA**, **DOSAM**, **MILIV**, **MIGAX**, **DAPMA** shall be assigned the **Procedural SID** that terminates at the appropriate waypoint.
Aircraft who are not planned via those points or who are negative RNAV may be assigned a RADAR SID or a visual departure.

#### Gate Departures (All Military Aircraft)
There are 11 gates to facilate departues and arrivals from the TN Training Airspace, based on the TDL TACAN. Aircraft can be cleared to track direct to the gate, or allow them to intercept the outbound radial by 10 DME. 

| Gate Name | Ident | Bearing (°M) | Distance (nm) | Restricted Area |
| ------ | ----------| ----------| ----------| ----------|
| BIAK     | BIA | 320 | 30 | N/A |
| TOP GATE     | TOP | 300 | 30 | R225D |
| MOROTAI     | MOR | 270 | 30 | R225D |
| TADJI     | TAD | 240 | 30 | R225D |
| TARAKAN     | TAR | 200 | 30 | R225D |
| BOTTOM GATE     | BOM | 190 | 30 | R225D |
| NADZAB     | NAD | 150 | 30 | N/A |
| MILNE     | MIL | 090 | 30 | R226A |
| WEDGE 1     | W1 | 285 | 16 | R238 |
| WEDGE 2     | W2 | 260 | 12 | R238 |
| WEDGE 3     | W3 | 200 | 16 | R238 |

<figure markdown>
![Tindal Gates](img/yptngates.png){width="700"}
  <figcaption>Tindal Gates</figcaption>
</figure>

!!! phraseology 
    CLAS35 plans to enter the R225 area via the MOROTAI Gate for Military Training.  
    **TN ACD**: "CLAS35, cleared to YPTN via MOROTAI, flight planned route. Runway 14, Intercept the outbound radial by 10 DME. Climb to F190. Squawk 6001, Departure Frequency 120.95"   

Since the Gate Departures are not SIDs, TN ACD needs to write the name of the coded departure in the *Global Ops Field* of the Strip, and amend the flight plan route to include all relevant tracking points.

Place/Bearing Distance points in the FDR can be used for this, with **TN** as the reference point, in the format PPPPBBBDDD.

!!! example 
    MOROTAI = TN270030  
    NADZAB = TN150030  

## Miscellaneous
### Circuit Operations
The Circuit Area Airspace is allocated to be within 5nm of the YPTN ARP from `SFC` to `A025`. Aircraft can be instructed to extend outside of this airspace by ATC for traffic management. 

!!! note
    Do not mix Fast Jets with standard performance aircraft in the circuit, otherwise separation cannot be assured.

#### Circuit Direction
| Runway | Direction |
| ------ | ----------|
| 14     | Right|
| 32     | Left |

### Intial and Pitch Operations 
The intial point is at A020 on the extended centerline of Taxiway Alpha at 6.5NM for RWY 14, 5NM for RWY 32. Aircraft will be cleared for a left, straight or right intial.

!!! phraseology
    **CLAS15**: "Request Intial and Pitch RWY 32"  
    **TN ADC**: "CLAS15, Cleared Straight Intial RWY 32, Report when at the Intial"  
    **CLAS15**: "On the Intial Point"  
    **TN ADC**: "CLAS15, descend to 1500ft, pitch at the Midfield"  
    **CLAS15**: "Wilco"

## Coordination
### TN TCU
'Next' coordination is required from TN ADC to TN TCU for all aircraft.

!!! phraseology
    <span class="hotline">**TN ADC** -> **TN TCU**</span>: "Next, ASY01, runway 32"  
    <span class="hotline">**TN TCU** -> **TN ADC**</span>: "ASY01, Heading 030, unrestricted"  
    <span class="hotline">**TN ADC** -> **TN TCU**</span>: "Heading 030, ASY01"  

The Standard Assignable level from TN ADC to TN TCU is the lower of `F180` or the `RFL`.

### TRT(TRS)
When TN TCU is offline, coordination is not required between TN ADC and TRT(TRS). Aircraft entering TRT(TRS) airspace shall be handed off, and instructed to contact TRT(TRS) for onwards clearance.

## Charts
!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}