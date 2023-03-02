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

† *Non-standard positions* may only be used in accordance with [VATPAC Ratings and Controller Positions Policy](https://vatpac.org/publications/policies){target=new}

## Airspace
The Melbourne TCU spans a 30nm Radius around ML from `SFC` to `F245`, as well as the AV CTR.   
ML TCU is responsible for the Melbourne TCU, except:    
a) The Sunbury Corridor, when **ML ADC** is online  
b) The South East Quadrant, when **EN ADC** is online  
c) The Coffin, when **EN ADC** is online, and the airspace has been released to **EN ADC**  

<figure markdown>
![Melbourne TCU Airspace Administration](img/MLTCUairspace.png){ width="500" }
  <figcaption>Melbourne TCU Airspace Administration</figcaption>
</figure>

!!! note
    The released airspace of the Sunbury Corridor and South East Quadrant is only from the lower level of CTA. ML TCU still owns the Class G airspace beneath it.

MB CTR reverts to Class G when **MB ADC** is offline, and is administered by the relevant ML TCU controller.    
EN CTR reverts to Class G when **EN ADC** is offline, and is administered by the relevant ML TCU controller.  
AV CTR Class D `SFC` to `A007` reverts to Class G and `A007` to `A025` to Class E when **AV ADC** is offline, and is administered by the relevant ML TCU controller.  

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

## EN ADC Offline
### Arrivals
The class C airspace surrounding YMEN extends to `SFC`.  This means that aircraft conducting approaches will remain inside controlled airspace until they land (and in the event of a go around).  These aircraft should be cleared for an appropriate approach, advised of any traffic taxiing at YMEN, and instructed to *'report clear of the runway'*.  The missed approach path must be protected until the aircraft reports clear.

!!! example
    **ML TCU:** "SH490, cleared ILS Runway 26 approach, traffic taxiing for the holding point is UJA, an Aero Commander, report clear of the runway"  
    **SH490:** "Cleared ILS Runway 26, copy UJA, SH490"  

    **SH490:** "SH490, clear of the runway, Essendon, cancel SARWATCH"  
    **ML TCU:** "SH490, Essendon SARWATCH terminated"
    `AIP GEN 3.4`
### Departures
Essendon has unique procedures due to its position in the ML CTR, with controlled airspace to the ground.  Departing aircraft will request airways clearance and engine start while on the bay and ML TCU will provide current weather conditions, expected runway for departure, and clearance. On completion of the readback, aircraft should be instructed to *'report taxiing to runway XX'*.

!!! example
    **FDK**: "Melbourne Approach, FDK, YMEN for YSHT, request clearance and engine start"    
    **ML TCU**: "FDK, Melbourne Approach, wind 290 degrees 4 knots, QNH 1017, cleared to YSHT via MNG, flight planned route, visual departure, climb to A040, squawk 4423, expect runway 35"  
    **FDK**: "QNH 1017, cleared to YSHT via MNG, flight planned route, visual departure, climb to A040, squawk 4423, FDK"  
    **ML TCU**: "FDK, start approved, report taxiing for runway 35"  
    **FDK**: "Start approved, FDK"  
    `AIP GEN 3.4`

When the aircraft reports taxiing, issue a traffic statement and instruct them to report at the holding point for departure instructions.
!!! example
    **FDK**: "FDK, taxiing runway 35"  
    **ML TCU**: "FDK, traffic is CBN, a Cherokee, 5nm final runway 35, report at the holding point for departure instructions"  
    **FDK**: "Copy CBN, wilco, FDK"  
    `AIP GEN 3.4`

Once the aircraft is ready for departure and no conflict exists in your airspace, issue any relevant departure instructions (assigned heading, visual turns, etc).  If a departure is not yet available, instruct the pilot to hold on the ground and indicate the reason for the delay.
!!! example
    **FDK**: "FDK, ready runway 35"  
    **ML TCU**: "FDK, hold at the holding point, short delay due inbound aircraft"  
    **FDK**: "Hold at the holding point, FDK"  

    **ML TCU**: "FDK, make right turn, report airborne"  
    **FDK**: "Make right turn, FDK"  
    `AIP GEN 3.4`

## AV ADC Offline
### Arrivals
Due to the low level of CTA above Avalon, aircraft conducting approaches will commence the approach inside controlled airspace and leave CTA on descent.  If the aircraft goes around, they will re-enter controlled airspace.  These aircraft should be cleared to leave controlled airspace descending via an appropriate approach and instructed to *'report clear of the runway'*.  The missed approach path must be protected until the aircraft reports clear.

!!! note
    A clearance to conduct an instrument approach constitutes a clearance to carry out the published missed approach.  As a result, there is no need to issue a clearance to re-enter controlled airspace in the event the aircraft goes around.

