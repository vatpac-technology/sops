---
  title: Operations
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | ID      | Callsign       | Frequency        | Login Identifier              |
| ------------------ | --------------| -------------- | ---------------- | --------------------------------------|
| **Melbourne Approach East**    |**MAE**| **Melbourne Approach**   | **132.000**         | **ML_APP**                                   |
| Melbourne Departures North†    |MDN| Melbourne Departures  | 118.900         | ML_DEP          |
| Melbourne Departures South†   |MDS| Melbourne Departures | 129.400          | ML-S_DEP         |
| Melbourne Flow†        |MFL|                |          | ML-FLW_CTR                               |

† **Non-standard position** – may only be used in accordance with VATPAC Ratings and Controller Positions Policy (link)
## Airspace
The Melbourne TMA spans a 30nm Radius around ML from SFC-FL245, as well as the AV CTR.   
ML TCU is responsible for the Melbourne TMA, except:    
a) AV CTR (SFC-A025) when **AV TWR** is online.  
b) MB CTR when **MB TWR** is online.  
c) The Sunbury Corridor, when **ML TWR** is online  
d) The South East Quadrant, when **EN TWR** is online  
e) The Coffin, when **EN TWR** is online, and the airspace has been released to **EN TWR**  
f) Any airspace released to an external unit (e.g. tower) either by NOTAM or as negotiated.

<figure markdown>
![Melbourne TCU Airspace Administration](img/MLTCUairspace.png){ width="500" }
  <figcaption>Melbourne TCU Airspace Administration</figcaption>
</figure>

!!! note
    The released airspace of the Sunbury Corridor and South East Quadrant is only from the lower level of CTA. ML TCU still owns the Class G airspace beneath it.

MB CTR reverts to Class G when **MB TWR** is offline, and is administered by the relevant ML TCU controller.    
EN CTR reverts to Class G when **EN TWR** is offline, and is administered by the relevant ML TCU controller.  
AV CTR Class D reverts to Class G when **AV_TWR** is offline, and is administered by the relevant ML TCU controller.  
In the absence of a **MDS** controller, **MDN** shall asssume the **MDS** airspace.  
In the absence of a **MDN** controller, **MAE** shall asssume the **MDN** and **MDS** airspace.  
ML TCU is responsible for the provision of ADC, SMC and ACD responsibilities when **ML TWR** is offline.

## Arrival Procedures
#### YMEN Arrivals
IFR YMEN Arrivals shall be cleared via the following arrival gates:  
Runway 26: `MONTY`  
Runway 35: `MONTY`  
Runway 17: `5NM FINAL`  
Runway 08: `5NM FINAL`  

VFR YMEN Arrivals from ML TCU shall be cleared via any of the following arrival gates:  
`KAO` (Kalkallo)   
`YYN` (Yan Yean Reservoir)  
`DSN` (Doncaster Shoppingtown)  
`APL` (Albert Park Lake)  
`SNP` (Station Pier)  
`WES` (Westgate Bridge)  

## EN/AV/MB TWR Offline
Due to the low level of CTA at these aerodromes, it is best practice to give airways clearance to aircraft at the holding point, to ensure departing aircraft can have uninterrupted climb.

!!! example
    **ABC** -> **ML TCU**: "Melbourne Approach, ABC, PC12, POB 8, IFR, Taxiing YMMB for YBLT, Runway 35L" `AIP GEN 3.4`  
    **ML TCU** -> **ABC**: "ABC, Melbourne Approach, Squawk 3601, No Reported IFR Traffic, Call me Ready at the Holding Point for Airways Clearance"  
    **ABC** -> **ML TCU**: "Squawk 3601, Wilco, ABC"  
    **ABC** -> **ML TCU**: "ABC, Ready Runway 35L, Request clearance"  
    **ML TCU** -> **ABC**: "ABC, Cleared to YBLT via SAMIG, Flight Planned Route. Make Visual left turn DCT SAMIG, Climb to A040"  
    **ABC** -> **ML TCU**: "Cleared to YBLT via ANKUB, Flight Planned Route. Make Visual left turn DCT SAMIG, Climb to A040, ABC" 
## Airspace Division

The divisions of the airspace between **PHA**, and **PHD** change based on the Runway Mode.

!!! note
    The following diagrams do not include non PH TCU areas of responsibility such as JK CTR or PEA APP

### 03/06
<figure markdown>
![03/06 TCU Structure](img/0306annotated.png){ width="700" }
  <figcaption>03/06 TCU Structure</figcaption>
</figure>

### 21/24
<figure markdown>
![21/24 TCU Structure](img/2124annotated.png){ width="700" }
  <figcaption>21/24 TCU Structure</figcaption>
</figure>