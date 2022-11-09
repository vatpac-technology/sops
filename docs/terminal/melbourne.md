---
  title: Melbourne TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | ID      | Callsign       | Frequency        | Login Identifier              |
| ------------------ | --------------| -------------- | ---------------- | --------------------------------------|
| **Melbourne Approach East**    |**MAE**| **Melbourne Approach**   | **132.000**         | **ML_APP**                                   |
| Melbourne Departures North†    |MDN| Melbourne Departures  | 118.900         | ML_DEP          |
| Melbourne Departures South†   |MDS| Melbourne Departures | 129.400          | ML-S_DEP         |
| Melbourne Flow†        |MFL|                |          | ML-FLW_CTR                               |

† **Non-standard position** – may only be used in accordance with [VATPAC Ratings and Controller Positions Policy](https://cdn.vatpac.org/documents/policy/Controller+Positions+and+Ratings+Policy+v5.2.pdf){target=new}

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
### Level Assignment
When assigning levels on descent to aircraft, remember that you will not receive "Next" Coordination on aircraft assigned Standard Assignable Levels (`A050` for most aircraft), meaning an aircraft could depart at any time without prior warning and climb to `A050`. To maintain separation assurance between arrivals and departures, do not assign below `A060` to arriving aircraft until they are clear of the active runway's departure path.

!!! example
    With RWY 34 in use for arrivals and RWY 27 in use for departures, aircraft inbound on the ARBEY STAR should be assigned no lower than `A060` until established south of the RWY 27 departure track.

To avoid conflicting with published departure procedures, aircraft not cleared via a STAR should be issued a requirement to reach `A090` by 20DME.
### YMEN Arrivals
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

## YMEN TWR Offline
### Arrivals
The class C airspace surrounding YMEN extends to SFC.  This means that aircraft conducting approaches will remain inside controlled airspace until they land (and in the event of a go around).  These aircraft should be cleared for an appropriate approach, advised of any traffic taxiing at YMEN, and instructed to *'report clear of the runway'*.  The missed approach path must be protected until the aircraft reports clear.

!!! example
    **ML TCU:** "SH490, cleared ILS Runway 26 approach, traffic taxiing for the holding point is UJA, an Aero Commander, report clear of the runway"  
    **SH490:** "Cleared ILS Runway 26, copy UJA, SH490"  

    **SH490:** "SH490, clear of the runway, Essendon, cancel SARWATCH"  
    **ML TCU:** "SH490, Essendon SARWATCH terminated, gday"
### Departures
Essendon has unique procedures due to its position in the ML CTR, with controlled airspace to the ground.  Departing aircraft will request airways clearance and engine start while on the bay and ML TCU will provide current weather conditions, expected runway for departure, and clearance.  On completion of the readback, aircraft should be instructed to *'report taxiing to runway XX'*.

!!! example
    **FDK**: "Melbourne Approach, FDK, YMEN for YSHT, request clearance and engine start" `AIP GEN 3.4`  
    **ML TCU**: "FDK, Melbourne Approach, wind 290 degrees 4 knots, QNH 1017, cleared to YSHT via MNG, flight planned route, visual departure, climb to A040, expect runway 35"  
    **FDK**: "QNH 1017, cleared to YSHT via MNG, flight planned route, visual departure, climb to A040, FDK"  
    **ML TCU**: "FDK, start approved, report taxiing for runway 35"  
    **FDK**: "Start approved, FDK"

When the aircraft reports taxiing, issue a traffic statement and instruct them to report at the holding point for departure instructions.
!!! example
    **FDK**: "FDK, taxiing runway 35"  
    **ML TCU**: "FDK, traffic is CBN, a Cherokee, 5nm final runway 35, report at the holding point for departure instructions"  
    **FDK**: "Copy CBN, wilco, FDK"

Once the aircraft is ready for departure and no conflict exists in your airspace, issue any relevant departure instructions (assigned heading, visual turns, etc).  If a departure is not yet available, instruct the pilot to hold on the ground and indicate the reason for the delay.
!!! example
    **FDK**: "FDK, ready runway 35"  
    **ML TCU**: "FDK, hold at the holding point, short delay due inbound aircraft"  
    **FDK**: "Hold at the holding point, FDK"  

    **ML TCU**: "FDK, make right turn, report airborne"  
    **FDK**: "Make right turn, FDK"

## YMAV TWR Offline
### Arrivals
Due to the low level of CTA above Avalon, aircraft conducting approaches will commence the approach inside controlled airspace and leave CTA on descent.  If the aircraft goes around, they will re-enter controlled airspace.  These aircraft should be cleared to leave controlled airspace descending via an appropriate approach and instructed to *'report clear of the runway'*.  The missed approach path must be protected until the aircraft reports clear.

!!! note
    A clearance to conduct an instrument approach constitutes a clearance to carry out the published missed approach.  As a result, there is no need to issue a clearance to re-enter controlled airspace in the event the aircraft goes around.

!!! example
    **ML TCU:** "JST607, cleared to leave control area descending via the ILS Runway 18 approach, no reported IFR traffic, report clear of the runway"  
    **JST607:** "Cleared to leave control area descending via the ILS Runway 18 approach, JST607"  

    **JST607:** "JST607, clear of the runway, Avalon, cancel SARWATCH"  
    **ML TCU:** "JST607, Avalon SARWATCH terminated, gday"

<figure markdown>
![Approximate Airspace Split](img/YMAV_approach.png)
  <figcaption>Approximate Airspace Vertical Split (not to scale)</figcaption>
</figure>

### Departures
Departing aircraft generally require an airways clearance on the ground, due to the low level of CTA.  Aircraft should report taxiing to the TCU controller, who will issue a squawk code and traffic statement.  These aircraft should be instructed to report at the holding point, where airways clearance will be issued.

!!! example
    **AM318**: "Melbourne Approach, AM318, King Air IFR, taxiing YMAV runway 18 for YMEN, 2 POB" `AIP GEN 3.4`  
    **ML TCU**: "AM318, Melbourne Approach, squawk 3542, no reported IFR traffic, report ready at the holding point for airways clearance"  
    **AM318**: "Squawk 3542, wilco, AM318"  
    
    **AM318**: "AM318, ready runway 18"  
    **ML TCU**: "AM318, cleared to YMEN direct, AV5 departure, climb via SID to A040"  
    **AM318**: "Cleared to YMEN direct, AV5 departure, climb via SID to A040, AM318"  
    **ML TCU**: "AM318, assigned heading left 020, report airborne"  
    **AM318**: "Assigned left 020, wilco, AM318"  

## YMMB TWR Offline
### Arrivals
IFR aircraft cruising inside CTA will generally commence an instrument approach from within controlled airspace and leave CTA on descent.  The missed approach procedure will keep these aircraft outside controlled airspace, so does not need to be protected by the TCU controller.  Clear these aircraft to leave CTA descending via an appropriate approach.

!!! example
    **ML TCU:** "OFX, cleared to leave control area descending via the RNP Runway 17L approach, no reported IFR traffic"  
    **OFX:** "Cleared to leave control area descending via the RNP Runway 17L approach, OFX"  
### Departures
Due to the low level of CTA surrounding YMMB, it is best practice to give airways clearance to aircraft at the holding point, to ensure departing aircraft can have uninterrupted climb.

!!! example
    **AAC:** "Melbourne Approach, AAC, PC12 IFR, taxiing YMMB for YBLT, runway 35L, 7 POB" `AIP GEN 3.4`  
    **ML TCU:** "AAC, Melbourne Approach, squawk 4301, no reported IFR traffic, report ready at the holding point for airways clearance"  
    **AAC:** "Squawk 4301, wilco, AAC" 

    **AAC:** "AAC, ready runway 35L"  
    **ML TCU:** "AAC, Cleared to YBLT via SAMIG, flight planned route, make visual left turn DCT SAMIG, climb to A040"  
    **AAC:** "Cleared to YBLT via SAMIG, flight planned route, make visual left turn DCT SAMIG, climb to A040, AAC" 
## Airspace Division

The divisions of the airspace between **MAE**, **MDN**, and **MDS** change based on the Runway Mode.

!!! note
    The following diagrams do not include non ML TCU areas of responsibility such as MB CTR or AV TWR

### 09
<figure markdown>
![09 TCU Structure](img/ML09annotated.png){ width="700" }
  <figcaption>09 TCU Structure</figcaption>
</figure>

### 09A16D
<figure markdown>
![09A16D TCU Structure](img/ML09A16Dannotated.png){ width="700" }
  <figcaption>09A16D TCU Structure</figcaption>
</figure>

### 16 / 16A27D
<figure markdown>
![16 / 16A27D TCU Structure](img/ML16annotated.png){ width="700" }
  <figcaption>16 / 16A27D TCU Structure</figcaption>
</figure>

### 27 / 27AD34D
<figure markdown>
![27 / 27AD34D TCU Structure](img/ML27annotated.png){ width="700" }
  <figcaption>27 / 27AD34D TCU Structure</figcaption>
</figure>

### 34
<figure markdown>
![34 TCU Structure](img/ML34annotated.png){ width="700" }
  <figcaption>34 TCU Structure</figcaption>
</figure>

## Coordination

### ML TCU / ENR
#### Departures
Voiceless coordination is in place from ML TCU to all surrounding ENR sectors (**ELW** to the East, **YWE** (and **WON** if online) All other directions) for aircraft:  
Planned at or above F240: `Assigned F240`  
Planned below F240: `Assigned the RFL`  

Any aircraft not meeting the above criteria must be prior coordinated to ENR.

!!! example
    **ML TCU** -> **YWE**: "QFA123, with your concurrence, will be assigned F190, for my separation with QLK456D"  
    **YWE** -> **ML TCU**: "QFA123, concur F190"  

#### Arrivals
The Standard assignable level from ENR to ML TCU is `A090`. All other levels must be prior coordinated

### ML TCU / ML ADC
#### Auto Release

Auto Release shall be used for aircraft that are:    
a) Departing from a runway nominated on the ATIS; and  
b) Issued a Procedural SID; and   
c) Assigned `A050`.