!!! example
    **ML TCU:** "JST607, leave controlled airspace descending via the ILS Runway 18 approach, no reported IFR traffic, report clear of the runway"  
    **JST607:** "Leave controlled airspace descending via the ILS Runway 18 approach, JST607"  

    **JST607:** "JST607, clear of the runway, Avalon, cancel SARWATCH"  
    **ML TCU:** "JST607, Avalon SARWATCH terminated"  
    `AIP GEN 3.4`

<figure markdown>
![Approximate Airspace Split](img/YMAV_approach.png)
  <figcaption>Approximate Airspace Vertical Split (not to scale)</figcaption>
</figure>

### Departures
Departing aircraft generally require an airways clearance on the ground, due to the low level of CTA.  Aircraft should report taxiing to the TCU controller, who will issue a squawk code and traffic statement.  These aircraft should be instructed to report at the holding point, where airways clearance will be issued.

!!! example
    **AM318**: "Melbourne Approach, AM318, King Air, POB 2, IFR, taxiing YMAV runway 18 for YMEN"  
    **ML TCU**: "AM318, Melbourne Approach, squawk 3542, no reported IFR traffic, report ready at the holding point for airways clearance"  
    **AM318**: "Squawk 3542, wilco, AM318"  
    
    **AM318**: "AM318, ready runway 18"  
    **ML TCU**: "AM318, cleared to YMEN direct, AV5 departure, climb via SID to A040"  
    **AM318**: "Cleared to YMEN direct, AV5 departure, climb via SID to A040, AM318"  
    **ML TCU**: "AM318, assigned heading left 020, report airborne"  
    **AM318**: "Assigned left 020, wilco, AM318"    
    `AIP GEN 3.4`

## MB ADC Offline
### Arrivals
IFR aircraft cruising inside CTA will generally commence an instrument approach from within controlled airspace and leave CTA on descent.  The missed approach procedure will keep these aircraft outside controlled airspace, so does not need to be protected by the TCU controller.  Clear these aircraft to leave CTA descending via an appropriate approach.

!!! example
    **ML TCU:** "OFX, Leave controlled airspace descending via the RNP Runway 17L approach, no reported IFR traffic"  
    **OFX:** "Leave controlled airspace descending via the RNP Runway 17L approach, OFX"  
    `AIP GEN 3.4` 
### Departures
Due to the low level of CTA surrounding YMMB, it is best practice to give airways clearance to aircraft at the holding point, to ensure departing aircraft can have uninterrupted climb.

!!! example
    **AAC:** "Melbourne Approach, AAC, PC12, POB 7, IFR, taxiing YMMB for YBLT, runway 35L"  
    **ML TCU:** "AAC, Melbourne Approach, squawk 4301, no reported IFR traffic, report ready at the holding point for airways clearance"  
    **AAC:** "Squawk 4301, wilco, AAC" 

    **AAC:** "AAC, ready runway 35L"  
    **ML TCU:** "AAC, Cleared to YBLT via SAMIG, flight planned route, make visual left turn DCT SAMIG, climb to A040"  
    **AAC:** "Cleared to YBLT via SAMIG, flight planned route, make visual left turn DCT SAMIG, climb to A040, AAC"  
    `AIP GEN 3.4`
## Airspace Division

The divisions of the airspace between **MAE**, **MDN**, and **MDS** change based on the Runway Mode.

