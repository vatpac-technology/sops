---
  title: Operations
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | ID      | Callsign       | Frequency        | Login Identifier              |
| ------------------ | --------------| -------------- | ---------------- | --------------------------------------|
| **Adelaide Approach West**    |**AAW**| **Adelaide Approach**   | **124.200**         | **AD_APP**                                   |
| Adelaide Approach East†    |AAE| Adelaide Departures  | 118.200         | AD_DEP          |
| Adelaide Flow†        |AFL|                |          | AD-FLW_CTR                               |

† **Non-standard position** – may only be used in accordance with VATPAC Ratings and Controller Positions Policy (link)

## Airspace
The Adelaide TMA covers the area shown below, SFC-FL245. (vatSys screenshot)   
AD TCU is responsible for the Adelaide TMA, except:    
a) PF CTR when **PF TWR** is online.  
b) EDN CTR when **EDN TWR** is online.  
c) Any airspace released to an external unit (e.g. tower) either by NOTAM or as negotiated.

PF CTR reverts to Class G when **PF TWR** is offline, and is administered by the relevant AD TCU controller.    
EDN CTR reverts to Class G when **EDN TWR** is offline, and is administered by the relevant AD TCU controller.  
**AAW** Shall assume the airspace of **AAE** when they are offline.

## Arrival Procedures
#### YMEN Arrivals

## PF TWR Offline
Due to the low level of CTA at YPPF, it is best practice to give airways clearance to aircraft at the holding point, to ensure departing aircraft can have uninterrupted climb. The Standard assignable level for YPPF departures is the lower of `A040` or the `RFL`.

!!! example
    **ABC** -> **AD TCU**: "Adelaide Approach, ABC, PC12, POB 8, IFR, Taxiing YPPF for YPAG, Runway 21R" `AIP GEN 3.4`  
    **AD TCU** -> **ABC**: "ABC, Adelaide Approach, Squawk 3601, No Reported IFR Traffic, Call me Ready at the Holding Point for Airways Clearance"  
    **ABC** -> **AD TCU**: "Squawk 3601, Wilco, ABC"  
    **ABC** -> **AD TCU**: "ABC, Ready Runway 21R, Request clearance"  
    **AD TCU** -> **ABC**: "ABC, Cleared to YPAG via DOLVU, Flight Planned Route. Climb via SID to A040, Runway 21R, PARAFIELD1 departure, Assigned heading Right 360"  
    **ABC** -> **AD TCU**: "Cleared to YPAG via DOLVU, Flight Planned Route. Climb via SID to A040, Runway 21R, PARAFIELD1 departure, Assigned heading Right 360, ABC" 