Any aircraft that don't meet these criteria must be coordinated to ML TCU with a "Next" Call.

"Next" Coordination is a procedure where the ML ADC controller gives a heads-up to the ML TCU controller about an impending departure. The ML TCU controller will respond by assigning a heading to the aircraft, for the ML ADC controller to pass on with their takeoff clearance.

!!! example
    **ML ADC** -> **ML TCU**: "Next, ABC"  
    **ML TCU** -> **ML ADC**: "ABC, Track Extended Centreline"  
    **ML ADC** -> **ML TCU**: "Track Extended Centreline, ABC"  
    **ML ADC** -> **ABC**: "ABC, Track Extended Centreline 340 degrees, Runway 34, Cleared for Takeoff"  
    **ABC** -> **ML ADC**: "Track Extended Centreline 340 degrees, Runway 34, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4`

### ML TCU / EN TWR
#### Departures

Aircraft departing YMEN in to ML TCU Class C will be coordinated from **EN TWR** at Taxi.

!!! example
    **EN TWR** -> **ML TCU**: "Taxi, ABC for YBDG, Runway 17, via ML V376 DOTPA"  
    **ML TCU** -> **EN TWR**: "ABC for YBDG, Runway 17, via ML V376 DOTPA, A030"  
    **EN TWR** -> **ML TCU**: "A030, ABC" 