!!! note
    The following diagrams do not include non ML TCU areas of responsibility such as MB CTR or AV ADC

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
Voiceless coordination is in place from ML TCU to all surrounding ENR sectors (**ELW** to the East, **YWE**/**WON** all other directions) for aircraft:<ul><li>Planned at or above `F240`: `Assigned F240`</li><li>Planned below `F240`: `Assigned the RFL`</li></ul>

Any aircraft not meeting the above criteria must be prior coordinated to ENR.

!!! example
    <span class="hotline">**ML TCU** -> **YWE**</span>: "QFA420, with your concurrence, will be assigned F190, for my separation with QLK52D"  
    <span class="hotline">**YWE** -> **ML TCU**</span>: "QFA420, concur F190"  

#### Arrivals
The Standard assignable level from ENR to ML TCU is `A090`. All other levels must be prior coordinated

### ML TCU / ML ADC
#### Auto Release

Auto Release shall be used for aircraft that are:      
a) Departing from a runway nominated on the ATIS; and  
b) Issued a Procedural SID, or a Radar SID with a [Standard assignable heading](#standard-assignable-headings); and   
c) Assigned `A050`.

Any aircraft that don't meet these criteria must be coordinated to ML TCU with a "Next" Call.  

"Next" Coordination is a procedure where the ML ADC controller gives a heads-up to the ML TCU controller about an impending departure. The ML TCU controller will respond by assigning any relevant departure instructions (i.e. assigned heading, amended altitude, visual turn) to the aircraft, for the ML ADC controller to pass on with their takeoff clearance.

!!! example
    <span class="hotline">**ML ADC** -> **ML TCU**</span>: "Next, CYF, runway 34"  
    <span class="hotline">**ML TCU** -> **ML ADC**</span>: "CYF, track extended centreline, unrestricted"  
    <span class="hotline">**ML ADC** -> **ML TCU**</span>: "Track extended centreline, unrestricted, CYF"  
    `AIP GEN 3.4`

##### Standard Assignable Headings
The following Standard Assignable Headings may be used for aircraft assigned the Radar SID.

| Aircraft tracking | RWY 16  | RWY 27  | RWY 34  |
| ----------------| --------- | --------- | --------- |
| to the NORTH EAST   | Right H290* | Right H290 | H340 |
| to the WEST | Right H290* | Left H320 | H340 |
| to the SOUTH |H160 | H260 | Left H260 |
| to the SOUTH EAST |H160 | H260 | H340 |
|*When Runway 09 is in use for arrivals, Runway 16 departures shall be assigned H160.||||

When Runway 09 is in use for departures, ML TCU shall nominate a heading to ML ADC for use as a standard assignable heading.

### ML TCU / EN ADC
#### Departures
Aircraft departing YMEN in to ML TCU Class C will be coordinated from **EN ADC** at Taxi.

!!! example
    <span class="coldline">**EN ADC** -> **ML TCU**</span>: "Taxi, AM322 for YBDG via ML, Runway 17"  
    <span class="coldline">**ML TCU** -> **EN ADC**</span>: "AM322"  
    `AIP GEN 3.4`
#### Arrivals
ML TCU must coordinate the sequence information to **EN ADC** prior to **5 mins** from the boundary. ML TCU is responsible for clearing aircraft for the approach prior to handoff to **EN ADC**.

!!! example
    <span class="coldline">**ML TCU** -> **EN ADC**</span>: "New sequence of 1, CJI, via MONTY, Number 1"  
    <span class="coldline">**EN ADC** -> **ML TCU**</span>: "CJI, Number 1"  
    `AIP GEN 3.4`
### ML TCU / AV ADC
#### Departures
Auto Release shall be used for aircraft that are:    
a) Departing from a runway nominated on the ATIS; and  
b) Issued a Procedural SID; and   
c) Assigned `A040`;

Any aircraft that don't meet these criteria will be coordinated to ML TCU with a "Next" Call

!!! example
    <span class="coldline">**AV ADC** -> **MDS**</span>: "Next, UJI, Runway 18"  
    <span class="coldline">**MDS** -> **AV ADC**</span>: "UJI, left 030, unrestricted"  
    <span class="coldline">**AV ADC** -> **MDS**</span>: "Left 030 unrestricted, UJI"
#### Arrivals
As per [Standard coordination procedures](../../controller-skills/coordination/#enrtcu-class-d-twr). ML TCU must coordinate the sequence prior to **5 mins** from the boundary. ML TCU is responsible for clearing aircraft for the approach prior to handoff to **AV ADC**.

!!! example
    <span class="coldline">**ML TCU** -> **AV ADC**</span>: "JST612, via TEMPL, Number 1"  
    <span class="coldline">**AV ADC** -> **ML TCU**</span>: "JST612, Number 1"  
    `AIP GEN 3.4`

### ML TCU / MB ADC
#### Departures
When the aircraft is ready for takeoff, **MB ADC** will give a "Next" call, where ML TCU will provide the cleared level.

!!! example
    <span class="coldline">**MB ADC** -> **ML TCU**</span>: "Next, SGE"  
    <span class="coldline">**ML TCU** -> **MB ADC**</span>: "SGE, A060"  
    <span class="coldline">**MB ADC** -> **ML TCU**</span>: "A060, SGE"  
    `AIP GEN 3.4`

#### Arrivals
As per [Standard coordination procedures](../../controller-skills/coordination/#enrtcu-class-d-twr). ML TCU must coordinate the sequence prior to **5 mins** from the boundary.

!!! tip
    Ensure the aircraft's FDR is up-to-date in order to give **MB ADC** maximum situational awareness of the traffic picture. (eg. if the aircraft is doing the RNP approach, ensure the FDR has been rerouted via the appropriate points)

##### Visual Tracking
!!! example
    <span class="coldline">**ML TCU** -> **MB ADC**</span>: "via MONTY, OXA"  
    <span class="coldline">**MB ADC** -> **ML TCU**</span>: "OXA"

##### IAP Tracking
!!! example
    <span class="coldline">**ML TCU** -> **MB ADC**</span>: "via MMBSA for the RNP RWY 35R, AM318"  
    <span class="coldline">**MB ADC** -> **ML TCU**</span>: "AM318 for the RNP RWY 35R"

Given that the instrument approach procedure will terminate inside another controller's airspace, TCU controllers must obtain a clearance from MB ADC prior to issuing an approach clearance to an aircraft.  

!!! example 
    <span class="hotline">**ML TCU** -> **MB ADC**</span>: "Request clearance for final, AM318"  
    <span class="hotline">**MB ADC** -> **ML TCU**</span>: "AM318 cleared RNP 35R"  
    <span class="hotline">**ML TCU** -> **MB ADC**</span>: "Cleared RNP 35R, AM318"