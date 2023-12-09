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
The Vertical limits of the AD TCU are `SFC` to `F245`.

PF CTR reverts to Class G when **PF ADC** is offline, and is administered by the relevant AD TCU controller.    
EDN CTR reverts to Class G when **EDN ADC** is offline, and is administered by the relevant AD TCU controller.  

### Airspace Division
!!! note
    The following diagram does not include non AD TCU areas of responsibility such as PF CTR or EDN CTR

<figure markdown>
![AD TCU Structure](img/adtcu_annotated.png){ width="700" }
  <figcaption>AD TCU Structure</figcaption>
</figure>

## Scenic Coastal Flights
VFR aircraft may transit the control zone tracking coastal north or southbound, generally at `A005`. **AD TCU** is responsible for ensuring these aircraft remain separated from aircraft arriving/departing at YPAD and may delegate this responsibility to **AD ADC**.  

Coordinate the aircraft with ADC, including the use of the appropriate clearance limit in the table below, then issue airways clearance. Before the aircraft reaches the clearance limit, transfer them to ADC who will manage their transit of the extended runway centreline.  The clearance limits in the table below will ensure that coastal aircraft remain clear of the runway 05 approach path and runway 23 departure/missed approach path. 

| Direction of Travel | Clearance Limit |
| --- | --- |
| Northbound | BTJ |
| Southbound | HNLY |

<figure markdown>
![Clearance Limits](../aerodromes/img/adclearancelimits.png){ width="500" }
  <figcaption>Clearance Limits (red) and Approach/Departure Path (green)</figcaption>
</figure>

!!! example
    **CEY:** "Adelaide Approach, CEY, Cessna 172, 4nm south of PNL, 1,000ft, received charlie, request coastal northbound"  
    **AD TCU:** "CEY, Adelaide Approach, squawk 0542, remain clear of class C airspace"  
    **CEY:** "Squawk 0542, remain OCTA, CEY"  

    <span class="hotline">**TCU** -> **ADC**</span>: "South of PNL, CEY, for coastal northbound, 500ft, clearance limit BTJ"  
    <span class="hotline">**ADC** -> **TCU**</span>: "CEY"  

    **AD TCU:** "CEY, identified, cleared coastal offshore northbound, not above 500ft, clearance limit BTJ"  
    **CEY:** "Cleared coastal offshore northbound, not above 500ft, clearance limit BTJ, CEY"  

    *Before CEY reaches BTJ:*  
    **AD TCU:** "CEY, contact Adelaide Tower, 120.5"  
    **CEY:** "120.5, CEY"

Once the aircraft has transited the extended runway centreline and is clear of potential conflict with YPAD, ADC will transfer them back to the TCU.

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
### Enroute
#### Departures
Voiceless coordination is in place from AD TCU to TBD/AUG for aircraft assigned the lower of `F240` or the `RFL`, and tracking via a Procedural SID terminus.

Any aircraft not meeting the above criteria must be prior coordinated to TBD/AUG.

!!! example
    <span class="hotline">**AD TCU** -> **TBD**</span>: "PFY1234, request DCT LOLLS"  
    <span class="hotline">**TBD** -> **AD TCU**</span>: "PFY1234, concur DCT LOLLS"  

#### Arrivals
The Standard assignable level from TBD/AUG to AD TCU is `A090`, and assigned a STAR. All other aircraft must be prior coordinated

### AD ADC
#### Auto Release
'Next' coordination is **not** required from AD ADC for aircraft that are:   
  a) Departing from a runway nominated on the ATIS; and  
  b) Assigned the standard assignable level; and  
  c) Assigned a **Procedural** SID

!!! example
    <span class="hotline">**AD ADC** -> **AD TCU**</span>: "Next, ABC, runway 05"  
    <span class="hotline">**AD TCU** -> **AD ADC**</span>: "ABC, Track Extended Centreline, unrestricted"  
    <span class="hotline">**AD ADC** -> **AD TCU**</span>: "Track Extended Centreline, ABC"

The Standard Assignable level from AD ADC to AD TCU is:  
For Jets: `A050`  
For Non-Jets: The lower of `A040` or the `RFL`

### AD TCU Internal
All aircraft transiting between internal AD TCU boundaries must be heads-up coordinated.

!!! example
    <span class="hotline">**AAW** -> **AAE**</span>: "via AD, FD123"  
    <span class="hotline">**AAE** -> **AAW**</span>: "FD123, A090"   

Boundary coordination is not required between AAW and AAE for aircraft arriving or departing tracking via the 05/23 extended centreline.

### PF ADC
#### Departures
When the aircraft is ready for departure, PF ADC will coordinate with AD TCU for permission to release the aircraft into CTA.

!!! example
    <span class="hotline">**PF ADC** -> **AAW**</span>: "Next, XMM, 03L"  
    <span class="hotline">**AAW** -> **PF ADC**</span>: "XMM, Heading 020, unrestricted"  
    <span class="hotline">**PF ADC** -> **AAW**</span>: "Heading 020, XMM"

The Standard Assignable level from PF ADC to AD TCU is the lower of `A030` or the `RFL`, any other level must be prior coordinated.
#### Arrivals/Overfliers
AD TCU will heads-up coordinate arrivals/overfliers from Class C to PF ADC prior to **5 mins** from the boundary.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to PF ADC, unless PF ADC nominates a restriction.  
VFR aircraft require a level readback.

!!! example
    <span class="hotline">**AAW** -> **PF ADC**</span>: "via PAL, YTS"  
    <span class="hotline">**PF ADC** -> **AAW**</span>: "YTS, A010"

### EDN ADC
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
    <span class="coldline">**AD TCU** -> **EDN ADC**</span>: "New sequence of 2. MRNR21, via AD, Number 1. MRNR22, via AD, Number 2"  
    <span class="coldline">**EDN ADC** -> **AD TCU**</span>: "MRNR21, Number 1. MRNR22, Number 2"  