#### Arrivals
ML TCU Must coordinate the sequence information to **EN TWR** prior to transfer of jurisdiction. ML TCU is responsible for clearing aircraft for the approach prior to handoff to **EN TWR**.

!!! example
    **ML TCU** -> **EN TWR**: "New sequence of 1, FD123, via MONTY, Number 1"  
    **EN TWR** -> **ML TCU**: "FD123, Number 1"  
### ML TCU / AV TWR
#### Departures

Aircraft departing YMAV in to ML TCU CTA will be coordinated from **AV TWR** at Taxi.

!!! example
    **AV TWR** -> **ML TCU**: "Taxi, JST604 for YSSY, Runway 18, JUSTY2 departure"  
    **ML TCU** -> **AV TWR**: "JST604, Runway 18, JUSTY1, Squawk 3601"  
    **AV TWR** -> **ML TCU**: "3601, JST604"

When the aircraft is ready for takeoff, **AV TWR** will give a "Next" call, where ML TCU will provide the cleared level, and any additional departure instructions.

!!! example
    **AV TWR** -> **ML TCU**: "Next, JST604"  
    **ML TCU** -> **AV TWR**: "JST604, A040"  
    **AV TWR** -> **ML TCU**: "A040, JST604"
#### Arrivals
ML TCU Must coordinate the sequence information to **AV TWR** prior to transfer of jurisdiction.

!!! example
    **ML TCU** -> **AV TWR**: "JST612, via TEMPL, Number 1"  
    **AV TWR** -> **ML TCU**: "JST612, Number 1"  

### ML TCU / MB TWR
#### Departures

Aircraft departing YMMB in to ML TCU CTA will be coordinated from **MB TWR** at Taxi.

!!! example
    **MB TWR** -> **ML TCU**: "Taxi, SGE for YBLT via ML"  
    **ML TCU** -> **MB TWR**: "SGE for YBLT via ML, Squawk 3601"  
    **MB TWR** -> **ML TCU**: "3601, SGE"

When the aircraft is ready for takeoff, **MB TWR** will give a "Next" call, where ML TCU will provide the cleared level.

!!! example
    **MB TWR** -> **ML TCU**: "Next, SGE"  
    **ML TCU** -> **MB TWR**: "SGE, A060"  
    **MB TWR** -> **ML TCU**: "A060, SGE"

!!! note
    ML TCU will not receive a taxi call on aircraft departing in to Class G airspace, including aircraft that have planned to leave and re-enter controlled airspace (for example, aircraft planned at or above A050 on the MB-AV track). In this instance, ML TCU is only required to readback the callsign at the "Next" call. ML TCU will then give airways clearance to the aircraft on first contact if required.
#### Arrivals
ML TCU Must coordinate the sequence information to **MB TWR** prior to transfer of jurisdiction.

!!! example
    **ML TCU** -> **MB TWR**: "New sequence of 1, OXA, via MMBSA, Number 1"  
    **MB TWR** -> **ML TCU**: "OXA, Number 1"  