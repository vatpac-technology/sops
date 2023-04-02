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

### Airspace Division
!!! note
    The following diagram does not include non AD TCU areas of responsibility such as PF CTR or EDN CTR

<figure markdown>
![AD TCU Structure](img/adtcu_annotated.png){ width="700" }
  <figcaption>AD TCU Structure</figcaption>
</figure>

### Secnic Coastal Flights
VFR aircraft may transit the control zone tracking coastal north or southbound, generally between `A005` and `A015`.  These aircraft should be issued a squawk code and instructed to remain OCTA, then coordinated with **AD ADC** who may issue a clearance limit based on the current traffic situation at YPAD (generally from the table below).  

| Direction of Travel | Clearance Limit |
| --- | --- |
| Northbound | Brighton Jetty (`BTJ`) |
| Southbound | Henley Jetty (`HNLY`) |

!!! example
    *CNY is a VFR Cessna 172 tracking coastal northbound, approaching Port Noarlunga (`PNL`).*  
    **CNY:** "Adelaide Approach, Cessna 172 CNY, 2nm south of Port Noarlunga, 1500ft, received Delta, request coastal northbound"  
    **AD TCU:** "CNY, Adelaide Approach, squawk 0511, remain clear of class C airspace"  
    **CNY:** "Squawk 0511, remain clear of class C airspace, CNY"  

    *TCU coordinates with ADC.*  
    <span class="hotline">**TCU** -> **ADC**</span>: "South of Port Noarlunga, CNY, for coastal northbound, 1500ft"  
    <span class="hotline">**ADC** -> **TCU**</span>: "CNY clearance limit Brighton Jetty"  
    <span class="hotline">**TCU** -> **ADC**</span>: "Clearance limit Brighton Jetty, CNY"

    **AD TCU:** "CNY, cleared coastal northbound, 1500ft, clearance limit Brighton Jetty"  
    **CNY:** "Cleared coastal northbound, 1500ft, clearance limit Brighton Jetty, CNY"

These aircraft should be transferred to **AD ADC** approaching the control zone.

## PF ADC Offline
Due to the low level of CTA at YPPF, it is best practice to give airways clearance to aircraft at the holding point, to ensure departing aircraft can have uninterrupted climb.

!!! example
    **ABC**: "Adelaide Approach, ABC, PC12, POB 8, IFR, taxiing YPPF for YPAG, Runway 21R"   
    **AD TCU**: "ABC, Adelaide Approach, Squawk 3601, no reported IFR traffic, report ready at the holding point for airways clearance"  
    **ABC**: "Squawk 3601, wilco, ABC"  

    **ABC**: "ABC, ready Runway 21R, request clearance"  
    **AD TCU**: "ABC, cleared to YPAG via DOLVU, flight planned route, PARAFIELD1 departure, climb via SID to A040"   
    **ABC**: "Cleared to YPAG via DOLVU, flight planned route, PARAFIELD1 departure, climb via SID to A040, ABC"  
    **AD TCU**: "ABC, assigned heading right 360, report airborne"  
    **ABC**: "Assigned right 360, wilco, ABC"

## Coordination
### AD TCU / ENR
#### Departures
Voiceless coordination is in place from AD TCU to TBD (and subsectors) for aircraft:  
Planned at or above `F240`: `Assigned F240`  
Planned below `F240`: `Assigned the RFL`  

Any aircraft not meeting the above criteria must be prior coordinated to ENR.

!!! example
    <span class="hotline">**AD TCU** -> **TBD**</span>: "PFY1234, with your concurrence, will be assigned F180, for my separation with JTE654"  
    <span class="hotline">**TBD** -> **AD TCU**</span>: "PFY1234, concur F180"  

#### Arrivals
The Standard assignable level from TBD/AUG to AD TCU is `A090`, and assigned a STAR. All other aircraft must be prior coordinated

### AD TCU / AD ADC
#### Auto Release

Auto Release shall be used for aircraft that are:    
a) Departing from a runway nominated on the ATIS; and  
b) Issued a Procedural SID; and   
c) Assigned `A050`.

Any aircraft that don't meet these criteria must be coordinated to AD TCU with a "Next" Call.

"Next" Coordination is a procedure where the **AD ADC** controller gives a heads-up to the AD TCU controller about an impending departure. The AD TCU controller will respond by assigning a heading to the aircraft, for the **AD ADC** controller to pass on with their takeoff clearance.

!!! example
    <span class="hotline">**AD ADC** -> **AD TCU**</span>: "Next, ABC, runway 05"  
    <span class="hotline">**AD TCU** -> **AD ADC**</span>: "ABC, Track Extended Centreline, unrestricted"  
    <span class="hotline">**AD ADC** -> **AD TCU**</span>: "Track Extended Centreline, unrestricted, ABC"

### AD TCU Internal

All aircraft transiting between internal AD TCU boundaries must be heads-up coordinated.

!!! example
    <span class="hotline">**AAW** -> **AAE**</span>: "via AD, FD123"  
    <span class="hotline">**AAE** -> **AAW**</span>: "FD123, A090"   

### AD TCU / PF ADC
#### Departures

Aircraft departing YPPF in to AD TCU Class C will be coordinated from **PF ADC** at Taxi.

!!! example
    <span class="coldline">**PF ADC** -> **AD TCU**</span>: "Taxi, ABC for YKSC, Runway 03L, via AD"  
    <span class="coldline">**AD TCU** -> **PF ADC**</span>: "ABC, cleared to YKSC via AD, Parafield 1 departure, climb via SID A030"  
    <span class="coldline">**PF ADC** -> **AD TCU**</span>: "Cleared to YKSC via AD, Parafield 1 departure, climb via SID A030, ABC"

#### Arrivals
YPPF arrivals shall be coordinated to **PF ADC** from the relevant AD TCU controller prior to transfer of jurisdiction.

!!! example
    <span class="coldline">**AD TCU** -> **PF ADC**</span>: "ZYX, via DOLVU, Number 1"  
    <span class="coldline">**PF ADC** -> **AD TCU**</span>: "ZYX, Number 1"  

### AD TCU / EDN ADC
#### Departures

Aircraft departing YPED in to AD TCU Class C will be coordinated from **EDN ADC** at Taxi.

!!! example
    <span class="coldline">**EDN ADC** -> **AD TCU**</span>: "Taxi, BLKT11 for YMES, via GULLY"  
    <span class="coldline">**AD TCU** -> **EDN ADC**</span>: "BLKT11"  

When the aircraft is ready for takeoff, **EDN ADC** will give a "Next" call, where AD TCU will provide the cleared level.

!!! example
    <span class="hotline">**EDN ADC** -> **AD TCU**</span>: "Next, BLKT11, runway 18"  
    <span class="hotline">**AD TCU** -> **EDN ADC**</span>: "BLKT11, A050"  
    <span class="hotline">**EDN ADC** -> **AD TCU**</span>: "A050, BLKT11"

#### Arrivals
AD TCU Must coordinate the sequence information to **EDN ADC** prior to transfer of jurisdiction.

!!! example
    <span class="coldline">**AD TCU** -> **EDN ADC**</span>: "New sequence of 2. MRNR21, via AD, Number 1. MARNR22, via AD, Number 2"  
    <span class="coldline">**EDN ADC** -> **AD TCU**</span>: "MRNR21, Number 1. MRNR22, Number 2"  