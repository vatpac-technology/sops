---
  title: Adelaide TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | ID      | Callsign       | Frequency        | Login Identifier              |
| ------------------ | --------------| -------------- | ---------------- | --------------------------------------|
| **Adelaide Approach West**    |**AAW**| **Adelaide Approach**   | **124.200**         | **AD_APP**                                   |
| Adelaide Approach East†    |AAE| Adelaide Departures  | 118.200         | AD_DEP          |
| Adelaide Flow†        |AFL|                |          | AD-FLW_CTR                               |

† **Non-standard position** – may only be used in accordance with [VATPAC Ratings and Controller Positions Policy](https://cdn.vatpac.org/documents/policy/Controller+Positions+and+Ratings+Policy+v5.2.pdf){target=new}

## Airspace
The Adelaide TMA covers the area shown below, SFC-FL245. (vatSys screenshot)   
AD TCU is responsible for the Adelaide TMA, except:    
a) PF CTR when **PF TWR** is online.  
b) EDN CTR when **EDN TWR** is online.  
c) Any airspace released to an external unit (e.g. tower) either by NOTAM or as negotiated.

PF CTR reverts to Class G when **PF TWR** is offline, and is administered by the relevant AD TCU controller.    
EDN CTR reverts to Class G when **EDN TWR** is offline, and is administered by the relevant AD TCU controller.  
**AAW** shall assume the airspace of **AAE** when they are offline.  
AD TCU is responsible for the provision of ADC, SMC and ACD responsibilities when **AD TWR** is offline.


## PF TWR Offline
Due to the low level of CTA at YPPF, it is best practice to give airways clearance to aircraft at the holding point, to ensure departing aircraft can have uninterrupted climb. The Standard assignable level for YPPF departures is the lower of `A040` or the `RFL`.

!!! example
    **ABC** -> **AD TCU**: "Adelaide Approach, ABC, PC12, POB 8, IFR, Taxiing YPPF for YPAG, Runway 21R" `AIP GEN 3.4`  
    **AD TCU** -> **ABC**: "ABC, Adelaide Approach, Squawk 3601, No Reported IFR Traffic, Call me Ready at the Holding Point for Airways Clearance"  
    **ABC** -> **AD TCU**: "Squawk 3601, Wilco, ABC"  
    **ABC** -> **AD TCU**: "ABC, Ready Runway 21R, Request clearance"  
    **AD TCU** -> **ABC**: "ABC, Cleared to YPAG via DOLVU, Flight Planned Route. Climb via SID to A040, Runway 21R, PARAFIELD1 departure, Assigned heading Right 360"  
    **ABC** -> **AD TCU**: "Cleared to YPAG via DOLVU, Flight Planned Route. Climb via SID to A040, Runway 21R, PARAFIELD1 departure, Assigned heading Right 360, ABC" 

## Coordination
### AD TCU / ENR
#### Departures
Voiceless coordination is in place from AD TCU to TBD (and subsectors) for aircraft:  
Planned at or above F240: `Assigned F240`  
Planned below F240: `Assigned the RFL`  

Any aircraft not meeting the above criteria must be prior coordinated to ENR.

!!! example
    **AD TCU** -> **TBD**: "PFY1234, with your concurrence, will be assigned F180, for my separation with JTE654"  
    **TBD** -> **AD TCU**: "PFY1234, concur F180"  

#### Arrivals
The Standard assignable level from ENR to AD TCU is `A090`. All other levels must be prior coordinated

### AD TCU / AD ADC
#### Auto Release

Auto Release shall be used for aircraft that are:    
a) Departing from a runway nominated on the ATIS; and  
b) Issued a Procedural SID; and   
c) Assigned `A050`.

Any aircraft that don't meet these criteria must be coordinated to AD TCU with a "Next" Call.

"Next" Coordination is a procedure where the **AD ADC** controller gives a heads-up to the AD TCU controller about an impending departure. The AD TCU controller will respond by assigning a heading to the aircraft, for the **AD ADC** controller to pass on with their takeoff clearance.

!!! example
    **AD ADC** -> **AD TCU**: "Next, ABC"  
    **AD TCU** -> **AD ADC**: "ABC, Track Extended Centreline"  
    **AD ADC** -> **AD TCU**: "Track Extended Centreline, ABC"  
    **AD ADC** -> **ABC**: "ABC, Track Extended Centreline 222 degrees, Runway 23, Cleared for Takeoff"  
    **ABC** -> **AD ADC**: "Track Extended Centreline 222 degrees, Runway 23, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4`

### AD TCU Internal

All aircraft transiting between internal AD TCU boundaries must be heads-up coordinated.

!!! example
    **AAW** -> **AAE**: "via AD, FD123"  
    **AAE** -> **AAW**: "FD123, A090"   

### AD TCU / PF TWR
#### Departures

Aircraft departing YPPF in to AD TCU Class C will be coordinated from **PF TWR** at Taxi.

!!! example
    **PF TWR** -> **AD TCU**: "Taxi, ABC for YKSC, Runway 03L, via AD"  
    **AD TCU** -> **PF TWR**: "ABC for YKSC, Runway 03L, Cleared Parafield 1, A030"  
    **PF TWR** -> **AD TCU**: "Parafield 1, A030, ABC"  

#### Arrivals
YPPF arrivals shall be coordinated to **PF TWR** from the relevant AD TCU controller prior to transfer of jurisdiction.

!!! example
    **AD TCU** -> **PF TWR**: "ZYX, via DOLVU, Number 1" 
    **PF TWR** -> **AD TCU**: "ZYX, Number 1"  

### AD TCU / EDN TWR
#### Departures

Aircraft departing YPED in to AD TCU Class C will be coordinated from **EDN TWR** at Taxi.

!!! example
    **EDN TWR** -> **AD TCU**: "Taxi, BLKT11 for YMES, via GULLY"  
    **AD TCU** -> **EDN TWR**: "BLKT11 for YMES via GULLY"  

When the aircraft is ready for takeoff, **EDN TWR** will give a "Next" call, where AD TCU will provide the cleared level.

!!! example
    **EDN TWR** -> **AD TCU**: "Next, BLKT11"  
    **AD TCU** -> **EDN TWR**: "BLKT11, A050"  
    **EDN TWR** -> **AD TCU**: "A060, BLKT11"

#### Arrivals
AD TCU Must coordinate the sequence information to **EDN TWR** prior to transfer of jurisdiction.

!!! example
    **AD TCU** -> **EDN TWR**: "New sequence of 2. MRNR21, via AD, Number 1. MARNR22, via AD, Number 2"  
    **EDN TWR** -> **AD TCU**: "MRNR21, Number 1. MRNR22, Number 2"  