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

† *Non-standard positions* may only be used in accordance with [VATPAC Ratings and Controller Positions Policy](https://vatpac.org/publications/policies)

## Airspace
The Adelaide TMA covers `SFC` to `FL245`. 

PF CTR reverts to Class G when **PF ADC** is offline, and is administered by the relevant AD TCU controller.    
EDN CTR reverts to Class G when **EDN ADC** is offline, and is administered by the relevant AD TCU controller.  

## PF ADC Offline
Due to the low level of CTA at YPPF, it is best practice to give airways clearance to aircraft at the holding point, to ensure departing aircraft can have uninterrupted climb.

!!! example
    **ABC**: "Adelaide Approach, ABC, PC12, POB 8, IFR, Taxiing YPPF for YPAG, Runway 21R"   
    **AD TCU**: "ABC, Adelaide Approach, Squawk 3601, No Reported IFR Traffic, Call me Ready at the Holding Point for Airways Clearance"  
    **ABC**: "Squawk 3601, Wilco, ABC"  
    **ABC**: "ABC, Ready Runway 21R, Request clearance"  
    **AD TCU**: "ABC, Cleared to YPAG via DOLVU, Flight Planned Route. Climb via SID to A040, Runway 21R, PARAFIELD1 departure, Assigned heading Right 360"   
    **ABC**: "Cleared to YPAG via DOLVU, Flight Planned Route. Climb via SID to A040, Runway 21R, PARAFIELD1 departure, Assigned heading Right 360, ABC"  
    `AIP GEN 3.4`

## Coordination
### AD TCU / ENR
#### Departures
Voiceless coordination is in place from AD TCU to TBD (and subsectors) for aircraft:  
Planned at or above `F240`: `Assigned F240`  
Planned below `F240`: `Assigned the RFL`  

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

    **AD ADC**: "ABC, Track Extended Centreline 222 degrees, Runway 23, Cleared for Takeoff"  
    **ABC**: "Track Extended Centreline 222 degrees, Runway 23, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4`

### AD TCU Internal

All aircraft transiting between internal AD TCU boundaries must be heads-up coordinated.

!!! example
    **AAW** -> **AAE**: "via AD, FD123"  
    **AAE** -> **AAW**: "FD123, A090"   

### AD TCU / PF ADC
#### Departures

Aircraft departing YPPF in to AD TCU Class C will be coordinated from **PF ADC** at Taxi.

!!! example
    **PF ADC** -> **AD TCU**: "Taxi, ABC for YKSC, Runway 03L, via AD"  
    **AD TCU** -> **PF ADC**: "ABC for YKSC, Runway 03L, Cleared Parafield 1, A030"  
    **PF ADC** -> **AD TCU**: "Parafield 1, A030, ABC"  

#### Arrivals
YPPF arrivals shall be coordinated to **PF ADC** from the relevant AD TCU controller prior to transfer of jurisdiction.

!!! example
    **AD TCU** -> **PF ADC**: "ZYX, via DOLVU, Number 1" 
    **PF ADC** -> **AD TCU**: "ZYX, Number 1"  

### AD TCU / EDN ADC
#### Departures

Aircraft departing YPED in to AD TCU Class C will be coordinated from **EDN ADC** at Taxi.

!!! example
    **EDN ADC** -> **AD TCU**: "Taxi, BLKT11 for YMES, via GULLY"  
    **AD TCU** -> **EDN ADC**: "BLKT11 for YMES via GULLY"  

When the aircraft is ready for takeoff, **EDN ADC** will give a "Next" call, where AD TCU will provide the cleared level.

!!! example
    **EDN ADC** -> **AD TCU**: "Next, BLKT11"  
    **AD TCU** -> **EDN ADC**: "BLKT11, A050"  
    **EDN ADC** -> **AD TCU**: "A060, BLKT11"

#### Arrivals
AD TCU Must coordinate the sequence information to **EDN ADC** prior to transfer of jurisdiction.

!!! example
    **AD TCU** -> **EDN ADC**: "New sequence of 2. MRNR21, via AD, Number 1. MARNR22, via AD, Number 2"  
    **EDN ADC** -> **AD TCU**: "MRNR21, Number 1. MRNR22, Number 2"  